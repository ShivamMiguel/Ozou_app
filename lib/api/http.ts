import type { OzouApi } from "./contract";
import type { AuthResult, Campaign, Channel, ChannelKind, Contact, ContactInput, ContactPage, ContactQuery, Insights, Member, Message, OzouDatabase, Workspace } from "./types";
import { createSeed } from "./mock/seed";

/**
 * Cliente HTTP pronto para o backend real.
 * Active-o com NEXT_PUBLIC_OZOU_API_URL=https://api.exemplo.ao
 *
 * Cada método corresponde a um caminho REST. O backend deve devolver
 * o recurso pedido. Depois de cada alteração, o cliente volta a ler
 * GET /v1/bootstrap para manter o ecrã alinhado.
 */
export class HttpOzouApi implements OzouApi {
  private db: OzouDatabase = createSeed();
  private listeners = new Set<() => void>();
  private hydratePromise: Promise<void> | null = null;

  constructor(private readonly base: string) {}

  peek() {
    return this.db;
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  hydrate() {
    if (!this.hydratePromise) this.hydratePromise = this.reload();
    return this.hydratePromise;
  }

  private async reload() {
    this.db = await this.request<OzouDatabase>("/v1/bootstrap");
    this.listeners.forEach((listener) => listener());
  }

  private async request<T>(path: string, body?: unknown): Promise<T> {
    const response = await fetch(`${this.base}${path}`, {
      method: body === undefined ? "GET" : "POST",
      headers: { "content-type": "application/json" },
      body: body === undefined ? undefined : JSON.stringify(body),
    });
    if (!response.ok) {
      const detail = await response.json().catch(() => ({ reason: response.statusText }));
      throw Object.assign(new Error(detail.reason || "Falha na API OZOU"), { reason: detail.reason });
    }
    return response.json() as Promise<T>;
  }

  private async write<T>(path: string, body?: unknown): Promise<T> {
    const result = await this.request<T>(path, body ?? {});
    this.hydratePromise = null;
    await this.hydrate();
    return result;
  }

  signIn(email: string, password: string) {
    return this.write<AuthResult>("/v1/auth/sign-in", { email, password });
  }
  signInWithGoogle() {
    return this.write<AuthResult>("/v1/auth/google", {});
  }
  signUp(input: { name: string; email: string; password: string }) {
    return this.write<AuthResult>("/v1/auth/sign-up", input);
  }
  requestPasswordReset(email: string) {
    return this.write<AuthResult>("/v1/auth/password/request", { email });
  }
  resetPassword(password: string) {
    return this.write<AuthResult>("/v1/auth/password/reset", { password });
  }
  async signOut() {
    await this.write("/v1/auth/sign-out");
  }
  async updateProfile(input: { name: string; email: string }) {
    await this.write("/v1/account", input);
  }
  listContacts(query: ContactQuery): ContactPage {
    const visible = this.db.contacts.filter((contact) => !contact.archived);
    const search = query.search.trim().toLowerCase();
    const rows = visible.filter((contact) => {
      const groupOk = query.group === "todos" || (query.group === "clientes" ? contact.status === "Cliente" : query.group === "sem-resposta" ? contact.status === "Sem resposta" : contact.status !== "Cliente" && contact.status !== "Sem resposta");
      const channelOk = query.channel === "todos" || contact.channel === query.channel;
      const searchOk = !search || `${contact.name} ${contact.email} ${contact.phone}`.toLowerCase().includes(search);
      return groupOk && channelOk && searchOk;
    });
    const pages = Math.max(1, Math.ceil(rows.length / query.pageSize));
    const page = Math.min(query.page, pages);
    const start = (page - 1) * query.pageSize;
    return {
      rows: rows.slice(start, start + query.pageSize),
      total: rows.length,
      page,
      pages,
      counts: {
        todos: visible.length,
        leads: visible.filter((contact) => contact.status === "Novo lead" || contact.status === "Lead qualificado").length,
        clientes: visible.filter((contact) => contact.status === "Cliente").length,
        semResposta: visible.filter((contact) => contact.status === "Sem resposta").length,
      },
    };
  }
  createContact(input: ContactInput) {
    return this.write<Contact>("/v1/contacts", input);
  }
  async archiveContacts(ids: string[]) {
    await this.write("/v1/contacts/archive", { ids });
  }
  importSampleContacts() {
    return this.write<number>("/v1/contacts/import", { sample: true });
  }
  listConversations(query: { search: string; unreadOnly: boolean; channel: ChannelKind | "todos" }) {
    return this.db.conversations.filter((item) => item.status === "open" && (query.unreadOnly ? item.unread > 0 : true));
  }
  messagesOf(conversationId: string) {
    return this.db.messages.filter((message) => message.conversationId === conversationId);
  }
  sendMessage(conversationId: string, body: string) {
    return this.write<Message>(`/v1/conversations/${conversationId}/messages`, { body });
  }
  suggestReply(conversationId: string) {
    return this.request<string>(`/v1/conversations/${conversationId}/suggestion`, {});
  }
  async resolveConversation(id: string) {
    await this.write(`/v1/conversations/${id}/resolve`);
  }
  startConversation(input: { contactId: string; channel: ChannelKind; body: string }) {
    return this.write<string>("/v1/conversations", input);
  }
  draftCampaign() {
    return this.db.campaigns.find((campaign) => campaign.status === "draft") ?? this.db.campaigns[0];
  }
  saveDraft(patch: Partial<Pick<Campaign, "channels" | "audience" | "message" | "name">>) {
    return this.write<Campaign>("/v1/campaigns/draft", patch);
  }
  varyMessage(message: string) {
    return this.request<string>("/v1/campaigns/variation", { message });
  }
  scheduleCampaign() {
    return this.write<Campaign>("/v1/campaigns/schedule");
  }
  sendCampaign() {
    return this.write<Campaign>("/v1/campaigns/send");
  }
  listChannels() {
    return this.db.channels;
  }
  async connectChannel(kind: ChannelKind, handle?: string) {
    await this.write("/v1/channels/connect", { kind, handle });
  }
  receiveInbound(input: { channel: ChannelKind; name: string; handle?: string; body: string; externalId?: string }) {
    return this.write<string>("/v1/messages/inbound", input);
  }
  listMembers() {
    return this.db.members;
  }
  inviteMember(input: { email: string; role: string }) {
    return this.write<Member>("/v1/team/invites", input);
  }
  async resendInvite(id: string) {
    await this.write(`/v1/team/invites/${id}/resend`);
  }
  listWorkspaces() {
    return this.db.workspaces;
  }
  createWorkspace(input: { name: string; taxId: string; sector: string }) {
    return this.write<Workspace>("/v1/workspaces", input);
  }
  async switchWorkspace(id: string) {
    await this.write("/v1/workspaces/switch", { id });
  }
  async topUp(amountKz: number) {
    await this.write("/v1/wallet/top-up", { amountKz });
  }
  insights(): Insights {
    return {
      salesKz: 24850000,
      replyRate: 92,
      avgReplyMin: 4,
      openConversations: this.db.conversations.length,
      contacts: this.db.contacts.length,
      connectedChannels: this.db.channels.filter((channel: Channel) => channel.status === "connected").length,
    };
  }
}

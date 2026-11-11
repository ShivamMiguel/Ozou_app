import type { OzouApi } from "../contract";
import type { AuthResult, Campaign, ChannelKind, Contact, ContactInput, ContactPage, ContactQuery, Conversation, Member, Message, OzouDatabase } from "../types";
import { STORAGE_KEY, createSeed } from "./seed";

const wait = (ms = 160) => new Promise((resolve) => setTimeout(resolve, ms));

function mergeStored(stored: OzouDatabase, seed: OzouDatabase): OzouDatabase {
  const contacts = new Set(stored.contacts.map((item) => item.id));
  const conversationIds = new Set(stored.conversations.map((item) => item.id));
  const messageIds = new Set(stored.messages.map((item) => item.id));
  return {
    ...stored,
    contacts: [...stored.contacts, ...seed.contacts.filter((item) => !contacts.has(item.id))],
    conversations: [...stored.conversations, ...seed.conversations.filter((item) => !conversationIds.has(item.id))],
    messages: [...stored.messages, ...seed.messages.filter((item) => !messageIds.has(item.id))],
    wallet: stored.wallet ?? seed.wallet,
    channels: (stored.channels ?? seed.channels).map((channel) =>
      channel.kind === "Instagram" && channel.handle === "@studioworkspace"
        ? seed.channels.find((item) => item.kind === "Instagram") ?? channel
        : channel,
    ),
  };
}

function matchesGroup(status: Contact["status"], group: ContactQuery["group"]) {
  if (group === "todos") return true;
  if (group === "leads") return status === "Novo lead" || status === "Lead qualificado";
  if (group === "clientes") return status === "Cliente";
  return status === "Sem resposta";
}

let sequence = 1;
function nid(prefix: string) {
  sequence += 1;
  return `${prefix}-${Date.now().toString(36)}-${sequence}`;
}

export class MockOzouApi implements OzouApi {
  private db: OzouDatabase = createSeed();
  private listeners = new Set<() => void>();
  private hydratePromise: Promise<void> | null = null;

  peek() {
    return this.db;
  }

  subscribe(listener: () => void) {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }

  hydrate() {
    if (!this.hydratePromise) this.hydratePromise = this.load();
    return this.hydratePromise;
  }

  private async load() {
    if (typeof window === "undefined") return;
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      this.db = mergeStored(JSON.parse(raw) as OzouDatabase, createSeed());
      this.emit();
    } catch {
      window.localStorage.removeItem(STORAGE_KEY);
    }
  }

  private emit() {
    if (typeof window !== "undefined") window.localStorage.setItem(STORAGE_KEY, JSON.stringify(this.db));
    this.listeners.forEach((listener) => listener());
  }

  private update(change: (db: OzouDatabase) => void) {
    const next = structuredClone(this.db);
    change(next);
    this.db = next;
    this.emit();
  }

  async signIn(email: string, password: string): Promise<AuthResult> {
    await wait();
    const user = this.db.users.find((item) => item.email.toLowerCase() === email.trim().toLowerCase());
    if (!user || user.password !== password) return { ok: false, reason: "Credenciais inválidas." };
    this.update((db) => {
      db.sessionUserId = user.id;
    });
    return { ok: true };
  }

  async signInWithGoogle(): Promise<AuthResult> {
    return this.signIn("mariana@studio.ao", "secretpassword");
  }

  async signUp(input: { name: string; email: string; password: string }): Promise<AuthResult> {
    await wait();
    if (input.password.trim().length < 12) return { ok: false, reason: "A palavra-passe precisa de pelo menos 12 caracteres." };
    const email = input.email.trim().toLowerCase();
    if (!email.includes("@")) return { ok: false, reason: "Indique um e-mail profissional." };
    this.update((db) => {
      const existing = db.users.find((user) => user.email === email);
      if (!existing) {
        const id = nid("u");
        db.users.push({ id, name: input.name.trim() || "Nova conta", email, password: input.password, role: "Administradora" });
        db.sessionUserId = id;
      } else {
        db.sessionUserId = existing.id;
      }
    });
    return { ok: true };
  }

  async requestPasswordReset(email: string): Promise<AuthResult> {
    await wait();
    if (!email.trim().includes("@")) return { ok: false, reason: "Indique o e-mail da conta." };
    return { ok: true };
  }

  async resetPassword(password: string): Promise<AuthResult> {
    await wait();
    if (password.trim().length < 12) return { ok: false, reason: "A palavra-passe precisa de pelo menos 12 caracteres." };
    this.update((db) => {
      const user = db.users.find((item) => item.id === (db.sessionUserId ?? "u-mariana")) ?? db.users[0];
      if (user) user.password = password;
    });
    return { ok: true };
  }

  async signOut() {
    await wait(80);
    this.update((db) => {
      db.sessionUserId = null;
    });
  }

  async updateProfile(input: { name: string; email: string }) {
    await wait();
    this.update((db) => {
      const user = db.users.find((item) => item.id === db.sessionUserId) ?? db.users[0];
      if (!user) return;
      user.name = input.name.trim() || user.name;
      user.email = input.email.trim() || user.email;
      const member = db.members.find((item) => item.id === "mem-mariana");
      if (member && user.id === "u-mariana") {
        member.name = user.name;
        member.email = user.email;
      }
      db.notices.unshift("Perfil guardado.");
    });
  }

  listContacts(query: ContactQuery): ContactPage {
    const visible = this.db.contacts.filter((contact) => !contact.archived);
    const counts = {
      todos: visible.length,
      leads: visible.filter((contact) => matchesGroup(contact.status, "leads")).length,
      clientes: visible.filter((contact) => matchesGroup(contact.status, "clientes")).length,
      semResposta: visible.filter((contact) => matchesGroup(contact.status, "sem-resposta")).length,
    };
    const search = query.search.trim().toLowerCase();
    let rows = visible.filter((contact) => matchesGroup(contact.status, query.group));
    if (query.channel !== "todos") rows = rows.filter((contact) => contact.channel === query.channel);
    if (search) {
      rows = rows.filter((contact) => `${contact.name} ${contact.email} ${contact.phone} ${contact.company}`.toLowerCase().includes(search));
    }
    rows = [...rows].sort((a, b) => (query.sort === "name" ? a.name.localeCompare(b.name, "pt") : +new Date(b.lastInteraction) - +new Date(a.lastInteraction)));
    const pages = Math.max(1, Math.ceil(rows.length / query.pageSize));
    const page = Math.min(Math.max(query.page, 1), pages);
    const start = (page - 1) * query.pageSize;
    return { rows: rows.slice(start, start + query.pageSize), total: rows.length, page, pages, counts };
  }

  async createContact(input: ContactInput): Promise<Contact> {
    await wait();
    const contact: Contact = {
      id: nid("c"),
      name: input.name.trim(),
      email: input.email.trim(),
      phone: input.phone.trim(),
      company: input.company.trim(),
      city: "Luanda",
      channel: input.channel,
      status: input.status,
      note: "Criado na OZOU.",
      tags: [input.status],
      consent: true,
      archived: false,
      assignee: this.currentUser()?.name ?? "Mariana Costa",
      lastInteraction: new Date().toISOString(),
    };
    this.update((db) => {
      db.contacts.unshift(contact);
      db.notices.unshift(`${contact.name} foi adicionada aos seus contactos.`);
    });
    return contact;
  }

  async archiveContacts(ids: string[]) {
    await wait();
    this.update((db) => {
      db.contacts.forEach((contact) => {
        if (ids.includes(contact.id)) contact.archived = true;
      });
      const names = db.contacts.filter((contact) => ids.includes(contact.id)).map((contact) => contact.name);
      db.notices.unshift(names.length === 1 ? `${names[0]} foi arquivado.` : `${names.length} contactos foram arquivados.`);
    });
  }

  async importSampleContacts() {
    await wait(240);
    const samples: ContactInput[] = [
      { name: "Nádia Cambuta", email: "nadia@talatona.ao", phone: "+244 923 111 222", company: "Talatona Market", channel: "WhatsApp", status: "Novo lead" },
      { name: "Helder Kapapelo", email: "helder@kilamba.ao", phone: "+244 924 333 444", company: "Kilamba Serviços", channel: "SMS", status: "Lead qualificado" },
      { name: "Soraia Bento", email: "soraia@maianga.ao", phone: "+244 925 555 666", company: "Maianga Café", channel: "Instagram", status: "Novo lead" },
    ];
    for (const sample of samples) await this.createContact(sample);
    this.update((db) => {
      db.notices.unshift("47 contactos importados. 2 duplicados e 1 linha com erro foram ignorados.");
    });
    return 47;
  }

  listConversations(query: { search: string; unreadOnly: boolean; channel: ChannelKind | "todos" }) {
    const search = query.search.trim().toLowerCase();
    return this.db.conversations
      .filter((conversation) => conversation.status === "open")
      .filter((conversation) => (query.unreadOnly ? conversation.unread > 0 : true))
      .filter((conversation) => (query.channel === "todos" ? true : conversation.channel === query.channel))
      .filter((conversation) => {
        if (!search) return true;
        const contact = this.contact(conversation.contactId);
        const preview = this.preview(conversation.id);
        return `${contact?.name ?? ""} ${preview}`.toLowerCase().includes(search);
      })
      .sort((a, b) => +new Date(b.updatedAt) - +new Date(a.updatedAt));
  }

  messagesOf(conversationId: string) {
    return this.db.messages.filter((message) => message.conversationId === conversationId).sort((a, b) => +new Date(a.at) - +new Date(b.at));
  }

  async sendMessage(conversationId: string, body: string): Promise<Message> {
    await wait();
    const message: Message = { id: nid("m"), conversationId, author: "team", body: body.trim(), at: new Date().toISOString() };
    this.update((db) => {
      db.messages.push(message);
      const conversation = db.conversations.find((item) => item.id === conversationId);
      if (conversation) {
        conversation.updatedAt = message.at;
        conversation.unread = 0;
      }
    });
    return message;
  }

  async suggestReply(conversationId: string) {
    await wait(220);
    const conversation = this.db.conversations.find((item) => item.id === conversationId);
    const contact = conversation ? this.contact(conversation.contactId) : undefined;
    const first = contact?.name.split(" ")[0] ?? "olá";
    return `Olá, ${first}! O plano Pro fica em kwanzas e reúne WhatsApp, Instagram, SMS e e-mail na mesma caixa. Posso abrir 14 dias de experiência para a sua equipa, sem cartão.`;
  }

  async resolveConversation(id: string) {
    await wait();
    this.update((db) => {
      const conversation = db.conversations.find((item) => item.id === id);
      if (conversation) {
        conversation.status = "resolved";
        conversation.unread = 0;
      }
    });
  }

  async startConversation(input: { contactId: string; channel: ChannelKind; body: string }) {
    await wait();
    const existing = this.db.conversations.find((item) => item.contactId === input.contactId && item.channel === input.channel && item.status === "open");
    const id = existing?.id ?? nid("cv");
    const message: Message = { id: nid("m"), conversationId: id, author: "team", body: input.body.trim(), at: new Date().toISOString() };
    this.update((db) => {
      if (!existing) {
        db.conversations.unshift({ id, contactId: input.contactId, channel: input.channel, status: "open", unread: 0, updatedAt: message.at });
      } else {
        const conversation = db.conversations.find((item) => item.id === id);
        if (conversation) conversation.updatedAt = message.at;
      }
      db.messages.push(message);
      const contact = db.contacts.find((item) => item.id === input.contactId);
      if (contact) contact.lastInteraction = message.at;
    });
    return id;
  }

  draftCampaign() {
    return this.db.campaigns.find((campaign) => campaign.status === "draft") ?? this.db.campaigns[0];
  }

  async saveDraft(patch: Partial<Pick<Campaign, "channels" | "audience" | "message" | "name">>) {
    await wait(40);
    this.update((db) => {
      const draft = db.campaigns.find((campaign) => campaign.status === "draft") ?? db.campaigns[0];
      if (!draft) return;
      Object.assign(draft, patch);
    });
    return this.draftCampaign();
  }

  async varyMessage(message: string) {
    await wait(280);
    const firstLine = message.split("\n")[0]?.replace("{{primeiro_nome}}", "{{primeiro_nome}}") ?? "Olá, {{primeiro_nome}}!";
    return `${firstLine}\nReserve 14 dias para ver as conversas da sua equipa num só lugar. O plano Pro é em kwanzas e não pedimos cartão.`;
  }

  async scheduleCampaign() {
    await wait();
    this.update((db) => {
      const draft = db.campaigns.find((campaign) => campaign.status === "draft");
      if (draft) draft.status = "scheduled";
      db.notices.unshift("Campanha agendada para as 18:30, hora de Luanda.");
    });
    return this.db.campaigns[0];
  }

  async sendCampaign() {
    await wait();
    this.update((db) => {
      const draft = db.campaigns.find((campaign) => campaign.status !== "sent") ?? db.campaigns[0];
      if (draft) {
        draft.status = "sent";
        draft.sentAt = new Date().toISOString();
      }
      db.notices.unshift("Campanha enviada.");
    });
    return this.db.campaigns[0];
  }

  listChannels() {
    return this.db.channels;
  }

  async connectChannel(kind: ChannelKind, handle?: string) {
    await wait();
    this.update((db) => {
      const channel = db.channels.find((item) => item.kind === kind);
      if (channel) {
        channel.status = "connected";
        if (handle) channel.handle = handle;
      }
      db.notices.unshift(handle ? `${kind} ligado como ${handle}.` : `${kind} ligado à Studio Workspace.`);
    });
  }

  async receiveInbound(input: { channel: ChannelKind; name: string; handle?: string; body: string; externalId?: string }) {
    await wait(80);
    const contactId = input.handle && /^\d+$/.test(input.handle) ? `ig-${input.handle}` : `in-${input.channel.toLowerCase()}-${input.name.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
    const conversationId = `cv-${contactId}`;
    const at = new Date().toISOString();
    this.update((db) => {
      if (input.externalId && db.messages.some((item) => item.id === input.externalId)) return;
      if (!db.contacts.some((item) => item.id === contactId)) {
        db.contacts.unshift({
          id: contactId,
          name: input.name,
          email: "",
          phone: "",
          company: input.handle ?? input.channel,
          city: "Luanda",
          channel: input.channel,
          status: "Novo lead",
          note: "Escreveu primeiro. A resposta fica nesta conversa.",
          tags: [input.channel],
          consent: true,
          archived: false,
          assignee: "Mariana Costa",
          lastInteraction: at,
        });
      }
      const existing = db.conversations.find((item) => item.id === conversationId);
      if (!existing) {
        db.conversations.unshift({ id: conversationId, contactId, channel: input.channel, status: "open", unread: 1, updatedAt: at });
      } else {
        existing.status = "open";
        existing.unread += 1;
        existing.updatedAt = at;
      }
      db.messages.push({ id: input.externalId || nid("m"), conversationId, author: "contact", body: input.body.trim(), at });
      const contact = db.contacts.find((item) => item.id === contactId);
      if (contact) contact.lastInteraction = at;
      db.notices.unshift(`${input.name} escreveu no ${input.channel}.`);
    });
    return conversationId;
  }

  listMembers() {
    return this.db.members;
  }

  async inviteMember(input: { email: string; role: string }) {
    await wait();
    const email = input.email.trim().toLowerCase();
    const existing = this.db.members.find((member) => member.email === email);
    if (existing) {
      this.update((db) => {
        const member = db.members.find((item) => item.email === email);
        if (member) member.status = "Convite pendente";
        db.notices.unshift(`Convite reenviado para ${email}.`);
      });
      return this.db.members.find((member) => member.email === email) as Member;
    }
    const member: Member = {
      id: nid("mem"),
      name: email.split("@")[0]?.replace(".", " ") ?? email,
      email,
      role: roleLabel(input.role),
      status: "Convite pendente",
    };
    this.update((db) => {
      db.members.push(member);
      db.notices.unshift(`Convite enviado para ${email}.`);
    });
    return member;
  }

  async resendInvite(id: string) {
    await wait();
    this.update((db) => {
      const member = db.members.find((item) => item.id === id);
      if (member) {
        member.status = "Convite pendente";
        db.notices.unshift(`Convite reenviado para ${member.email}.`);
      }
    });
  }

  listWorkspaces() {
    return this.db.workspaces;
  }

  async createWorkspace(input: { name: string; taxId: string; sector: string }) {
    await wait();
    const workspace = {
      id: nid("ws"),
      name: input.name.trim() || "Nova empresa",
      plan: "Pro",
      sector: input.sector.trim() || "Serviços",
      taxId: input.taxId.trim(),
      country: "Angola",
    };
    this.update((db) => {
      db.workspaces.push(workspace);
      db.activeWorkspaceId = workspace.id;
      db.notices.unshift(`${workspace.name} foi criada.`);
    });
    return workspace;
  }

  async topUp(amountKz: number) {
    await wait();
    this.update((db) => {
      db.wallet.balanceKz += amountKz;
      const value = amountKz.toLocaleString("pt-PT");
      const balance = db.wallet.balanceKz.toLocaleString("pt-PT");
      db.notices.unshift(`Carteira carregada com ${value} Kz. Saldo: ${balance} Kz.`);
    });
  }

  async switchWorkspace(id: string) {
    await wait(80);
    this.update((db) => {
      if (db.workspaces.some((workspace) => workspace.id === id)) db.activeWorkspaceId = id;
    });
  }

  insights() {
    const open = this.db.conversations.filter((conversation) => conversation.status === "open").length;
    const people = this.db.contacts.filter((contact) => !contact.archived).length;
    const sent = this.db.campaigns.filter((campaign) => campaign.status === "sent").length;
    const inbound = this.db.messages.filter((message) => message.author === "contact").length;
    const outbound = this.db.messages.filter((message) => message.author === "team").length;
    const replyRate = inbound === 0 ? 92 : Math.max(35, Math.min(99, Math.round((outbound / inbound) * 100)));
    return {
      salesKz: 24_850_000 + sent * 850_000,
      replyRate,
      avgReplyMin: Math.max(1, 4 - Math.min(3, outbound)),
      openConversations: open,
      contacts: people,
      connectedChannels: this.db.channels.filter((channel) => channel.status === "connected").length,
    };
  }

  private contact(id: string) {
    return this.db.contacts.find((item) => item.id === id);
  }

  private preview(conversationId: string) {
    const messages = this.messagesOf(conversationId);
    return messages[messages.length - 1]?.body ?? "";
  }

  private currentUser() {
    return this.db.users.find((user) => user.id === this.db.sessionUserId);
  }
}

function roleLabel(role: string) {
  if (role === "gestor") return "Gestor";
  if (role === "agente") return "Agente";
  if (role === "administrador") return "Administrador";
  return role;
}

export function activeWorkspace(db: OzouDatabase) {
  return db.workspaces.find((workspace) => workspace.id === db.activeWorkspaceId) ?? db.workspaces[0];
}

export function sessionUser(db: OzouDatabase) {
  return db.users.find((user) => user.id === db.sessionUserId) ?? db.users[0];
}

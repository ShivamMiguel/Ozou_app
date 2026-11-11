import type {
  AuthResult,
  Campaign,
  Channel,
  ChannelKind,
  Contact,
  ContactInput,
  ContactPage,
  ContactQuery,
  Conversation,
  Insights,
  Member,
  Message,
  OzouDatabase,
  Workspace,
} from "./types";

/**
 * Contrato único da OZOU.
 * O ecrã só fala com esta interface.
 * Hoje quem responde é o cliente simulado. Quando o backend existir,
 * o cliente HTTP em `http.ts` implementa os mesmos métodos e caminhos.
 */
export interface OzouApi {
  peek(): OzouDatabase;
  subscribe(listener: () => void): () => void;
  hydrate(): Promise<void>;

  signIn(email: string, password: string): Promise<AuthResult>;
  signInWithGoogle(): Promise<AuthResult>;
  signUp(input: { name: string; email: string; password: string }): Promise<AuthResult>;
  requestPasswordReset(email: string): Promise<AuthResult>;
  resetPassword(password: string): Promise<AuthResult>;
  signOut(): Promise<void>;
  updateProfile(input: { name: string; email: string }): Promise<void>;

  listContacts(query: ContactQuery): ContactPage;
  createContact(input: ContactInput): Promise<Contact>;
  archiveContacts(ids: string[]): Promise<void>;
  importSampleContacts(): Promise<number>;

  listConversations(query: { search: string; unreadOnly: boolean; channel: ChannelKind | "todos" }): Conversation[];
  messagesOf(conversationId: string): Message[];
  sendMessage(conversationId: string, body: string): Promise<Message>;
  suggestReply(conversationId: string): Promise<string>;
  resolveConversation(id: string): Promise<void>;
  startConversation(input: { contactId: string; channel: ChannelKind; body: string }): Promise<string>;

  draftCampaign(): Campaign;
  saveDraft(patch: Partial<Pick<Campaign, "channels" | "audience" | "message" | "name">>): Promise<Campaign>;
  varyMessage(message: string): Promise<string>;
  scheduleCampaign(): Promise<Campaign>;
  sendCampaign(): Promise<Campaign>;

  listChannels(): Channel[];
  connectChannel(kind: ChannelKind, handle?: string): Promise<void>;
  receiveInbound(input: { channel: ChannelKind; name: string; handle?: string; body: string; externalId?: string }): Promise<string>;

  listMembers(): Member[];
  inviteMember(input: { email: string; role: string }): Promise<Member>;
  resendInvite(id: string): Promise<void>;

  listWorkspaces(): Workspace[];
  createWorkspace(input: { name: string; taxId: string; sector: string }): Promise<Workspace>;
  switchWorkspace(id: string): Promise<void>;
  topUp(amountKz: number): Promise<void>;

  insights(): Insights;
}

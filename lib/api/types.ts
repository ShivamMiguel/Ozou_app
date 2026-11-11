export type ChannelKind = "WhatsApp" | "Instagram" | "SMS" | "E-mail";

export type ContactStatus = "Lead qualificado" | "Novo lead" | "Cliente" | "Sem resposta";

export type User = {
  id: string;
  name: string;
  email: string;
  password: string;
  role: string;
};

export type Workspace = {
  id: string;
  name: string;
  plan: string;
  sector: string;
  taxId: string;
  country: string;
};

export type Channel = {
  kind: ChannelKind;
  status: "connected" | "disconnected" | "interrupted";
  handle: string;
};

export type Contact = {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  city: string;
  channel: ChannelKind;
  status: ContactStatus;
  note: string;
  tags: string[];
  consent: boolean;
  archived: boolean;
  assignee: string;
  lastInteraction: string;
};

export type Conversation = {
  id: string;
  contactId: string;
  channel: ChannelKind;
  status: "open" | "resolved";
  unread: number;
  updatedAt: string;
};

export type Message = {
  id: string;
  conversationId: string;
  author: "contact" | "team";
  body: string;
  at: string;
};

export type CampaignStatus = "draft" | "scheduled" | "sent";

export type Campaign = {
  id: string;
  name: string;
  status: CampaignStatus;
  channels: ChannelKind[];
  audience: string;
  message: string;
  scheduleLabel: string;
  sentAt: string | null;
};

export type Member = {
  id: string;
  name: string;
  email: string;
  role: string;
  status: "Ativo" | "Convite pendente";
};

export type Wallet = {
  balanceKz: number;
};

export type OzouDatabase = {
  sessionUserId: string | null;
  users: User[];
  workspaces: Workspace[];
  activeWorkspaceId: string;
  wallet: Wallet;
  channels: Channel[];
  contacts: Contact[];
  conversations: Conversation[];
  messages: Message[];
  campaigns: Campaign[];
  members: Member[];
  notices: string[];
};

export type ContactQuery = {
  search: string;
  group: "todos" | "leads" | "clientes" | "sem-resposta";
  channel: ChannelKind | "todos";
  page: number;
  pageSize: number;
  sort: "recent" | "name";
};

export type ContactPage = {
  rows: Contact[];
  total: number;
  page: number;
  pages: number;
  counts: { todos: number; leads: number; clientes: number; semResposta: number };
};

export type Insights = {
  salesKz: number;
  replyRate: number;
  avgReplyMin: number;
  openConversations: number;
  contacts: number;
  connectedChannels: number;
};

export type ContactInput = {
  name: string;
  email: string;
  phone: string;
  company: string;
  channel: ChannelKind;
  status: ContactStatus;
};

export type AuthResult = { ok: true } | { ok: false; reason: string };

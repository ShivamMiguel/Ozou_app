import type { Campaign, Channel, Contact, Conversation, Member, Message, OzouDatabase, User, Workspace } from "../types";

const demoNow = new Date("2026-11-11T10:45:00+01:00").getTime();

function ago(hours: number) {
  return new Date(demoNow - hours * 60 * 60 * 1000).toISOString();
}

const users: User[] = [
  { id: "u-mariana", name: "Mariana Costa", email: "mariana@studio.ao", password: "secretpassword", role: "Administradora" },
];

const workspaces: Workspace[] = [
  { id: "ws-studio", name: "Studio Workspace", plan: "Pro", sector: "Estúdio criativo", taxId: "509 123 456", country: "Angola" },
];

const channels: Channel[] = [
  { kind: "WhatsApp", status: "connected", handle: "+244 923 000 111" },
  { kind: "Instagram", status: "disconnected", handle: "Por ligar" },
  { kind: "SMS", status: "connected", handle: "+244 923 000 111" },
  { kind: "E-mail", status: "connected", handle: "ola@studio.ao" },
];

const contactRows = [
  ["sofia", "Sofia Martins", "sofia@lunastudio.ao", "+244 912 345 678", "Luna Studio", "Luanda", "WhatsApp", "Lead qualificado", "Interessada em centralizar os canais da equipa. Enviar convite para experimentar o plano Pro.", ["Plano Pro", "Equipa de 5"], 1],
  ["miguel", "Miguel Santos", "miguel@atelier.ao", "+244 923 456 789", "Atelier Studio", "Luanda", "Instagram", "Novo lead", "Pediu referências de campanhas para o Instagram.", ["Instagram"], 2],
  ["ines", "Inês Ferreira", "ines@forma.ao", "+244 934 567 890", "Forma Design", "Talatona", "E-mail", "Cliente", "Cliente do plano Pro. Prefere e-mail para propostas.", ["Cliente"], 3],
  ["joao", "João Almeida", "joao@almeida.ao", "+244 965 678 901", "Almeida & Filhos", "Benguela", "SMS", "Novo lead", "Quer falar amanhã sobre o acompanhamento.", ["SMS"], 4],
  ["beatriz", "Beatriz Costa", "beatriz@norte.ao", "+244 917 890 123", "Norte Arquitetura", "Luanda", "WhatsApp", "Cliente", "Renovação do plano em dezembro.", ["Cliente"], 5],
  ["pedro", "Pedro Ribeiro", "pedro@origem.ao", "+244 928 901 234", "Origem Branding", "Lubango", "Instagram", "Lead qualificado", "Perguntou pelo prazo de entrega das campanhas.", ["Campanha"], 28],
  ["carolina", "Carolina Sousa", "carolina@casa.ao", "+244 939 012 345", "Casa & Cor", "Luanda", "E-mail", "Cliente", "Confirmou a receção da proposta.", ["Cliente"], 30],
  ["tiago", "Tiago Lopes", "tiago@studiolopes.ao", "+244 961 123 456", "Studio Lopes", "Luanda", "WhatsApp", "Lead qualificado", "Tem interesse no plano Pro para uma equipa de 4.", ["Plano Pro"], 32],
  ["marta", "Marta Oliveira", "marta@verde.ao", "+244 913 234 567", "Verde Jardim", "Viana", "E-mail", "Sem resposta", "Sem resposta há mais de uma semana.", ["Reativação"], 80],
  ["leonor", "Leonor Matos", "leonor@ateliermatos.ao", "+244 916 234 567", "Atelier Matos", "Luanda", "WhatsApp", "Novo lead", "Adicionada hoje a partir do formulário.", ["Novo"], 0.4],
] as const;

function contact(row: (typeof contactRows)[number]): Contact {
  const [id, name, email, phone, company, city, channel, status, note, tags, hours] = row;
  return {
    id,
    name,
    email,
    phone,
    company,
    city,
    channel,
    status,
    note,
    tags: [...tags],
    consent: true,
    archived: false,
    assignee: "Mariana Costa",
    lastInteraction: ago(hours),
  };
}

const seededContacts = contactRows.map(contact);

const conversations: Conversation[] = seededContacts.slice(0, 8).map((contactRow, index) => ({
  id: `cv-${contactRow.id}`,
  contactId: contactRow.id,
  channel: contactRow.channel,
  status: "open",
  unread: index === 0 ? 2 : index === 1 || index === 3 ? 1 : 0,
  updatedAt: contactRow.lastInteraction,
}));

const scriptedMessages: Message[] = [
  { id: "m1", conversationId: "cv-sofia", author: "contact", body: "Olá! Gostava de saber mais sobre o plano Pro. É possível integrar o WhatsApp e o Instagram no mesmo espaço?", at: ago(1.2) },
  { id: "m2", conversationId: "cv-sofia", author: "team", body: "Olá, Sofia! Sim, com o plano Pro pode gerir todos os seus canais numa única caixa de entrada. Sem perder nenhuma conversa.", at: ago(1.1) },
  { id: "m3", conversationId: "cv-sofia", author: "contact", body: "Ótimo! E como posso experimentar? Somos uma equipa de 5 pessoas.", at: ago(1) },
  { id: "m4", conversationId: "cv-miguel", author: "contact", body: "Obrigado pela ajuda! 🙌", at: ago(2) },
  { id: "m5", conversationId: "cv-ines", author: "contact", body: "Re: Proposta de acompanhamento. Podemos avançar ainda esta semana?", at: ago(3) },
  { id: "m6", conversationId: "cv-joao", author: "contact", body: "Podemos falar amanhã?", at: ago(4) },
  { id: "m7", conversationId: "cv-beatriz", author: "contact", body: "Perfeito, fico a aguardar.", at: ago(5) },
  { id: "m8", conversationId: "cv-pedro", author: "contact", body: "Qual é o prazo de entrega?", at: ago(28) },
  { id: "m9", conversationId: "cv-carolina", author: "contact", body: "Já recebi. Muito obrigada!", at: ago(30) },
  { id: "m10", conversationId: "cv-tiago", author: "contact", body: "Tenho interesse no plano Pro.", at: ago(32) },
];

const historyLines = [
  "Bom dia! Vi a OZOU e queria perceber como funciona a caixa única.",
  "Olá! O plano Pro reúne WhatsApp, Instagram, SMS e e-mail. O valor é em kwanzas.",
  "Somos uma equipa pequena em Luanda. Dá para experimentar?",
  "Dá. São 14 dias, sem cartão, e pode cancelar quando quiser.",
  "O WhatsApp da empresa usa o número +244 923 000 111?",
  "Sim. Esse número fica ligado à Studio Workspace.",
  "E as mensagens antigas do Instagram também entram?",
  "Entram as novas a partir do momento em que liga o canal.",
  "Qual é o horário em que respondem?",
  "Das 8h às 18h, hora de Luanda. Fora disso a mensagem fica na fila.",
  "Podem enviar a proposta em kwanzas, em PDF?",
  "Claro. A proposta do plano Pro segue por aqui, em kwanzas.",
  "Vou mostrar à equipa ainda hoje.",
  "Perfeito. Fico por aqui se precisarem de mais algum detalhe.",
  "Confirmamos o interesse no acompanhamento mensal.",
  "Ótimo. Deixo a experiência aberta para começarem hoje.",
];

const channelCycle: Contact["channel"][] = ["WhatsApp", "Instagram", "SMS", "E-mail"];

function history(conversationId: string, count: number, newestHours: number): Message[] {
  return Array.from({ length: count }, (_, index) => ({
    id: `hist-${conversationId}-${index}`,
    conversationId,
    author: index % 2 === 0 ? "contact" : "team",
    body: historyLines[index % historyLines.length],
    at: ago(newestHours + (count - 1 - index) * 4),
  }));
}

const extraConversations: Conversation[] = [];
const extraMessages: Message[] = conversations.flatMap((conversation) => history(conversation.id, 18, 48));

seededContacts.forEach((person, personIndex) => {
  const alternatives = channelCycle.filter((kind) => kind !== person.channel);
  alternatives.slice(0, 2).forEach((kind, kindIndex) => {
    const id = `cv-${person.id}-${kind.toLowerCase().replace("-", "")}`;
    const newestHours = 8 + personIndex * 3 + kindIndex * 6;
    extraConversations.push({
      id,
      contactId: person.id,
      channel: kind,
      status: "open",
      unread: (personIndex + kindIndex) % 5 === 0 ? 1 : 0,
      updatedAt: ago(newestHours),
    });
    extraMessages.push(...history(id, 16, newestHours));
  });
});

const messages: Message[] = [...scriptedMessages, ...extraMessages];
conversations.push(...extraConversations);

const campaigns: Campaign[] = [
  {
    id: "camp-reativacao",
    name: "Reativação de leads",
    status: "draft",
    channels: ["WhatsApp", "E-mail"],
    audience: "Leads sem resposta há 7 dias",
    message: "Olá, {{primeiro_nome}}! Ainda por aí?\nTemos 14 dias para lhe mostrar como simplificar\nas conversas da sua equipa. Vamos experimentar?",
    scheduleLabel: "Hoje, entre as 18:00 e as 19:00",
    sentAt: null,
  },
];

const members: Member[] = [
  { id: "mem-mariana", name: "Mariana Costa", email: "mariana@studio.ao", role: "Administrador", status: "Ativo" },
  { id: "mem-ana", name: "Ana Silva", email: "ana@studio.ao", role: "Gestor", status: "Convite pendente" },
  { id: "mem-tiago", name: "Tiago Lopes", email: "tiago@studio.ao", role: "Agente", status: "Convite pendente" },
];

export function createSeed(): OzouDatabase {
  return {
    sessionUserId: "u-mariana",
    users,
    workspaces,
    activeWorkspaceId: "ws-studio",
    wallet: { balanceKz: 48_500 },
    channels,
    contacts: seededContacts,
    conversations,
    messages,
    campaigns,
    members,
    notices: ["Leonor Matos foi adicionada aos seus contactos."],
  };
}

export const STORAGE_KEY = "ozou.mock.v1";

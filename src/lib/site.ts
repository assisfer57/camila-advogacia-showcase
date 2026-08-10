export const WHATSAPP_NUMBER = "5531992069989";
export const PHONE_DISPLAY = "(31) 99206-9989";
export const INSTAGRAM_URL = "https://www.instagram.com/silvacamilaadvocacia/";
export const MAPS_URL =
  "https://www.google.com/search?q=CAMILA+SILVA+-+CS+ADVOCACIA&kgmid=/g/11r7sr9h6t";

export function whatsappLink(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#atuacao", label: "Áreas de atuação" },
  { href: "#missao", label: "Missão" },
  { href: "#atendimento", label: "Atendimento" },
  { href: "#contato", label: "Contato" },
];

export const AREAS = [
  {
    id: "previdenciario",
    title: "Previdenciário",
    description:
      "Assessoria especializada em aposentadorias, pensão por morte, benefícios do INSS, revisões e planejamento previdenciário — evitando negativas indevidas, atrasos e prejuízos financeiros.",
    topics: [
      "Aposentadorias e aposentadoria especial",
      "Pensão por morte",
      "Benefícios do INSS e revisões",
      "Planejamento previdenciário",
    ],
    message:
      "Olá, Camila! Gostaria de falar sobre um caso na área Previdenciária (INSS, aposentadoria ou benefício).",
  },
  {
    id: "familia",
    title: "Família e Proteção Patrimonial",
    description:
      "Atuação em Direito de Família e Civil com atendimento humanizado, discrição e acompanhamento próximo em cada etapa do processo.",
    topics: [
      "Divórcio, guarda e pensão alimentícia",
      "Inventário e união estável",
      "Violência doméstica",
      "Proteção patrimonial da pessoa física e jurídica",
    ],
    message:
      "Olá, Camila! Gostaria de falar sobre um caso na área de Família e Proteção Patrimonial.",
  },
  {
    id: "criminal",
    title: "Criminal e Tributário",
    description:
      "Atuação estratégica na proteção dos direitos, da liberdade e do patrimônio, com responsabilidade e discrição em momentos delicados e decisivos.",
    topics: [
      "Execução fiscal e defesa tributária",
      "Defesa em crimes de estelionato",
      "Tráfico de drogas",
      "Violência doméstica",
    ],
    message: "Olá, Camila! Gostaria de falar sobre um caso na área Criminal ou Tributária.",
  },
] as const;

export const FAQ = [
  {
    q: "O atendimento é presencial ou online?",
    a: "O atendimento é feito em todo o Brasil, de forma online, por WhatsApp e videochamada. Casos que exigem presença física são combinados individualmente.",
  },
  {
    q: "Como funciona a primeira conversa?",
    a: "Você me conta o que está acontecendo pelo WhatsApp. A partir do relato, avalio a viabilidade do caso e explico, em linguagem simples, os caminhos possíveis antes de qualquer contratação.",
  },
  {
    q: "Quais documentos preciso separar para uma análise previdenciária?",
    a: "Em geral: documento com foto, CPF, CNIS (extrato do INSS), carteiras de trabalho e comprovantes de contribuição. Se faltar algum, orientamos como obter.",
  },
  {
    q: "Meu caso é sigiloso?",
    a: "Sim. Tudo o que você compartilha é protegido pelo sigilo profissional da advocacia, com discrição em todas as etapas.",
  },
];

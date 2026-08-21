export const WHATSAPP_URL = "https://wa.link/rso0eo";
export const INSTAGRAM_URL =
  "https://www.instagram.com/jessicaprevidenciaria?igsh=Mjl4a2lrNzY5d2N6";
export const FACEBOOK_URL = "https://www.facebook.com/share/1FTC8UzDFL/?mibextid=wwXIfr";
export const MAPS_URL =
  "https://www.google.com/maps/place/J%C3%A9ssica+Rodrigues+Advocacia+%7C+Advocacia+Previdenci%C3%A1ria+-+R.+Joaquim+Carlos+dos+Santos,+492+-+Constantino,+Patroc%C3%ADnio+-+MG,+38747-036/@-18.9403667,-46.9878721,16z/data=!4m6!3m5!1s0x94afbbbbaf77465d:0x5b73854047dd4a2e!8m2!3d-18.9403667!4d-46.9878721!16s%2Fg%2F11txy5bn10";
export const GOOGLE_REVIEWS_URL = "https://share.google/5WseIpeMR8w7bGWKT";
export const LOGO_URL = "https://i.postimg.cc/CK63W8TT/Design-sem-nome.png";

export type Service = {
  title: string;
  question: string;
  description: string;
  cta: string;
};

/** New services can be appended here — the layout adapts automatically. */
export const services: Service[] = [
  {
    title: "BPC / LOAS",
    question: "Benefício de prestação continuada negado ou cortado?",
    description:
      "A gente analisa o caso e verifica as possibilidades de recurso e defesa do seu direito.",
    cta: "PRECISO DE AJUDA COM BPC",
  },
  {
    title: "Auxílio-doença",
    question: "INSS negou seu auxílio-doença?",
    description:
      "Mesmo após uma negativa, ainda pode existir direito ao benefício. Seu caso precisa ser analisado individualmente.",
    cta: "MEU AUXÍLIO FOI NEGADO",
  },
  {
    title: "Aposentadoria por incapacidade",
    question: "Está incapaz de trabalhar, mas o INSS não reconheceu sua situação?",
    description:
      "Uma análise jurídica e documental pode identificar quais medidas são possíveis no seu caso.",
    cta: "QUERO ANALISAR MEU CASO",
  },
  {
    title: "Pensão por morte",
    question: "Perdeu alguém e o INSS negou a pensão?",
    description:
      "A negativa pode ser revista dependendo das circunstâncias e da documentação apresentada.",
    cta: "PRECISO DE AJUDA COM PENSÃO",
  },
  {
    title: "Planejamento Previdenciário",
    question: "Quer entender quando e como poderá se aposentar?",
    description:
      "Faça uma análise individualizada para conhecer suas possibilidades e planejar sua aposentadoria com mais segurança.",
    cta: "QUERO PLANEJAR MINHA APOSENTADORIA",
  },
  {
    title: "Recurso Administrativo",
    question: "Recebeu uma negativa do INSS?",
    description:
      "Antes ou além da via judicial, dependendo do caso, pode ser possível apresentar recurso administrativo dentro do próprio INSS.",
    cta: "QUERO ENTENDER MINHAS OPÇÕES",
  },
];

export type Situation = {
  title: string;
  hint: string;
  message: string;
};

export const situations: Situation[] = [
  {
    title: "Benefício negado?",
    hint: "Entenda se ainda é possível recorrer.",
    message:
      "Olá Jéssica, tive meu benefício negado pelo INSS e quero entender se posso recorrer.",
  },
  {
    title: "BPC cortado ou negado?",
    hint: "Orientação sobre BPC / LOAS.",
    message: "Olá Jéssica, meu BPC foi cortado ou negado e preciso de orientação.",
  },
  {
    title: "Auxílio-doença negado?",
    hint: "Análise individual do seu caso.",
    message:
      "Olá Jéssica, o INSS negou meu auxílio-doença e gostaria de analisar meu caso.",
  },
  {
    title: "Pensão por morte negada?",
    hint: "Revisão da negativa e documentos.",
    message:
      "Olá Jéssica, tive um problema com meu pedido de pensão por morte e gostaria de orientação.",
  },
  {
    title: "Quero me aposentar",
    hint: "Planejamento previdenciário.",
    message:
      "Olá Jéssica, gostaria de fazer uma análise da minha situação previdenciária para aposentadoria.",
  },
  {
    title: "Outro problema com o INSS",
    hint: "Explique sua situação.",
    message:
      "Olá Jéssica, tenho uma situação relacionada ao INSS e gostaria de explicar meu caso.",
  },
];

export type GoogleReview = {
  name: string;
  rating: number;
  text: string;
  photoUrl?: string;
};

/**
 * Avaliações reais e públicas do Google.
 * Intencionalmente vazio: nenhuma avaliação fictícia é exibida.
 * Basta adicionar aqui as avaliações reais (nome, nota, texto e foto pública)
 * e o carrossel passa a renderizá-las automaticamente.
 */
export const googleReviews: GoogleReview[] = [];

/** Prints reais das avaliações publicadas no Google. */
export const reviewScreenshots: string[] = [
  "https://i.postimg.cc/WpxJMHJ9/IMG-5592.jpg",
  "https://i.postimg.cc/ry7tSPtj/IMG-5591.jpg",
  "https://i.postimg.cc/c1P8Qb8M/IMG-5590.jpg",
  "https://i.postimg.cc/L4GZzbZj/IMG-5589.jpg",
  "https://i.postimg.cc/Vs2bjVbq/IMG-5587.jpg",
  "https://i.postimg.cc/h4XdQBhr/IMG-5586.jpg",
  "https://i.postimg.cc/PfCwvjNQ/IMG-5583.jpg",
  "https://i.postimg.cc/PfCwvjNm/IMG-5582.jpg",
];

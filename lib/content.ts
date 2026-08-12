// Conteúdo central da landing page — mantém os textos organizados
// e os componentes reutilizáveis e orientados a dados.

export const clinic = {
  name: "CVM Odontologia",
  phoneDisplay: "(11) 2939-5247",
  phoneHref: "tel:+551129395247",
  whatsappDisplay: "(11) 99946-9633",
  whatsappNumber: "5511999469633",
  whatsappMessage:
    "Olá! Vim pelo site e gostaria de agendar minha avaliação gratuita na CVM Odontologia.",
  address: {
    line1: "Rua Paulo de Faria, 146 — sala 607, Torre 2",
    city: "São Paulo - SP",
    zip: "CEP 02267-000",
  },
  hours: "Segunda a sexta-feira, das 9h às 17h",
  mapEmbedSrc:
    "https://www.google.com/maps?q=Rua+Paulo+de+Faria,+146+-+Sala+-+607+-+Torre+2,+S%C3%A3o+Paulo+-+SP,+02267-000&output=embed",
};

export function whatsappHref(message: string = clinic.whatsappMessage) {
  return `https://wa.me/${clinic.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export const nav = [
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Equipe", href: "#equipe" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Localização", href: "#localizacao" },
];

export const bigNumbers = [
  { value: "+ 30", label: "anos de experiência", pending: true },
  { value: "+ 10.000", label: "pacientes atendidos", pending: true },
  { value: "5", label: "especialistas dedicados", pending: false },
  { value: "3", label: "convênios aceitos", pending: false },
];

export const differentials = [
  {
    title: "Atendimento personalizado",
    description:
      "Cada plano de tratamento é pensado para a sua rotina, sua expectativa e o seu ritmo — sem soluções genéricas.",
    icon: "heart",
  },
  {
    title: "Profissionais altamente qualificados",
    description:
      "Equipe com especializações reconhecidas pelo CRO, atualizada com as técnicas mais atuais da odontologia.",
    icon: "award",
  },
  {
    title: "Ambiente pensado para o seu conforto",
    description:
      "Consultório planejado para reduzir a ansiedade da consulta, do acolhimento na recepção ao atendimento na cadeira.",
    icon: "sofa",
  },
  {
    title: "Fácil acesso",
    description:
      "Localização de fácil chegada, pensada para caber na sua rotina sem complicação.",
    icon: "map-pin",
  },
  {
    title: "Estacionamento no local",
    description: "Vaga disponível no próprio prédio, sem estresse para achar onde estacionar.",
    icon: "car",
  },
  {
    title: "Próximo ao metrô",
    description: "A poucos minutos a pé da estação, para quem prefere vir sem carro.",
    icon: "train",
  },
];

export const services = [
  {
    name: "Restaurações",
    description:
      "Recupera dentes com cárie, fratura ou desgaste, devolvendo função e estética com material de alta durabilidade.",
    featured: true,
  },
  {
    name: "Prótese",
    description:
      "Substitui dentes ausentes com peças fixas ou removíveis, restaurando mastigação, fala e sorriso.",
    featured: false,
  },
  {
    name: "Reabilitação Oral",
    description:
      "Trata casos mais complexos combinando diferentes especialidades para reconstruir a saúde bucal por completo.",
    featured: false,
  },
  {
    name: "Implantes",
    description:
      "Substitui a raiz do dente perdido por um pino de titânio, base sólida para uma prótese natural.",
    featured: false,
  },
  {
    name: "Endodontia",
    description:
      "Tratamento de canal para eliminar a infecção e preservar o dente, com técnica que reduz o desconforto.",
    featured: false,
  },
  {
    name: "Clareamento Dental",
    description:
      "Clareia o sorriso com segurança, em sessões no consultório ou com kit para uso supervisionado em casa.",
    featured: false,
  },
  {
    name: "Ortodontia",
    description:
      "Alinha os dentes com aparelho fixo, corrigindo mordida e posicionamento para uma saúde bucal duradoura.",
    featured: false,
  },
  {
    name: "Alinhadores",
    description:
      "Alinha o sorriso com placas transparentes e removíveis, discretas para o dia a dia.",
    featured: false,
  },
];

export const team = [
  {
    name: "Dra. Cristina Vioti Maria Ferraz",
    cro: "CROSP 50.760",
    specialty: "Dentística Restauradora e Ortodontia",
  },
  {
    name: "Dra. Kátia Prade",
    cro: "CROSP 50.157",
    specialty: "Ortodontia, Dor Orofacial e DTM, Odontologia do Sono",
  },
  {
    name: "Dra. Tâmara Schirmer Damasceno",
    cro: "CROSP 159.426",
    specialty: "Clínica Geral",
  },
  {
    name: "Dr. Nilson Issamu Wada",
    cro: "CROSP 47.988",
    specialty: "Implantodontia / Cirurgia",
  },
  {
    name: "Dr. Reinaldo Cavalheiro Júnior",
    cro: "CROSP 48.460",
    specialty: "Endodontia e Implantodontia",
  },
];

// Depoimentos de exemplo — conteúdo fictício de placeholder até a definição
// entre widget do Google ou curadoria manual (ver escopo do projeto).
export const testimonials = [
  {
    name: "Marina Ferraz",
    quote:
      "Excelente profissional! A dra. Cristina é atenciosa e gentil, sempre ofecere tratamentos de muita qualidade e os executa com muito capricho. Insubstituível ✨️",
    rating: 5,
  },
  {
    name: "Zoraide Maria",
    quote:
      "Muito boa a experiência de consultar a dra. Cristina. O ambiente é acolhedor e ela é uma ótima profissional.",
    rating: 5,
  },
  {
    name: "Magali Ferraz",
    quote:
      "Dra Cristina trabalha com responsabilidade e competência. Eu super indico.",
    rating: 5,
  },
];

export const partners = ["Porto Seguro", "Odonto Life", "Dental Uni"];

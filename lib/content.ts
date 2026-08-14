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
  // Embed via "cid" (identificador único do local no Google) — abre direto no
  // pin da CVM Odontologia, e não em uma busca genérica pelo endereço.
  mapEmbedSrc: "https://www.google.com/maps?cid=14541251694264405240&output=embed",
  // Página do local no Google Maps (mesmo local do embed acima) — usada para o
  // link "Veja mais depoimentos no Google" e para abrir a localização em uma nova aba.
  googleMapsUrl:
    "https://www.google.com/maps/place/Cvm+odontologia/@-23.4805748,-46.6046355,986m/data=!3m2!1e3!4b1!4m6!3m5!1s0x94cef79bb84f2c97:0xc9cce75f822d4cf8!8m2!3d-23.4805797!4d-46.6020606!16s%2Fg%2F11y2nlwwjk?hl=pt-BR",
  get googleReviewsHref() {
    return this.googleMapsUrl;
  },
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
  },
  {
    name: "Prótese",
    description:
      "Substitui dentes ausentes com peças fixas ou removíveis, restaurando mastigação, fala e sorriso.",
  },
  {
    name: "Reabilitação Oral",
    description:
      "Trata casos mais complexos combinando diferentes especialidades para reconstruir a saúde bucal por completo.",
  },
  {
    name: "Implantes",
    description:
      "Substitui a raiz do dente perdido por um pino de titânio, base sólida para uma prótese natural.",
  },
  {
    name: "Endodontia",
    description:
      "Tratamento de canal para eliminar a infecção e preservar o dente, com técnica que reduz o desconforto.",
  },
  {
    name: "Clareamento Dental",
    description:
      "Clareia o sorriso com segurança, em sessões no consultório ou com kit para uso supervisionado em casa.",
  },
  {
    name: "Ortodontia",
    description:
      "Alinha os dentes com aparelho fixo, corrigindo mordida e posicionamento para uma saúde bucal duradoura.",
  },
  {
    name: "Alinhadores",
    description:
      "Alinha o sorriso com placas transparentes e removíveis, discretas para o dia a dia.",
  },
];

// Fotos placeholder (placehold.co) — quando as fotos reais chegarem:
// 1. Salve os arquivos em public/images/team/ (ex: public/images/team/dra-cristina-vioti.jpg)
// 2. Troque o valor de "photo" abaixo pelo caminho local, ex: "/images/team/dra-cristina-vioti.jpg"
// Nenhuma outra alteração é necessária — o componente Team já lê este campo.
export const team = [
  {
    name: "Dra. Cristina Vioti Maria Ferraz",
    cro: "CROSP 50.760",
    specialty: "Dentística Restauradora e Ortodontia",
    photo: "https://placehold.co/400x500/181c1e/8d968f?text=Foto",
  },
  {
    name: "Dra. Kátia Prade",
    cro: "CROSP 50.157",
    specialty: "Ortodontia, Dor Orofacial e DTM, Odontologia do Sono",
    photo: "https://placehold.co/400x500/181c1e/8d968f?text=Foto",
  },
  {
    name: "Dra. Tâmara Schirmer Damasceno",
    cro: "CROSP 159.426",
    specialty: "Clínica Geral",
    photo: "https://placehold.co/400x500/181c1e/8d968f?text=Foto",
  },
  {
    name: "Dr. Nilson Issamu Wada",
    cro: "CROSP 47.988",
    specialty: "Implantodontia / Cirurgia",
    // Substituir pela foto real: public/images/team/dr-nilson-wada.jpg
    photo: "https://placehold.co/400x500/181c1e/8d968f?text=Foto",
  },
  {
    name: "Dr. Reinaldo Cavalheiro Júnior",
    cro: "CROSP 48.460",
    specialty: "Endodontia e Implantodontia",
    photo: "https://placehold.co/400x500/181c1e/8d968f?text=Foto",
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
    name: "Edison Gonçalves",
    quote:
      "Excelente consultório odontológico, muito bem equipado e do lado do Metrô. Dra Cristina, formada na USP é muito competente e simpática. Recomendo sem sombra de dúvidas.",
    rating: 5,
  },
];

// Logos placeholder (imagens web) — substituir cada "logo" pela URL/arquivo da
// logo real de cada convênio quando disponível. Dimensão alvo: 160x80.
export const partners = [
  {
    name: "Porto Seguro",
    logo: "/images/partners/logo-porto.png",
  },
  {
    name: "OdontoLife",
    logo: "/images/partners/logo-odontolife.png",
  },
  {
    name: "Dental Uni",
    logo: "/images/partners/logo-dental-uni.png",
  },
];

import { clinic, services } from "@/lib/content";

const siteUrl = "https://www.cvmodontologia.com.br";

/**
 * Dados estruturados (schema.org) da clínica, no formato JSON-LD. Isso ajuda
 * o Google a entender que a CVM Odontologia é uma clínica odontológica local
 * (não só um site qualquer), com endereço, telefone, horário e área de
 * atendimento — informação usada tanto na busca comum quanto no pacote local
 * ("dentista no Tucuruvi") e no Google Maps.
 *
 * Não incluímos nota/avaliação (aggregateRating) aqui de propósito: os
 * depoimentos da seção Depoimentos ainda são texto de exemplo (ver comentário
 * em lib/content.ts), e marcar avaliações fictícias como dados estruturados
 * violaria as diretrizes do Google. Quando os depoimentos reais do Google
 * forem integrados, isso pode ser adicionado.
 */
export default function StructuredData() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Dentist",
    name: clinic.name,
    image: `${siteUrl}/images/hero/consultorio-01.jpg`,
    url: siteUrl,
    telephone: clinic.phoneHref.replace("tel:", ""),
    priceRange: "$$",
    medicalSpecialty: "Dentistry",
    address: {
      "@type": "PostalAddress",
      streetAddress: clinic.address.line1,
      addressLocality: "São Paulo",
      addressRegion: "SP",
      postalCode: clinic.address.zip.replace("CEP ", ""),
      addressCountry: "BR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: clinic.geo.latitude,
      longitude: clinic.geo.longitude,
    },
    hasMap: clinic.googleMapsUrl,
    areaServed: {
      "@type": "Place",
      name: "Tucuruvi, São Paulo - SP",
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    availableService: services.map((service) => ({
      "@type": "MedicalProcedure",
      name: service.name,
      description: service.description,
    })),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}

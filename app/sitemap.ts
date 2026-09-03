import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const siteUrl = "https://www.cvmodontologia.com.br";

// URLs com "/" no final para bater exatamente com as rotas geradas pelo
// build estático (trailingSlash: true em next.config.ts) — evita redirects
// desnecessários entre a URL do sitemap e a URL real da página.
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${siteUrl}/`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${siteUrl}/politica-de-privacidade/`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];
}

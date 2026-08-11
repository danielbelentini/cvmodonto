import type { Metadata } from "next";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "./globals.css";

const siteUrl = "https://www.cvmodontologia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CVM Odontologia | Clínica Odontológica em São Paulo",
  description:
    "Restaurações, implantes, ortodontia, endodontia e mais. Agende sua avaliação gratuita pelo WhatsApp e conheça a equipe da CVM Odontologia em São Paulo.",
  keywords: [
    "dentista São Paulo",
    "clínica odontológica",
    "restauração dentária",
    "implante dentário",
    "ortodontia",
    "clareamento dental",
    "endodontia",
    "CVM Odontologia",
  ],
  authors: [{ name: "CVM Odontologia" }],
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: "CVM Odontologia",
    title: "CVM Odontologia | Clínica Odontológica em São Paulo",
    description:
      "Especialistas em restaurações, implantes, ortodontia e mais. Agende sua avaliação gratuita pelo WhatsApp.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-void text-ink-soft">{children}</body>
    </html>
  );
}

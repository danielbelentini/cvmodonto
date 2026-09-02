import type { Metadata } from "next";
import "@fontsource/lato/400.css";
import "@fontsource/lato/700.css";
import "@fontsource/lato/900.css";
import "@fontsource/fraunces/400.css";
import "@fontsource/fraunces/500.css";
import "@fontsource/fraunces/600.css";
import "./globals.css";
import {
  ConsentModeDefaults,
  GoogleTagManagerNoScript,
  GoogleTagManagerScript,
} from "@/components/GoogleTagManager";
import CookieConsent from "@/components/CookieConsent";
import WhatsAppFloatingButton from "@/components/WhatsAppFloatingButton";

const siteUrl = "https://www.cvmodontologia.com.br";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "CVM Odontologia | Dentista no Tucuruvi - São Paulo",
  description:
    "Restaurações, próteses, implantes, ortodontia, clareamento e mais. Agende sua avaliação na CVM Odontologia, Tucuruvi em São Paulo.",
  keywords: [
    "dentista Tucuruvi",
    "dentista Zona Norte SP",
    "clínica odontológica São Paulo",
    "consultório odontológico Tucuruvi",
    "restauração dentária",
    "prótese dentária",
    "reabilitação oral",
    "implante dentário",
    "ortodontia",
    "alinhadores dentários",
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
    title: "CVM Odontologia | Dentista no Tucuruvi - São Paulo",
    description:
      "Restaurações, próteses, implantes, ortodontia, clareamento e mais. Agende sua avaliação na CVM Odontologia, Tucuruvi em São Paulo.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon-light-32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-light-16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: light)" },
      { url: "/favicon-dark-32.png", sizes: "32x32", type: "image/png", media: "(prefers-color-scheme: dark)" },
      { url: "/favicon-dark-16.png", sizes: "16x16", type: "image/png", media: "(prefers-color-scheme: dark)" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className="h-full antialiased">
      <body className="min-h-full flex flex-col bg-void text-ink-soft">
        <ConsentModeDefaults />
        <GoogleTagManagerScript />
        <GoogleTagManagerNoScript />
        {children}
        <WhatsAppFloatingButton />
        <CookieConsent />
      </body>
    </html>
  );
}

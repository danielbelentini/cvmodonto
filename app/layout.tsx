import type { Metadata } from "next";
import Script from "next/script";
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
    url: "https://www.cvmodonto.com.br",
    siteName: "CVM Odontologia",
    title: "CVM Odontologia | Clínica Odontológica em São Paulo",
    description:
      "Especialistas em restaurações, implantes, ortodontia e mais. Agende sua avaliação gratuita pelo WhatsApp.",
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
        {/* Script do GTM */}
        <Script
          id="gtm-script"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
              })(window,document,'script','dataLayer','GTM-P8WTC8CC');
            `,
          }}
        />
        {/* Noscript do GTM */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-P8WTC8CC"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>

        {children}
      </body>
    </html>
  );
}

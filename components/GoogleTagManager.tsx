import Script from "next/script";
import { CONSENT_STORAGE_KEY, GTM_ID } from "@/lib/analytics";

/**
 * Define o estado padrão de consentimento (Google Consent Mode v2) ANTES de
 * qualquer tag do GTM/GA4 carregar — por padrão tudo fica "denied" (negado),
 * em conformidade com a LGPD (nada de cookie de mensuração/marketing sem
 * consentimento prévio). Se o visitante já tiver escolhido antes (está salvo
 * no localStorage), aplicamos a escolha dele direto, sem esperar o clique.
 *
 * Precisa rodar antes do GTM, por isso a estratégia "beforeInteractive".
 */
export function ConsentModeDefaults() {
  return (
    <Script id="consent-mode-defaults" strategy="beforeInteractive">
      {`
        window.dataLayer = window.dataLayer || [];
        window.gtag = window.gtag || function(){window.dataLayer.push(arguments);};
        var stored = null;
        try {
          var raw = localStorage.getItem(${JSON.stringify(CONSENT_STORAGE_KEY)});
          stored = raw ? JSON.parse(raw) : null;
        } catch (e) {}
        var granted = stored && stored.analytics ? "granted" : "denied";
        window.gtag('consent', 'default', {
          analytics_storage: granted,
          ad_storage: granted,
          ad_user_data: granted,
          ad_personalization: granted,
          wait_for_update: 500
        });
        window.gtag('js', new Date());
      `}
    </Script>
  );
}

/** Carrega o container do GTM (GA4 e demais tags de marketing ficam configuradas lá dentro). */
export function GoogleTagManagerScript() {
  if (!GTM_ID) return null;
  return (
    <Script id="gtm-loader" strategy="afterInteractive">
      {`
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});
        var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
        j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');
      `}
    </Script>
  );
}

/** Fallback para navegadores sem JavaScript — precisa ficar logo após a abertura da <body>. */
export function GoogleTagManagerNoScript() {
  if (!GTM_ID) return null;
  return (
    <noscript>
      <iframe
        src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
        height="0"
        width="0"
        style={{ display: "none", visibility: "hidden" }}
        title="Google Tag Manager"
      />
    </noscript>
  );
}

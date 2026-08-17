// Configuração de GA4 / Google Tag Manager + consentimento (LGPD)
// -----------------------------------------------------------------------------
// 1) Crie um container no Google Tag Manager (https://tagmanager.google.com) e,
//    dentro dele, uma tag de configuração do GA4 apontando para o seu ID de
//    métricas (G-XXXXXXXXXX). Isso evita colocar o gtag.js do GA4 direto no
//    site — o GTM já cuida de carregar o GA4 (e qualquer outra tag de marketing,
//    como Google Ads/Meta Pixel) por você.
// 2) Troque o valor abaixo pelo ID do seu container GTM (formato "GTM-XXXXXXX").
export const GTM_ID = "GTM-P8WTC8CC"; // <- coloque aqui o ID do container, ex: "GTM-ABCD123"

// Chave usada no localStorage do navegador para lembrar a escolha do visitante
export const CONSENT_STORAGE_KEY = "cvm-cookie-consent";

// Evento customizado disparado no window sempre que o consentimento muda,
// para qualquer parte do site reagir sem precisar de um Context/Provider.
export const CONSENT_UPDATED_EVENT = "cvm:consent-updated";

export type ConsentState = {
  // Cookies estritamente necessários (navegação, segurança) — sempre ativos,
  // não é uma escolha do usuário coletar isso, então não entra na gravação.
  // Cookies de mensuração/marketing (GA4, GTM, remarketing) — depende do opt-in.
  analytics: boolean;
  timestamp: string;
};

export function getStoredConsent(): ConsentState | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as ConsentState;
  } catch {
    return null;
  }
}

export function storeConsent(analytics: boolean) {
  if (typeof window === "undefined") return;
  const state: ConsentState = { analytics, timestamp: new Date().toISOString() };
  window.localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(state));

  type Gtag = (...args: unknown[]) => void;
  const gtag = (window as unknown as { gtag?: Gtag }).gtag;
  gtag?.("consent", "update", {
    analytics_storage: analytics ? "granted" : "denied",
    ad_storage: analytics ? "granted" : "denied",
    ad_user_data: analytics ? "granted" : "denied",
    ad_personalization: analytics ? "granted" : "denied",
  });

  window.dispatchEvent(new CustomEvent(CONSENT_UPDATED_EVENT, { detail: state }));
}

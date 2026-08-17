"use client";

import { storeConsent } from "@/lib/analytics";
import { useCookieBannerVisible } from "@/lib/useCookieBannerVisible";

export default function CookieConsent() {
  const visible = useCookieBannerVisible();

  function handleChoice(analytics: boolean) {
    storeConsent(analytics);
  }

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-live="polite"
      aria-label="Aviso de cookies"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-line bg-panel/98 backdrop-blur px-5 py-5 shadow-[0_-8px_24px_rgba(0,0,0,0.35)] sm:px-8"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm leading-relaxed text-ink-soft">
          Usamos cookies para melhorar sua experiência e entender como você
          utiliza o site, inclusive por meio do Google Analytics (GA4) e do
          Google Tag Manager. Você pode aceitar ou recusar os cookies não
          essenciais a qualquer momento. Saiba mais na nossa{" "}
          <a
            href="/politica-de-privacidade"
            className="font-medium text-teal underline underline-offset-2 hover:text-teal-bright"
          >
            Política de Privacidade
          </a>
          .
        </p>
        <div className="flex w-full shrink-0 gap-3 sm:w-auto">
          <button
            type="button"
            onClick={() => handleChoice(false)}
            className="min-h-[44px] flex-1 rounded-xl border border-line px-5 text-sm font-medium text-ink-soft transition-colors hover:border-teal-bright hover:text-teal-bright sm:flex-none"
          >
            Recusar
          </button>
          <button
            type="button"
            onClick={() => handleChoice(true)}
            className="min-h-[44px] flex-1 rounded-xl bg-teal px-5 text-sm font-semibold text-void transition-colors hover:bg-teal-bright sm:flex-none"
          >
            Aceitar todos
          </button>
        </div>
      </div>
    </div>
  );
}

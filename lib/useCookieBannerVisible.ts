"use client";

import { useSyncExternalStore } from "react";
import { CONSENT_UPDATED_EVENT, getStoredConsent } from "./analytics";

function subscribe(callback: () => void) {
  window.addEventListener(CONSENT_UPDATED_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_UPDATED_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

// Ainda sem escolha registrada => a barra de cookies está (ou vai ficar) visível.
function getSnapshot() {
  return getStoredConsent() === null;
}

// No primeiro render estático (build/SSR) não há como saber a escolha do
// visitante — assumimos "sem decisão" (barra oculta por padrão até o
// JavaScript rodar no cliente) para não haver divergência de hidratação.
function getServerSnapshot() {
  return false;
}

/** true enquanto o visitante ainda não escolheu aceitar/recusar cookies. */
export function useCookieBannerVisible() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}

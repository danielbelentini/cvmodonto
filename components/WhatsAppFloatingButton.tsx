"use client";

import { useEffect, useState } from "react";
import { whatsappHref } from "@/lib/content";
import { useCookieBannerVisible } from "@/lib/useCookieBannerVisible";
import { WhatsAppIcon } from "./icons";

export default function WhatsAppFloatingButton() {
  const [footerVisible, setFooterVisible] = useState(false);
  const cookieBannerVisible = useCookieBannerVisible();

  useEffect(() => {
    const footer = document.getElementById("site-footer");
    if (!footer) return;

    // Esconde o botão assim que o rodapé começa a aparecer na tela, para não
    // ficar sobrepondo o conteúdo do footer.
    const observer = new IntersectionObserver(
      ([entry]) => setFooterVisible(entry.isIntersecting),
      { rootMargin: "0px", threshold: 0 }
    );
    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  // Também recua enquanto a barra de cookies estiver aberta, para as duas
  // faixas fixas na base da tela não se sobreporem no mobile.
  const hidden = footerVisible || cookieBannerVisible;

  const href = whatsappHref();

  return (
    <>
      {/* Desktop/tablet — botão redondo com respiro do canto */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className={`fixed right-6 bottom-6 z-50 hidden h-16 w-16 items-center justify-center rounded-full bg-whatsapp text-white shadow-lg shadow-black/30 transition-all duration-300 hover:bg-whatsapp-bright sm:flex ${
          hidden ? "pointer-events-none translate-y-4 opacity-0" : "opacity-100"
        }`}
        id="click_whatsapp"
      >
        <WhatsAppIcon className="h-8 w-8" />
      </a>

      {/* Mobile — barra fixa ocupando toda a largura, com texto no lugar do logo */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Agendar pelo WhatsApp"
        className={`fixed inset-x-0 bottom-0 z-50 flex min-h-13 items-center justify-center bg-whatsapp px-5 text-base font-semibold text-white transition-all duration-300 hover:bg-whatsapp-bright sm:hidden ${
          hidden ? "pointer-events-none translate-y-full opacity-0" : "opacity-100"
        }`}
      >
        Agende aqui
      </a>
    </>
  );
}

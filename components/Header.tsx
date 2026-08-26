"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { clinic, nav, whatsappHref } from "@/lib/content";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState<string>("");

  useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    // Considera "ativa" a seção que ocupa a faixa central da tela — assim o
    // item de navegação acompanha a rolagem em vez de reagir só ao clique.
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/80 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#topo"
          className="flex items-center"
          aria-label={`${clinic.name} — página inicial`}
        >
          
          <picture>
            <source srcSet="/images/logo-cvm-header.webp" type="image/webp" />
            <img
              src="/images/logo-cvm-header.png"
              alt={clinic.name}
              width={170}
              height={50}
              fetchPriority="high"
              className="h-9 w-auto sm:h-12"
            />
          </picture>
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => {
            const isActive = activeHash === item.href;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "page" : undefined}
                className={`text-sm transition-colors hover:text-teal-bright ${
                  isActive ? "font-semibold text-teal" : "text-ink-soft"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={clinic.phoneHref}
            className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-teal-bright"
          >
            <PhoneIcon className="h-4 w-4" />
            {clinic.phoneDisplay}
          </a>
          <Button href={whatsappHref()} size="sm" icon={<WhatsAppIcon className="h-4 w-4" />} gtmId="whatsapp_header">
            Agendar agora
          </Button>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-2xl border border-line text-ink lg:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
        >
          {open ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-panel px-5 py-6 lg:hidden"
        >
          <nav aria-label="Navegação móvel" className="flex flex-col gap-5">
            {nav.map((item) => {
              const isActive = activeHash === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  aria-current={isActive ? "page" : undefined}
                  className={`text-base transition-colors hover:text-teal-bright ${
                    isActive ? "font-semibold text-teal" : "text-ink-soft"
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </nav>
          <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6">
            <a
              href={clinic.phoneHref}
              className="flex items-center gap-2 text-sm text-ink-soft"
            >
              <PhoneIcon className="h-4 w-4" />
              {clinic.phoneDisplay}
            </a>
            <Button href={whatsappHref()} icon={<WhatsAppIcon className="h-4 w-4" />}>
              Agendar pelo WhatsApp
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}

"use client";

import { useState } from "react";
import Image from "next/image";
import { clinic, nav, whatsappHref } from "@/lib/content";
import { MenuIcon, CloseIcon, PhoneIcon, WhatsAppIcon } from "./icons";
import Button from "./Button";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-void/90 backdrop-blur">
      <div className="mx-auto flex h-18 max-w-6xl items-center justify-between px-5 py-3 sm:px-8">
        <a
          href="#topo"
          className="flex items-center"
          aria-label={`${clinic.name} — página inicial`}
        >
          <Image
            src="/images/logo-cvm.png"
            alt={clinic.name}
            width={170}
            height={50}
            priority
            className="h-9 w-auto sm:h-10"
          />
        </a>

        <nav
          aria-label="Navegação principal"
          className="hidden items-center gap-8 lg:flex"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink-soft transition-colors hover:text-teal"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={clinic.phoneHref}
            className="flex items-center gap-2 text-sm text-ink-soft transition-colors hover:text-teal"
          >
            <PhoneIcon className="h-4 w-4" />
            {clinic.phoneDisplay}
          </a>
          <Button href={whatsappHref()} size="sm" icon={<WhatsAppIcon className="h-4 w-4" />}>
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
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-base text-ink-soft transition-colors hover:text-teal"
              >
                {item.label}
              </a>
            ))}
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

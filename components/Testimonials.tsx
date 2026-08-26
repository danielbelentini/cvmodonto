"use client";

import { useRef } from "react";
import type { Swiper as SwiperType } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { clinic, testimonials } from "@/lib/content";
import { ChevronLeftIcon, ChevronRightIcon, GoogleIcon, StarIcon } from "./icons";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

export default function Testimonials() {
  const swiperRef = useRef<SwiperType | null>(null);

  return (
    <section id="depoimentos" className="border-b border-line bg-panel" aria-label="Depoimentos">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Quem já passou por aqui"
          title="Depoimentos"
          subtitle="Experiências reais de pacientes atendidos na CVM Odontologia."
        />
        {/* Conteúdo de exemplo — a seção será conectada às avaliações reais do
            Google ou a depoimentos curados manualmente (ver decisão em aberto no escopo).

            Implementado com swiper.js: com os 3 depoimentos atuais e slidesPerView=3
            no desktop, os cards ficam lado a lado, fixos, sem navegação (nada para
            deslizar). Quando novos depoimentos forem adicionados em lib/content.ts,
            o Swiper passa a funcionar como carrossel automaticamente — sem precisar
            alterar este layout. */}
        <Reveal>
          <div className="relative mt-12">
            {/* 40px de respiro nas laterais (sm+) para as setas não ficarem sobre os cards */}
            <Swiper
              modules={[Pagination, Navigation, Autoplay]}
              onSwiper={(s) => {
                swiperRef.current = s;
              }}
              spaceBetween={20}
              slidesPerView={1}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              breakpoints={{
                640: { slidesPerView: 2, spaceBetween: 20, autoplay: false },
                1024: { slidesPerView: 3, spaceBetween: 20, autoplay: false },
              }}
              pagination={{ clickable: true }}
              className="pb-12 sm:px-10"
            >
              {testimonials.map((item) => (
                <SwiperSlide key={item.name} className="h-auto">
                  {/* Altura mínima fixa (calculada a partir do maior depoimento) para
                      que nenhum card mude de tamanho ao trocar de slide */}
                  <figure className="flex h-full min-h-55 flex-col gap-4 rounded-2xl border border-line bg-panel-soft px-6 py-6">
                    <div className="flex gap-1 text-gold" aria-hidden="true">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <StarIcon key={i} className="h-4 w-4" />
                      ))}
                    </div>
                    <blockquote className="text-sm leading-relaxed text-ink-soft">
                      “{item.quote}”
                    </blockquote>
                    <figcaption className="mt-auto text-sm font-semibold text-ink">
                      {item.name}
                    </figcaption>
                  </figure>
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Setas customizadas — hitbox de 40x40px, ícone centralizado, ocultas no
                mobile (onde o carrossel avança sozinho a cada 4s e também aceita swipe) */}
            <button
              type="button"
              onClick={() => swiperRef.current?.slidePrev()}
              aria-label="Depoimento anterior"
              className="absolute left-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-teal transition-colors hover:text-teal-bright sm:flex"
            >
              <ChevronLeftIcon className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => swiperRef.current?.slideNext()}
              aria-label="Próximo depoimento"
              className="absolute right-0 top-1/2 hidden h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full text-teal transition-colors hover:text-teal-bright sm:flex"
            >
              <ChevronRightIcon className="h-5 w-5" />
            </button>
          </div>
        </Reveal>

        <div className="mt-2 flex justify-center">
          <a
            href={clinic.googleReviewsHref}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium text-ink-soft transition-colors hover:text-teal-bright"
          >
            <GoogleIcon className="h-4 w-4" />
            Veja mais depoimentos no Google
          </a>
        </div>

        <SectionCta copy="Seja o próximo sorriso satisfeito." buttonLabel="Fale conosco" gtmId="whatsapp_depoimentos" />
      </div>
    </section>
  );
}

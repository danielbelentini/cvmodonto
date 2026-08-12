import { testimonials } from "@/lib/content";
import { StarIcon } from "./icons";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

export default function Testimonials() {
  return (
    <section id="depoimentos" className="border-b border-line bg-panel" aria-label="Depoimentos">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Quem já passou por aqui"
          title="Depoimentos"
          subtitle="Experiências reais de pacientes atendidos na CVM Odontologia."
        />
        {/* Conteúdo de exemplo — a seção será conectada às avaliações reais do
            Google ou a depoimentos curados manualmente (ver decisão em aberto no escopo). */}
        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          {testimonials.map((item) => (
            <Reveal key={item.name}>
              <figure className="flex h-full flex-col gap-4 rounded-2xl border border-line bg-panel-soft px-6 py-6">
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
            </Reveal>
          ))}
        </div>

        <SectionCta copy="Seja o próximo sorriso satisfeito." buttonLabel="Avaliação grátis" />
      </div>
    </section>
  );
}

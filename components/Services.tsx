import { services } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="border-b border-line bg-panel" aria-label="Serviços">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Tratamentos"
          title="Tratamentos Odontológicos"
          subtitle="Especialidades para cuidar da sua saúde bucal em todas as fases, do primeiro sintoma à manutenção do sorriso."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.name}>
              <div className="flex h-full flex-col gap-2 rounded-2xl border border-line bg-panel-soft px-5 py-6 text-left">
                <h3 className="text-base font-semibold text-ink">{service.name}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionCta
          copy="Não sabe qual tratamento é ideal para você?"
          buttonLabel="Agendar sua avaliação"
        />
      </div>
    </section>
  );
}

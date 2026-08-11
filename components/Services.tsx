import { services, whatsappHref } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

export default function Services() {
  return (
    <section id="servicos" className="border-b border-line bg-panel" aria-label="Serviços">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Tratamentos"
          title="Serviços"
          subtitle="Especialidades para cuidar da sua saúde bucal em todas as fases, do primeiro sintoma à manutenção do sorriso."
        />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Reveal key={service.name}>
              <a
                href={whatsappHref(
                  `Olá! Tenho interesse no tratamento de ${service.name} na CVM Odontologia.`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={`group flex h-full flex-col gap-2 rounded-2xl border px-5 py-6 text-left transition-colors ${
                  service.featured
                    ? "border-teal/60 bg-teal-soft"
                    : "border-line bg-panel-soft hover:border-teal/40"
                }`}
              >
                {service.featured && (
                  <span className="w-fit rounded-full bg-teal px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-void">
                    Especialidade principal
                  </span>
                )}
                <h3 className="text-base font-semibold text-ink">{service.name}</h3>
                <p className="text-sm leading-relaxed text-ink-muted">
                  {service.description}
                </p>
                <span className="mt-auto pt-2 text-sm font-medium text-teal opacity-0 transition-opacity group-hover:opacity-100">
                  Saiba mais →
                </span>
              </a>
            </Reveal>
          ))}
        </div>

        <SectionCta
          copy="Não sabe qual tratamento é ideal para você?"
          buttonLabel="Avaliação grátis"
        />
      </div>
    </section>
  );
}

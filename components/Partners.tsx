import { partners } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

export default function Partners() {
  return (
    <section className="border-b border-line bg-void" aria-label="Convênios">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Formas de atendimento"
          title="Convênios"
          subtitle="Trabalhamos com os seguintes convênios odontológicos."
        />

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-6">
            {partners.map((partner) => (
              // Placeholder — substituir pela logo real de cada convênio (160x80)
              <div
                key={partner.name}
                className="flex h-20 w-40 items-center justify-center rounded-xl border border-line bg-panel px-4"
              >
                <img
                  src={partner.logo}
                  alt={`Convênio ${partner.name}`}
                  width={160}
                  height={80}
                  className="h-full w-full object-contain"
                />
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-ink-muted">
          Também atendemos particular, com parcelamento disponível.
        </p>

        <SectionCta
          copy="Entre em contato com nossa recepção."
          buttonLabel="Entre em contato conosco"
        />
      </div>
    </section>
  );
}

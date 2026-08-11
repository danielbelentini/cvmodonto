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
          subtitle="Atendemos os principais convênios odontológicos da região."
        />

        <Reveal>
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4">
            {partners.map((partner) => (
              // Placeholder — substituir pela logo real de cada convênio
              <div
                key={partner}
                className="flex h-20 w-40 items-center justify-center rounded-xl border border-line bg-panel px-4 text-center text-sm font-medium text-ink-soft"
              >
                {partner}
              </div>
            ))}
          </div>
        </Reveal>

        <p className="mx-auto mt-6 max-w-md text-center text-xs text-ink-muted">
          Também atendemos particular, com parcelamento disponível.
        </p>

        <SectionCta
          copy="Confira se o seu convênio está aqui."
          buttonLabel="Falar com a recepção"
        />
      </div>
    </section>
  );
}

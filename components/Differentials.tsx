import { differentials } from "@/lib/content";
import { differentialIcons } from "./icons";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

export default function Differentials() {
  return (
    <section className="border-b border-line bg-void" aria-label="Diferenciais">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Por que a CVM"
          title="Diferenciais"
          subtitle="Detalhes que fazem diferença na hora de escolher onde cuidar do seu sorriso."
        />

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {differentials.map((item, index) => {
            const Icon = differentialIcons[item.icon];
            return (
              <Reveal key={item.title} className={`delay-[${index * 60}ms]`}>
                <div className="h-full rounded-2xl border border-line bg-panel px-6 py-7 text-center transition-colors hover:border-teal/50">
                  <span className="mx-auto flex h-12 w-12 items-center justify-center rounded-full border border-teal/40 text-teal">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 text-base font-semibold text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <SectionCta
          copy="Quer sentir a diferença no seu próximo atendimento?"
          buttonLabel="Falar no WhatsApp"
        />
      </div>
    </section>
  );
}

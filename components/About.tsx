import { bigNumbers } from "@/lib/content";
import Reveal from "./Reveal";
import SectionCta from "./SectionCta";

export default function About() {
  return (
    <section id="sobre" className="border-b border-line bg-panel" aria-labelledby="sobre-titulo">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-[1.1fr_1fr] lg:items-center">
            <div className="flex flex-col gap-5">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Sobre a clínica
              </span>
              <h2 id="sobre-titulo" className="text-3xl sm:text-4xl font-normal leading-tight">
                Cuidado odontológico completo, do primeiro exame à manutenção do sorriso
              </h2>
              <p className="text-ink-soft leading-relaxed">
                A CVM Odontologia reúne especialistas de diferentes áreas em um único
                endereço, para que você não precise procurar um novo profissional a
                cada etapa do tratamento. Da avaliação inicial aos cuidados de
                manutenção, cada consulta é conduzida com atenção ao seu histórico,
                seus receios e seus objetivos — sempre com transparência sobre
                diagnóstico, prazos e valores.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {bigNumbers.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-line bg-panel-soft px-5 py-6 text-center"
                >
                  <span className="font-display text-3xl text-teal sm:text-4xl">
                    {item.value}
                  </span>
                  <p className="mt-2 text-xs uppercase tracking-wide text-ink-muted">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        <SectionCta
          copy="Números que só existem porque cuidamos de verdade."
          buttonLabel="Nossas especialidades"
          href="#servicos"
          showIcon={false}
          gtmId="cta_sobre"
        />
      </div>
    </section>
  );
}

import { team } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

export default function Team() {
  return (
    <section id="equipe" className="border-b border-line bg-void" aria-label="Nossa Equipe">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Quem cuida de você"
          title="Nossa Equipe"
          subtitle="Seis especialistas, cada um com sua área de atuação — todos com o mesmo compromisso com o seu tratamento."
        />

        {/* 3 cards na fileira de cima, 2 centralizadas embaixo — todos com a mesma largura.
            Grade de 6 colunas no desktop: cada card ocupa 2 colunas; os dois últimos
            recebem um deslocamento para ficarem centralizados na segunda fileira. */}
        {/* <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          {team.map((member, index) => (
            <Reveal
              key={member.cro}
              className={`lg:col-span-2 ${index === 3 ? "lg:col-start-2" : ""} ${
                index === 4 ? "lg:col-start-4" : ""
              }`}
            > */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-6 lg:gap-10">
          {team.map((member, index) => (
            <Reveal
              key={member.cro}
              className={`lg:col-span-2 ${
                index % 2 === 0 ? "lg:col-start-2" : ""
              }`}
            >
              <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-panel">
                {/* Foto placeholder (placehold.co) — enquadramento do peito para cima.
                    Proporção 4:5 reservada para caber a imagem inteira. As URLs de
                    cada foto ficam declaradas em lib/content.ts (campo "photo" de
                    cada integrante da equipe); veja o comentário lá para instruções
                    de como apontar para as imagens hospedadas localmente. */}
                <picture>
                  <source
                    srcSet={member.photo.replace(/\.(jpg|jpeg|png)$/i, '.webp')}
                    type="image/webp"
                  />
                  <img
                    src={member.photo}
                    alt={`${member.name} — ${member.specialty}, CVM Odontologia`}
                    className="aspect-4/5 w-full border-b border-line object-cover"
                  />
                </picture>
                <div className="flex flex-1 flex-col items-center gap-2 px-5 py-6 text-center">
                  <h3 className="text-sm font-semibold text-ink">{member.name}</h3>
                  <p className="text-xs text-ink-muted">{member.cro}</p>
                  <p className="mt-1 text-xs leading-relaxed text-ink-soft">
                    {member.specialty}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionCta
          copy="Fale com o especialista certo para o seu caso."
          buttonLabel="Agendar um especialista"
        />
      </div>
    </section>
  );
}

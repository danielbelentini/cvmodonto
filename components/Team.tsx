import { team } from "@/lib/content";
import SectionHeader from "./SectionHeader";
import SectionCta from "./SectionCta";
import Reveal from "./Reveal";

function initials(name: string) {
  const clean = name.replace(/^(Dra?\.)\s*/i, "");
  const parts = clean.split(" ").filter(Boolean);
  return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
}

export default function Team() {
  return (
    <section id="equipe" className="border-b border-line bg-void" aria-label="Nossa Equipe">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Quem cuida de você"
          title="Nossa Equipe"
          subtitle="Cinco especialistas, cada um com sua área de atuação — todos com o mesmo compromisso com o seu tratamento."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {team.map((member) => (
            <Reveal key={member.cro}>
              <div className="flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-panel px-4 py-6 text-center">
                {/* Foto placeholder — substituir pela foto real de cada profissional */}
                <div
                  className="flex h-20 w-20 items-center justify-center rounded-full border border-teal/40 bg-panel-soft font-display text-lg text-teal"
                  role="img"
                  aria-label={`Foto placeholder de ${member.name}`}
                >
                  {initials(member.name)}
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-ink">{member.name}</h3>
                  <p className="mt-1 text-xs text-ink-muted">{member.cro}</p>
                  <p className="mt-2 text-xs leading-relaxed text-ink-soft">
                    {member.specialty}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <SectionCta
          copy="Fale com o especialista certo para o seu caso."
          buttonLabel="Agendar"
        />
      </div>
    </section>
  );
}

import { clinic, whatsappHref } from "@/lib/content";
import { MapPinIcon, WhatsAppIcon } from "./icons";
import SectionHeader from "./SectionHeader";
import Button from "./Button";
import Reveal from "./Reveal";

export default function Location() {
  return (
    <section id="localizacao" className="border-b border-line bg-panel" aria-label="Localização">
      <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <SectionHeader
          eyebrow="Como chegar"
          title="Localização"
          subtitle="Fácil acesso, estacionamento no local e a poucos minutos do metrô."
        />

        <Reveal>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-line lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 bg-panel-soft px-8 py-10">
              <div className="flex items-start gap-3">
                <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-teal" />
                <div>
                  <p className="text-ink">{clinic.address.line1}</p>
                  <p className="text-ink-soft">{clinic.address.city}</p>
                  <p className="text-ink-muted text-sm">{clinic.address.zip}</p>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-muted">
                  Horário de atendimento
                </p>
                <p className="mt-1 text-ink-soft">{clinic.hours}</p>
              </div>
              <Button
                href={whatsappHref("Olá! Vamos agendar minha visita à CVM Odontologia?")}
                icon={<WhatsAppIcon className="h-4 w-4" />}
                className="mt-2 w-fit"
              >
                Agendar visita
              </Button>
            </div>

            <iframe
              title="Mapa com a localização da CVM Odontologia"
              src={clinic.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="min-h-[320px] w-full border-0 grayscale invert-[0.92] contrast-[0.9]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

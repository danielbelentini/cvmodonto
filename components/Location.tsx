import { clinic, whatsappHref } from "@/lib/content";
import { MapPinIcon, PhoneIcon, WhatsAppIcon } from "./icons";
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
          subtitle="Estamos no Tucuruvi, zona norte de São Paulo — fácil acesso, estacionamento no local e a poucos minutos do Metrô Tucuruvi."
        />

        <Reveal>
          <div className="mt-12 grid overflow-hidden rounded-2xl border border-line lg:grid-cols-2">
            <div className="flex flex-col justify-center gap-5 bg-panel-soft px-8 py-10">
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-muted">
                  Nosso endereço
                </p>
                <div className="mt-1 flex items-start gap-3">
                  <MapPinIcon className="mt-1 h-5 w-5 shrink-0 text-teal" />
                  <div>
                    <p className="text-ink">{clinic.address.line1}</p>
                    <p className="text-ink-soft">
                      {clinic.address.neighborhood} — {clinic.address.city}
                    </p>
                    <p className="text-ink-muted text-sm">{clinic.address.zip}</p>
                  </div>
                </div>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-muted">
                  Horário de atendimento
                </p>
                <p className="mt-1 text-ink-soft">{clinic.hours}</p>
              </div>
              <div>
                <p className="text-xs uppercase tracking-wide text-ink-muted">
                  Nosso telefone
                </p>
                <a
                  href={clinic.phoneHref}
                  className="mt-1 flex items-center gap-2 text-ink-soft transition-colors hover:text-teal-bright"
                >
                  <PhoneIcon className="h-4 w-4 text-teal" />
                  {clinic.phoneDisplay}
                </a>
              </div>
              <Button
                href={whatsappHref("Olá! Vamos agendar minha visita à CVM Odontologia?")}
                icon={<WhatsAppIcon className="h-4 w-4" />}
                className="mt-2 w-fit"
                gtmId="whatsapp_localizacao"
              >
                Agendar visita
              </Button>
            </div>

            <iframe
              title="Mapa com a localização da CVM Odontologia"
              src={clinic.mapEmbedSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full min-h-80 w-full border-0 invert-[0.92] contrast-[0.9]"
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

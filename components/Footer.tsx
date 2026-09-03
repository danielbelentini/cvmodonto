import Image from "next/image";
import { clinic, nav, partners } from "@/lib/content";
import { PhoneIcon, WhatsAppIcon, MapPinIcon } from "./icons";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer id="site-footer" className="bg-void" aria-label="Rodapé">
      <div className="mx-auto max-w-6xl px-5 py-14 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <picture>
              <source srcSet="/images/logo-cvm-footer.webp" type="image/webp" />
              <img
                src="/images/logo-cvm-footer.png"
                alt={clinic.name}
                width={170}
                height={50}
                loading="lazy"
                className="h-29 w-auto"
              />
            </picture>
            <p className="mt-4 text-sm text-ink-muted leading-relaxed">
              Odontologia completa com especialistas dedicados a cada etapa do
              seu tratamento.
            </p>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Navegação
            </h3>
            <ul className="mt-4 flex flex-col gap-2.5">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={`/${item.href}`}
                    className="text-sm text-ink-soft transition-colors hover:text-teal-bright"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Contato
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-ink-soft">
              <li>
                <a href={clinic.phoneHref} className="flex items-center gap-2 hover:text-teal-bright">
                  <PhoneIcon className="h-4 w-4 shrink-0" />
                  {clinic.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${clinic.whatsappNumber}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-teal-bright"
                >
                  <WhatsAppIcon className="h-4 w-4 shrink-0" />
                  {clinic.whatsappDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPinIcon className="mt-0.5 h-4 w-4 shrink-0" />
                <span>
                  {clinic.address.line1}
                  <br />
                  {clinic.address.neighborhood} — {clinic.address.city}
                  <br />
                  {clinic.address.zip}
                </span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Convênios
            </h3>
            <p className="mt-4 text-sm text-ink-soft leading-relaxed">
              {partners.map((partner) => partner.name).join(" · ")}
            </p>
            <h3 className="mt-6 text-xs font-semibold uppercase tracking-wide text-ink-muted">
              Horário
            </h3>
            <p className="mt-2 text-sm text-ink-soft">{clinic.hours}</p>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-line pt-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} {clinic.name}. Todos os direitos reservados.
          </p>
          <p>Cirurgiões-dentistas responsáveis registrados no CRO-SP.</p>
          <a
            href="/politica-de-privacidade"
            className="underline underline-offset-2 transition-colors hover:text-teal-bright"
          >
            Política de Privacidade
          </a>
        </div>
      </div>
    </footer>
  );
}

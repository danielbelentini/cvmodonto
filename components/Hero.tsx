import Button from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/content";

export default function Hero() {
  return (
    <section
      id="topo"
      className="relative overflow-hidden border-b border-line bg-void"
      aria-label="Apresentação"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div className="flex flex-col gap-6">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold">
            Odontologia em São Paulo
          </span>
          <h1 className="max-w-xl text-4xl font-normal leading-[1.15] sm:text-5xl">
            Um sorriso saudável começa com uma equipe em quem você confia
          </h1>
          <p className="max-w-lg text-lg text-ink-soft leading-relaxed">
            Na CVM Odontologia você encontra especialistas para cada etapa do seu
            tratamento, em um ambiente pensado para o seu conforto. Agende sua
            avaliação gratuita pelo WhatsApp e descubra o melhor caminho para o seu
            sorriso.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button href={whatsappHref()} icon={<WhatsAppIcon className="h-4 w-4" />}>
              Quero minha avaliação grátis
            </Button>
            <Button href="#servicos" variant="outline" external={false}>
              Ver especialidades
            </Button>
          </div>
        </div>

        <div className="relative">
          {/* Imagem placeholder (placehold.co) — substituir por foto real do consultório
              quando disponível, mantendo a proporção do container abaixo. */}
          <img
            src="https://placehold.co/800x1000/101314/8d968f?text=Foto+do+consult%C3%B3rio"
            alt="Consultório da CVM Odontologia em São Paulo"
            className="aspect-[4/5] w-full rounded-3xl border border-line object-cover sm:aspect-[5/4] lg:aspect-[4/5]"
          />

          {/* Elemento de assinatura: cartão de próxima vaga, no estilo de um comprovante de agendamento */}
          <div className="absolute -bottom-6 left-1/2 w-[86%] -translate-x-1/2 rounded-2xl border border-teal/40 bg-panel-soft px-6 py-4 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] sm:left-auto sm:right-[-8%] sm:w-64 sm:translate-x-0">
            <p className="text-[11px] uppercase tracking-[0.15em] text-teal">
              Avaliação gratuita
            </p>
            <p className="mt-1 text-sm text-ink-soft">
              Agende hoje pelo WhatsApp e fale direto com a recepção.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

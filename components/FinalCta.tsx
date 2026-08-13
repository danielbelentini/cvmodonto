import Button from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/content";

export default function FinalCta() {
  return (
    <section
      className="relative overflow-hidden border-b border-line"
      aria-label="Agende sua avaliação"
    >
      {/* Imagem de fundo (Pexels, uso livre) — trocar pela foto real do consultório
          quando disponível. Overlay escuro para garantir contraste do texto. */}
      <img
        src="https://images.pexels.com/photos/6812480/pexels-photo-6812480.jpeg?auto=compress&cs=tinysrgb&w=1920"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-void/80" aria-hidden="true" />

      <div className="relative mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-24 text-center sm:px-8">
        <h2 className="text-3xl sm:text-4xl font-normal leading-tight">
          Seu sorriso não precisa esperar
        </h2>
        <p className="max-w-xl text-ink-soft leading-relaxed">
          Agende agora sua avaliação gratuita e descubra o melhor caminho para o
          seu tratamento. É rápido, sem compromisso e direto pelo WhatsApp com
          nossa recepção.
        </p>
        <Button
          href={whatsappHref()}
          size="lg"
          icon={<WhatsAppIcon className="h-5 w-5" />}
          className="mt-2"
        >
          Agendar avaliação grátis
        </Button>
      </div>
    </section>
  );
}

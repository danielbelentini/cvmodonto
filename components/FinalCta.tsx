import Button from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/content";

export default function FinalCta() {
  return (
    <section className="border-b border-line bg-teal-soft" aria-label="Agende sua avaliação">
      <div className="mx-auto flex max-w-3xl flex-col items-center gap-5 px-5 py-20 text-center sm:px-8">
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
          icon={<WhatsAppIcon className="h-4 w-4" />}
          className="mt-2"
        >
          Agendar avaliação grátis
        </Button>
      </div>
    </section>
  );
}

import Button from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/content";

type SectionCtaProps = {
  copy: string;
  buttonLabel: string;
  message?: string;
};

export default function SectionCta({ copy, buttonLabel, message }: SectionCtaProps) {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 border-t border-line pt-10 text-center">
      <p className="text-sm text-ink-muted">{copy}</p>
      <Button href={whatsappHref(message)} size="sm" icon={<WhatsAppIcon className="h-4 w-4" />}>
        {buttonLabel}
      </Button>
    </div>
  );
}

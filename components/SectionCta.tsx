import Button from "./Button";
import { WhatsAppIcon } from "./icons";
import { whatsappHref } from "@/lib/content";

type SectionCtaProps = {
  copy: string;
  buttonLabel: string;
  href?: string;
  message?: string;
  showIcon?: boolean;
  gtmId?: string;
};

export default function SectionCta({ copy, buttonLabel, href, message, showIcon = true, gtmId }: SectionCtaProps) {
  return (
    <div className="mt-12 flex flex-col items-center gap-4 border-t border-line pt-10 text-center">
      <p className="text-sm text-ink-muted">{copy}</p>
      <Button
        href={href || whatsappHref(message)}
        size="sm"
        icon={showIcon ? <WhatsAppIcon className="h-4 w-4" /> : null}
        className="min-h-11"
        gtmId={gtmId}
      >
        {buttonLabel}
      </Button>
    </div>
  );
}

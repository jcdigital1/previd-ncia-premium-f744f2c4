import { WHATSAPP_URL } from "@/lib/site-data";
import { WhatsAppIcon } from "./BrandIcons";

export function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full border border-gold/30 bg-card/90 p-3 shadow-elegant backdrop-blur-md transition-transform duration-300 active:scale-95 sm:px-5 sm:py-3"
    >
      <WhatsAppIcon className="size-7 sm:size-6" />
      <span className="hidden text-xs font-semibold tracking-[0.12em] text-foreground sm:inline">
        Fale conosco
      </span>
    </a>
  );
}

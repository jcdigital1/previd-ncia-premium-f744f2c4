import { useEffect, useState } from "react";
import { WHATSAPP_URL } from "@/lib/site-data";
import { WhatsAppIcon } from "./BrandIcons";

export function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className={`fixed right-4 bottom-4 z-50 flex items-center gap-2 rounded-full border border-gold/30 bg-card/90 p-3 shadow-elegant backdrop-blur-md transition-all duration-500 active:scale-95 sm:px-5 sm:py-3 ${
        visible ? "translate-y-0 opacity-100" : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <WhatsAppIcon className="size-7 sm:size-6" />
      <span className="hidden text-xs font-semibold tracking-[0.12em] text-foreground sm:inline">
        Fale conosco
      </span>
    </a>
  );
}

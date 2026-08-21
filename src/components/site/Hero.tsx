import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { LOGO_URL, WHATSAPP_URL } from "@/lib/site-data";
import { ContactRow } from "./ContactRow";

export function Hero() {
  return (
    <header className="relative isolate overflow-hidden bg-hero-gradient">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="relative mx-auto flex min-h-[100svh] max-w-6xl flex-col justify-between px-5 pt-4 pb-5 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-1 flex-col items-center justify-center text-center"
        >
          <img
            src={LOGO_URL}
            alt="Logotipo Jéssica Rodrigues Advocacia"
            width={520}
            height={520}
            fetchPriority="high"
            decoding="async"
            className="h-[38svh] max-h-72 w-auto object-contain drop-shadow-[0_18px_40px_rgba(0,0,0,0.6)] sm:h-80 sm:max-h-96"
          />

          <h1 className="mt-1 text-[clamp(1.6rem,7.4vw,2.9rem)] leading-[1.08] tracking-tight">
            Jéssica Rodrigues
            <span className="block text-gold-gradient">Advocacia</span>
          </h1>

          <p className="eyebrow mt-1">Advocacia Previdenciária | INSS</p>

          <div className="gold-rule mt-2 w-20" />

          <p className="mt-2 max-w-md font-display text-[clamp(1.15rem,5.2vw,1.85rem)] leading-snug text-foreground">
            Benefício negado pelo INSS não significa fim.
          </p>

          <p className="mt-1 max-w-md text-[0.82rem] leading-relaxed text-muted-foreground sm:text-sm">
            Há mais de 10 anos atuando para reverter negativas e defender direitos
            previdenciários. Atendimento em todo o Brasil.
          </p>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-2 inline-flex items-center gap-2 rounded-full surface-gold px-7 py-2.5 text-[0.78rem] font-semibold tracking-[0.14em] text-primary-foreground shadow-gold transition-transform duration-300 active:scale-[0.97] sm:mt-4 sm:py-3.5 sm:text-sm"
          >
            FALAR COM A ADVOGADA
            <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-5 shrink-0"
        >
          <ContactRow compact />
        </motion.div>
      </div>
    </header>
  );
}

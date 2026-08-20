import { WHATSAPP_URL } from "@/lib/site-data";
import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./BrandIcons";

export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-hero-gradient py-20 sm:py-28">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-gold/10 blur-3xl"
      />
      <Reveal className="relative mx-auto max-w-2xl px-5 text-center sm:px-8">
        <div className="gold-rule mx-auto w-16" />
        <h2 className="mt-6 text-3xl leading-tight sm:text-4xl">
          Ainda tem dúvidas sobre seu benefício?
        </h2>
        <p className="mt-4 text-sm leading-relaxed text-muted-foreground sm:text-base">
          Converse com a Jéssica e explique sua situação. Uma análise individual pode
          ajudar você a entender quais caminhos estão disponíveis.
        </p>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex w-full max-w-sm items-center justify-center gap-3 rounded-full surface-gold px-8 py-4 text-[0.78rem] font-semibold tracking-[0.12em] text-primary-foreground shadow-gold transition-transform duration-300 active:scale-[0.98] sm:text-sm"
        >
          <WhatsAppIcon className="size-5" />
          FALAR COM A JÉSSICA NO WHATSAPP
        </a>
      </Reveal>
    </section>
  );
}

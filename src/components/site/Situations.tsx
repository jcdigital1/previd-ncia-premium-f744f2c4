import { ChevronRight } from "lucide-react";
import { situations, WHATSAPP_URL } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";
import { WhatsAppIcon } from "./BrandIcons";

export function Situations() {
  return (
    <section id="situacoes" className="bg-wine-gradient py-16 sm:py-24">
      <div className="mx-auto max-w-3xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Atendimento direto"
          title="Qual é a sua situação?"
          subtitle="Escolha uma opção e fale diretamente pelo WhatsApp."
        />

        <div className="mt-10 space-y-3">
          {situations.map((situation, i) => (
            <Reveal key={situation.title} delay={i * 0.05}>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={situation.title}
                title={situation.message}
                className="group flex items-center gap-4 rounded-2xl border border-gold/25 bg-background/70 px-4 py-4 backdrop-blur-sm transition-all duration-300 hover:border-gold/60 hover:bg-background active:scale-[0.99]"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-full border border-gold/25 bg-card">
                  <WhatsAppIcon className="size-5" />
                </span>
                <span className="flex-1">
                  <span className="block font-display text-lg leading-tight">
                    {situation.title}
                  </span>
                  <span className="mt-0.5 block text-xs text-muted-foreground">
                    {situation.hint}
                  </span>
                </span>
                <ChevronRight className="size-5 shrink-0 text-gold transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowRight } from "lucide-react";
import { services, WHATSAPP_URL } from "@/lib/site-data";
import { Reveal, SectionHeading } from "./Reveal";

export function Services() {
  return (
    <section id="servicos" className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Áreas de atuação"
          title="Como podemos ajudar você?"
          subtitle="Atuação especializada em Direito Previdenciário e benefícios do INSS."
        />

        <div className="no-scrollbar mt-10 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
          {services.map((service, i) => (
            <Reveal
              key={service.title}
              delay={i * 0.06}
              className="min-w-[82%] snap-center md:min-w-0"
            >
              <article className="flex h-full flex-col rounded-3xl border border-border bg-wine-gradient p-6 shadow-elegant transition-colors duration-300 hover:border-gold/50">
                <h3 className="text-xl text-gold">{service.title}</h3>
                <p className="mt-3 font-display text-lg leading-snug">
                  {service.question}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center justify-between gap-3 rounded-full border border-gold/40 px-5 py-3 text-[0.68rem] font-semibold tracking-[0.12em] text-gold transition-colors duration-300 hover:bg-gold/10 active:scale-[0.98]"
                >
                  {service.cta}
                  <ArrowRight className="size-4 shrink-0" />
                </a>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";

const highlights = [
  {
    value: "+10 ANOS",
    text: "Revertendo negativas e defendendo direitos previdenciários.",
  },
  {
    value: "TODO O BRASIL",
    text: "Atendimento previdenciário para clientes de diferentes cidades e estados.",
  },
  {
    value: "OAB/MG",
    text: "Ordem dos Advogados do Brasil — Seção Minas Gerais",
  },
];

export function Authority() {
  return (
    <section className="bg-background py-16 sm:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-8">
        <div className="grid gap-4 sm:grid-cols-3">
          {highlights.map((item, i) => (
            <Reveal key={item.value} delay={i * 0.08}>
              <div className="h-full rounded-3xl border border-border bg-card/70 px-6 py-8 text-center shadow-elegant">
                <p className="font-display text-3xl leading-none text-gold-gradient sm:text-[2rem]">
                  {item.value}
                </p>
                <div className="gold-rule mx-auto mt-4 w-14" />
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

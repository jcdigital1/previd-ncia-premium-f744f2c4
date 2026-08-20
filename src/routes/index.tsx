import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Situations } from "@/components/site/Situations";
import { Authority } from "@/components/site/Authority";
import { Reviews } from "@/components/site/Reviews";
import { FinalCta } from "@/components/site/FinalCta";
import { SiteFooter } from "@/components/site/SiteFooter";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { LOGO_URL } from "@/lib/site-data";

const title = "Jéssica Rodrigues Advocacia | Advocacia Previdenciária INSS";
const description =
  "Benefício negado pelo INSS não significa fim. Mais de 10 anos revertendo negativas: BPC/LOAS, auxílio-doença, pensão por morte e aposentadoria. Atendimento em todo o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:image", content: LOGO_URL },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: LOGO_URL },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-background">
      <Hero />
      <Services />
      <Situations />
      <Authority />
      <Reviews />
      <FinalCta />
      <SiteFooter />
      <FloatingWhatsApp />
    </main>
  );
}

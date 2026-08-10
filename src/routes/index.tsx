import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Areas } from "@/components/site/Areas";
import { Mission } from "@/components/site/Mission";
import { Steps } from "@/components/site/Steps";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const TITLE = "Camila Silva Advocacia | Previdenciário, Família e Criminal";
const DESCRIPTION =
  "Advogada com mais de 7 anos de experiência em Direito Previdenciário, Família, Criminal e Tributário. Atendimento humanizado e estratégico em todo o Brasil.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LegalService",
          name: "Camila Silva Advocacia",
          description: DESCRIPTION,
          telephone: "+5531992069989",
          areaServed: "BR",
          founder: { "@type": "Person", name: "Camila Silva", jobTitle: "Advogada" },
          sameAs: ["https://www.instagram.com/silvacamilaadvocacia/"],
          knowsAbout: [
            "Direito Previdenciário",
            "Direito de Família",
            "Direito Criminal",
            "Direito Tributário",
          ],
        }),
      },
    ],
  }),
  component: LandingPage,
});

function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <About />
        <Areas />
        <Mission />
        <Steps />
        <Faq />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

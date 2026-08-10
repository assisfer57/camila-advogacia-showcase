import { GraduationCap } from "lucide-react";
import escritorio from "@/assets/camila-escritorio.jpg";
import { Reveal } from "./Reveal";

const POS = [
  "Direito Constitucional Aplicado",
  "Direito Tributário",
  "Direito Previdenciário",
  "Aposentadoria Especial",
];

export function About() {
  return (
    <section id="sobre" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <Reveal>
          <div className="relative">
            <img
              src={escritorio}
              alt="Camila Silva apoiada na mesa do escritório"
              width={864}
              height={1152}
              loading="lazy"
              className="w-full object-cover"
              style={{ boxShadow: "var(--shadow-elegant)" }}
            />
            <div
              aria-hidden="true"
              className="absolute -right-5 -bottom-5 hidden size-44 border border-primary/40 sm:block"
            />
          </div>
        </Reveal>

        <div>
          <Reveal>
            <p className="eyebrow">Sobre mim</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Advocacia técnica,
              <br />
              <span className="text-gradient-gold italic">estratégica e humanizada.</span>
            </h2>
            <div className="gold-rule mt-8 w-20" />
          </Reveal>

          <Reveal delay={80}>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>
                Advogada com mais de 7 anos de experiência, atuando de forma estratégica, técnica e
                humanizada nas áreas Previdenciária, Tributária, Família e Criminal.
              </p>
              <p>
                Especialista em Direito Previdenciário, com ampla atuação em aposentadorias,
                benefícios e planejamento previdenciário. Possuo também sólida experiência nas áreas
                Tributária, Familiar e Criminal, com destaque para casos de violência doméstica,
                sempre conduzidos com sensibilidade, firmeza e compromisso com a proteção dos
                direitos de cada cliente.
              </p>
              <p>
                Com atendimento em todo o Brasil, ofereço acompanhamento personalizado, pautado na
                ética, responsabilidade e excelência profissional.
              </p>
            </div>
          </Reveal>

          <Reveal delay={140}>
            <div className="mt-10 border border-border p-7">
              <p className="flex items-center gap-2.5 text-xs tracking-[0.24em] text-primary uppercase">
                <GraduationCap className="size-4" aria-hidden="true" />
                Formação complementar
              </p>
              <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                {POS.map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm text-foreground/85">
                    <span aria-hidden="true" className="mt-2 size-1.5 shrink-0 bg-primary" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

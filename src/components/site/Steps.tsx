import { MessageSquare, FileSearch, ShieldCheck } from "lucide-react";
import { Reveal } from "./Reveal";

const STEPS = [
  {
    icon: MessageSquare,
    n: "01",
    t: "Primeiro contato",
    d: "Você me chama no WhatsApp e conta o que está acontecendo, sem compromisso e com total sigilo.",
  },
  {
    icon: FileSearch,
    n: "02",
    t: "Análise do caso",
    d: "Avalio documentos e viabilidade, explico os caminhos possíveis em linguagem simples e sem promessas vazias.",
  },
  {
    icon: ShieldCheck,
    n: "03",
    t: "Estratégia e acompanhamento",
    d: "Definimos a estratégia jurídica e você acompanha cada etapa com atendimento próximo e transparente.",
  },
];

export function Steps() {
  return (
    <section id="atendimento" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Como funciona</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              O <span className="text-gradient-gold italic">atendimento</span> em três passos
            </h2>
            <div className="gold-rule mt-8 w-20" />
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {STEPS.map((s, i) => (
            <Reveal key={s.n} delay={i * 100}>
              <div className="h-full border border-border p-8 transition-colors hover:border-primary/60">
                <div className="flex items-baseline justify-between">
                  <s.icon className="size-6 text-primary" aria-hidden="true" />
                  <span className="font-serif text-4xl text-primary/25">{s.n}</span>
                </div>
                <h3 className="mt-7 font-serif text-2xl">{s.t}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{s.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

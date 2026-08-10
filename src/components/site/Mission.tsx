import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";

export function Mission() {
  return (
    <section id="missao" className="relative overflow-hidden border-t border-border py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 left-1/2 size-[40rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/6 blur-[130px]"
      />
      <div className="relative mx-auto max-w-4xl px-5 text-center sm:px-8">
        <Reveal>
          <Quote className="mx-auto size-8 text-primary" aria-hidden="true" />
          <p className="eyebrow mt-7">Minha missão</p>
          <blockquote className="mt-8 font-serif text-3xl leading-[1.25] text-foreground italic sm:text-4xl lg:text-[2.75rem]">
            “Acredito que o Direito é uma ferramenta de transformação, capaz de proporcionar amparo,
            justiça e tranquilidade em momentos decisivos.”
          </blockquote>
          <div className="gold-rule mx-auto mt-10 w-24" />
        </Reveal>

        <Reveal delay={100}>
          <div className="mx-auto mt-10 max-w-2xl space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Minha missão é exercer uma advocacia humanizada, estratégica e comprometida com a
              proteção dos direitos, da dignidade e da segurança de cada cliente.
            </p>
            <p>
              Mais do que soluções jurídicas, meu propósito é transmitir confiança, acolhimento e
              segurança para cada pessoa que deposita sua confiança no meu trabalho.
            </p>
          </div>
          <p className="mt-10 font-script text-4xl text-primary">Camila Silva</p>
        </Reveal>
      </div>
    </section>
  );
}

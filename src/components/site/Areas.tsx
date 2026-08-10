import { ArrowUpRight } from "lucide-react";
import previdenciario from "@/assets/area-previdenciario.jpg";
import familia from "@/assets/area-familia.jpg";
import criminal from "@/assets/area-criminal.jpg";
import { AREAS, whatsappLink } from "@/lib/site";
import { Reveal } from "./Reveal";

const IMAGES: Record<string, string> = {
  previdenciario,
  familia,
  criminal,
};

export function Areas() {
  return (
    <section id="atuacao" className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="max-w-2xl">
            <p className="eyebrow">Serviços</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Áreas de <span className="text-gradient-gold italic">atuação</span>
            </h2>
            <div className="gold-rule mt-8 w-20" />
            <p className="mt-7 text-base leading-relaxed text-muted-foreground">
              Soluções jurídicas seguras para proteger seus direitos, seu patrimônio e sua
              tranquilidade — com acompanhamento próximo em cada etapa.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {AREAS.map((area, i) => (
            <Reveal key={area.id} delay={i * 100}>
              <article className="group flex h-full flex-col border border-border bg-card transition-colors duration-500 hover:border-primary/60">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={IMAGES[area.id]}
                    alt={`Ilustração da área de ${area.title}`}
                    width={1200}
                    height={912}
                    loading="lazy"
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div
                    aria-hidden="true"
                    className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent"
                  />
                </div>

                <div className="flex flex-1 flex-col p-7">
                  <h3 className="font-serif text-2xl text-foreground">{area.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {area.description}
                  </p>
                  <ul className="mt-6 space-y-2.5">
                    {area.topics.map((t) => (
                      <li key={t} className="flex items-start gap-3 text-sm text-foreground/80">
                        <span aria-hidden="true" className="mt-2 size-1 shrink-0 bg-primary" />
                        {t}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={whatsappLink(area.message)}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-8 inline-flex items-center gap-2 self-start border-b border-primary/40 pb-1 text-xs tracking-[0.2em] text-primary uppercase transition-colors hover:border-primary"
                  >
                    Falar sobre este caso
                    <ArrowUpRight className="size-4" aria-hidden="true" />
                  </a>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

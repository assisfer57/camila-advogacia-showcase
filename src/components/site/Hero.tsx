import { MessageCircle, ArrowDownRight, MapPin } from "lucide-react";
import { IMAGES } from "@/lib/images";
import { whatsappLink } from "@/lib/site";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-32 pb-16 sm:pt-40 sm:pb-24">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-32 size-[34rem] rounded-full bg-primary/10 blur-[120px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 -left-40 size-[26rem] rounded-full bg-primary/5 blur-[110px]"
      />

      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.05fr_1fr] lg:gap-8">
        <div>
          <p className="eyebrow">Bem-vinda(o)!</p>
          <p className="mt-6 text-sm tracking-[0.3em] text-muted-foreground uppercase">Eu sou</p>
          <h1 className="mt-4 pb-4 font-script text-6xl leading-[1.1] text-gradient-gold sm:text-7xl lg:text-8xl">
            Camila Silva
          </h1>
          <p className="mt-3 font-serif text-2xl tracking-[0.18em] text-foreground uppercase sm:text-3xl">
            Advogada
          </p>

          <div className="gold-rule mt-8 w-28" />

          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Mais de <span className="text-foreground">7 anos de experiência</span> com atuação
            estratégica, técnica e humanizada nas áreas{" "}
            <span className="text-foreground">Previdenciária, Tributária, Família e Criminal</span>.
            Atendimento em todo o Brasil.
          </p>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappLink(
                "Olá, Camila! Vim pelo seu site e gostaria de conversar sobre o meu caso.",
              )}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-all hover:bg-primary-glow"
              style={{ boxShadow: "var(--shadow-gold)" }}
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Entrar em contato
            </a>
            <a
              href="#atuacao"
              className="inline-flex items-center justify-center gap-2 border border-border px-8 py-4 text-xs tracking-[0.2em] text-foreground uppercase transition-colors hover:border-primary hover:text-primary"
            >
              Áreas de atuação
              <ArrowDownRight className="size-4" aria-hidden="true" />
            </a>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="size-4 text-primary" aria-hidden="true" />
            Belo Horizonte / MG · atendimento em todo o Brasil
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div
            aria-hidden="true"
            className="absolute -top-6 -left-6 hidden size-40 border border-primary/40 sm:block"
          />
          <img
            src={IMAGES.hero}
            alt="Camila Silva, advogada, sentada em seu escritório"
            width={853}
            height={1280}
            className="relative w-full object-cover"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          />
          <img
            src={IMAGES.grid}
            alt="Camila Silva em atendimento no escritório"
            width={864}
            height={1152}
            loading="lazy"
            className="absolute -bottom-10 -left-8 hidden w-40 border-4 border-background object-cover sm:block lg:w-52 aspect-[4/3] object-[50%_0%]"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          />
          <div
            className="absolute -right-4 bottom-10 hidden bg-card/95 px-5 py-4 backdrop-blur lg:block"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <p className="font-serif text-2xl text-primary">OAB/MG</p>
            <p className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
              Advocacia regularmente inscrita
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto mt-20 max-w-7xl px-5 sm:px-8">
        <dl className="grid divide-y divide-border border border-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {[
            { k: "+7 anos", v: "de atuação na advocacia" },
            { k: "4 pós-graduações", v: "Constitucional, Tributário e Previdenciário" },
            { k: "Todo o Brasil", v: "atendimento online e personalizado" },
          ].map((s) => (
            <div key={s.k} className="px-6 py-7">
              <dt className="font-serif text-2xl text-primary">{s.k}</dt>
              <dd className="mt-1 text-sm text-muted-foreground">{s.v}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

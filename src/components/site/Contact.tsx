import { useState } from "react";
import { IMAGES } from "@/lib/images";
import { MessageCircle, Instagram, MapPin, Phone } from "lucide-react";
import { INSTAGRAM_URL, MAPS_URL, PHONE_DISPLAY, whatsappLink } from "@/lib/site";
import { AREAS } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Contact() {
  const [name, setName] = useState("");
  const [area, setArea] = useState<string>(AREAS[0].title);
  const [details, setDetails] = useState("");

  const message = `Olá, Camila! Meu nome é ${name || "..."}. Gostaria de falar sobre um caso de ${area}.${
    details ? ` Resumo: ${details}` : ""
  }`;

  return (
    <section id="contato" className="relative border-t border-border py-24 sm:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-32 -left-32 size-[28rem] rounded-full bg-primary/8 blur-[120px]"
      />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-6 sm:px-10 lg:grid-cols-2 lg:gap-20 lg:px-16">
        <div>
          <Reveal>
            <p className="eyebrow">Contato</p>
            <div className="mt-8 mb-8 flex items-center gap-6">
              <img 
                src={IMAGES.avatar} 
                alt="Camila Silva" 
                className="size-20 rounded-full object-cover border-2 border-primary"
              />
              <h2 className="text-4xl leading-tight sm:text-5xl">
                Será um prazer
                <br />
                <span className="text-gradient-gold italic">te atender!</span>
              </h2>
            </div>
            <div className="gold-rule mt-8 w-20" />
            <p className="mt-7 max-w-lg text-base leading-relaxed text-muted-foreground">
              Me conte o que está acontecendo. A primeira conversa é para entender o seu caso e
              apontar os caminhos possíveis, com sigilo e sem compromisso.
            </p>
          </Reveal>

          <Reveal delay={80}>
            <ul className="mt-10 space-y-4">
              <li>
                <a
                  href={whatsappLink("Olá, Camila! Vim pelo seu site e gostaria de conversar.")}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-border p-5 transition-colors hover:border-primary/60"
                >
                  <Phone className="size-5 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                      WhatsApp
                    </span>
                    <span className="text-foreground">{PHONE_DISPLAY}</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-border p-5 transition-colors hover:border-primary/60"
                >
                  <Instagram className="size-5 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                      Instagram
                    </span>
                    <span className="text-foreground">@silvacamilaadvocacia</span>
                  </span>
                </a>
              </li>
              <li>
                <a
                  href={MAPS_URL}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 border border-border p-5 transition-colors hover:border-primary/60"
                >
                  <MapPin className="size-5 text-primary" aria-hidden="true" />
                  <span>
                    <span className="block text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase">
                      Google Maps
                    </span>
                    <span className="text-foreground">Camila Silva · CS Advocacia</span>
                  </span>
                </a>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal delay={140}>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              window.open(whatsappLink(message), "_blank", "noopener");
            }}
            className="border border-border bg-card p-8 sm:p-10"
            style={{ boxShadow: "var(--shadow-elegant)" }}
          >
            <p className="font-serif text-2xl">Iniciar conversa pelo WhatsApp</p>
            <p className="mt-2 text-sm text-muted-foreground">
              Preencho a mensagem para você — basta enviar.
            </p>

            <div className="mt-8 space-y-6">
              <div>
                <label
                  htmlFor="nome"
                  className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase"
                >
                  Seu nome
                </label>
                <input
                  id="nome"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Como posso te chamar?"
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary"
                />
              </div>

              <div>
                <label
                  htmlFor="area"
                  className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase"
                >
                  Área do caso
                </label>
                <select
                  id="area"
                  value={area}
                  onChange={(e) => setArea(e.target.value)}
                  className="mt-2 w-full border border-input bg-background px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
                >
                  {AREAS.map((a) => (
                    <option key={a.id} value={a.title}>
                      {a.title}
                    </option>
                  ))}
                  <option value="Outro assunto">Outro assunto</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="detalhes"
                  className="text-[0.65rem] tracking-[0.24em] text-muted-foreground uppercase"
                >
                  Resumo do caso (opcional)
                </label>
                <textarea
                  id="detalhes"
                  rows={4}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  placeholder="Conte brevemente o que está acontecendo."
                  className="mt-2 w-full resize-none border border-input bg-background px-4 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground/70 focus:border-primary"
                />
              </div>
            </div>

            <button
              type="submit"
              className="mt-8 inline-flex w-full items-center justify-center gap-2.5 bg-primary px-8 py-4 text-xs tracking-[0.2em] text-primary-foreground uppercase transition-colors hover:bg-primary-glow"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Enviar pelo WhatsApp
            </button>
            <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
              Ao enviar, o WhatsApp abre com a mensagem pronta. Nenhum dado é armazenado neste site.
            </p>
          </form>
        </Reveal>
      </div>
    </section>
  );
}

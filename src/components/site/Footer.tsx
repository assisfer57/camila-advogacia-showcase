import { Instagram, MessageCircle } from "lucide-react";
import { INSTAGRAM_URL, NAV_LINKS, PHONE_DISPLAY, whatsappLink } from "@/lib/site";

export function Footer() {
  return (
    <footer className="border-t border-border py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <p className="font-script text-4xl text-primary">Camila Silva</p>
            <p className="mt-1 text-[0.65rem] tracking-[0.42em] text-muted-foreground uppercase">
              Advocacia
            </p>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              Advocacia previdenciária, de família, criminal e tributária com atendimento
              humanizado em todo o Brasil.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <a
              href={whatsappLink("Olá, Camila! Vim pelo seu site.")}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              {PHONE_DISPLAY}
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2.5 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <Instagram className="size-4" aria-hidden="true" />
              @silvacamilaadvocacia
            </a>
          </div>
        </div>

        <div className="gold-rule mt-12" />

        <div className="mt-8 flex flex-col gap-4 text-xs leading-relaxed text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-2xl">
            Este site tem caráter meramente informativo, em conformidade com o Código de Ética e
            Disciplina da OAB e o Provimento nº 205/2021. Não constitui oferta de serviços,
            captação de clientela nem promessa de resultado.
          </p>
          <p className="shrink-0">© 2026 Camila Silva · Todos os direitos reservados</p>
        </div>
      </div>
    </footer>
  );
}

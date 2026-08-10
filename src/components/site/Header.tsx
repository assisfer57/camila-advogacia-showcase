import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, whatsappLink } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "border-b border-border bg-background/90 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 sm:px-8">
        <a href="#top" className="group flex flex-col leading-none">
          <span className="font-script text-3xl text-primary transition-opacity group-hover:opacity-80">
            Camila Silva
          </span>
          <span className="mt-0.5 text-[0.6rem] tracking-[0.42em] text-muted-foreground uppercase">
            Advocacia
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm text-foreground/80 transition-colors after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-primary after:transition-all after:duration-300 hover:text-primary hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("Olá, Camila! Vim pelo seu site e gostaria de falar sobre um caso.")}
            target="_blank"
            rel="noreferrer"
            className="hidden items-center gap-2 border border-primary px-5 py-2.5 text-xs tracking-[0.18em] text-primary uppercase transition-colors hover:bg-primary hover:text-primary-foreground sm:inline-flex"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Falar no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="p-2 text-primary lg:hidden"
          >
            {open ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-background/98 backdrop-blur-xl lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col px-5 py-4 sm:px-8">
            {NAV_LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3.5 text-sm tracking-wide text-foreground/85 last:border-0 hover:text-primary"
              >
                {l.label}
              </a>
            ))}
            <a
              href={whatsappLink("Olá, Camila! Vim pelo seu site e gostaria de falar sobre um caso.")}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-flex items-center justify-center gap-2 bg-primary px-5 py-3 text-xs tracking-[0.18em] text-primary-foreground uppercase"
            >
              <MessageCircle className="size-4" aria-hidden="true" />
              Falar no WhatsApp
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}

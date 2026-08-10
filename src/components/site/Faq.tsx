import { useState } from "react";
import { Plus } from "lucide-react";
import { FAQ } from "@/lib/site";
import { Reveal } from "./Reveal";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="border-t border-border py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <Reveal>
          <div>
            <p className="eyebrow">Dúvidas frequentes</p>
            <h2 className="mt-5 text-4xl leading-tight sm:text-5xl">
              Antes de <span className="text-gradient-gold italic">começar</span>
            </h2>
            <div className="gold-rule mt-8 w-20" />
          </div>
        </Reveal>

        <Reveal delay={80}>
          <div className="border-t border-border">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <div key={item.q} className="border-b border-border">
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-start justify-between gap-6 py-6 text-left"
                  >
                    <span
                      className={`font-serif text-xl transition-colors ${isOpen ? "text-primary" : "text-foreground"}`}
                    >
                      {item.q}
                    </span>
                    <Plus
                      aria-hidden="true"
                      className={`mt-1 size-5 shrink-0 text-primary transition-transform duration-300 ${isOpen ? "rotate-45" : ""}`}
                    />
                  </button>
                  <div
                    className={`grid transition-all duration-500 ${isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}`}
                  >
                    <p className="overflow-hidden pr-10 text-sm leading-relaxed text-muted-foreground">
                      <span className="block pb-6">{item.a}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

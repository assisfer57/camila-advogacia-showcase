import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/lib/site";

export function WhatsAppFab() {
  return (
    <a
      href={whatsappLink("Olá, Camila! Vim pelo seu site e gostaria de conversar sobre um caso.")}
      target="_blank"
      rel="noreferrer"
      aria-label="Falar com Camila Silva no WhatsApp"
      className="fixed right-5 bottom-5 z-50 inline-flex size-14 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105"
      style={{ boxShadow: "var(--shadow-gold)" }}
    >
      <MessageCircle className="size-6" aria-hidden="true" />
    </a>
  );
}

import { MessageCircle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Logo, links } from "./Navbar";
import { business } from "./business";

export function Footer() {
  return (
    <footer className="border-t border-border px-5 py-12 lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 md:flex-row">
        <Logo />
        <nav className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
          {links.map((l) => (
            <Link key={l.to} to={l.to} className="hover:text-foreground">
              {l.label}
            </Link>
          ))}
        </nav>
        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} {business.fullName}
        </p>
      </div>
    </footer>
  );
}

export function WhatsAppButton() {
  return (
    <a
      href={business.whatsappHref}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center gap-2 rounded-full bg-sage px-5 py-3.5 font-semibold text-on-image shadow-soft transition-transform hover:-translate-y-1"
    >
      <MessageCircle className="size-5" />
      <span className="hidden sm:inline">Chat on WhatsApp</span>
    </a>
  );
}

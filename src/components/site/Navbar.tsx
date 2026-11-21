import { useEffect, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { business } from "./business";

export const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/services", label: "Services" },
  { to: "/how-we-work", label: "How we work" },
  { to: "/projects", label: "Projects" },
  { to: "/reviews", label: "Reviews" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="relative grid size-10 place-items-center overflow-hidden rounded-xl bg-gradient-paint shadow-paint">
        <span className="font-display text-lg font-extrabold text-primary-foreground">S</span>
        <span className="absolute -bottom-1 -right-1 size-4 rounded-full bg-sage" />
      </span>
      <span className="leading-none">
        <span
          className={cn(
            "block font-display text-xl font-extrabold tracking-tight",
            light ? "text-on-image" : "text-foreground",
          )}
        >
          {business.name}
        </span>
        <span
          className={cn(
            "block text-[10px] font-semibold uppercase tracking-[0.2em]",
            light ? "text-on-image/70" : "text-muted-foreground",
          )}
        >
          Painting & Construction
        </span>
      </span>
    </Link>
  );
}

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useLocation({ select: (l) => l.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = scrolled || open;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        solid ? "border-b border-border/60 bg-background/90 py-3 backdrop-blur-xl" : "py-5",
      )}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 lg:px-8">
        <Logo light={!solid} />
        <nav className="hidden items-center gap-7 lg:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              className={cn(
                "relative text-sm font-medium transition-colors hover:text-primary",
                solid ? "text-foreground/80" : "text-on-image/85",
              )}
              activeProps={{
                className:
                  "!text-primary after:absolute after:-bottom-1.5 after:left-0 after:h-0.5 after:w-full after:rounded-full after:bg-primary",
              }}
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <div className="hidden items-center gap-3 lg:flex">
          <a
            href={business.phoneHref}
            className={cn(
              "flex items-center gap-2 text-sm font-semibold",
              solid ? "text-foreground" : "text-on-image",
            )}
          >
            <Phone className="size-4 text-primary" /> {business.phone}
          </a>
          <Button asChild variant="hero" size="lg">
            <Link to="/contact">Free site visit</Link>
          </Button>
        </div>
        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className={cn("lg:hidden", solid ? "text-foreground" : "text-on-image")}
        >
          {open ? <X className="size-7" /> : <Menu className="size-7" />}
        </button>
      </div>
      {open && (
        <div className="mx-5 mt-3 rounded-2xl border border-border bg-card p-5 shadow-soft lg:hidden">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              activeOptions={{ exact: true }}
              activeProps={{ className: "!text-primary" }}
              className="block border-b border-border/60 py-3 font-medium last:border-0"
            >
              {l.label}
            </Link>
          ))}
          <Button asChild variant="hero" size="lg" className="mt-4 w-full">
            <Link to="/contact">Book free site visit</Link>
          </Button>
        </div>
      )}
    </header>
  );
}

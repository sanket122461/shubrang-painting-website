import { Link } from "@tanstack/react-router";
import { ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { business } from "./business";

export function CtaBand({ title = "Ready to give your building a fresh new look?" }: { title?: string }) {
  return (
    <section className="px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-paint px-8 py-14 text-primary-foreground shadow-paint-lg sm:px-14">
        <div className="absolute -right-16 -top-16 size-64 rounded-full bg-on-image/15 blur-2xl" />
        <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-extrabold leading-tight sm:text-4xl">{title}</h2>
            <p className="mt-3 text-primary-foreground/85">
              Free site inspection, fixed quote in 48 hours, no obligation.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button asChild variant="ink" size="xl">
              <Link to="/contact">
                Book free site visit <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <a href={business.phoneHref}>
                <Phone className="size-5" /> Call now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

import { ArrowRight, BadgeCheck, ShieldCheck, Star } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import heroImg from "@/assets/hero-society.jpg";

export function Hero() {
  return (
    <section className="relative isolate flex min-h-[100svh] items-end overflow-hidden">
      <img
        src={heroImg}
        alt="Freshly repainted housing society towers in warm cream, terracotta and sage"
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-36 lg:px-8 lg:pb-24">
        <div className="max-w-3xl">
          <div className="animate-rise inline-flex items-center gap-2 rounded-full border border-on-image/25 bg-on-image/10 px-4 py-1.5 text-sm text-on-image backdrop-blur-md">
            <span className="flex">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-3.5 fill-primary-glow text-primary-glow" />
              ))}
            </span>
            Trusted by 350+ housing societies
          </div>

          <h1
            className="animate-rise mt-6 text-5xl font-extrabold leading-[1.02] text-on-image sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.1s" }}
          >
            Your society, <br />
            <span className="brush-underline relative z-0">beautifully</span> repainted.
          </h1>

          <p
            className="animate-rise mt-6 max-w-xl text-lg leading-relaxed text-on-image/85"
            style={{ animationDelay: "0.2s" }}
          >
            Exterior, interior and waterproofing work for apartments, societies and commercial
            buildings — done on time, on budget, with zero mess for your residents.
          </p>

          <div
            className="animate-rise mt-9 flex flex-wrap gap-3"
            style={{ animationDelay: "0.3s" }}
          >
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">
                Get a free quote <ArrowRight className="size-5" />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/projects">See our work</Link>
            </Button>
          </div>

          <div
            className="animate-rise mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-on-image/85"
            style={{ animationDelay: "0.4s" }}
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="size-5 text-primary-glow" /> Up to 7-year paint warranty
            </span>
            <span className="flex items-center gap-2">
              <BadgeCheck className="size-5 text-primary-glow" /> Insured, trained crew
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

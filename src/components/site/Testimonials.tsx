import { Link } from "@tanstack/react-router";
import { ArrowRight, Quote, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

type Review = { name: string; role: string; text: string; service: string };

const reviews: Review[] = [
  {
    name: "Rajesh Kulkarni",
    role: "Secretary, Green Valley CHS",
    service: "Exterior painting",
    text: "Our 9 buildings were repainted in just 7 weeks. The team was polite, residents had zero complaints and the society looks brand new. Best decision our committee made.",
  },
  {
    name: "Priya Deshmukh",
    role: "Chairperson, Sunshine Heights",
    service: "Waterproofing",
    text: "The terrace leakage we suffered for 4 monsoons is finally gone. They explained everything clearly and the quote never changed. Truly honest people.",
  },
  {
    name: "Anil Mehta",
    role: "Facility Head, Vertex Business Park",
    service: "Commercial",
    text: "Professional from the first site visit to handover. Safety standards were excellent and they worked nights so our offices ran normally.",
  },
  {
    name: "Sneha Joshi",
    role: "Resident, Orchid Enclave",
    service: "Exterior painting",
    text: "I was worried about dust and paint on my balcony, but they covered everything and cleaned daily. Our 18-floor tower looks like a new launch.",
  },
  {
    name: "Vikram Patil",
    role: "Treasurer, Shanti Niketan CHS",
    service: "Structural repair",
    text: "Clear itemised bill that our members approved in one AGM. Cracks repaired properly before painting — not just covered up.",
  },
  {
    name: "Meera Iyer",
    role: "Flat owner, Wakad",
    service: "Interior painting",
    text: "3BHK painted in 5 days with almost no smell. They even helped choose colours for the kids' room. Very happy!",
  },
  {
    name: "Suresh Nair",
    role: "Chairman, Skyline Towers",
    service: "Waterproofing",
    text: "Six terraces waterproofed before monsoon with a 10-year warranty certificate. Not a single drop since.",
  },
  {
    name: "Kavita Shah",
    role: "Secretary, Lotus Gardens",
    service: "Common areas",
    text: "Our lobby and staircases look like a hotel now. Visitors always ask who did the texture wall.",
  },
  {
    name: "Arjun Rao",
    role: "Bungalow owner, Aundh",
    service: "Full home",
    text: "Inside-out painting plus gate and grill polish. Fair price, finished a day early. Highly recommended.",
  },
];

function ReviewCard({ r, delay = 0 }: { r: Review; delay?: number }) {
  return (
    <figure
      className="reveal relative flex flex-col rounded-3xl border border-border bg-card p-8 shadow-soft transition-transform duration-300 hover:-translate-y-1"
      style={{ transitionDelay: `${delay}s` }}
    >
      <div className="flex items-center justify-between">
        <span className="flex">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star key={i} className="size-4 fill-primary text-primary" />
          ))}
        </span>
        <span className="rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
          {r.service}
        </span>
      </div>
      <Quote className="mt-5 size-8 text-primary/25" />
      <blockquote className="mt-3 flex-1 text-lg leading-relaxed">“{r.text}”</blockquote>
      <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-6">
        <span className="grid size-12 place-items-center rounded-full bg-gradient-paint font-display font-bold text-primary-foreground">
          {r.name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </span>
        <span>
          <span className="block font-display font-bold">{r.name}</span>
          <span className="block text-sm text-muted-foreground">{r.role}</span>
        </span>
      </figcaption>
    </figure>
  );
}

/** Home page: three reviews and a link to the reviews page. */
export function TestimonialsPreview() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Happy clients
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Committees love working with us.
            </h2>
          </div>
          <Button asChild variant="ink" size="xl">
            <Link to="/reviews">
              Read all reviews <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {reviews.slice(0, 3).map((r, i) => (
            <ReviewCard key={r.name} r={r} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}

const breakdown = [
  { stars: 5, pct: 92 },
  { stars: 4, pct: 6 },
  { stars: 3, pct: 1 },
  { stars: 2, pct: 1 },
  { stars: 1, pct: 0 },
];

/** Reviews page: rating summary plus every review. */
export function ReviewsFull() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal grid gap-10 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12 lg:grid-cols-[auto_1fr_auto] lg:items-center lg:gap-16">
          <div className="text-center lg:text-left">
            <div className="font-display text-7xl font-extrabold text-gradient-paint">4.9</div>
            <div className="mt-2 flex justify-center lg:justify-start">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="size-5 fill-primary text-primary" />
              ))}
            </div>
            <div className="mt-2 text-sm text-muted-foreground">420+ Google reviews</div>
          </div>
          <div className="space-y-2.5">
            {breakdown.map((b) => (
              <div key={b.stars} className="flex items-center gap-3 text-sm">
                <span className="w-6 font-semibold">{b.stars}★</span>
                <div className="h-2.5 flex-1 overflow-hidden rounded-full bg-muted">
                  <div className="h-full rounded-full bg-gradient-paint" style={{ width: `${b.pct}%` }} />
                </div>
                <span className="w-10 text-right text-muted-foreground">{b.pct}%</span>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 gap-6 text-center lg:grid-cols-1">
            <div>
              <div className="font-display text-3xl font-extrabold">98%</div>
              <div className="text-sm text-muted-foreground">would refer us</div>
            </div>
            <div>
              <div className="font-display text-3xl font-extrabold">60%</div>
              <div className="text-sm text-muted-foreground">repeat societies</div>
            </div>
          </div>
        </div>

        <div className="mt-14 columns-1 gap-6 space-y-6 md:columns-2 lg:columns-3">
          {reviews.map((r, i) => (
            <div key={r.name} className="break-inside-avoid">
              <ReviewCard r={r} delay={(i % 3) * 0.08} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

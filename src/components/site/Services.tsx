import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Building2,
  Check,
  Droplets,
  Hammer,
  Home,
  Paintbrush,
  Sparkles,
} from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import exteriorImg from "@/assets/exterior-painters.jpg";
import interiorImg from "@/assets/interior-painting.jpg";
import waterImg from "@/assets/waterproofing.jpg";

const featured = [
  {
    img: exteriorImg,
    w: 1024,
    h: 1280,
    tag: "Most booked",
    title: "Society & building exterior painting",
    text: "Weather-proof coatings for high-rise towers using gondolas and certified rope-access crews.",
    includes: [
      "Pressure wash & fungus treatment",
      "Crack filling and plaster repair",
      "1 primer + 2 coats premium exterior emulsion",
      "Gondola / rope access for high-rise towers",
    ],
    from: "₹18 / sq. ft.",
  },
  {
    img: interiorImg,
    w: 1280,
    h: 960,
    tag: "For flats & offices",
    title: "Interior painting",
    text: "Smooth, odour-free finishes with furniture covered and rooms cleaned before we leave.",
    includes: [
      "Furniture moving & full floor covering",
      "Putty, sanding and wall levelling",
      "Low-odour, washable emulsions",
      "Same-day room clean-up",
    ],
    from: "₹14 / sq. ft.",
  },
  {
    img: waterImg,
    w: 1280,
    h: 960,
    tag: "Stop leaks for good",
    title: "Terrace & wall waterproofing",
    text: "Seepage diagnosis, crack filling and elastomeric coats that keep monsoon damage away.",
    includes: [
      "Moisture-meter leak diagnosis",
      "Joint & crack sealing with PU sealant",
      "Elastomeric / cementitious membrane",
      "Pre-monsoon water ponding test",
    ],
    from: "₹45 / sq. ft.",
  },
];

const more = [
  { icon: Building2, title: "Common area makeover", text: "Lobbies, staircases, parking & compound walls." },
  { icon: Hammer, title: "Structural repairs", text: "Plaster, crack repair, rusted rebar treatment." },
  { icon: Sparkles, title: "Texture & designer walls", text: "Royale play, stencils, feature walls." },
  { icon: Home, title: "Bungalows & row houses", text: "Complete inside-out painting packages." },
  { icon: Paintbrush, title: "Metal & wood polish", text: "Grills, gates, doors and railings." },
  { icon: Droplets, title: "Tank & basement sealing", text: "Water tank and basement leak proofing." },
];

/** Home page: three highlight cards with a link to the full services page. */
export function ServicesPreview() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <div className="max-w-2xl">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              What we do
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Every wall, every floor, every tower — handled.
            </h2>
          </div>
          <Button asChild variant="ink" size="xl">
            <Link to="/services">
              All services <ArrowRight className="size-5" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {featured.map((s, i) => (
            <article
              key={s.title}
              className="reveal group relative isolate flex min-h-[460px] flex-col justify-end overflow-hidden rounded-3xl shadow-soft"
              style={{ transitionDelay: `${i * 0.1}s` }}
            >
              <img
                src={s.img}
                alt={s.title}
                width={s.w}
                height={s.h}
                loading="lazy"
                className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-fade-up" />
              <div className="p-7">
                <span className="inline-block rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
                  {s.tag}
                </span>
                <h3 className="mt-4 text-2xl font-bold text-on-image">{s.title}</h3>
                <p className="mt-2 text-on-image/80">{s.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Services page: detailed rows with what's included and starting price. */
export function ServicesFull() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl space-y-24">
        {featured.map((s, i) => (
          <article
            key={s.title}
            className="reveal grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
          >
            <div className={i % 2 ? "lg:order-2" : ""}>
              <img
                src={s.img}
                alt={s.title}
                width={s.w}
                height={s.h}
                loading="lazy"
                className="aspect-[4/3] w-full rounded-3xl object-cover shadow-soft"
              />
            </div>
            <div>
              <span className="inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                {s.tag}
              </span>
              <h2 className="mt-4 text-3xl font-extrabold leading-tight sm:text-4xl">{s.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{s.text}</p>
              <ul className="mt-6 space-y-3">
                {s.includes.map((x) => (
                  <li key={x} className="flex items-start gap-3">
                    <span className="mt-0.5 grid size-6 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                      <Check className="size-3.5" />
                    </span>
                    {x}
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap items-center gap-5">
                <div>
                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground">
                    Starting from
                  </div>
                  <div className="font-display text-3xl font-extrabold text-gradient-paint">
                    {s.from}
                  </div>
                </div>
                <Button asChild variant="hero" size="lg">
                  <Link to="/contact">Get exact quote</Link>
                </Button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div className="mx-auto mt-28 max-w-7xl">
        <h2 className="reveal text-3xl font-extrabold sm:text-4xl">More things we take care of</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {more.map((m, i) => (
            <div
              key={m.title}
              className="reveal group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:shadow-soft"
              style={{ transitionDelay: `${(i % 3) * 0.08}s` }}
            >
              <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground transition-colors group-hover:bg-gradient-paint group-hover:text-primary-foreground">
                <m.icon className="size-6" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{m.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{m.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqs = [
  {
    q: "Do residents need to vacate during exterior painting?",
    a: "No. We work floor by floor, give 2 days' notice before reaching each wing and cover windows, balconies and parked cars.",
  },
  {
    q: "Which paint brands do you use?",
    a: "Only branded paints — Asian Paints, Berger, Dulux, Nerolac and Dr. Fixit for waterproofing. Sealed cans are opened in front of your committee.",
  },
  {
    q: "Is the quote fixed or can it change later?",
    a: "Our itemised quote is fixed for the agreed scope. Any extra work is shown to you in writing and done only after your approval.",
  },
  {
    q: "What warranty do you provide?",
    a: "Up to 7 years on exterior painting and 5–10 years on waterproofing, depending on the system chosen, with a written certificate.",
  },
  {
    q: "Can you work during the monsoon?",
    a: "Interior work continues year-round. Exterior and terrace work is planned for dry months; we book pre-monsoon slots early.",
  },
];

export function ServiceFaq() {
  return (
    <section className="bg-secondary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1fr_1.4fr]">
        <div className="reveal">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Questions
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight">
            Committees often ask us…
          </h2>
        </div>
        <Accordion type="single" collapsible defaultValue="0" className="reveal">
          {faqs.map((f, i) => (
            <AccordionItem key={f.q} value={String(i)} className="border-border">
              <AccordionTrigger className="py-5 text-left font-display text-lg font-bold hover:no-underline">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">{f.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}

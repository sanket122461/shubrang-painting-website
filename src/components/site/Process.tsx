import {
  CalendarCheck,
  ClipboardList,
  HardHat,
  Palette,
  PartyPopper,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";

const steps = [
  {
    icon: CalendarCheck,
    title: "Free site visit",
    text: "Our engineer inspects walls, measures area and checks for seepage — at no cost.",
  },
  {
    icon: ClipboardList,
    title: "Clear, fixed quote",
    text: "Itemised estimate with paint brand, coats and timeline. No hidden charges, ever.",
  },
  {
    icon: Palette,
    title: "Colour & sample patch",
    text: "We paint sample patches so your committee chooses with confidence.",
  },
  {
    icon: PartyPopper,
    title: "Paint, clean, handover",
    text: "Daily progress updates, a spotless site and a written warranty on handover.",
  },
];

export function Process() {
  return (
    <section className="bg-ink px-5 py-24 text-ink-foreground lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            How we work
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Simple for your committee. Peaceful for your residents.
          </h2>
        </div>

        <div className="relative mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-ink-foreground/15 lg:block" />
          {steps.map((s, i) => (
            <div
              key={s.title}
              className="reveal relative"
              style={{ transitionDelay: `${i * 0.12}s` }}
            >
              <div className="relative grid size-16 place-items-center rounded-2xl bg-gradient-paint shadow-paint">
                <s.icon className="size-7 text-primary-foreground" />
                <span className="absolute -right-2 -top-2 grid size-7 place-items-center rounded-full bg-ink-foreground font-display text-sm font-bold text-ink">
                  {i + 1}
                </span>
              </div>
              <h3 className="mt-6 text-xl font-bold">{s.title}</h3>
              <p className="mt-2 leading-relaxed text-ink-foreground/70">{s.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const timelines = [
  { size: "Single building (up to 5 floors)", area: "Up to 25,000 sq. ft.", time: "2 – 3 weeks", crew: "8 – 10 painters" },
  { size: "Mid-size society (3 – 6 buildings)", area: "60,000 – 1.5 lakh sq. ft.", time: "5 – 8 weeks", crew: "20 – 30 painters" },
  { size: "Large township (10+ towers)", area: "3 lakh+ sq. ft.", time: "10 – 16 weeks", crew: "50+ painters, 6 gondolas" },
  { size: "Terrace waterproofing", area: "Per building terrace", time: "4 – 6 days", crew: "4 – 6 applicators" },
];

export function Timeline() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Typical timelines
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            How long will it take?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Realistic estimates based on 350+ completed projects. Your exact schedule is fixed in the
            quote.
          </p>
        </div>
        <div className="reveal mt-12 overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
          <div className="hidden grid-cols-4 gap-4 bg-muted px-8 py-4 text-xs font-semibold uppercase tracking-[0.15em] text-muted-foreground md:grid">
            <span>Project size</span>
            <span>Area</span>
            <span>Duration</span>
            <span>Team on site</span>
          </div>
          {timelines.map((t) => (
            <div
              key={t.size}
              className="grid gap-1 border-t border-border px-8 py-6 first:border-0 md:grid-cols-4 md:gap-4 md:first:border-t"
            >
              <span className="font-display text-lg font-bold">{t.size}</span>
              <span className="text-muted-foreground">{t.area}</span>
              <span className="font-display text-lg font-bold text-primary">{t.time}</span>
              <span className="text-muted-foreground">{t.crew}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const promises = [
  { icon: HardHat, title: "Full safety gear", text: "Helmets, double-lanyard harnesses and daily equipment checks." },
  { icon: ShieldCheck, title: "Insured workforce", text: "Every worker covered under accident and third-party insurance." },
  { icon: Users, title: "Resident notices", text: "Wing-wise schedule shared on your society WhatsApp group." },
  { icon: Sparkles, title: "Daily clean-up", text: "Compound, parking and stairs cleaned at the end of each day." },
];

export function SafetyPromise() {
  return (
    <section className="bg-secondary px-5 py-24 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <h2 className="reveal max-w-xl text-4xl font-extrabold leading-tight">
          Our promise while we're on your site
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {promises.map((p, i) => (
            <div
              key={p.title}
              className="reveal rounded-3xl bg-card p-7 shadow-soft"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="grid size-12 place-items-center rounded-xl bg-gradient-paint text-primary-foreground">
                <p.icon className="size-6" />
              </span>
              <h3 className="mt-5 text-lg font-bold">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

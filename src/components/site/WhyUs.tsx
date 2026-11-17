import { CheckCircle2, Clock, HardHat, IndianRupee, ShieldCheck, Users } from "lucide-react";
import painters from "@/assets/exterior-painters.jpg";

const reasons = [
  { icon: IndianRupee, title: "Transparent pricing", text: "Fixed, itemised quotes that your committee can easily approve." },
  { icon: Clock, title: "On-time completion", text: "Committed timelines with weekly progress reports and photos." },
  { icon: HardHat, title: "Safety first", text: "Harnesses, insured workers and certified gondola operators." },
  { icon: Users, title: "Resident-friendly", text: "Advance notices, covered windows, cars and daily clean-up." },
];

export function WhyUs() {
  return (
    <section className="bg-secondary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        <div className="reveal relative">
          <img
            src={painters}
            alt="Our trained painting crew working safely on a high-rise"
            width={1024}
            height={1280}
            loading="lazy"
            className="aspect-[4/5] w-full rounded-3xl object-cover shadow-soft"
          />
          <div className="animate-float-soft absolute -bottom-6 -right-2 max-w-[240px] rounded-2xl border border-border bg-card p-5 shadow-soft sm:-right-6">
            <ShieldCheck className="size-8 text-primary" />
            <p className="mt-3 font-display text-lg font-bold leading-tight">
              Written warranty up to 7 years
            </p>
            <p className="mt-1 text-sm text-muted-foreground">On every exterior project.</p>
          </div>
        </div>

        <div className="reveal">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Why societies choose us
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            We treat your building like our own home.
          </h2>
          <p className="mt-5 text-lg text-muted-foreground">
            For over 18 years, managing committees have trusted us because we show up, communicate
            clearly and leave every compound cleaner than we found it.
          </p>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {reasons.map((r) => (
              <div key={r.title} className="flex gap-4">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-card text-primary shadow-soft">
                  <r.icon className="size-5" />
                </span>
                <div>
                  <h3 className="font-display font-bold">{r.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{r.text}</p>
                </div>
              </div>
            ))}
          </div>

          <ul className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm font-medium">
            {["Free colour consultation", "Premium branded paints only", "Post-work inspection"].map(
              (t) => (
                <li key={t} className="flex items-center gap-2">
                  <CheckCircle2 className="size-4 text-sage" /> {t}
                </li>
              ),
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

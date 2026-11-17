import { useState, type FormEvent } from "react";
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import { business } from "./business";

const propertyTypes = ["Housing society", "Apartment / flat", "Commercial building", "Bungalow"];
const services = ["Exterior painting", "Interior painting", "Waterproofing", "Repairs"];

export function Contact() {
  const [property, setProperty] = useState("Housing society");
  const [chosen, setChosen] = useState<string[]>(["Exterior painting"]);
  const [sending, setSending] = useState(false);

  const toggle = (s: string) =>
    setChosen((c) => (c.includes(s) ? c.filter((x) => x !== s) : [...c, s]));

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").replace(/\D/g, "");
    if (name.length < 2) {
      toast.error("Please enter your name.");
      return;
    }
    if (phone.length < 10) {
      toast.error("Please enter a valid 10-digit phone number.");
      return;
    }
    if (chosen.length === 0) {
      toast.error("Pick at least one service.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      form.reset();
      toast.success(`Thank you, ${name.split(" ")[0]}!`, {
        description: "Our site engineer will call you within 24 hours to fix your free visit.",
      });
    }, 700);
  };

  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-ink text-ink-foreground shadow-soft lg:grid-cols-5">
        <div className="relative p-8 sm:p-12 lg:col-span-2">
          <div className="absolute -left-20 -top-20 size-72 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
              Free site visit
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight">
              Let's give your building a fresh new look.
            </h2>
            <p className="mt-4 text-ink-foreground/70">
              Share a few details and get a no-obligation inspection and quote within 48 hours.
            </p>

            <ul className="mt-10 space-y-5">
              {[
                { icon: Phone, label: business.phone, href: business.phoneHref },
                { icon: Mail, label: business.email, href: `mailto:${business.email}` },
                { icon: MapPin, label: business.address },
                { icon: Clock, label: business.hours },
              ].map((c) => (
                <li key={c.label} className="flex items-start gap-4">
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink-foreground/10 text-primary-glow">
                    <c.icon className="size-5" />
                  </span>
                  {c.href ? (
                    <a href={c.href} className="pt-2 hover:text-primary-glow">
                      {c.label}
                    </a>
                  ) : (
                    <span className="pt-2 text-ink-foreground/85">{c.label}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <form
          onSubmit={onSubmit}
          className="bg-card p-8 text-card-foreground sm:p-12 lg:col-span-3"
          noValidate
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Your name</Label>
              <Input id="name" name="name" placeholder="e.g. Rajesh Kulkarni" className="h-12" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="phone">Phone number</Label>
              <Input
                id="phone"
                name="phone"
                type="tel"
                inputMode="tel"
                placeholder="98765 43210"
                className="h-12"
              />
            </div>
            <div className="space-y-2 sm:col-span-2">
              <Label htmlFor="society">Society / building name & area</Label>
              <Input
                id="society"
                name="society"
                placeholder="e.g. Green Valley CHS, Kothrud"
                className="h-12"
              />
            </div>
          </div>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium">Property type</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {propertyTypes.map((p) => (
                <button
                  type="button"
                  key={p}
                  onClick={() => setProperty(p)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    property === p
                      ? "border-foreground bg-foreground text-background"
                      : "border-border hover:border-foreground/40",
                  )}
                >
                  {p}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="text-sm font-medium">Services needed</legend>
            <div className="mt-3 flex flex-wrap gap-2">
              {services.map((s) => (
                <button
                  type="button"
                  key={s}
                  onClick={() => toggle(s)}
                  aria-pressed={chosen.includes(s)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                    chosen.includes(s)
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border hover:border-primary/50",
                  )}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 space-y-2">
            <Label htmlFor="message">Anything else? (optional)</Label>
            <Textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Number of buildings, floors, leakage issues, preferred timeline…"
            />
          </div>

          <Button type="submit" variant="hero" size="xl" className="mt-8 w-full" disabled={sending}>
            {sending ? "Sending…" : "Book my free site visit"} <Send className="size-5" />
          </Button>
          <p className="mt-3 text-center text-xs text-muted-foreground">
            No spam. We only call to schedule your visit.
          </p>
        </form>
      </div>
    </section>
  );
}

const offices = [
  { city: "Pune (Head office)", addr: "Office 204, Sai Plaza, Baner Road, Pune 411045" },
  { city: "Mumbai", addr: "Unit 12, Shree Complex, LBS Marg, Thane West 400601" },
  { city: "Nashik", addr: "2nd floor, Rajhans Arcade, College Road, Nashik 422005" },
];

export function Offices() {
  return (
    <section className="px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="reveal overflow-hidden rounded-3xl border border-border shadow-soft">
          <iframe
            title="Office location map"
            src="https://www.google.com/maps?q=Baner%20Road%20Pune&output=embed"
            className="h-[380px] w-full lg:h-full"
            loading="lazy"
          />
        </div>
        <div className="space-y-4">
          {offices.map((o, i) => (
            <div
              key={o.city}
              className="reveal flex gap-4 rounded-3xl border border-border bg-card p-6"
              style={{ transitionDelay: `${i * 0.08}s` }}
            >
              <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent text-accent-foreground">
                <MapPin className="size-5" />
              </span>
              <div>
                <h3 className="font-display text-lg font-bold">{o.city}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{o.addr}</p>
              </div>
            </div>
          ))}
          <div className="reveal rounded-3xl bg-ink p-6 text-ink-foreground">
            <h3 className="font-display text-lg font-bold">Need it urgent?</h3>
            <p className="mt-1 text-sm text-ink-foreground/70">
              Leakage emergency? Call us and an engineer can visit the same day.
            </p>
            <a href={business.phoneHref} className="mt-3 inline-flex items-center gap-2 font-semibold text-primary-glow">
              <Phone className="size-4" /> {business.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

import {
  Award,
  BadgeCheck,
  Building2,
  CheckCircle2,
  ClipboardCheck,
  Clock,
  GemIcon,
  HardHat,
  HeartHandshake,
  MapPin,
  PaintBucket,
  Quote,
  ShieldCheck,
  Sparkles,
  Star,
  Trophy,
  UserCheck,
  Wrench,
} from "lucide-react";
import painters from "@/assets/exterior-painters.jpg";
import lobby from "@/assets/society-lobby.jpg";
import afterBuilding from "@/assets/after-building.jpg";
import { business } from "./business";

const values = [
  {
    icon: Wrench,
    title: "Engineering-First Approach",
    text: "We never just paint over problems. Every project begins with substrate moisture testing, concrete sound checks, and elastomeric crack repair before a single drop of paint touches the surface.",
  },
  {
    icon: HardHat,
    title: "Rigorous Safety Standards",
    text: "High-rise painting demands zero compromises. Our crews use dual-lanyard safety harnesses, tested motorized suspended platforms (gondolas), and comprehensive workman's compensation insurance.",
  },
  {
    icon: HeartHandshake,
    title: "Resident-Centric Care",
    text: "We know your society is an active community. We enforce quiet hours, cover cars and balconies with protective plastic sheets, and issue tower-by-tower advance notices so daily life flows smoothly.",
  },
  {
    icon: ShieldCheck,
    title: "Radical Transparency",
    text: "Fixed line-item BOQs (Bill of Quantities) mean no mid-project cost escalations. We provide direct depot-dispatched paint invoices and up to 7-year manufacturer backed warranties.",
  },
];

const milestones = [
  {
    year: "2006",
    title: "The Beginning",
    description: "Started in Pune as a specialized exterior restoration crew dedicated to housing societies.",
  },
  {
    year: "2012",
    title: "High-Rise Mastery",
    description: "Pioneered motorized gondola access and mechanized spray plastering across 20+ storey towers in Pune & Mumbai.",
  },
  {
    year: "2017",
    title: "Advanced Waterproofing Wing",
    description: "Integrated polymer-modified terrace membranes and injection grouting into standard restoration scopes.",
  },
  {
    year: "2021",
    title: "Digital Quality Tracking",
    description: "Launched daily photo logs and weekly committee milestone decks for 100% transparent tracking.",
  },
  {
    year: "Present",
    title: "350+ Societies Strong",
    description: "Over 2.4 million sq. ft. transformed across Pune, Mumbai, and Nashik with a 98% client referral rate.",
  },
];

const teamRoles = [
  {
    icon: Building2,
    role: "Civil Engineers & Project Leads",
    desc: "Licensed civil professionals who conduct initial structural assessments, quantify crack repairs, and supervise coating thickness.",
  },
  {
    icon: HardHat,
    role: "Certified Rigging & Safety Officers",
    desc: "Dedicated safety supervisors trained in high-rise rigging, gondola counterweight calibration, and rope access protocols.",
  },
  {
    icon: Sparkles,
    role: "Master Surface & Texture Artisans",
    desc: "Experienced painters skilled in exterior weather-defense coats, roller textures, decorative lobby finishes, and waterproofing membranes.",
  },
  {
    icon: UserCheck,
    role: "Resident & Committee Coordinators",
    desc: "Your single point of contact on site, managing daily resident communication, parking logistics, and weekly committee updates.",
  },
];

const brandPartners = [
  "Asian Paints",
  "Berger Paints",
  "Dulux",
  "Nerolac",
  "Dr. Fixit",
  "Indigo Paints",
  "Nippon Paint",
  "Fosroc",
];

export function AboutStory() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-start gap-14 lg:grid-cols-2">
        <div className="reveal">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Story
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">

          </h2>
          <div className="mt-6 space-y-4 text-lg text-muted-foreground leading-relaxed">
            <p>
              Established in 2015 as a painting and repairing work.

              2015 Started core competency as repainting work for societies

              Experience in Builder, Industrial, and Pharma Industries

              It authorized Super premium applicators.

              Emerge as one of the top Premium applicators in repainting in Pune.

              50+ societies repainting work completed

              More than 125 Lakhs Sq ft painting work completed.

              Awarded with prestigious awards by Principal companies from last 5 years

            </p>
          </div>


        </div>

        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={painters}
              alt="ShubhRang crew working safely on an exterior society project"
              width={1024}
              height={400}
              loading="lazy"
              className="aspect-[4/2] w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>
    </section>
  );
}

const trackRecordProjects = [
  {
    stat: "50+",
    title: "Re-Painting Projects Completed",
    description:
      "Successfully completed repainting work for over 50 residential housing societies and commercial buildings.",
    icon: Building2,
  },
  {
    stat: "100+",
    title: "Fresh Painting, Texture & Waterproofing Projects",
    description:
      "Executed projects involving fresh painting, decorative texture finishes, and chemical waterproofing solutions.",
    icon: PaintBucket,
  },
];

const trackBadges = ["Quality Workmanship", "Skilled Team", "Durable Results"];

export function AboutTrackRecord() {
  return (
    <section className="px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="reveal relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-paint px-8 py-14 text-primary-foreground shadow-paint-lg sm:px-14">
        {/* decorative blobs */}
        <div className="absolute -right-16 -top-16 size-64 rounded-full bg-on-image/15 blur-2xl pointer-events-none" />
        <div className="absolute -left-16 bottom-0 size-48 rounded-full bg-on-image/10 blur-3xl pointer-events-none" />

        <div className="relative">
          {/* header */}
          <div className="max-w-3xl">
            <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
              Our Track Record &amp; Experience
            </span>
            <h2 className="mt-3 text-3xl font-extrabold leading-tight text-primary-foreground sm:text-4xl lg:text-5xl">
              A proven track record of quality workmanship.
            </h2>
            <p className="mt-4 max-w-2xl text-primary-foreground/85 leading-relaxed">
              With a proven track record of delivering quality workmanship, ShubhRang has successfully
              completed numerous residential and commercial projects. Our experience, skilled workforce,
              and commitment to excellence enable us to deliver durable, reliable, and professional
              painting, texture, and waterproofing solutions.
            </p>
          </div>

          {/* stat cards */}
          <div className="mt-10 grid gap-5 sm:grid-cols-2">
            {trackRecordProjects.map((p) => (
              <div
                key={p.title}
                className="flex gap-5 rounded-2xl border border-on-image/20 bg-on-image/10 p-6 backdrop-blur-sm transition-all duration-300 hover:bg-on-image/20"
              >
                <div className="shrink-0 grid size-12 place-items-center rounded-xl bg-on-image/15">
                  <p.icon className="size-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-display text-5xl font-extrabold leading-none text-primary-foreground">
                    {p.stat}
                  </div>
                  <h3 className="mt-2 font-display text-lg font-bold text-primary-foreground leading-snug">
                    {p.title}
                  </h3>
                  <p className="mt-1.5 text-sm text-primary-foreground/80 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* badge strip */}
          <div className="mt-8 flex flex-wrap gap-3">
            {trackBadges.map((b) => (
              <span
                key={b}
                className="flex items-center gap-2 rounded-full border border-on-image/30 bg-on-image/10 px-4 py-1.5 text-sm font-semibold text-primary-foreground"
              >
                <BadgeCheck className="size-4 shrink-0" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const whyChooseReasons = [
  {
    icon: GemIcon,
    title: "High-Grade Materials",
    text: "Branded and premium quality painting and waterproofing materials sourced directly from authorized depots — no substitute or diluted products, ever.",
  },
  {
    icon: HardHat,
    title: "100+ Skilled Workers",
    text: "Experienced and professional team equipped with full safety gear: harnesses, certified gondola operators, and trained surface applicators on every site.",
  },
  {
    icon: ClipboardCheck,
    title: "Planned Execution",
    text: "Thorough site inspection, detailed BOQ planning, and disciplined execution ensure zero surprises for your committee and zero mess for your residents.",
  },
  {
    icon: Clock,
    title: "On-Time Completion",
    text: "Strict adherence to agreed deadlines backed by weekly photo progress updates and milestone reports shared directly with your managing committee.",
  },
  {
    icon: Star,
    title: "Quality Assurance",
    text: "Competitive, transparent pricing with comprehensive quality work assurance, post-project inspection, and complete satisfaction as our commitment on every job.",
  },
];

export function AboutWhyChoose() {
  return (
    <section className="bg-ink px-5 py-24 text-ink-foreground lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        {/* header */}
        <div className="reveal mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            Why Choose Us
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Five reasons societies trust ShubhRang.
          </h2>
          <p className="mt-4 text-ink-foreground/70 leading-relaxed">
            From the first coat to the final handover, every decision we make is designed to protect your building and respect your community.
          </p>
        </div>

        {/* reason cards */}
        <div className="relative mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* connector line across top — desktop only */}
          <div className="absolute left-0 right-0 top-8 hidden h-px bg-ink-foreground/10 lg:block" />

          {whyChooseReasons.map((r, i) => (
            <div
              key={r.title}
              className="reveal relative rounded-3xl border border-ink-foreground/10 bg-ink-foreground/5 p-7 transition-all duration-300 hover:bg-ink-foreground/10 hover:-translate-y-1"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* numbered icon badge */}
              <div className="relative inline-flex">
                <div className="grid size-14 place-items-center rounded-2xl bg-gradient-paint shadow-paint">
                  <r.icon className="size-6 text-primary-foreground" />
                </div>
                <span className="absolute -right-2.5 -top-2.5 grid size-7 place-items-center rounded-full bg-ink-foreground font-display text-sm font-bold text-ink">
                  {i + 1}
                </span>
              </div>

              <h3 className="mt-5 font-display text-xl font-bold text-ink-foreground">
                {r.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ink-foreground/65">
                {r.text}
              </p>
            </div>
          ))}

          {/* full-width bottom card for 5th item on 3-col grid — promote it */}
        </div>
      </div>
    </section>
  );
}

export function AboutValues() {
  return (
    <section className="bg-secondary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Core Values
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            The principles that guide every brushstroke.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            From the initial inspection to post-completion maintenance, these standards keep your society safe and your investment protected.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="reveal rounded-3xl border border-border bg-card p-8 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-paint"
            >
              <div className="grid size-12 place-items-center rounded-2xl bg-secondary text-primary">
                <v.icon className="size-6" />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{v.title}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{v.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutMilestones() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal max-w-2xl">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Journey
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Nearly two decades of raising industry benchmarks.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            How we evolved from a passionate local painting crew into Maharashtra’s go-to specialist for complex society revamps.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {milestones.map((m, idx) => (
            <div
              key={m.year}
              className="reveal relative rounded-3xl border border-border bg-card p-6 shadow-soft"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="font-display text-3xl font-extrabold text-gradient-paint">
                {m.year}
              </div>
              <h3 className="mt-3 font-display text-lg font-bold">{m.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                {m.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function AboutLeadership() {
  return (
    <section className="bg-secondary px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal text-center max-w-3xl mx-auto">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our People & Structure
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Hands-on leadership, dedicated on-site supervision.
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            We don't outsource our accountability to random subcontractors. Every project is guided by experienced leadership and managed by dedicated on-site professionals.
          </p>
        </div>

        {/* Owner Spotlight */}
        <div className="reveal mt-12 rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-10">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <div className="grid size-16 shrink-0 place-items-center rounded-2xl bg-gradient-paint text-primary-foreground shadow-paint">
                <UserCheck className="size-8" />
              </div>
              <div>
                <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-primary">
                  Leadership
                </span>
                <h3 className="mt-1 font-display text-2xl font-extrabold sm:text-3xl text-foreground">
                  Mr Sagar Rane
                </h3>
                <p className="text-sm font-semibold text-muted-foreground">Owner</p>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-secondary/50 px-5 py-3.5 max-w-md">
              <p className="text-sm text-foreground/80 leading-relaxed font-medium">
                Personal involvement in site inspections, technical specifications, and managing committee consultations to ensure flawless execution.
              </p>
            </div>
          </div>
        </div>

        {/* Team Strength & Supervision Grid */}
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          <div className="reveal rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="font-display text-4xl font-extrabold text-gradient-paint">
              04 Nos
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">
              Total Supervisors
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Full-time technical supervisors ensuring strict quality compliance, safety checks, and timeline tracking on every site.
            </p>
          </div>

          <div className="reveal rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="font-display text-4xl font-extrabold text-gradient-paint">
              100+ Nos
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">
              Total Trained Painters
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Skilled, safety-certified workforce equipped with full protective gear, gondola training, and advanced surface coating techniques.
            </p>
          </div>

          <div className="reveal rounded-3xl border border-border bg-card p-7 shadow-soft">
            <div className="inline-flex items-center gap-2 rounded-xl bg-primary/10 px-3 py-1 font-display text-lg font-bold text-primary">
              <ShieldCheck className="size-5" /> 1:1 Focus
            </div>
            <h3 className="mt-3 font-display text-lg font-bold text-foreground">
              Dedicated Supervisor
            </h3>
            <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
              Dedicated supervisor assigned specifically for each key account / society to coordinate directly with committee members.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutAchievements() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
        {/* Left Side: Image with award floating badge */}
        <div className="reveal relative">
          <div className="overflow-hidden rounded-3xl shadow-soft">
            <img
              src={afterBuilding}
              alt="Transformed society building recognized for quality workmanship"
              width={1024}
              height={768}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
          <div className="animate-float-soft absolute -bottom-6 -right-2 max-w-[280px] rounded-2xl border border-border bg-card p-5 shadow-soft sm:-right-6">
            <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
              <Trophy className="size-5 shrink-0 text-primary" /> Award Winner
            </div>
            <p className="mt-2 font-display text-base font-bold leading-tight">
              Colour Merchant Club Award
            </p>
            <p className="mt-1 text-xs text-muted-foreground flex items-center gap-1">
              <MapPin className="size-3.5 text-primary shrink-0" /> Vietnam 2026 · West Region
            </p>
          </div>
        </div>

        {/* Right Side: Content */}
        <div className="reveal">
          <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Our Achievements
          </span>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
            Recognition of our commitment to quality.
          </h2>

          <div className="mt-8 rounded-3xl border border-border bg-card p-7 shadow-soft sm:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-primary">
                <Trophy className="size-3.5" /> A Proud Milestone
              </span>
              <span className="inline-flex items-center gap-1 rounded-full bg-secondary px-3 py-1 text-xs font-bold text-foreground">
                <MapPin className="size-3.5 text-primary" /> Vietnam 2026
              </span>
            </div>

            <h3 className="mt-4 font-display text-2xl font-bold leading-tight text-foreground sm:text-3xl">
              Colour Merchant Club Awards – West Region
            </h3>

            <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
              We are proud to be recognised by <strong className="text-foreground">Dulux / JSW</strong> for our consistent quality,
              professional execution and commitment to customer satisfaction.
            </p>

            <div className="mt-6 border-t border-border/70 pt-5">
              <div className="flex items-start gap-3">
                <Quote className="size-6 shrink-0 text-primary/40 mt-0.5" />
                <p className="font-display text-lg font-semibold italic text-foreground leading-snug">
                  “Quality Work Today... Brighter Communities Tomorrow.”
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            {["Quality", "Trust", "Excellence"].map((val) => (
              <span
                key={val}
                className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-xs font-bold uppercase tracking-wider text-foreground shadow-xs"
              >
                <BadgeCheck className="size-4 text-primary" /> {val}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutCertifications() {
  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal rounded-3xl border border-border bg-card p-8 shadow-soft sm:p-12 lg:p-16">
          <div className="grid items-center gap-10 lg:grid-cols-2">
            <div>
              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
                Quality Assurance
              </span>
              <h2 className="mt-3 text-3xl font-extrabold leading-tight sm:text-4xl">
                Authorized applicators with India's premier paint manufacturers.
              </h2>
              <p className="mt-4 text-muted-foreground leading-relaxed">
                We maintain direct relationships with depot supply chains, ensuring every bucket of paint, primer, and waterproofing membrane is authentic, fresh, and backed by joint manufacturer site inspections.
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                  <div className="font-display text-2xl font-bold text-primary">Up to 7 Yrs</div>
                  <div className="text-xs text-muted-foreground mt-1">Joint manufacturer warranty</div>
                </div>
                <div className="rounded-2xl border border-border bg-secondary/50 p-4">
                  <div className="font-display text-2xl font-bold text-primary">100%</div>
                  <div className="text-xs text-muted-foreground mt-1">Direct depot batch sourcing</div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {brandPartners.map((brand) => (
                <div
                  key={brand}
                  className="flex items-center justify-center rounded-2xl border border-border bg-secondary/30 p-5 text-center font-display font-bold text-foreground/80 hover:text-foreground transition-colors shadow-xs"
                >
                  {brand}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

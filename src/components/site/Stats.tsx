const stats = [
  { value: "18+", label: "Years of experience" },
  { value: "350+", label: "Societies painted" },
  { value: "2.4M", label: "Sq. ft. completed" },
  { value: "98%", label: "Clients who refer us" },
];

const brands = ["Asian Paints", "Berger", "Dulux", "Nerolac", "Dr. Fixit", "Indigo", "Nippon"];

export function Stats() {
  return (
    <section className="relative z-10 -mt-10 px-5 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border shadow-soft lg:grid-cols-4">
        {stats.map((s) => (
          <div key={s.label} className="bg-card px-6 py-8 text-center lg:py-10">
            <div className="font-display text-4xl font-extrabold text-gradient-paint lg:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 text-sm font-medium text-muted-foreground">{s.label}</div>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-14 max-w-7xl">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
          We work with India's most trusted paint brands
        </p>
        <div className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
          <div className="animate-marquee flex w-max gap-14">
            {[...brands, ...brands].map((b, i) => (
              <span
                key={i}
                className="font-display text-2xl font-bold text-foreground/30 whitespace-nowrap"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

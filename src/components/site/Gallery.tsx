import { useState } from "react";
import { MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import commercialImg from "@/assets/commercial-building.jpg";
import lobbyImg from "@/assets/society-lobby.jpg";
import interiorImg from "@/assets/interior-painting.jpg";
import heroImg from "@/assets/hero-society.jpg";
import exteriorImg from "@/assets/exterior-painters.jpg";
import waterImg from "@/assets/waterproofing.jpg";
import afterImg from "@/assets/after-building.jpg";

type Category = "Exterior" | "Interior" | "Waterproofing" | "Commercial";

const projects: {
  img: string;
  w: number;
  h: number;
  title: string;
  place: string;
  meta: string;
  year: string;
  cat: Category;
}[] = [
  { img: heroImg, w: 1920, h: 1088, title: "Riverdale Residences", place: "Baner, Pune", meta: "12 towers · 3.2 lakh sq. ft.", year: "2026", cat: "Exterior" },
  { img: commercialImg, w: 1024, h: 1024, title: "Vertex Business Park", place: "Hinjewadi", meta: "Office block · night shifts", year: "2026", cat: "Commercial" },
  { img: lobbyImg, w: 1024, h: 1024, title: "Green Valley CHS", place: "Kothrud", meta: "Lobby · texture feature wall", year: "2025", cat: "Interior" },
  { img: afterImg, w: 1280, h: 864, title: "Shanti Niketan CHS", place: "Aundh", meta: "Full restoration · 5 floors", year: "2025", cat: "Exterior" },
  { img: interiorImg, w: 1280, h: 960, title: "Sunshine Heights", place: "Wakad", meta: "84 flats · interior", year: "2025", cat: "Interior" },
  { img: waterImg, w: 1280, h: 960, title: "Skyline Towers", place: "Viman Nagar", meta: "6 terraces · 10-yr warranty", year: "2024", cat: "Waterproofing" },
  { img: exteriorImg, w: 1024, h: 1280, title: "Orchid Enclave", place: "Kharadi", meta: "18 floors · gondola work", year: "2024", cat: "Exterior" },
];

const filters = ["All", "Exterior", "Interior", "Waterproofing", "Commercial"] as const;

export function Gallery() {
  const [active, setActive] = useState<(typeof filters)[number]>("All");
  const shown = projects.filter((p) => active === "All" || p.cat === active);

  return (
    <section className="px-5 pb-24 lg:px-8 lg:pb-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <h2 className="text-4xl font-extrabold leading-tight sm:text-5xl">Recent projects</h2>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                type="button"
                onClick={() => setActive(f)}
                className={cn(
                  "rounded-full border px-4 py-2 text-sm font-medium transition-all",
                  active === f
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card hover:border-primary/50",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid auto-rows-[300px] gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((p) => (
            <figure
              key={p.title}
              className="animate-rise group relative isolate overflow-hidden rounded-3xl shadow-soft"
            >
              <img
                src={p.img}
                alt={p.title}
                width={p.w}
                height={p.h}
                loading="lazy"
                className="absolute inset-0 -z-20 size-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 -z-10 bg-fade-up opacity-90" />
              <span className="absolute right-4 top-4 rounded-full bg-on-image/90 px-3 py-1 text-xs font-semibold text-ink">
                {p.cat} · {p.year}
              </span>
              <figcaption className="flex h-full flex-col justify-end p-6 text-on-image">
                <span className="text-xs font-semibold uppercase tracking-[0.18em] text-primary-glow">
                  {p.meta}
                </span>
                <span className="mt-1 font-display text-xl font-bold">{p.title}</span>
                <span className="mt-1 flex items-center gap-1 text-sm text-on-image/75">
                  <MapPin className="size-3.5" /> {p.place}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

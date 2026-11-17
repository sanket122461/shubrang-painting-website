import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import beforeImg from "@/assets/before-building.jpg";
import afterImg from "@/assets/after-building.jpg";

export function BeforeAfter() {
  const [pos, setPos] = useState(50);
  const ref = useRef<HTMLDivElement>(null);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    setPos(Math.min(100, Math.max(0, ((clientX - r.left) / r.width) * 100)));
  }, []);

  return (
    <section className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="reveal grid items-end gap-6 lg:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              The transformation
            </span>
            <h2 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              From tired and stained to <span className="text-gradient-paint">proud and new.</span>
            </h2>
          </div>
          <p className="text-lg text-muted-foreground lg:justify-self-end lg:text-right">
            Drag the slider to see a recent society repaint — <br className="hidden lg:block" />
            crack repair, fungus treatment and 3 coats of exterior emulsion.
          </p>
        </div>

        <div
          ref={ref}
          className="reveal relative mt-12 aspect-[3/2] w-full cursor-ew-resize select-none overflow-hidden rounded-3xl shadow-soft sm:aspect-[1280/864]"
          onPointerDown={(e) => {
            dragging.current = true;
            (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
            update(e.clientX);
          }}
          onPointerMove={(e) => dragging.current && update(e.clientX)}
          onPointerUp={() => (dragging.current = false)}
          onPointerLeave={() => (dragging.current = false)}
          role="slider"
          aria-label="Before and after comparison"
          aria-valuenow={Math.round(pos)}
          aria-valuemin={0}
          aria-valuemax={100}
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === "ArrowLeft") setPos((p) => Math.max(0, p - 5));
            if (e.key === "ArrowRight") setPos((p) => Math.min(100, p + 5));
          }}
        >
          <img
            src={afterImg}
            alt="Society building after repainting"
            width={1280}
            height={864}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 size-full object-cover"
          />
          <img
            src={beforeImg}
            alt="Society building before repainting"
            width={1280}
            height={864}
            loading="lazy"
            draggable={false}
            className="absolute inset-0 size-full object-cover"
            style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />
          <span className="absolute left-5 top-5 rounded-full bg-ink/80 px-4 py-1.5 text-sm font-semibold text-ink-foreground backdrop-blur">
            Before
          </span>
          <span className="absolute right-5 top-5 rounded-full bg-primary px-4 py-1.5 text-sm font-semibold text-primary-foreground">
            After
          </span>
          <div
            className="pointer-events-none absolute inset-y-0 w-1 -translate-x-1/2 bg-on-image"
            style={{ left: `${pos}%` }}
          >
            <span className="absolute left-1/2 top-1/2 grid size-14 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-on-image text-primary shadow-paint-lg">
              <MoveHorizontal className="size-6" />
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

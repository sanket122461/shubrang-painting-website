import type { ReactNode } from "react";

export function PageHero({
  image,
  eyebrow,
  title,
  text,
  children,
}: {
  image: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden">
      <img
        src={image}
        alt=""
        width={1920}
        height={1088}
        className="absolute inset-0 -z-20 size-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-hero-overlay" />
      <div className="mx-auto max-w-7xl px-5 pb-20 pt-40 lg:px-8 lg:pb-28 lg:pt-48">
        <div className="max-w-2xl">
          <span className="animate-rise inline-block text-sm font-semibold uppercase tracking-[0.2em] text-primary-glow">
            {eyebrow}
          </span>
          <h1
            className="animate-rise mt-4 text-4xl font-extrabold leading-[1.05] text-on-image sm:text-6xl"
            style={{ animationDelay: "0.1s" }}
          >
            {title}
          </h1>
          <p
            className="animate-rise mt-5 text-lg leading-relaxed text-on-image/85"
            style={{ animationDelay: "0.2s" }}
          >
            {text}
          </p>
          {children && (
            <div className="animate-rise mt-8" style={{ animationDelay: "0.3s" }}>
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

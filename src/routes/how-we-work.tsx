import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Process, SafetyPromise, Timeline } from "@/components/site/Process";
import { CtaBand } from "@/components/site/CtaBand";
import afterImg from "@/assets/after-building.jpg";

export const Route = createFileRoute("/how-we-work")({
  head: () => ({
    meta: [
      { title: "How We Work — Our 4-Step Painting Process | ShubhRang" },
      {
        name: "description",
        content:
          "From free site visit to clean handover: our process, typical project timelines and the safety promises we keep on every society site.",
      },
      { property: "og:title", content: "How ShubhRang paints your society" },
      {
        property: "og:description",
        content: "A simple 4-step process, realistic timelines and strict on-site safety.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HowWeWorkPage,
});

function HowWeWorkPage() {
  return (
    <>
      <PageHero
        image={afterImg}
        eyebrow="How we work"
        title={<>A calm, clear process from first call to final coat.</>}
        text="No surprises for your committee and no disturbance for your residents — here's exactly what happens and when."
      />
      <Process />
      <Timeline />
      <SafetyPromise />
      <div className="pt-24 lg:pt-32" />
      <CtaBand title="Let's plan your project timeline together." />
    </>
  );
}

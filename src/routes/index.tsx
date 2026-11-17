import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/site/Hero";
import { Stats } from "@/components/site/Stats";
import { ServicesPreview } from "@/components/site/Services";
import { WhyUs } from "@/components/site/WhyUs";
import { TestimonialsPreview } from "@/components/site/Testimonials";
import { CtaBand } from "@/components/site/CtaBand";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ShubhRang — Society & Building Painting, Waterproofing & Repairs" },
      {
        name: "description",
        content:
          "Exterior and interior painting, waterproofing and repairs for housing societies, apartments and commercial buildings. Free site visit & fixed quotes.",
      },
      { property: "og:title", content: "ShubhRang — Your society, beautifully repainted" },
      {
        property: "og:description",
        content:
          "Trusted by 350+ housing societies for on-time, mess-free building painting with up to 7-year warranty.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Hero />
      <Stats />
      <ServicesPreview />
      <WhyUs />
      <TestimonialsPreview />
      <CtaBand />
    </>
  );
}

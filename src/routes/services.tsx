import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ServiceFaq, ServicesFull } from "@/components/site/Services";
import { CtaBand } from "@/components/site/CtaBand";
import exteriorImg from "@/assets/exterior-painters.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services — Exterior, Interior Painting & Waterproofing | ShubhRang" },
      {
        name: "description",
        content:
          "Society exterior painting, interior painting, terrace waterproofing, structural repairs and texture walls — with what's included and starting prices.",
      },
      { property: "og:title", content: "Painting & waterproofing services | ShubhRang" },
      {
        property: "og:description",
        content: "Everything your building needs, from crack repair to premium finishes, under one team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHero
        image={exteriorImg}
        eyebrow="Our services"
        title={<>Painting, waterproofing & repairs — all under one roof.</>}
        text="See exactly what's included in every job and where prices start, so your committee can plan with confidence."
      />
      <ServicesFull />
      <ServiceFaq />
      <div className="pt-24 lg:pt-32" />
      <CtaBand title="Not sure which service you need?" />
    </>
  );
}

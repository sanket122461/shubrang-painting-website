import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { BeforeAfter } from "@/components/site/BeforeAfter";
import { Gallery } from "@/components/site/Gallery";
import { CtaBand } from "@/components/site/CtaBand";
import commercialImg from "@/assets/commercial-building.jpg";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Projects — Before & After Society Repainting | ShubhRang" },
      {
        name: "description",
        content:
          "See our before-and-after transformations and recent exterior, interior, waterproofing and commercial painting projects.",
      },
      { property: "og:title", content: "Our work — ShubhRang projects" },
      {
        property: "og:description",
        content: "From tired and stained to proud and new: real society transformations.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ProjectsPage,
});

function ProjectsPage() {
  return (
    <>
      <PageHero
        image={commercialImg}
        eyebrow="Our projects"
        title={<>Buildings we've brought back to life.</>}
        text="Housing societies, towers, offices and homes across Pune, Mumbai and Nashik."
      />
      <BeforeAfter />
      <Gallery />
      <CtaBand title="Want your building to be our next transformation?" />
    </>
  );
}

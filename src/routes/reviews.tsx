import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { ReviewsFull } from "@/components/site/Testimonials";
import { CtaBand } from "@/components/site/CtaBand";
import lobbyImg from "@/assets/society-lobby.jpg";

export const Route = createFileRoute("/reviews")({
  head: () => ({
    meta: [
      { title: "Client Reviews — 4.9★ from 420+ Societies & Homes | ShubhRang" },
      {
        name: "description",
        content:
          "Read what society secretaries, chairpersons, residents and facility heads say about our painting and waterproofing work.",
      },
      { property: "og:title", content: "What our clients say about ShubhRang" },
      {
        property: "og:description",
        content: "Rated 4.9 out of 5 by housing societies, offices and home owners.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ReviewsPage,
});

function ReviewsPage() {
  return (
    <>
      <PageHero
        image={lobbyImg}
        eyebrow="Client reviews"
        title={<>Happy committees. Happier residents.</>}
        text="Real words from the people who trusted us with their buildings and homes."
      />
      <ReviewsFull />
      <CtaBand title="Join 350+ happy societies." />
    </>
  );
}

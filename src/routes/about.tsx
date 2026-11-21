import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import {
  AboutStory,
  AboutTrackRecord,
  AboutWhyChoose,
  AboutValues,
  AboutMilestones,
  AboutLeadership,
  AboutAchievements,
  AboutCertifications,
} from "@/components/site/About";
import { CtaBand } from "@/components/site/CtaBand";
import heroImg from "@/assets/hero-society.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Us — 18+ Years of Society Painting & Waterproofing | ShubhRang" },
      {
        name: "description",
        content:
          "Discover ShubhRang's journey, engineering-first surface prep, uncompromised on-site safety, and dedication to transforming 350+ housing societies across Maharashtra.",
      },
      { property: "og:title", content: "About ShubhRang — Painting & Construction Specialists" },
      {
        property: "og:description",
        content:
          "Civil engineering precision, transparent fixed quotes, and resident-friendly painting since 2006.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="About ShubhRang"
        title={<>Craftsmanship, engineering & care for your society.</>}
        text="For over 18 years, we have brought technical precision, disciplined safety and transparent pricing to residential societies and commercial towers."
      />
      <AboutStory />
      <AboutTrackRecord />
      <AboutWhyChoose />
      <AboutValues />
      <AboutMilestones />
      <AboutLeadership />
      <AboutAchievements />
      <AboutCertifications />
      <CtaBand title="Ready to partner with a team you can trust?" />
    </>
  );
}

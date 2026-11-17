import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Contact, Offices } from "@/components/site/Contact";
import heroImg from "@/assets/hero-society.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Book a Free Site Visit | ShubhRang" },
      {
        name: "description",
        content:
          "Request a free site inspection and fixed quote for your society, apartment or commercial building. Offices in Pune, Mumbai and Nashik.",
      },
      { property: "og:title", content: "Book a free site visit with ShubhRang" },
      {
        property: "og:description",
        content: "Get a no-obligation inspection and quote within 48 hours.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <>
      <PageHero
        image={heroImg}
        eyebrow="Contact us"
        title={<>Book your free site visit.</>}
        text="Tell us about your building and our engineer will call you within 24 hours."
      />
      <Contact />
      <Offices />
    </>
  );
}

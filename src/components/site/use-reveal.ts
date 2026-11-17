import { useEffect } from "react";

/**
 * Adds `is-visible` to every `.reveal` element as it scrolls into view.
 * Watches the page for newly mounted sections (e.g. after switching pages),
 * since route content can render after this effect first runs. Tracks
 * observed elements in a WeakSet so no attributes change before hydration.
 */
export function useReveal() {
  useEffect(() => {
    const seen = new WeakSet<Element>();
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("is-visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );
    const scan = () =>
      document.querySelectorAll(".reveal:not(.is-visible)").forEach((el) => {
        if (seen.has(el)) return;
        seen.add(el);
        io.observe(el);
      });
    scan();
    const mo = new MutationObserver(scan);
    mo.observe(document.body, { childList: true, subtree: true });
    return () => {
      mo.disconnect();
      io.disconnect();
    };
  }, []);
}

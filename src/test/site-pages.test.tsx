import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { routeTree } from "@/routeTree.gen";

describe("Site pages", () => {
  const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });
  for (const path of ["/services", "/how-we-work", "/projects", "/reviews", "/contact"]) {
    it(`has a page at ${path}`, () => {
      expect(router.matchRoutes(path).at(-1)?.routeId).not.toBe(rootRouteId);
    });
  }
});

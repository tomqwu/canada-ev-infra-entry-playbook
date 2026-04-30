import { defineCollection, z } from "astro:content";

const reports = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    status: z.enum(["draft", "in-review", "published", "archived"]),
    audience: z.enum([
      "Internal",
      "Investor",
      "Partner",
      "Regulator",
      "Public",
    ]),
    tags: z.array(z.string()).default([]),
    author: z.string().default("Research team"),
    lastUpdated: z.coerce.date(),
    order: z.number().default(0),
    sources: z.array(z.string()).default([]),
  }),
});

export const collections = {
  reports,
};

import { defineCollection, z } from 'astro:content';

const books = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    author: z.string(),
    finished: z.string(),
    rating: z.number().min(1).max(5),
    cover: z.string(),
    tldr: z.string(),
    recommended: z.boolean().default(true),
    tags: z.array(z.string()).default([]),
    goodreads: z.string().url().optional(),
  }),
});

export const collections = { books };

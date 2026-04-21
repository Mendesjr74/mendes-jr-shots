import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    location: z.string().optional(),
    image: z.string().optional(),
    camera: z.string().optional(),
    lens: z.string().optional(),
  }),
});

const historias = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    cover: z.string().optional(),
  }),
});

const aulas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.string(),
    excerpt: z.string(),
    type: z.enum(['texto', 'video']),
    level: z.enum(['Iniciante', 'Intermediário', 'Avançado', 'Geral']).optional(),
    videoUrl: z.string().optional(),
    cover: z.string().optional(),
  }),
});

export const collections = { portfolio, historias, aulas };

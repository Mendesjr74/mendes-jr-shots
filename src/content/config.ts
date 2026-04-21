import { defineCollection, z } from 'astro:content';

const portfolio = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
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
    date: z.coerce.date(),
    excerpt: z.string(),
    cover: z.string().optional(),
  }),
});

const aulas = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    excerpt: z.string(),
    type: z.enum(['texto', 'video']),
    level: z.enum(['Iniciante', 'Intermediário', 'Avançado', 'Geral']).optional(),
    videoUrl: z.string().optional(),
    cover: z.string().optional(),
  }),
});

const site = defineCollection({
  type: 'data',
  schema: z.object({
    nome: z.string(),
    tagline: z.string().optional(),
    heroTitulo: z.string().optional(),
    heroSubtitulo: z.string().optional(),
    heroDestaque: z.string().optional(),
    heroDestaqueLegenda: z.string().optional(),
    fotoPerfil: z.string().optional(),
    bio: z.string().optional(),
    email: z.string().optional(),
    instagram: z.string().optional(),
    youtube: z.string().optional(),
    behance: z.string().optional(),
  }),
});

export const collections = { portfolio, historias, aulas, site };

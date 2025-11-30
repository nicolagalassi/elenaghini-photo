// src/content/config.ts
import { defineCollection, z } from 'astro:content';

/**
 * Definiamo lo schema per la collezione 'portfolio'
 * (Ogni file MD in src/content/portfolio deve rispettare queste regole)
 */
const portfolioCollection = defineCollection({
  // Il tipo 'content' indica che è un file Markdown/MDX
  type: 'content', 
  
  // Definiamo la struttura dei campi (Frontmatter YAML)
  schema: ({ image }) => z.object({
    // Titoli e Slugs (per il multilingua e l'URL)
    title_it: z.string().max(100),
    title_en: z.string().max(100),
    slug: z.string(), // L'URL finale (es. 'natura', 'angeli')
    date: z.date(), // Data per l'ordinamento

    // Immagine di copertina
    // Decap CMS salverà il percorso in public/images/uploads come stringa
    cover_image: z.string().describe('Percorso copertina caricata da Decap CMS.'), 
    
    // Lista delle immagini della galleria
    gallery: z.array(z.object({
      image: z.string().describe('Percorso immagine caricata da Decap CMS.'),
      caption_it: z.string().optional(),
      caption_en: z.string().optional(),
    })).optional(),
  }),
});

// Esportiamo la collezione in modo che Astro la riconosca
export const collections = {
  'portfolio': portfolioCollection,
};
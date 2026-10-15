import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Each file in src/content/work becomes a case study at /work/<file-name>.
const work = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),                 // one line shown on the homepage card
    category: z.string(),                // e.g. "Product Design"
    order: z.number(),                   // position on the homepage (1 = first)
    company: z.string(),
    role: z.string(),
    timeline: z.string(),
    platforms: z.array(z.string()).default([]),
    team: z.string().optional(),
    tools: z.array(z.string()).default([]),
    cover: z.string(),                   // path inside /public, e.g. /images/work/icpay.png
    coverAlt: z.string(),
    heroImage: z.string().optional(),    // large image at the top of the case study (defaults to cover)
    heroImageAlt: z.string().optional(),
    tint: z.string().optional(),         // soft background color for the case study hero and image bands
    accent: z.string().default('#184341'), // card background while the image loads
    linkColor: z.string().default('#ffffff'), // underline color of "View case study" on the card
    protected: z.boolean().default(false), // true = teaser only + "request access"
    highlights: z.array(z.string()).default([]), // key outcomes, shown near the top
    draft: z.boolean().default(false),
  }),
});

export const collections = { work };

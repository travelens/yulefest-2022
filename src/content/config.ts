// 1. Import your utilities and schemas
import { z, defineCollection } from 'astro:content'

// 2. Define your collections

const postCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      trip: z.string(),
      place: z.string(),
      timezone: z.string().default('Australia/Sydney'),
      location: z.string(),
      title: z.string(),
      description: z.string(),
      date: z.date(),
      image: image(),
      gallery: z.string().optional(),
      map: z.array(z.number()).optional(),
      tags: z.array(z.string()).optional()
    })
})

const tripCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      draft: z.boolean().optional(),
      place: z.string(),
      timezone: z.string().default('Australia/Sydney'),
      location: z.string(),
      title: z.string(),
      description: z.string(),
      start: z.date(),
      end: z.date(),
      image: image(),
      tags: z.array(z.string()).optional()
    })
})

// 3. Export multiple collections to register them
export const collections = {
  post: postCollection,
  trip: tripCollection
}

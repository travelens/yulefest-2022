import { getCollection } from 'astro:content'

const docs = await getCollection('trip', (trip) => {
  return !trip.data.draft
})
let documents = docs.map((doc) => ({
  id: doc.id,
  slug: 'index.html',
  base: `${import.meta.env.BASE_URL}`,
  collection: doc.collection,
  body: doc.body,
  trip: doc.data.title,
  place: doc.data.place,
  timezone: doc.data.timezone,
  location: doc.data.location,
  title: doc.data.title,
  description: doc.data.description,
  date: doc.data.end,
  image: doc.data.image,
  map: doc.data.map,
  tags: doc.data.tags
}))

const posts = await getCollection('post', (post) => {
  return !post.data.draft
})
documents = documents.concat(
  posts.map((doc) => ({
    id: doc.id,
    slug: doc.id,
    base: `${import.meta.env.BASE_URL}`,
    collection: doc.collection,
    body: doc.body,
    trip: doc.data.trip,
    place: doc.data.place,
    timezone: doc.data.timezone,
    location: doc.data.location,
    title: doc.data.title,
    description: doc.data.description,
    date: doc.data.date,
    image: doc.data.image,
    map: doc.data.map,
    tags: doc.data.tags
  }))
)

export async function GET() {
  return new Response(JSON.stringify(documents), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  })
}

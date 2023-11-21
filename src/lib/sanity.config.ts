import {createClient} from 'next-sanity'
import imageUrlBuilder from '@sanity/image-url'
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION, // https://www.sanity.io/docs/api-versioning
  useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})



const builder = imageUrlBuilder(client)

export function urlFor(source:any) {
  return builder.image(source)
}


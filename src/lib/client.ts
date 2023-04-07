import SanityClient from 'next-sanity-client'
import imageUrlBuilder from '@sanity/image-url'
import { SanityClientLike } from '@sanity/image-url/lib/types/types'
import * as queries from './queries'

export const client: SanityClient = new SanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID ?? '',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET ?? '',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION ?? '',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN ?? '',
  useCdn: true,
  queries: queries.queries,
})

const builder = imageUrlBuilder({
  clientConfig: {
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  },
} as SanityClientLike)

export const urlFor = (source: any) => builder.image(source)

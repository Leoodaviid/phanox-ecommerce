import { groq } from 'next-sanity'

export const productsQuery = groq`*[_type == "product"]`

export const slugProductQuery = (slug: string) =>
  groq`*[_type == "product" && slug.current == '${slug}'][0]`

export const bannerQuery = groq`*[_type == "banner"]`

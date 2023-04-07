import { groq } from 'next-sanity'

export const slugProductQuery = (slug: string) =>
  groq`*[_type == "product" && slug.current == '${slug}'][0]`

export const queries: Record<string, string> = {
  productsQuery: groq`*[_type == "product"]`,

  slugProductQuery: slugProductQuery(''),

  bannerQuery: groq`*[_type == "banner"]`,
}

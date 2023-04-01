import { groq } from 'next-sanity'

export const productsQuery = groq`*[_type == "product"]`

export const bannerQuery = groq`*[_type == "banner"]`

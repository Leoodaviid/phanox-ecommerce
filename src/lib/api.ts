import { BannerData, ProductData } from '@/models/models'
import { client } from './client'
import { queries, slugProductQuery } from './queries'

export const getProducts = client.createApiUtil<ProductData[]>(queries.productsQuery)

export const getBanner = client.createApiUtil<BannerData[]>(queries.bannerQuery)

export const getProductBySlug = (slug: string) =>
  client.createApiUtil<ProductData>(slugProductQuery(slug))

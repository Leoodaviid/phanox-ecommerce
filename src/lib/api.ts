import { BannerData, ProductsData } from '@/models/models'
import { client } from './client'
import { bannerQuery, productsQuery, slugProductQuery } from './queries'

export const getProducts = client.createApiUtil<ProductsData[]>(productsQuery)

export const getProductsSlug = (slug: string) =>
  client.createApiUtil<ProductsData>(slugProductQuery(slug))

export const getBanner = client.createApiUtil<BannerData[]>(bannerQuery)

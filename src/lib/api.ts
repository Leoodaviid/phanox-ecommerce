import { BannerData, ProductsData } from '@/models/models'
import { client } from './client'
import { bannerQuery, productsQuery } from './queries'

export const getProducts = client.createApiUtil<ProductsData[]>(productsQuery)

export const getBanner = client.createApiUtil<BannerData[]>(bannerQuery)

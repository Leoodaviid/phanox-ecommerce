export interface ProductData {
  _id: string
  quantity: number
  image: string[]
  name: string
  slug: {
    current?: string
  }
  price: number
  details: string
}

export interface BannerData {
  image: string
  buttonText: string
  product: string
  desc: string
  smallText: string
  midText: string
  largeText1: string
  largeText2: string
  discount: string
  saleTime: string
}

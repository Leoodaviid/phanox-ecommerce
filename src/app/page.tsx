// 'use client'
import { Product, FooterBanner, HeroBanner } from '@/components'
import { getBanner, getProducts } from '@/lib/api'

const Home = async () => {
  const productsData = await getProducts({ cache: 'no-store' })
  const bannerData = await getBanner({ cache: 'no-store' })

  return (
    <>
      <HeroBanner heroBanner={bannerData && bannerData[0]} />
      <div className='text-center py-8 text-[#324d67]'>
        <h2 className='text-4xl font-extrabold'>Produtos mais vendidos</h2>
        <p className='text-xs font-extralight'>Música no seu estilo</p>
      </div>
      <div className={`flex flex-wrap justify-center gap-16 mt-2 w-full h-full p-2.5`}>
        {productsData?.map((product, index) => (
          <Product key={index} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export default Home

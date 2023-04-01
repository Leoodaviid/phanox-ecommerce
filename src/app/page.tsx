// 'use client'
import { Product, FooterBanner, HeroBanner } from '@/components'
import { getBanner, getProducts } from '@/lib/api'
import styles from '../styles'

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
      <div
        className={`${styles.flexCenter} w-full py-8 grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
      >
        {productsData?.map((product, index) => (
          <Product key={index} product={product} />
        ))}
        <br />
      </div>
      <FooterBanner footerBanner={bannerData && bannerData[0]} />
    </>
  )
}

export default Home

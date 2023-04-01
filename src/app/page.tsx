// 'use client'
import { Product, FooterBanner, HeroBanner } from '@/components'
import { getBanner, getProducts } from '@/lib/api'
import styles from '../styles'

const Home = async () => {
  const productsData = await getProducts({ cache: 'no-store' })
  const bannerData = await getBanner({ cache: 'no-store' })

  return (
    <>
      <HeroBanner heroBanner={bannerData.length && bannerData[0]} />
      <div className='text-center my-8 text-[#324d67]'>
        <h2 className='text-4xl font-extrabold'>Produtos mais vendidos</h2>
        <p className='text-xs font-extralight'>Fones de ouvido variados</p>
      </div>
      <div className={`${styles.flexCenter} w-full flex-wrap gap-4`}>
        {productsData?.map((product) => product.name)}
        <br />
        {bannerData?.map((banner) => banner.discount)}
      </div>
      <FooterBanner />
    </>
  )
}

export default Home

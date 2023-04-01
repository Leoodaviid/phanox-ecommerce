// 'use client'
import Link from 'next/link'
import styles from '../styles'
import { BannerData } from '@/models/models'
import { urlFor } from '@/lib/client'

interface HeroBannerProps {
  heroBanner: BannerData
}

const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
  return (
    <div className={`${styles.paddings} w-full h-[500px] relative bg-[#dcdcdc] rounded-[15px]`}>
      <div>
        <p className='text-sm'>{heroBanner.smallText}</p>
        <h3 className='text-6xl font-bold mt-[4px]'>{heroBanner.midText}</h3>
        <h1 className='text-white font-bold text-[10em] upercase -ml-5'>{heroBanner.largeText1}</h1>
        <img
          src={urlFor(heroBanner.image).url()}
          alt='headphone'
          className='absolute top-[0%] right-[20%] w-[450px] h-[450px]'
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type='button'
              className='cursor-pointer bg-[#f02d34] rounded-[15px] py-1 px-4 my-10 text-lg font-medium text-white z-10 !important'
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className='absolute right-[10%] bottom-[5%] w-[300px] flex flex-col text-[#324d67]'>
            <h5>Description</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

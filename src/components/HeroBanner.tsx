// 'use client'
import { BannerData } from '@/models/models'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
import Image from 'next/image'

interface HeroBannerProps {
  heroBanner: BannerData
}

const HeroBanner = ({ heroBanner }: HeroBannerProps) => {
  return (
    <div className='p-5 w-full h-[550px] relative bg-[#dcdcdc] rounded-[15px]'>
      <div>
        <p className='text-sm'>{heroBanner.smallText}</p>
        <h3 className='text-2xl sm:text-4xl md:text-6xl font-bold mt-[4px]'>
          {heroBanner.midText}
        </h3>
        <h1 className='text-white font-bold text-[10em] uppercase -ml-3'>
          {heroBanner.largeText1}
        </h1>
        <Image
          src={urlFor(heroBanner.image).url()}
          width={400}
          height={400}
          alt='headphone'
          className='absolute top-[0%] right-[20%] w-[400px] sm:w-[450px] h-[400px] sm:h-[450px]'
        />
        <div>
          <Link href={`/product/${heroBanner.product}`}>
            <button
              type='button'
              className='cursor-pointer bg-[#f02d34] rounded-[15px] py-1 px-4 my-16 text-lg font-medium text-white z-10 !important'
            >
              {heroBanner.buttonText}
            </button>
          </Link>
          <div className='absolute right-5 bottom-[5%] flex flex-col max-w-prose text-[#324d67]'>
            <h5 className='font-semibold self-end'>Descrição</h5>
            <p className='text-gray-500 text-xs sm:text-sm text-end'>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

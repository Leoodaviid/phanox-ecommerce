import { BannerData } from '@/models/models'
import { urlFor } from '@/lib/client'
import Link from 'next/link'

// 'use client'
interface FooterBannerProps {
  footerBanner: BannerData
}
const FooterBanner = ({
  footerBanner: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}: FooterBannerProps) => {
  return (
    <div className='py-24 px-10 mt-28 bg-[#f02d34] rounded-[15px] relative w-full h-[400px] text-white leading-none'>
      <div className='flex justify-between'>
        <div>
          <p className='m-[18px]'>{discount}</p>
          <h3 className='font-black text-7xl ml-[25px]'>{largeText1}</h3>
          <h3 className='font-black text-7xl ml-[25px]'>{largeText2}</h3>
          <p className='m-[18px]'>{saleTime}</p>
        </div>
        <div>
          <p className='text-lg'>{smallText}</p>
          <h3 className='font-black text-4xl mb-2'>{midText}</h3>
          <p className='text-lg'>{desc}</p>
          <Link href={`/product/${product}`}>
            <button
              type='button'
              className='cursor-pointer bg-white rounded-[15px] py-1 px-4 my-10 text-lg font-medium text-[#f02d34] z-10 !important'
            >
              {buttonText}
            </button>
          </Link>
        </div>
        <img
          src={urlFor(image).url()}
          alt='imagem de um fone de ouvido'
          className='absolute -top-[25%] left-[25%]'
        />
      </div>
    </div>
  )
}

export default FooterBanner

import { BannerData } from '@/models/models'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
import Image from 'next/image'

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
    <div className='flex justify-center mt-28 bg-[#f02d34] rounded-[15px] relative w-full h-[400px] text-white leading-none'>
      <div className='w-full flex flex-row justify-between p-5 gap-10 sm:gap-0'>
        <div className='flex flex-col justify-center gap-5'>
          <p className=''>{discount}</p>
          <h3 className='font-black text-3xl sm:text-5xl md:text-7xl ml-[25px]'>
            {largeText1}
            <br />
            {largeText2}
          </h3>

          <p className=''>{saleTime}</p>
        </div>
        <div className='flex flex-col justify-end sm:justify-center items-end gap-1'>
          <p className='text-lg self-end'>{smallText}</p>
          <h3 className='font-black text-2xl sm:text-4xl mb-2'>{midText}</h3>
          <p className='text-xs sm:text-sm max-w-prose text-end'>{desc}</p>
          <Link href={`/product/${product}`}>
            <button
              type='button'
              className='cursor-pointer bg-white rounded-[15px] py-1 px-4 my-5 text-lg font-medium text-[#f02d34] z-10 !important'
            >
              {buttonText}
            </button>
          </Link>
        </div>
        <Image
          width={400}
          height={400}
          src={urlFor(image).url()}
          alt='imagem de um fone de ouvido'
          className='absolute -top-[25%] left-[0%] md:left-[25%]'
        />
      </div>
    </div>
  )
}

export default FooterBanner

'use client'
import { ProductData } from '@/models/models'
import { urlFor } from '@/lib/client'
import { currencyFormat } from '@/utils/currencyFormat'
import Link from 'next/link'
import Image from 'next/image'

interface ProductProps {
  product: ProductData
}
const Product = ({ product: { image, name, slug, price } }: ProductProps) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className='cursor-pointer scale-110 transition-transform duration-500 ease-in text-[#324d67] hover:scale-125'>
          <Image
            src={urlFor(image && image[0]).url()}
            width={200}
            height={200}
            alt=''
            className='rounded-2xl bg-[#ebebeb] scale-110 transition-transform duration-500 ease-in'
          />
          <div className=' w-[200px] flex flex-col justify-start'>
            <p className='font-medium mt-2.5'>{name}</p>
            <p className='font-extrabold text-black'>{currencyFormat(price)}</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product

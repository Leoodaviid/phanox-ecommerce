'use client'
import { ProductsData } from '@/models/models'
import { urlFor } from '@/lib/client'
import Link from 'next/link'
import styles from '../styles'

interface ProductProps {
  product: ProductsData
}
const Product = ({ product: { image, name, slug, price } }: ProductProps) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div
          className={`flex flex-col mb-9 justify-center items-center cursor-pointer scale-110 transition-transform duration-500 ease-in text-[#324d67] hover:scale-125`}
        >
          <img
            src={urlFor(image && image[0]).url()}
            width={200}
            height={200}
            alt=''
            className='rounded-2xl bg-[#ebebeb] scale-110 transition-transform duration-500 ease-in'
          />
          <div className=' w-[200px] flex flex-col justify-start'>
            <p className='font-medium mt-2.5'>{name}</p>
            <p className='font-extrabold text-black'>R${price},00</p>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Product

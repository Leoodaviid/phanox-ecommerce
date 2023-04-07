'use client'
import { useState, useEffect } from 'react'
import { Product } from '@/components'
import { getProducts, getProductsSlug } from '@/lib/api'
import { urlFor } from '@/lib/client'
import { AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar } from 'react-icons/ai'
import { ProductData } from '@/models/models'
import { useStateContext } from '@/context/StateContext'

interface ProductDetailsProps {
  params: {
    slug: string
  }
}

const ProductDetails = ({ params: { slug } }: ProductDetailsProps) => {
  const [productData, setProductData] = useState<ProductData>()
  const [productsData, setProductsData] = useState<ProductData[]>([])
  const [index, setIndex] = useState<number>(0)
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext()

  useEffect(() => {
    const fetchData = async () => {
      const productData = await getProductsSlug(slug)({})
      setProductData(productData)
      const allProductsData = await getProducts({ cache: 'no-store' })
      setProductsData(allProductsData)
    }
    fetchData()
  }, [])

  if (!productData) {
    return <div>Loading...</div>
  }
  const { image, name, details, price } = productData

  const handleBuyNow = () => {
    onAdd(productData, qty)
    setShowCart(true)
  }
  return (
    <div>
      <div className='flex justify-center flex-wrap gap-10 text-[#324d67]'>
        <div>
          <div className=''>
            <img
              src={urlFor(image && image[index]).url()}
              alt='produto'
              className='bg-[#ebebeb] rounded-[15px] w-[400px] h-[400px] cursor-pointer transition-transform duration-500 ease-in-out hover:bg-[#f02d34]'
            />
          </div>
          <div className='flex justify-center mt-2 gap-4'>
            {image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item).url()}
                alt=''
                className={
                  i === index
                    ? 'bg-[#f02d34] w-[70px] h-[70px] cursor-pointer rounded-[8px]'
                    : 'bg-[#ebebeb] w-[70px] h-[70px] cursor-pointer rounded-[8px]'
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-black text-3xl mb-2'>{name}</h1>
          <div className='flex'>
            <div className='flex text-[#f02d34]'>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4 className='mb-0 font-bold text-lg'>Detalhes:</h4>
          <p>{details}</p>
          <p className='text-2xl font-bold mt-4 text-[#f02d34]'>R${price},00</p>
          <div className='gap-8 mt-2 flex items-center'>
            <h3>Quantidade:</h3>
            <p className='flex items-center border-2 border-zinc-300'>
              <span className='border-r-2 border-zinc-300 p-2' onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className=' py-0.5 px-2 text-xl'>{qty}</span>
              <span className='border-l-2 border-zinc-300 p-2' onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className='flex flex-col sm:flex-row gap-2'>
            <button
              type='button'
              className='border-2 px-5 py-2.5 mt-10 text-lg font-medium cursor-pointer transition-transform duration-500 ease-in text-[#f02d34] hover:scale-105 z-0'
              onClick={() => onAdd(productData, qty)}
            >
              Adicionar ao carrinho
            </button>
            <button
              type='button'
              className='px-5 py-2.5 mt-5 text-lg font-medium cursor-pointer transition-transform duration-500 ease-in bg-[#f02d34] text-white hover:scale-105 z-10'
              onClick={handleBuyNow}
            >
              Compre Agora
            </button>
          </div>
        </div>
      </div>
      <div className='mt-8'>
        <h2 className='text-center font-bold text-xl text-[#324d67]'>Você pode gostar</h2>
        <div className='relative w-full h-[400px] overflow-hidden'>
          <div className='flex justify-center gap-16 mt-16 absolute whitespace-nowrap will-change-transform w-full animate-marquee'>
            {productsData.map((product, index) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails

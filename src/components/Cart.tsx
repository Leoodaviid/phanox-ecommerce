'use client'
import { useRef } from 'react'
import { useStateContex } from '@/context/StateContext'
import { AiOutlineMinus, AiOutlinePlus, AiOutlineLeft, AiOutlineShopping } from 'react-icons/ai'
import { TiDeleteOutline } from 'react-icons/ti'
import { urlFor } from '@/lib/client'
import Link from 'next/link'

const Cart = () => {
  const cartRef = useRef<HTMLDivElement>(null)
  const { totalPrice, totalQuanties, cartItems, setShowCart, toggleCartItemQuantity, onRemove } =
    useStateContex()

  return (
    <div
      className='w-screen bg-[rgba(0, 0, 0, 0.5)] fixed right-0 top-0 z-50 transition-all duration-1000 ease-in-out'
      ref={cartRef}
    >
      <div className='h-screen w-[600px] bg-white float-right py-10 px-2.5 relative'>
        <button
          type='button'
          className='flex items-center text-base font-medium cursor-pointer gap-0.5 ml-2.5 border-none bg-transparent'
          onClick={() => setShowCart(false)}
        >
          <AiOutlineLeft />
          <span className='ml-2.5'>Seu carrinho</span>
          <span className='ml-2.5 text-[#f02d34]'>({totalQuanties} itens)</span>
        </button>
        {cartItems.length < 1 && (
          <div className='m-10 flex flex-col justify-center items-center'>
            <AiOutlineShopping size={150} />
            <h3 className='font-semibold text-xl'>O seu Carrinho de compras está vazio</h3>
            <Link href='/'>
              <button
                type='button'
                onClick={() => setShowCart(false)}
                className='w-full max-w-[400px] py-2.5 px-3 rounded-[15px] border-none text-xl uppercase bg-[#f02d34] text-white cursor-pointer mt-10 transition-transform duration-500 ease-in hover:scale-110'
              >
                Continue comprando
              </button>
            </Link>
          </div>
        )}
        <div className='mt-2'>
          {cartItems.length >= 1 &&
            cartItems.map((item) => (
              <div className='flex justify-evenly py-5 px-1.5' key={item._id}>
                <img
                  src={urlFor(item?.image[0]).url()}
                  alt={item.name}
                  className='w-3/12 h-1/4 rounded-[15px] bg-[#ebebeb]'
                />
                <div className='w-[350px] text-[#324d67]'>
                  <div className='flex flex-wrap justify-between'>
                    <h5>{item.name}</h5>
                    <h4>R${item.price},00</h4>
                  </div>
                  <div className='flex justify-between mt-10'>
                    <div>
                      <p className='flex items-center w-[100px] border-2 border-zinc-300'>
                        <span
                          className='border-r-2 border-zinc-300 p-2'
                          onClick={() => toggleCartItemQuantity(item._id, 'dec')}
                        >
                          <AiOutlineMinus />
                        </span>
                        <span className=' py-0.5 px-2 text-xl'>{item.quantity}</span>
                        <span
                          className='border-l-2 border-zinc-300 p-2'
                          onClick={() => toggleCartItemQuantity(item._id, 'inc')}
                        >
                          <AiOutlinePlus />
                        </span>
                      </p>
                    </div>
                    <button
                      type='button'
                      className='text-2xl text-[#f02d34] cursor-pointer bg-transparent border-none'
                      onClick={() => onRemove(item)}
                    >
                      <TiDeleteOutline />
                    </button>
                  </div>
                </div>
              </div>
            ))}
        </div>
        {cartItems.length >= 1 && (
          <div className='absolute bottom-[12px] right-[5px] w-full py-[30px] px-[65px]'>
            <div className='flex justify-between text-xl font-bold'>
              <h3>Total:</h3>
              <h3>R${totalPrice},00</h3>
            </div>
            <div className='w-[400px] m-auto text-center'>
              <button
                type='button'
                className='w-full max-w-[300px] py-2.5 px-3 rounded-[15px] border-none text-xl uppercase bg-[#f02d34] text-white cursor-pointer mt-10 transition-transform duration-500 ease-in hover:scale-110'
              >
                Pagar
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Cart

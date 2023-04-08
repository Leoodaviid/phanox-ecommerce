'use client'
import { useEffect } from 'react'
import { BsBagCheckFill } from 'react-icons/bs'

import { useStateContext } from '@/context/StateContext'
import Link from 'next/link'
import { runFireWorks } from '@/utils/confetti'

const Success = () => {
  const { setCartItems, setTotalPrice, setTotalQuanties } = useStateContext()

  useEffect(() => {
    localStorage.clear()
    setCartItems([])
    setTotalPrice(0)
    setTotalQuanties(0)
    runFireWorks()
  }, [])

  return (
    <div className='bg-[#dcdcdc] rounded-[15px] min-w-[60vw] mt-10'>
      <div className='flex justify-center flex-col items-center p-[50px]'>
        <p className='text-4xl text-green-500'>
          <BsBagCheckFill />
        </p>
        <h2 className='text-4xl text-[#324d67] capitalize font-blank my-3.5'>
          Obrigado pelo seu pedido!
        </h2>
        <p className='text-xl font-semibold'>
          verifique a sua caixa de entrada de e-mail para obter o recibo.
        </p>
        <p className='text-base font-semibold text-center mt-5'>
          Se você tiver alguma dúvida, envie um e-mail:
          <br />
          <a href='mailto:phanox.suport@outlook.com' className='text-[#f02d34]'>
            phanox.suport@outlook.com
          </a>
        </p>
        <Link href='/'>
          <button className='w-[300px] py-2 px-3 rounded-[15px] border-none text-xl uppercase bg-[#f02d34] text-white cursor-pointer mt-5 transition-transform duration-500 ease-in hover:scale-110'>
            Continue comprando
          </button>
        </Link>
      </div>
    </div>
  )
}

export default Success

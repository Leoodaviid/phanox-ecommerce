import { AiOutlineShopping } from 'react-icons/ai'
import { useStateContext } from '@/context/StateContext'
import Link from 'next/link'
import Cart from './Cart'

const Navbar = () => {
  const { showCart, setShowCart, totalQuanties } = useStateContext()
  return (
    <div className='flex justify-between relative my-1.5 mx-4'>
      <p className='text-stone-400 text-lg'>
        <Link href='/'>PHANOX</Link>
      </p>
      <button
        type='button'
        className='text-2xl text-stone-400 cursor-pointer relative transition-transform duration-300 ease-in hover:scale-125'
        onClick={() => setShowCart(true)}
      >
        <AiOutlineShopping />
        <span className='absolute top-0 -right-2 text-xs text-[#eee] bg-[#f02d34] w-[18px] h-[18px] rounded-full text-center font-semibold'>
          {totalQuanties}
        </span>
      </button>
      {showCart && <Cart />}
    </div>
  )
}

export default Navbar

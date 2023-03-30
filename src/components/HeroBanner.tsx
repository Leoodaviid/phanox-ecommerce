'use client'
import Link from 'next/link'
import styles from '../styles'

const HeroBanner = () => {
  return (
    <div className={`${styles.paddings} w-full h-[500px] relative bg-[#dcdcdc] rounded-[15px]`}>
      <div>
        <p className='text-sm'>SMALL TEXT</p>
        <h3 className='text-6xl font-semibold mt-[4px]'>MID TEXT</h3>
        <img
          src=''
          alt='headphones'
          className='absolute top-[0%] right-[20%] w-[450px] h-[450px]'
        />
        <div>
          <Link href='/product/ID'>
            <button
              type='button'
              className='cursor-pointer bg-[#f02d34] rounded-[15px] py-1 px-4 my-10 text-lg font-medium text-white z-10 !important'
            >
              BUTTON TEXT
            </button>
          </Link>
          <div className='absolute right-[10%] bottom-[5%] w-[300px] flex flex-col text-[#324d67]'>
            <h5>Description</h5>
            <p>DESCRIPTION</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner

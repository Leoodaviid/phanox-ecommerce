import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='flex justify-center flex-col gap-2.5 font-bold text-[#324d67] text-center mt-5 py-7 px-2.5'>
      <p>2023 PHANOX&copy; Alguns direitos reservados.</p>
      <p className='flex justify-center text-xl gap-2.5'>
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  )
}

export default Footer

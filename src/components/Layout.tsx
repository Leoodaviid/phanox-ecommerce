import Head from 'next/head'
import Navbar from './Navbar'
import Footer from './Footer'
import { ReactNode } from 'react'
interface LayoutProps {
  children: ReactNode
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <div className='p-2.5'>
      <Head>
        <title>Phanox Store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className='max-w-[1400px] w-full m-auto'>{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  )
}

export default Layout

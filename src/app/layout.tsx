'use client'
import { Layout } from '@/components'
import { ReactNode } from 'react'
import { StateContext } from '@/context/StateContext'
import { Toaster } from 'react-hot-toast'
import '../styles/globals.css'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='pt-BR'>
      <body>
        <StateContext>
          <Toaster />
          <Layout>{children}</Layout>
        </StateContext>
      </body>
    </html>
  )
}

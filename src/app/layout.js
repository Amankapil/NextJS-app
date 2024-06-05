'use client'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header/Header'
import Header2 from '@/components/Header/Header2'
import Footer from '@/components/Footer/Footer'
import Link from 'next/link'
import { TransitionProvider } from '@/components/context/TransitionContext'
import TransitionComponent from '@/components/Transition'
import Lenis from 'lenis'
import { useEffect } from 'react'

const inter = Inter({ subsets: ['latin'] })

// export const metadata = {
//   title: 'Hiring Tech',
//   description: 'Hire Good geeks'
// }

export default function RootLayout ({ children }) {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const lenis = new Lenis()

      lenis.on('scroll', e => {
        console.log(e)
      })

      function raf (time) {
        lenis.raf(time)
        requestAnimationFrame(raf)
      }

      requestAnimationFrame(raf)
    }
  }, [])

  return (
    <html lang='en'>
      <body className={inter.className}>
        <Header2 />

        <main className='max-w7xl mx-auto er'>
          {/* <TransitionComponent> */}
          {children}
          {/* </TransitionComponent> */}
        </main>
        <Footer />

        <div className='fixed bottom-5 right-10 z-[99999]'>
          <Link href='whatsapp://send?phone=+918770161528'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='62'
              height='62'
              viewBox='0 0 62 62'
              fill='none'
            >
              <rect
                width='61.831'
                height='61.8311'
                rx='16.6667'
                fill='#25D366'
              />
              <path
                fillRule='evenodd'
                clipRule='evenodd'
                d='M31.0003 14.3337C28.0621 14.333 25.176 15.1091 22.6344 16.5833C20.0928 18.0575 17.9861 20.1774 16.5278 22.7281C15.0694 25.2789 14.3113 28.1698 14.3303 31.1079C14.3493 34.0461 15.1446 36.927 16.6358 39.4587L17.8212 40.9545L16.3691 45.8691L21.2024 44.5191L21.992 45.0253C24.171 46.4243 26.6461 47.2963 29.2208 47.5722C31.7956 47.848 34.3991 47.5201 36.8251 46.6145C39.251 45.7089 41.4326 44.2505 43.1967 42.3549C44.9609 40.4594 46.2591 38.1788 46.9883 35.6942C47.7176 33.2095 47.8579 30.5891 47.3981 28.0408C46.9383 25.4925 45.891 23.0864 44.3393 21.0133C42.7877 18.9402 40.7743 17.2572 38.4589 16.0977C36.1435 14.9383 33.5898 14.3343 31.0003 14.3337ZM10.167 31.0003C10.167 19.4941 19.4941 10.167 31.0003 10.167C42.5066 10.167 51.8337 19.4941 51.8337 31.0003C51.8337 42.5066 42.5066 51.8337 31.0003 51.8337C27.3301 51.8389 23.7242 50.8705 20.5503 49.0274L10.242 51.9066L13.2128 41.8462L13.2003 41.8316L13.1316 41.717C11.1869 38.481 10.1619 34.7757 10.167 31.0003Z'
                fill='white'
              />
              <path
                d='M40.8649 34.1086C40.7857 34.0711 37.7462 32.5752 37.2066 32.3794C36.9814 32.2863 36.7417 32.2334 36.4982 32.2231C36.0899 32.2231 35.7441 32.4273 35.4774 32.8294C35.1732 33.2815 34.2545 34.3544 33.9712 34.6752C33.9337 34.7169 33.8837 34.769 33.8524 34.769C33.8253 34.769 33.3545 34.5752 33.2128 34.5127C29.9545 33.0961 27.4816 29.694 27.142 29.119C27.0941 29.0356 27.092 29.0002 27.092 29.0002C27.1024 28.9565 27.2128 28.8461 27.2691 28.7898C27.4357 28.6252 27.6149 28.4106 27.7878 28.2002L28.0316 27.9086C28.2837 27.6169 28.3962 27.3877 28.5253 27.1273L28.5941 26.9898C28.6972 26.7812 28.7473 26.5505 28.74 26.3179C28.7327 26.0854 28.6683 25.8582 28.5524 25.6565C28.4816 25.5127 27.1982 22.4169 27.0628 22.0919C26.7337 21.3065 26.3003 20.9419 25.6982 20.9419C25.642 20.9419 25.6982 20.9419 25.4649 20.9523C25.1795 20.9627 23.6253 21.169 22.9378 21.6002C22.2087 22.0586 20.9795 23.5252 20.9795 26.1002C20.9795 28.4169 22.4482 30.6044 23.0795 31.4356L23.1649 31.5606C25.5837 35.0919 28.5982 37.7086 31.6524 38.9294C34.5941 40.1044 35.9878 40.2419 36.7795 40.2419C37.1128 40.2419 37.3795 40.2148 37.6128 40.1919L37.7628 40.1773C38.7795 40.0877 41.0128 38.9294 41.5212 37.519C41.9212 36.4065 42.0274 35.1919 41.7607 34.7502C41.5774 34.4502 41.2628 34.3002 40.8649 34.1086Z'
                fill='white'
              />
            </svg>
          </Link>
        </div>
        {/* </TransitionProvider> */}
      </body>
    </html>
  )
}

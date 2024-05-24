import React from 'react'

import Image from 'next/image'
// import Link from "next/link";
import hero from './assets/prime.png'
import hero1 from './clients/xebia.png'
import hero2 from './clients/wns.png'
import hero3 from './clients/tm.png'
import hero4 from './clients/tele.png'
import hero5 from './clients/tech.png'
import hero6 from './clients/sep.png'
import hero7 from './clients/pur.png'
import hero8 from './clients/pay.png'
import hero9 from './clients/inc.png'
import hero10 from './clients/gen.png'
import hero11 from './clients/ch.png'

import './style.scss'
import Link from 'next/link'

const Clients = () => {
  return (
    <>
      <div className='clint  '>
        <div className=' max-w-7xl mx-auto py-20 flex justify-between items-center gap-20 max-md:flex-col'>
          <div className='servidc mb-10 h-full w-[50%] max-md:w-full max-md:p-4'>
            <h3 className='self-start text-[#175574] text-xl font-bold leading-[51.2px]'>
              <span className='text-[#D79442]'>|</span> Partners
            </h3>
            <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
              We Worked with The Best Partners
            </h1>
            <p className='text-[#175574] text-[22px] font-medium uppercase'>
              Team . Customers . Community
            </p>
            <p className='text-[#175574] text-[20px] font-bold mt-8 mb-10'>
              Our trusted partners collaborate with us to enhance learning
              experiences, ensuring industry relevance and excellence.
            </p>

            <Link
              href='/Industries'
              className='px-8 py-3 mt-10 hover:bg[#8AAAE5] bg-[#D79442] text-white hover:bg-[#CC7914] rounded-3xl  '
            >
              Read more
            </Link>
          </div>
          <div className=' flex gap-20 flex-wrap justify-center items-center max-md:gap-8 h-[400px] overflow-hidden'>
            <div className=' flex gap-16 flex-col justify-center items-center max-md:gap-8 top-bot'>
              <div>
                <Image src={hero} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero1} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero2} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero3} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero4} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero5} width={150} alt='hero' />
              </div>
            </div>
            <div className=' flex gap-16 flex-col justify-center items-center max-md:gap-8 bot-top '>
              <div>
                <Image src={hero6} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero7} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero8} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero9} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero10} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero11} width={150} alt='hero' />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <marquee>
 
        <Image src={hero} width={100} alt="hero" />
        <Image src={hero} width={100} alt="hero" />
        <Image src={hero} width={100} alt="hero" />
        <Image src={hero} width={100} alt="hero" />
      </marquee> */}

      {/* <div className="marquee-container">
        <div className="marquee-content flex">
          <Image src={hero} width={100} alt="hero" />
          <span>Your marquee content goes here. </span>
          <Image src={hero} width={100} alt="hero" />
          <Image src={hero} width={100} alt="hero" />
          <Image src={hero} width={100} alt="hero" />
        </div>
      </div> */}
    </>
  )
}

export default Clients

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

const Clients = () => {
  return (
    <>
      <div className='client  '>
        <div className=' max-w-6xl mx-auto py-20 '>
          <h2 className=' text-[#062b43] text-4xl font-bold mb-4 max-lg:text-center'>
            Trusted Partners
          </h2>
          <div className=' flex gap-20 flex-wrap justify-center items-center max-md:gap-8'>
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

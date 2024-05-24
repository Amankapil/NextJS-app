import React from 'react'
import Image from 'next/image'
import hero from './assetss/he.png'
import hero1 from './assetss/71.png'
// import herok from "./assets/1094546947preview.mp4";
// import herok from "./assets/1097384643preview.mp4";
import herok from './assets/hero.jpg'
import './style.scss'
import Link from 'next/link'

const Hero = () => {
  return (
    <>
      <div className='her-container h-[650px] max-lg:h-full'>
        {/* <video
          controls
          preload="none"
          autoPlay
          loop
          muted
          className="hero-video"
        >
          <source src={herok} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className='hero- flex justify-center items-center gap-40 py-40 h-full max-w-7xl mx-auto max-md:flex-col max-md:p-4'>
          <div className='left-description w-[47%] mx-auto max-md:w-full max-md:'>
            <h1 className='text-[55px] w- max-w-6xl mx-auto max-sm:text-[40px] max-sm:p-1 text-left text-[#062B43] font-bold leading-[62px] mt6'>
              Pioneering together we craft transformative success
            </h1>
            <p className='w[50%] text-left max-lg:w-full text-[27px] font-medium mx-auto opacity85 mt-8 text-[#175574] '>
              Information Technology Consulting Services IT Consulting services
              integrate new systems, ensure robust cybersecurity, or navigate
              the rapid pace of tech advancements.
            </p>
            {/* <p className="text-white font-medium text-[18px] mt-5">
              By way of us you can achieve what you want.
            </p> */}
            <div className='mt-8'>
              <Link
                href='/contact
'
                className='px-8 py-3 hover:bg[#8AAAE5] bg-[#D79442] hover:bg-[#CC7914] text-white hovertext-black rounded-3xl  '
              >
                Contact Us
              </Link>
            </div>
          </div>
          <div className='right-desc w-[40%] max-md:w-full'>
            <Image src={hero1} width={600} alt='hero' />
          </div>
        </div>
      </div>

      {/* div. */}
    </>
  )
}

export default Hero

import Image from 'next/image'
import React from 'react'
// Image
import img from './assets/Group 112.png'
import img2 from './assets/Group 115.png'
import img3 from './assetss/1.png'
import img4 from './assetss/2.png'

import './style.scss'
const Vision2 = () => {
  return (
    <div className='bg[#20AFED] flex flex-col self-center p10 pb-20 mt28 w-full max-w-7xl mxauto max-md:mt-10 max-md:max-w-full mx-auto backdrop-blur-[110.60px] visin-bg max-md:p-4'>
      <div className='max-w-7xl mx-auto'>
        <div className='flex flex-col self-end max-w-full w[287px]'>
          <div className='flex max-lg:flex-col justify-between gap-40 max-md:gap-10 items-center max-md:items-center max-md:justify-center max-md:flex-wrap'>
            <div className='flex flex-col items-start pt-6 aspect bgstone-300 rounded[65px] max-md:pr-5'>
              <div className='flex z-10 flex-col items-start px-5 pt-1 pb-6 mb-0 bordr max-md:mb-2.5'>
                <Image
                  loading='lazy'
                  src={img3}
                  alt='k'
                  className='w-full aspect[1.06]'
                />
              </div>
            </div>
            <div className='flex z-10 flex-col mt-0 max-w-full w[561px] max-md:mt-0 max-lg:w-full'>
              <h1 className='text-[41px] font-bold text-[#062B43] leading-[51.2px] max-md:max-w-full max-md:text-center'>
                Our Vision
              </h1>
              <div className='mt-8 text-[27px] max-sm:text-[27px] tracking-tight text-[#175574] max-md:max-w-full max-md:text-center w-[115%]'>
                Our vision is to empower individuals
                <br />
                worldwide through accessible <br />
                and innovative learning solutions.
              </div>
            </div>
          </div>

          <div className=''>
            <div className='flex justify-center max-lg:flex-wrap-reverse max-lg:w-full max-md:gap-10 max-md:mt-10'>
              <div className='w-[50%] max-md:w-full'>
                <h1 className='self-start max-md:text-center text-start mt-16 text-[41px] font-bold text-[#062B43]  leading-[51.2px] max-md:mt-10'>
                  Our Mission
                </h1>
                <div className='self-start mt-0 mb-2.5 text-[27px] tracking-tight text-start text-[#175574] max-md:mt-0 max-md:max-w-full max-md:self-start max-md:text-center max-sm:text-[20px]'>
                  Our mission is to be the leading provider of transformative
                  education
                  <br />
                  and talent acquisition solutions.
                </div>
              </div>

              <Image
                loading='lazy'
                src={img4}
                alt='k'
                className='w aspect[1.06]'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Vision2

import React from 'react'
import './career.scss'
import Image from 'next/image'
import img from './32.png'

const CareerHero = () => {
  return (
    <>
      <div className='careerhr h-[840px] max-md:h-full'>
        <div className=' mx-auto max-w-6xl text-start w-3/4 py-20 mt-0'>
          <div className='servidc mb-20'>
            <h3 className='self-start text-[#175574] text-xl font-bold leading-[51.2px]'>
              Career
            </h3>
            <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
              Join Us.
            </h1>
            <p className='self-start text-[#175574] text-[20px] font-bold leading-[26.2px]'>
              Help Us make web faster
            </p>
          </div>

          <div className='bg-[#fff7f7]'>
            <Image
              className='mix-blend-difference bg-black as'
              src={img}
              alt=''
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CareerHero

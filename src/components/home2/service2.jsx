import Image from 'next/image'
import React from 'react'

import img from './assets/Group 104.svg'
import Link from 'next/link'
// Image

const Service2 = () => {
  return (
    <>
      <div className='w-full  vision-bg'>
        <div className='servce max-w-7xl mx-auto py-10 h-[500px] max-lg:h-full'>
          <div className='heading'>
            {/* <h1 className='text-black text-[48px] mb-5 max-md:text-center max-md:text-[30px]'></h1> */}
            <h2 className=' text-[#062b43] text-4xl font-bold mb-4 max-lg:text-center'>
              Our Team Provides Valuable Services
            </h2>
          </div>

          <div className='cards-service flex gap-10 justify-center hfull itementer max-lg:flex-col max-md:items-center max-md:justify-center'>
            <div className='cardone p-7 bg-[#175574] w-[265px] h-[140px] rounded-tl-[0px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[88px] hover:w-[350px] hover:h-[273px] group transition-all hover:rounded-tl-[4px] hover:rounded-br-[4px] hover:rounded-bl-[44px] hover:rounded-tr-[44px] hover:bg-blue-900 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-300 duration-300'>
              <div className='img'>
                <Image src={img} alt='j' />
              </div>

              <div className='head-train'>
                <h1 className='text-white font-extrabold text-[22px]'>
                  Tech Training
                </h1>
              </div>
              <div className='content hidden group-hover:block'>
                <p className='text-white '>
                  In our tech training consultancy, we provide comprehensive
                  programs tailored to the ever-evolving tech landscape.
                </p>
                <Link href='/services' className='text-white underline mt-3 '>
                  read more
                </Link>
              </div>
            </div>
            <div className='cardone p-7 bg-[#175574] w-[265px] h-[140px] rounded-tl-[0px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[88px] hover:w-[350px] hover:h-[273px] group transition-all hover:rounded-tl-[4px] hover:rounded-br-[4px] hover:rounded-bl-[44px] hover:rounded-tr-[44px] hover:bg-blue-900 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-300 duration-300'>
              <div className='img'>
                <Image src={img} alt='j' />
              </div>

              <div className='head-train'>
                <h1 className='text-white font-extrabold text-[22px]'>
                  IT concerns.
                </h1>
              </div>
              <div className='content hidden group-hover:block'>
                <p className='text-white '>
                  Hiring tech service is working as placement consultant service
                  company serving the needs of the client.
                </p>
                <Link href='/services' className='text-white underline mt-3 '>
                  read more
                </Link>
              </div>
            </div>
            <div className='cardone p-7 bg-[#175574] w-[265px] h-[140px] rounded-tl-[0px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[88px] hover:w-[350px] hover:h-[273px] group transition-all hover:rounded-tl-[4px] hover:rounded-br-[4px] hover:rounded-bl-[44px] hover:rounded-tr-[44px] hover:bg-blue-900 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-300 duration-300'>
              <div className='img'>
                <Image src={img} alt='j' />
              </div>
              <div className='head-train'>
                <h1 className='text-white font-extrabold text-[22px]'>
                  HR training
                </h1>
              </div>
              <div className='content hidden group-hover:block'>
                <p className='text-white '>
                  In our HR training consultancy, we offer comprehensive
                  programs tailored to empower professionals in human resources
                  management.
                </p>
                <Link href='/services' className='text-white underline mt-3 '>
                  read more
                </Link>
              </div>
            </div>
            <div className='cardone p-7 bg-[#175574] w-[265px] h-[140px] rounded-tl-[0px] rounded-tr-[4px] rounded-br-[4px] rounded-bl-[88px] hover:w-[350px] hover:h-[273px] group transition-all hover:rounded-tl-[4px] hover:rounded-br-[4px] hover:rounded-bl-[44px] hover:rounded-tr-[44px] hover:bg-blue-900 hover:bg-gradient-to-b hover:from-blue-900 hover:to-blue-300 duration-300'>
              <div className='img'>
                <Image src={img} alt='j' />
              </div>

              <div className='head-train'>
                <h1 className='text-white font-extrabold text-[22px]'>
                  Web services
                </h1>
              </div>
              <div className='content hidden group-hover:block'>
                <p className='text-white '>
                  In our web development training consultancy, we provide
                  comprehensive programs designed to equip individuals with the
                  skills
                </p>
                <Link href='/services' className='text-white underline mt-3 '>
                  read more
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Service2

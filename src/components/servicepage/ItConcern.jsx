import React from 'react'
// import img3 from "../assets/pexels-iryna-riabchykova-12876443 1.png"
import Image from 'next/image'

// import img from './assets/hree.webp'
import img from './assets/12.png'
import img2 from './assets/32.png'
import img3 from './assets/33.png'
import img4 from './assets/34.png'
import './service.scss'
import Link from 'next/link'

const ItConcern = () => {
  return (
    <>
      <div className='startw'>
        <div className='serviepageappdes max-lg:px-4 bg-srvice cardw'>
          <div className='w-full h-full relative max-lg:h-full'>
            <div className='flex max-lg:flex-wrap   max-lg:justify-center  max-lg:items-center   max-w-6xl mx-auto justify-center gap-40 items-center bg-white  p-8 rounded-[80px] max-md:gap-10'>
              <div className='w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-full mt[80px]  bg-inc-100 flexcol relative justify-center items-center flex'>
                <Image src={img} hieght={400} alt='hero' />
                <div className="w-[631.03px] max-md:w-full text-[#175574] text-[22px] font-normal font[''] leading-[33.04px] max-sm:text-[40px] absolute top-4 right-4 text-end max-md:hidden">
                  Service Spectrum
                </div>
              </div>

              <div className='max-md:w-full'>
                <div className='w[631.03px] max-md:w-full text-[#175574] text-[41px] font-bold leading-[33.04px] max-sm:text-[40px] '>
                  Tech Training
                </div>
                <div className='ml[80px] max-md:ml-0 mt-[20px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4'>
                  <div className='flex-col justify-start items-start gap-[42px] flex'>
                    <div className='flex-col justify-start items-start gap-[22px] flex'>
                      <div className="w-[513.61px] max-md:w-full opacity80 text-[#175574]  font-normal font[''] leading-normal text-[18px]">
                        Unlock your tech potential with tailored courses led by
                        experienced instructors. Flexible online sessions ensure
                        your success. Tailored programs in programming, software
                        development, data science, cybersecurity, and more.
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link
                    href='/contact'
                    className='px-8 py-3 hover:bg[#8AAAE5] bg-[#D79442] text-white hover:bg-[#CC7914] rounded-3xl  '
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='serviepageappdes my-10 max-lg:px-4 bg-srvice cardw'>
          <div className='w-full h-full relative max-lg:h-full'>
            <div className='flex max-lg:flex-wrap  max-lg:justify-center  max-lg:items-center   max-w-6xl mx-auto justify-center gap-40 items-center bg-white  p-8 rounded-[80px] max-md:gap-10'>
              <div className='w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-full mt[80px]  bg-inc-100 flexcol relative justify-center items-center flex'>
                <Image src={img2} hieght={400} alt='hero' />
                <div className="w-[631.03px] max-md:w-full text-[#175574] text-[22px] font-normal font[''] leading-[33.04px] max-sm:text-[40px] absolute top-4 right-4 text-end max-md:hidden">
                  Tech Solutions
                </div>
              </div>

              <div className='max-md:w-full'>
                <div className='w[631.03px] max-md:w-full text-[#175574] text-[41px] font-bold leading-[33.04px] max-sm:text-[40px] '>
                  IT Concern
                </div>
                <div className='ml[80px] max-md:ml-0 mt-[20px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4'>
                  <div className='flex-col justify-start items-start gap-[42px] flex'>
                    <div className='flex-col justify-start items-start gap-[22px] flex'>
                      <div className="w-[513.61px] max-md:w-full opacity80 text-[#175574]  font-normal font[''] leading-normal text-[18px]">
                        Our training offers flexible formats, led by experts,
                        fostering real-world web development skills in inclusive
                        environments. Flexible training formats: online courses,
                        personalized coaching. Support and collaboration
                        opportunities provided.
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link
                    href='/contact'
                    className='px-8 py-3 hover:bg[#8AAAE5] bg-[#D79442] text-white hover:bg-[#CC7914] rounded-3xl  '
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='serviepageappdes ny-10 max-lg:px-4 bg-srvice cardw'>
          <div className='w-full h-full relative max-lg:h-full'>
            <div className='flex max-lg:flex-wrap  max-lg:justify-center  max-lg:items-center   max-w-6xl mx-auto justify-center gap-40 items-center bg-white  p-8 rounded-[80px] max-md:gap-10'>
              <div className='w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-full mt[80px]  bg-inc-100 flexcol relative justify-center items-center flex'>
                <Image src={img3} hieght={400} alt='hero' />
                <div className="w-[631.03px] max-md:w-full text-[#175574] text-[22px] font-normal font[''] leading-[33.04px] max-sm:text-[40px] absolute top-4 right-4 text-end max-md:hidden">
                  Service Spectrum
                </div>
              </div>

              <div className='max-md:w-full'>
                <div className='w[631.03px] max-md:w-full text-[#175574] text-[41px] font-bold leading-[33.04px] max-sm:text-[40px] '>
                  HR Training
                </div>
                <div className='ml[80px] max-md:ml-0 mt-[20px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4'>
                  <div className='flex-col justify-start items-start gap-[42px] flex'>
                    <div className='flex-col justify-start items-start gap-[22px] flex'>
                      <div className="w-[513.61px] max-md:w-full opacity80 text-[#175574]  font-normal font[''] leading-normal text-[18px]">
                        Empower HR professionals with practical skills.
                        Comprehensive programs, diverse formats, led by
                        experienced instructors. Comprehensive HR training
                        programs covering recruitment, employee relations,
                        performance management, and more.
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link
                    href='/contact'
                    className='px-8 py-3 hover:bg[#8AAAE5] bg-[#D79442] text-white hover:bg-[#CC7914] rounded-3xl  '
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='serviepageappdes max-lg:px-4 bg-srvice cardw  h-full'>
          <div className='w-full h-full relative max-lg:h-full'>
            <div className='flex max-lg:flex-wrap  max-lg:justify-center  max-lg:items-center   max-w-6xl mx-auto justify-center gap-40 items-center bg-white  p-8 rounded-[80px] max-md:gap-10  h-full'>
              <div className='w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-full mt[80px]  bg-inc-100 flexcol relative justify-center items-center flex'>
                <Image src={img4} hieght={400} alt='hero' />
                <div className="w-[631.03px] max-md:w-full text-[#175574] text-[22px] font-normal font[''] leading-[33.04px] max-sm:text-[40px] absolute top-4 right-4 text-end max-md:hidden">
                  Service Spectrum
                </div>
              </div>

              <div className='max-md:w-full  h-full'>
                <div className='w[631.03px] max-md:w-full text-[#175574] text-[41px] font-bold leading-[33.04px] max-sm:text-[40px] '>
                  Web Development
                </div>
                <div className='ml[80px] max-md:ml-0 mt-[20px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4  h-full'>
                  <div className='flex-col justify-start items-start gap-[42px] flex'>
                    <div className='flex-col justify-start items-start gap-[22px] flex'>
                      <div className="w-[513.61px] max-md:w-full opacity80 text-[#175574]  font-normal font[''] leading-normal text-[18px]">
                        Our web development training equips individuals with
                        essential skills for success in evolving tech industry.
                        Designed to equip individuals for success in the rapidly
                        evolving field. Practical, hands-on learning approach.
                      </div>
                    </div>
                  </div>
                </div>

                <div className='mt-8'>
                  <Link
                    href='/contact'
                    className='px-8 py-3 hover:bg[#8AAAE5] bg-[#D79442] text-white hover:bg-[#CC7914] rounded-3xl  '
                  >
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ItConcern

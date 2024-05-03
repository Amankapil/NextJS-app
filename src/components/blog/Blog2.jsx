import React from 'react'
// import './css/insight.css'
import Image from 'next/image'
import Link from 'next/link'

import Emailsub from './Emailsub'

import bgl from './assets/bl1.png'
import bgl2 from './assets/bl2.png'
import bgl3 from './assets/bl3.png'
import bgl4 from './assets/bl4.png'
import bgl5 from './assets/bl5.png'

import './blog.scss'
const Blog2 = () => {
  return (
    <>
      <div className='w-full h-full backg '>
        <div className='headerb h-[450px] flex items-center max-xl:h-[400px] max-lg:h-[350px] max-md:h-[300px] max-sm:h-[200px]'>
          <h1
            className=' w-[750px] h-[300px] font-bold text-[60px] text-gradient ml-[200px] max-xl:ml-[100px] max-xl:text-[50px] max-xl:w-[600px]
max-lg:ml-[70px] max-lg:text-[40px] max-lg:w-[500px] max-md:mt-[50px] max-sm:ml-[30px] max-sm:mt-[200px] max-sm:text-[20px] max-sm:w-[250px] text-white'
          >
            Insights that helps you stay in the know
          </h1>
        </div>

        <h1 className='bg-[#096B99] font-semibold text-[24px] w-[130px] h-[30px] max-md:w-[90px] max-sm:w-[70px] max-sm:h-[20px] mt-[100px] max-md:mt-[20px] max-sm:mt-[10px] ml-[50px] max-lg:text-[20px] max-md:text-[16px] max-sm:text-[12px]'>
          OUR BLOG
        </h1>
        <h1 className='font-normal text-[64px] tracking-tight leading-[57px] mt-[50px]  max-md:mt-[20px] max-sm:mt-[10px] ml-[50px] max-lg:text-[55px] max-md:text-[40px] max-sm:text-[30px]'>
          Articles
        </h1>

        <div className='blog-bg'>
          <div
            className='w-full flex flex-wrap  gap-[100px]  max-lg:gap-y-[50px] justify-center items-center max-w-7xl mx-auto
max-md:gap-y-[20px] ml[90px] max-xl:ml-[50px] max-sm:ml-[0px] py-[100px] max-md:pt-[50px]  max-sm:flex max-sm:flex-col max-sm:items-center '
          >
            <Link href='/blog/Digital-Frontiers'>
              <div className='bg[#fff] rounded-lg shadowlg w-[340px] h[370px] max-md:w-[320px] max-md:h-[350px] max-sm:w-[280px] max-sm:h-[300px] p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn'>
                  <Image
                    src={bgl}
                    className='mb-[5px] max-sm:-[90px] maxh-[90px] blog-'
                    alt='First Box'
                  />
                </div>
                <div className='absolute bottom-10 text-center p-10 left-0 '>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Unveiling the Digital Symphony
                  </h3>
                  <p className='font-light text-[16p] leading-[17px] tracking-tight mb-[20px]'>
                    Website Design and Digital Marketing as the Art of Brand
                    Orchestration.
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog/Tech-chronicles'>
              <div className='bg[#fff] rounded-lg shadowlg w-[340px] h[370px] max-md:w-[320px] max-md:h-[350px] max-sm:w-[280px] max-sm:h-[300px] p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn'>
                  <Image
                    src={bgl2}
                    className='mb-[5px] ] blog-'
                    alt='First Box'
                  />
                </div>
                <div className='absolute bottom-10 text-center p-10 left-0 '>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Future
                  </h3>
                  <p className='font-light text-[16p] leading-[17px] tracking-tight mb-[20px]'>
                    Exploring the Frontiers of Quantum Computing
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog/Tech-Odyssey'>
              <div className='bg[#fff] rounded-lg shadowlg w-[340px] h[370px] max-md:w-[320px] max-md:h-[350px] max-sm:w-[280px] max-sm:h-[300px] p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn'>
                  <Image
                    src={bgl3}
                    className='mb-[5px]  blog-'
                    alt='First Box'
                  />
                </div>
                <div className='absolute bottom-10 text-center p-10 left-0'>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Blockchain Beyond Crypto
                  </h3>
                  <p className='font-light text-[16p] leading-[17px] tracking-tight mb-[20px]'>
                    Exploring the Uncharted Territories .
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog'>
              <div className='bg[#fff] rounded-lg shadowlg w-[340px] h[370px] max-md:w-[320px] max-md:h-[350px] max-sm:w-[280px] max-sm:h-[300px] p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn'>
                  <Image
                    src={bgl4}
                    className='mb-[5px] max-s blog-'
                    alt='First Box'
                  />
                </div>
                <div className='absolute bottom-10 text-center p-10 left-0 '>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Digital Twins.
                  </h3>
                  <p className='font-light text-[16p] leading-[17px] tracking-tight mb-[20px]'>
                    Revolutionizing Product Development and Maintenance.
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog'>
              <div className='bg[#fff] rounded-lg shadowlg w-[340px] h[370px] max-md:w-[320px] max-md:h-[350px] max-sm:w-[280px] max-sm:h-[300px] p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn'>
                  <Image
                    src={bgl5}
                    className='mb-[5px]  blog-'
                    alt='First Box'
                  />
                </div>
                <div className='absolute bottom-10 text-center p-10 left-0 '>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Neuroadaptive Interfaces.
                  </h3>
                  <p className='font-light text-[16p] leading-[17px] tracking-tight mb-[20px]'>
                    Bridging the Gap Between Humans and Machines.
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <Emailsub />

        {/* <div className='flex flex-col items-center justify-center h-[700px] max-sm:h-[400px]'>
          <h1 className='font-normal text-[64px] tracking-tight max-lg:text-[55px] max-md:text-[45px] max-sm:text-[22px]'>
            Subscribe to our newsletter
          </h1>
          <p className='font-normal text-[20px] text-[#818385] tracking-tight mb-[50px] w-[530px] max-sm:text-[11px] max-sm:w-[250px]'>
            It is a long established fact that a reader will distracted by the
            readable ...
          </p>
          <div className='flex'>
            <input
              className=' rounded-lg w-[340px] h-[58px] max-md:w-[280px] max-sm:h-[40px] max-sm:w-[150px]'
              type='text'
              placeholder='Enter Your Email'
            />
            <button className='btn-gradient text-[#fff] w-[170px] max-md:w-[150px] max-sm:w-[60px] max-sm:text-[11px] max-sm:h-[40px] h-[60px] text-[14px] rounded-lg'>
              Subscribe
            </button>
          </div>
        </div> */}
      </div>
    </>
  )
}

export default Blog2

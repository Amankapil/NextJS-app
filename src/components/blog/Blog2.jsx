'use client'
import React, { useState } from 'react'
// import './css/insight.css'
import Image from 'next/image'
import Link from 'next/link'

import Emailsub from './Emailsub'

import bgl from './assets/bl1.png'
import bgl2 from './assets/bl2.png'
import bgl3 from './assets/bl3.png'
import bgl4 from './assets/17.png'
import bgl5 from './assets/16.png'
import imgs from './assets/29.png'

import './blog.scss'
import Blogcards from './Blogcards'
const Blog2 = () => {
  const [selectedTab, setSelectedTab] = useState(0)

  const tabs = [
    {
      id: 0,
      title: 'Unveiling the Digital Symphony',
      content: {
        title: 'Unveiling the Digital Symphony',
        description:
          '  Website Design and Digital Marketing as the Art of Brand Orchestration.',
        image: imgs
      }
    },
    {
      id: 1,
      title: 'Blockchain Beyond Crypto',
      content: {
        title: 'Blockchain Beyond Crypto',
        description:
          'Cybersecurity is becoming increasingly critical as the number of cyber threats continues to grow. Learn how to protect your data and systems.',
        image: bgl5
      }
    },
    {
      id: 2,
      title: ' Future',
      content: {
        title: ' Future',
        description: 'Exploring the Frontiers of Quantum Computing',
        image: bgl4
      }
    }
  ]

  const handleTabClick = index => {
    setSelectedTab(index)
  }

  return (
    <>
      <div className='w-full h-full bakg '>
        <div className=' mt-10 w[64%] max-md:w-full max-w-7xl mx-auto'>
          <h3 className='self-start text-[#175574] text-xl text-left font-bold leading-[51.2px]'>
            <span className='text-[#D79442]'>|</span> Insights
          </h3>
          <h1 className='self-start text-[#062B43] text-left text-[41px] font-bold leading-[51.2px]'>
            Stay in the know
          </h1>
        </div>

        <section>
          <div className='flex p-5 max-w-7xl mx-auto max-md:flex-wrap'>
            <div className='flex- w-[50%] pr-5 max-md:w-full'>
              <ol className='list-none p-0 m-0'>
                {tabs.map((tab, index) => (
                  <li
                    key={tab.id}
                    className={`mb-5 text-lg cursor-pointer ${
                      selectedTab === index ? 'font-bold' : ''
                    }`}
                    onClick={() => handleTabClick(index)}
                  >
                    {selectedTab === index ? (
                      <span className='text-[#D79442] text-[40px]'>| </span>
                    ) : (
                      ''
                    )}

                    <span className='mr-2 text-[40px]'>
                      {' '}
                      {`0${index + 1}`}{' '}
                    </span>
                    {tab.title}
                  </li>
                ))}
              </ol>
            </div>
            <div className='w-[70%] max-md:w-full pl-5 borderl bg-[#fff] p-4 rounded-md border-gray-300'>
              <div className='relative'>
                <Image
                  src={tabs[selectedTab].content.image}
                  alt={tabs[selectedTab].content.title}
                  className='w-full rounded-lg'
                />
                <div className='p-5'>
                  <h2 className='mt-2 text-2xl font-semibold text-[#062B43]'>
                    {tabs[selectedTab].content.title}
                  </h2>
                  <p className='mt-2 text-base text-[#175574]'>
                    {tabs[selectedTab].content.description}
                  </p>
                  <a
                    href='/read-more'
                    className='text-[#175574] text-[22px] hover:underline  inline-block mt-2'
                  >
                    &rarr; Read More
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <h1 className='font-normal text-[64px] tracking-tight leading-[57px] my-[100px]  max-md:mt-[20px] max-sm:mt-[10px] ml-[50px] max-lg:text-[55px] max-md:text-[40px] max-sm:text-[30px] '>
          Articles
        </h1>
        <div className='blog-g'>
          <div
            className='w-full flex flex-wrap  gap-[15px]  max-lg:gap-y-[50px] justify-center items-center max-w-7xl mx-auto
max-md:gap-y-[20px] ml[90px] max-xl:ml-[50px] max-sm:ml-[0px] py-[100px] max-md:pt-[50px]  max-sm:flex max-sm:flex-col max-sm:items-center '
          >
            <Link href='/blog/Unveiling-the-Digital-Symphony'>
              <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-full max-md:h-full max-sm:w-[380px] max-sm:h-[550px] p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn'></div>
                <div className='absolute bottom-0 text-left p-4 left-0 '>
                  <span className='text-[50px]'> 01</span>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Unveiling the Digital Symphony
                  </h3>
                  <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
                    Website Design and Digital Marketing as the Art of Brand
                    Orchestration.
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog/Exploring-the-Frontiers-of-Quantum-Computing'>
              <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-md:h-[350px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn2'></div>
                <div className='absolute bottom-0 text-left p-4 left-0 '>
                  <span className='text-[50px]'> 02</span>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Future
                  </h3>
                  <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
                    Exploring the Frontiers of Quantum Computing
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog/Blockchain-Beyond-Crypto'>
              <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn3'></div>
                <div className='absolute bottom-0 text-left p-4 left-0 '>
                  <span className='text-[50px]'> 03</span>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Blockchain Beyond Crypto
                  </h3>
                  <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
                    Exploring the Uncharted Territories .
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>

            <Link href='/blog/Tech-chronicles'>
              <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn6'></div>
                <div className='absolute bottom-0 text-left p-4 left-0'>
                  <span className='text-[50px]'> 04</span>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Tech Chronicles: Exploring the Digital Frontier
                  </h3>
                  <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
                    Let's set sail on this adventure and discover the wonders
                    that await us in the digital landscape.
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog/Tech-Odyssey'>
              <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn5'></div>
                <div className='absolute bottom-0 text-left p-4 left-0 '>
                  <span className='text-[50px]'> 05</span>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Tech Odyssey
                  </h3>
                  <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
                    Let's embark on this adventure together and discover the
                    wonders of the digital world.
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            <Link href='/blog/Digital-Frontiers'>
              <div className='bg[#fff] rounded-lg shadowlg w-[416px] h-[555px] max-md:w-[320px] max-sm:w-[380px] max-sm:h-[550px]  p-5 flex flex-col justify-between relative text-white'>
                <div className='blog-imgn4'></div>
                <div className='absolute bottom-0 text-left p-4 left-0 '>
                  <span className='text-[50px]'> 06</span>
                  <h3 className='font-bold text-[20px] leading-[28px] tracking-tight mb-[20px]'>
                    Digital Frontiers
                  </h3>
                  <p className='font-medium text-[18px] leading-[23px] tracking-tight mb-[20px]'>
                    Join us as we explore the latest trends, emerging
                    technologies, and groundbreaking ideas that are shaping the
                    future of our digital world
                  </p>
                  <h4 className='font-bold text-[16px] leading-[28px] tracking-tight'>
                    Read more
                  </h4>
                </div>
              </div>
            </Link>
            {/* <Link href='/blog/Tech-chronicles'>
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
            </Link> */}
            {/* <Link href='/blog'>
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
            </Link> */}
          </div>
        </div>

        {/* <Blogcards /> */}
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

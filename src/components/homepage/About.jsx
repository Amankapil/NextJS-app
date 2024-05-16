import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import hero from './assets/about.jpg'

const About = ({ brand }) => {
  return (
    <>
      {/* {brand.map((br, id) => {
        return (
          <ul key={id}>
            <li>{br}</li>
          </ul>
        );
      })} */}
      <div className='about-section py-20 mx-auto max-w-7xl'>
        <h2 className=' text-[#062b43] text-3xl font-bold mb-4 max-lg:text-center'>
          About Us
        </h2>
        <div class='self-stretch justify-center gap-[158px] max-xl:px-[80px] max-2lg:gap-[50px] max-xl:gap-[130px] inline-flex max-lg:flex-wrap max-2md:py-10 max-lg:px-[40px] max-smpx-[20px] max-xlpx-0  max-sm:gap-5 max-2md:gap-[20px]'>
          <div class='self-stretch flex-col justify-between items-start inline-flex max-2md:gap-10 max-xlpx-10 max-2md:p-0'>
            <div class='w-[503.60px] letter3 max-md:text-justify text-black text-[18px] font-normal  leading[120%] max-xl:w-full'>
              Hiring Tech is a name that is counted amongst the trustworthy
              placement agencies in Indore (Madhya Pradesh, India). Our company
              is actively involved in rendering dependable solutions for
              facilitating diverse placement and recruitment requirements of
              various organisations and job seekers.
              <br />
              <br />
              We are an IT Consultancy with a great team of 100+ full-time
              resources including senior programmers, intermediate programmers,
              graphic designers, front-end developers, project managers and
              business analysts. We are a team of incredibly talented
              senior-junior level engineers. What this means is that I will have
              continuous access to a wealth of resources and information should
              i ever need it.
            </div>
            <Link
              class=' transition-all mt-6 px-10 py-3 rounded-[31px] border bordr-black justify-center items-center gap-2 inline-flex max-sm:w-full  hover:bg-[#000] bg-[#062b43] text-white hovertext-black'
              href='/aboutus'
            >
              About us
            </Link>

            {/* <button className="btn relative inline-flex items-center justify-start overflow-hidden transition-all bgwhite  bg-[#8AAAE5] group p-4 rounded-[31px]">
              <span className="w-0 h-0 rounded-[31px] bg-[#00246B] absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
              <span className="w-full text-black transition-colors duration-300 ease-in-out group-hover:text-white z-10">
                About us
              </span>
            </button> */}
          </div>

          <div class='w-[503.60px] letter-spacing-3 text-black text-[32px] font-normal  leading-[120%] max-xl:w-full max-lg:flex max-lg:justify-center'>
            <Image src={hero} width={500} alt='hero' />
          </div>
        </div>
      </div>
    </>
  )
}

export default About

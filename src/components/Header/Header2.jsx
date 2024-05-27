'use client'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'

// Image

import logo from './logo.svg'
import './head.css'
import Link from 'next/link'

// let [active, setactive] = useState(false);
// const hamburger = () => {
//   setactive(!active);
// };

const Header2 = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false)
  let [width, setWidth] = useState(0)

  useEffect(() => {
    const updateWidth = () => {
      setWidth(window.innerWidth)
    }
    updateWidth()
    window.addEventListener('resize', updateWidth)
    return () => {
      window.removeEventListener('resize', updateWidth)
    }
  }, [])

  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen)
  }
  const scrollToTop = () => {
    window.scrollTo(0, 0)
  }
  let [active, setactive] = useState(false)
  const hamburger = () => {
    setactive(!active)
  }
  return (
    <>
      {width <= 900 ? (
        <>
          <header className='bg-[#fff] bg-opacity-50 backdrop-blur-[110.60px] p-4 w-full mx-auto sticky top-5 h[100px] rounded-full z-[9990]'>
            <div className='header flex justify-between gap-20 max-w-7xl mx-auto items-center'>
              <div className='logo'>
                <Link href='/'>
                  <div className='logobg'></div>
                </Link>
              </div>
              <button onClick={hamburger}>
                <svg
                  width='30'
                  height='30'
                  viewBox='0 0 30 30'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M7.5 8.75H13.75C14.0815 8.75 14.3995 8.8817 14.6339 9.11612C14.8683 9.35054 15 9.66848 15 10C15 10.3315 14.8683 10.6495 14.6339 10.8839C14.3995 11.1183 14.0815 11.25 13.75 11.25H7.5C7.16848 11.25 6.85054 11.1183 6.61612 10.8839C6.3817 10.6495 6.25 10.3315 6.25 10C6.25 9.66848 6.3817 9.35054 6.61612 9.11612C6.85054 8.8817 7.16848 8.75 7.5 8.75ZM16.25 18.75H22.5C22.8315 18.75 23.1495 18.8817 23.3839 19.1161C23.6183 19.3505 23.75 19.6685 23.75 20C23.75 20.3315 23.6183 20.6495 23.3839 20.8839C23.1495 21.1183 22.8315 21.25 22.5 21.25H16.25C15.9185 21.25 15.6005 21.1183 15.3661 20.8839C15.1317 20.6495 15 20.3315 15 20C15 19.6685 15.1317 19.3505 15.3661 19.1161C15.6005 18.8817 15.9185 18.75 16.25 18.75ZM7.5 13.75H22.5C22.8315 13.75 23.1495 13.8817 23.3839 14.1161C23.6183 14.3505 23.75 14.6685 23.75 15C23.75 15.3315 23.6183 15.6495 23.3839 15.8839C23.1495 16.1183 22.8315 16.25 22.5 16.25H7.5C7.16848 16.25 6.85054 16.1183 6.61612 15.8839C6.3817 15.6495 6.25 15.3315 6.25 15C6.25 14.6685 6.3817 14.3505 6.61612 14.1161C6.85054 13.8817 7.16848 13.75 7.5 13.75Z'
                    fill='#175574'
                  />
                </svg>
              </button>

              <div
                className={`lists flex items-center justify-between flex-col ${
                  active ? 'active ' : ''
                }`}
              >
                <nav className='flex gap-6 text-base font-medium text-black items-center flex-col w-1/2 mt-20'>
                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d] text-white'
                    href='/aboutus'
                  >
                    About Us
                  </Link>
                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d]  text-white'
                    href='/services'
                  >
                    Service
                  </Link>
                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d]  text-white'
                    href='/career'
                  >
                    Career
                  </Link>
                  <Link
                    className='hovertext-[#733e3d] text-white'
                    onClick={hamburger}
                    href='/training'
                  >
                    Training
                  </Link>

                  <Link
                    onClick={hamburger}
                    className='hovertext-[#733e3d] text-white'
                    href='/blog'
                  >
                    Insights
                  </Link>
                  {/* <Link
                    onClick={hamburger}
                    className="hovertext-[#733e3d] text-white"
                    href="/drop-resume"
                  >
                    Resume
                  </Link> */}
                  <Link
                    onClick={hamburger}
                    href='/contact'
                    className='px-4 py-2 hover:bg-[#dc4c51] bg-[#733e3d] text-white rounded-3xl  hover:textblack'
                  >
                    Lets Talk
                  </Link>
                </nav>
                <div className='absolute right-20 top-20'>
                  <button
                    type='reset'
                    className='bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2'
                    onClick={hamburger}
                  >
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='#fff'
                    >
                      <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </header>
        </>
      ) : (
        // desktop
        <div className='bg-[#fff] max--[1400px] mx-auto flex gap-5 justify-between items-center w-full text-base font-medium leading-4 text-center text-[#000] max-md:flex-wrap max-md:max-w-full py-6 px-10 wfull mxauto sticky top-0 h[100px] roundedfull z-[9999999999999999990] bg-opacity-50 backdrop-blur-[110.60px]'>
          <Link href='/'>
            <div className='logobg'></div>
          </Link>
          <div className='flex gap-5 justify-between self-stretch my-auto max-md:flex-wrap'>
            <Link className='hovertext-[#733e3d]' href='/aboutus'>
              <div className='flex flex-col justify-center'>
                <div className='justify-center px-6 py-4 rounded-2xl border border-solid border-white hoverbg-black  hoverborder-black max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]'>
                  About Us
                </div>
              </div>
            </Link>
            {/* <a
              className='hovertext-[#733e3d]'
              href='http://viablediamonds.com/webmail'
              target='_blank'
            >
              <div className='flex flex-col justify-center'>
                <div className='justify-center px-6 py-4 rounded-2xl border border-solid border-white hoverbg-black  hoverborder-black max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]'>
                  About Us
                </div>
              </div>
            </a> */}
            <Link className='hovertext-[#733e3d]' href='/services'>
              <div className='flex flex-col justify-center whitespace-nowrap'>
                <div className='justify-center px-8 py-4 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]'>
                  Service
                </div>
              </div>
            </Link>
            <Link className='hovertext-[#733e3d]' href='/career'>
              <div className='flex flex-col justify-center whitespace-nowrap'>
                <div className='justify-center px-8 py-4 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]'>
                  Career
                </div>
              </div>
            </Link>
            <Link className='hovertext-[#733e3d]' href='/training'>
              <div className='flex flex-col justify-center whitespace-nowrap'>
                <div className='justify-center px-7 py-3.5 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]'>
                  Training
                </div>
              </div>
            </Link>
            <Link className='hovertext-[#733e3d]' href='/blog'>
              <div className='flex flex-col justify-center whitespace-nowrap'>
                <div className='justify-center px-7 py-3.5 rounded-2xl border border-solid border-white  max-md:px-5 hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE]'>
                  Insights
                </div>
              </div>
            </Link>

            <Link href='/contact'>
              <div className='flex flex-col justify-center self-stretch my-auto'>
                <div className='justify-center bg-[#D79442] px-9 py-4 rounded-[54px] border-white border-solid border-[0.5px] max-md:px-5 lettl hover:border-[#CC7914] hovertext-[#00557E] hover:bg-[#CC7914] text-[#fff]'>
                  Lets Talk
                </div>
              </div>
            </Link>
          </div>
        </div>
      )}
    </>
  )
}

export default Header2

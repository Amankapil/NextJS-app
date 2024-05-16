'use client'
import React, { useEffect } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import Image from 'next/image'
// Image
import img from './assets/Group 112.png'
import img2 from './assets/Group 115.png'

const Trail = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    gsap.utils.toArray('.gs_reveal').forEach(elem => {
      hide(elem) // assure that the element is hidden when scrolled into view

      ScrollTrigger.create({
        trigger: elem,
        markers: false,
        onEnter: () => animateFrom(elem),
        onEnterBack: () => animateFrom(elem, -1),
        onLeave: () => hide(elem) // assure that the element is hidden when scrolled into view
      })
    })
  }, [])

  const animateFrom = (elem, direction = 1) => {
    let x = 0,
      y = direction * 100
    if (elem.classList.contains('gs_reveal_fromLeft')) {
      x = -100
      y = 0
    } else if (elem.classList.contains('gs_reveal_fromRight')) {
      x = 100
      y = 0
    }
    elem.style.transform = `translate(${x}px, ${y}px)`
    elem.style.opacity = '0'
    gsap.fromTo(
      elem,
      { x, y, autoAlpha: 0 },
      {
        duration: 1.25,
        x: 0,
        y: 0,
        autoAlpha: 1,
        ease: 'expo',
        overwrite: 'auto'
      }
    )
  }

  const hide = elem => {
    gsap.set(elem, { autoAlpha: 0 })
  }

  return (
    <div className='bg-[#20AFED] flex flex-col self-center p-10 pb-20 mt28 w-full max-[1021px] max-md:mt-10 max-md:max-w-full mx-auto backdrop-blur-[110.60px] vision-bg'>
      <div className='max-w-[1021px] mx-auto'>
        <div className='flex flex-col self-end max-w-full max-md:flex-wrap'>
          {/* Vision Section */}
          <div className='flex max-md:flex-wrap max-lg:before:justify-center max-lg:items-center'>
            <div className='flex z-10 flex-col mt-0 max-w-full w-[561px] max-md:mt-0 max-lg:w-full'>
              <h1 className='text-4xl font-bold text-amber-600 leading-[51.2px] max-md:max-w-full max-md:text-center gs_reveal'>
                Our Vision
              </h1>
              <div className='mt-8 text-3xl max-sm:text-[20px] tracking-tight text-slate-900 max-md:max-w-full max-md:text-center gs_reveal'>
                Our vision is to empower individuals
                <br />
                worldwide through accessible <br />
                and innovative learning solutions.
              </div>
            </div>
            {/* Image Section */}
            <div className='flex flex-col items-start pt-6 aspect bgstone-300 rounded-[65px] max-md:pr-5'>
              <div className='flex z-10 flex-col items-start px-5 pt-1 pb-6 mb-0 bordr max-md:mb-2.5 gs_reveal gs_reveal_fromRight'>
                <Image
                  loading='lazy'
                  src={img2}
                  alt='k'
                  className='w-full aspect-[1.06]'
                />
              </div>
            </div>
          </div>
          {/* Mission Section */}
          <div className='flex justify-between max-lg:flex-wrap-reverse max-lg:w-full'>
            <Image
              loading='lazy'
              src={img}
              alt='k'
              width={400}
              height={400}
              className='w aspect-[1.06]'
            />
            <div>
              <h1 className='self-end max-md:text-center text-end mt-16 text-4xl font-bold text-amber-600 leading-[51.2px] max-md:mt-10 gs_reveal'>
                Our Mission
              </h1>
              <div className='self-end mt-0 mb-2.5 text-3xl tracking-tight text-right text-slate-900 max-md:mt-0 max-md:max-w-full max-md:self-start max-md:text-center max-sm:text-[20px] gs_reveal'>
                Our mission is to be the leading provider of transformative
                education
                <br />
                and talent acquisition solutions.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Trail

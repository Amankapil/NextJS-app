'use client'
import React, { useRef, useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import 'tailwindcss/tailwind.css'

gsap.registerPlugin(ScrollTrigger)

const ScrollAnimation = () => {
  const containerRef = useRef(null)
  const lineRef = useRef(null)
  const cardRefs = useRef([])

  useEffect(() => {
    gsap.to(lineRef.current, {
      height: '80%',
      scrollTrigger: {
        trigger: containerRef.current,
        start: '-80% -1%',
        end: '100% 100%',
        //         markers: true,
        scrub: true,
        onUpdate: self => {
          lineRef.current.style.height = `${self.progress * 80}%`
        }
      },
      ease: 'none'
    })

    cardRefs.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { opacity: 0 },
        {
          opacity: 1,
          scrollTrigger: {
            trigger: card,
            start: '0% 100%',
            end: 'top 30%',
            scrub: true
          },
          ease: 'none'
        }
      )
    })
  }, [])

  //   ///////////////////////////////
  const getSVGIcon = title => {
    switch (title) {
      case 'Comprehensive IT Consultancy Services':
        return (
          <svg
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M32.501 2.49976L32.5035 10.1548C36.909 10.7117 41.0041 12.7183 44.1439 15.8586C47.2836 18.9988 49.2897 23.0942 49.846 27.4998H57.501V32.4998L49.846 32.5023C49.2891 36.9074 47.2829 41.0023 44.1432 44.142C41.0035 47.2817 36.9087 49.2879 32.5035 49.8448L32.501 57.4998H27.501V49.8448C23.0954 49.2884 19 47.2824 15.8598 44.1427C12.7196 41.0029 10.713 36.9078 10.156 32.5023L2.50098 32.4998V27.4998H10.156C10.7124 23.0938 12.7188 18.9981 15.8591 15.8579C18.9993 12.7176 23.095 10.7112 27.501 10.1548V2.49976H32.501ZM30.001 24.9998C28.6749 24.9998 27.4031 25.5266 26.4655 26.4642C25.5278 27.4019 25.001 28.6737 25.001 29.9998C25.001 31.3259 25.5278 32.5976 26.4655 33.5353C27.4031 34.473 28.6749 34.9998 30.001 34.9998C31.3271 34.9998 32.5988 34.473 33.5365 33.5353C34.4742 32.5976 35.001 31.3259 35.001 29.9998C35.001 28.6737 34.4742 27.4019 33.5365 26.4642C32.5988 25.5266 31.3271 24.9998 30.001 24.9998Z'
              fill='#062B43'
            />
          </svg>
        )
      case 'Best performances':
        return (
          <svg
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M21.5543 53.8489C21.7701 54.0829 21.8849 54.3926 21.8737 54.7108C21.8624 55.029 21.7261 55.3299 21.4943 55.5481L18.8879 57.9853C18.6551 58.2015 18.3461 58.3165 18.0286 58.305C17.7111 58.2936 17.4112 58.1565 17.1947 57.9241L2.01588 41.5657C1.80018 41.3315 1.68561 41.0217 1.69707 40.7035C1.70853 40.3853 1.84509 40.0845 2.07708 39.8665L4.68708 37.4329C4.80225 37.3257 4.93742 37.2422 5.08486 37.1872C5.2323 37.1323 5.38912 37.1069 5.54636 37.1126C5.70361 37.1183 5.85819 37.1549 6.00128 37.2204C6.14437 37.2858 6.27316 37.3788 6.38028 37.4941L21.5543 53.8489ZM40.9223 23.0689C41.138 23.303 41.2525 23.6129 41.2411 23.9311C41.2296 24.2492 41.0931 24.55 40.8611 24.7681L24.4571 40.0921C24.2243 40.3083 23.9153 40.4233 23.5978 40.4118C23.2803 40.4004 22.9804 40.2633 22.7639 40.0309L18.8483 35.8057C18.6326 35.5715 18.518 35.2617 18.5295 34.9435C18.5409 34.6253 18.6775 34.3245 18.9095 34.1065L35.3099 18.7825C35.4249 18.6753 35.56 18.5919 35.7074 18.5369C35.8547 18.482 36.0114 18.4566 36.1686 18.4623C36.3257 18.468 36.4802 18.5046 36.6232 18.57C36.7662 18.6355 36.8949 18.7285 37.0019 18.8437L40.9223 23.0689ZM27.1355 48.6325C27.5843 49.1161 27.5567 49.8805 27.0743 50.3317L24.4643 52.7677C24.3491 52.8749 24.2139 52.9584 24.0665 53.0133C23.9191 53.0683 23.7622 53.0936 23.605 53.0879C23.4478 53.0822 23.2932 53.0456 23.1501 52.9802C23.007 52.9147 22.8782 52.8217 22.7711 52.7065L7.60068 36.3481C7.38483 36.1141 7.27005 35.8043 7.28128 35.4861C7.29252 35.168 7.42886 34.8671 7.66068 34.6489L10.2659 32.2141C10.4986 31.9978 10.8077 31.8828 11.1251 31.8943C11.4426 31.9058 11.7426 32.0428 11.9591 32.2753L27.1355 48.6325ZM52.4111 23.6557C52.6266 23.89 52.741 24.1999 52.7293 24.5181C52.7176 24.8363 52.5808 25.137 52.3487 25.3549L49.7399 27.7909C49.5071 28.0073 49.1979 28.1226 48.8803 28.1113C48.5626 28.1001 48.2624 27.9632 48.0455 27.7309L32.8727 11.3761C32.6565 11.1422 32.5416 10.8324 32.5528 10.5141C32.564 10.1959 32.7006 9.89492 32.9327 9.67687L35.5487 7.23487C35.6637 7.12769 35.7988 7.04425 35.9462 6.98931C36.0935 6.93438 36.2502 6.90903 36.4074 6.91471C36.5645 6.92039 36.719 6.957 36.862 7.02244C37.005 7.08788 37.1337 7.18086 37.2407 7.29607L52.4111 23.6557ZM57.9839 18.4477C58.1994 18.6822 58.3138 18.9922 58.3023 19.3104C58.2909 19.6287 58.1545 19.9297 57.9227 20.1481L55.3187 22.5829C55.2037 22.6901 55.0687 22.7737 54.9214 22.8287C54.7741 22.8837 54.6174 22.9092 54.4602 22.9036C54.3031 22.898 54.1486 22.8615 54.0056 22.7962C53.8625 22.7309 53.7338 22.638 53.6267 22.5229L38.4563 6.16087C38.2407 5.92651 38.126 5.61663 38.1373 5.29835C38.1485 4.98008 38.2847 4.67905 38.5163 4.46047L41.1227 2.02087C41.2375 1.91351 41.3724 1.82987 41.5196 1.77476C41.6668 1.71965 41.8234 1.69415 41.9805 1.69973C42.1376 1.7053 42.2921 1.74184 42.435 1.80725C42.5779 1.87265 42.7066 1.96564 42.8135 2.08087L57.9839 18.4477Z'
              fill='#062B43'
            />
          </svg>
        )
      case 'Save time':
        return (
          <svg
            width='60'
            height='60'
            viewBox='0 0 60 60'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g clip-path='url(#clip0_465_193)'>
              <path
                d='M30 5C43.8075 5 55 16.1925 55 30C55 43.8075 43.8075 55 30 55C16.1925 55 5 43.8075 5 30C5 16.1925 16.1925 5 30 5ZM30 15C29.337 15 28.7011 15.2634 28.2322 15.7322C27.7634 16.2011 27.5 16.837 27.5 17.5V30C27.5001 30.663 27.7636 31.2988 28.2325 31.7675L35.7325 39.2675C36.204 39.7229 36.8355 39.9749 37.491 39.9692C38.1465 39.9635 38.7735 39.7006 39.237 39.237C39.7006 38.7735 39.9635 38.1465 39.9692 37.491C39.9749 36.8355 39.7229 36.204 39.2675 35.7325L32.5 28.965V17.5C32.5 16.837 32.2366 16.2011 31.7678 15.7322C31.2989 15.2634 30.663 15 30 15Z'
                fill='#062B43'
              />
            </g>
            <defs>
              <clipPath id='clip0_465_193'>
                <rect width='60' height='60' fill='white' />
              </clipPath>
            </defs>
          </svg>
        )
      default:
        return null
    }
  }

  return (
    <>
      <div className='relative'>
        <div
          ref={lineRef}
          className='absolute  left-[18%] top-16 w-4 bg-yellow-500'
          //         style={{ height: '0%' }}
        ></div>

        <div className='border-b2 mt-10  top-5 h-[100px]  max-w-6xl mx-auto text-[40px] '>
          <h1 className='border-yellow-500 border-b-[16px] w-[38%]'>
            Streamlined IT Solutions
          </h1>
        </div>
        <div
          className='relative flex flex-col items-center justify-center  p-5'
          ref={containerRef}
        >
          {[
            'Comprehensive IT Consultancy Services',
            'Best performances',
            'Save time'
          ].map((title, index) => (
            <div
              key={index}
              ref={el => (cardRefs.current[index] = el)}
              className='opacity-0  max-xl:inset-0 border-[#D79442] border-[3px] mt-10 boxone w-[675px] max-lg:w-full p-3 b[#abe1f8b0] rounded-[10px]  max-xl:relative h-[200px]'
            >
              <div className='flex items-center gap-4'>
                {getSVGIcon(title)}
                <h3 className='text-xl font-bold mb-2'>{title}</h3>
              </div>
              <p>
                {title === 'Comprehensive IT Consultancy Services'
                  ? 'Hiring Tech IT Services offers advanced IT consultancy services catering to both IT and Non-IT industries across India. Our expertise covers a wide range of solutions tailored to meet specific industry needs.'
                  : title === 'Best performances'
                  ? 'At the core of our mission is the optimization of your time, physical vitality, and mental energy, enabling you to concentrate more effectively on your objectives and excel in your professional endeavors.'
                  : 'We take care of the entire process, from meal preparation to packaging and doorstep delivery, allowing you to save both time and money. This way, you can dedicate more precious moments to your loved ones.'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default ScrollAnimation
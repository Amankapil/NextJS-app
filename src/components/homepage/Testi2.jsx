'use client'
import React, { createContext } from 'react'

import Image from 'next/image'
import hero from './assets/profile.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/pagination'
import 'swiper/css/navigation'

// import "./styles.css";

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules'

const Testimonials = () => {
  return (
    <>
      <div className='w-full visio-bg'>
        <div className='testiminilas max-w-7xl mx-auto pt-20'>
          <div className='servidc mb-20'>
            <h3 className='self-start text-[#062B43] text-xl font-bold leading-[51.2px]'>
              | Testimonials
            </h3>
            <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
              Client Testimonials
            </h1>

            <p className='self-start text-[#062B43] text-xl font-bold leading-[51.2px]'>
              Discover what our client had to say about their experience working
              with us
            </p>
          </div>
        </div>
        <div className='flx max-w-7xl mx-auto p-10'>
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            autoplay={{
              delay: 1000,
              disableOnInteraction: true
            }}
            pagination={{
              clickable: true
            }}
            direction='vertical'
            breakpoints={{
              310: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              640: {
                slidesPerView: 1,
                spaceBetween: 20
              },
              768: {
                slidesPerView: 1,
                spaceBetween: 40
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50
              }
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className='mySwiper p-10 m-10 h-[500px]'
          >
            <SwiperSlide>
              <div className='flex gap-20 mb-20'>
                <div className='flex flex-col w-[50%] max-md:ml-0 max-md:w-full h-[300px]'>
                  <div className='flex flex-col grow px-8 py-10 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[300px]'>
                    <div className='flex gap-5 justify-start text-2xl h-[500px]'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-stone-900'>Shivam</div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-black max-md:mt-10'>
                      Thank you Hiring Tech for your Unwavering Dedication and
                      Commitment to help candidates like me find the right
                      career path. With their help of Hiring tech the selection
                      process was very smooth and i totally recommend them.
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full h-[300px]'>
                  <div className='flex flex-col grow px-8 py-10 bgcyan-800 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[500px] max-md:h-[300px]'>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-black'>
                          Rishab Mishra
                        </div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-black max-md:mt-10'>
                      Landing a position at Houseeazy through Hiring Tech's
                      support was a career milestone. With a 9.5 LPA package,
                      their personalized guidance and advanced technology
                      streamlined the process seamlessly. The comprehensive
                      training module prepared me thoroughly for my role,
                      providing valuable technical skills and industry insights.
                      Surrounded by talented peers, I'm excited to pursue my
                      career goals confidently.
                    </div>
                  </div>
                </div>

                <div className='flex flex-col w-[20%] max-md:ml-0 max-md:w-full h-[300px]'>
                  <div className='flex flex-col grow px-8 py-10 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[300px]'>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-stone-900'>Rahul</div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-black max-md:mt-10'>
                      Thank you Hiring Tech for your Unwavering Dedication and
                      Commitment to help candidates like me find the right
                      career path. With their help of Hiring tech the selection
                      process was very smooth and i totally recommend them.
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide>
              <div className='flex gap-20 mb-20'>
                <div className='flex flex-col w-[53%] max-md:ml-0 max-md:w-full h-[300px]'>
                  <div className='flex flex-col grow px-8 py-10 bg-cyan-800 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[300px]'>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-white'>Raj</div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-white max-md:mt-10'>
                      At hiring tech you get tremendous opportunities to elevate
                      your career. Especially through their training program.
                    </div>
                  </div>
                </div>
                <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full h-[300px]'>
                  <div className='flex flex-col grow px-8 py-10 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[300px]'>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-stone-900'>
                          Riya Thakur
                        </div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-black max-md:mt-10'>
                      A fantastic organisation! Great support from beginning to
                      end of the hiring process. The team are really informed
                      and go the extra mile at every stage. Always keeps me 100%
                      up to date with the process; I was never left wondering
                      where we were at in each phase of the entire recruitment
                      process.
                    </div>
                  </div>
                </div>
                ;
                <div className='flex flex-col w-[33%] max-md:ml-0 max-md:w-full h-[400px]'>
                  <div className='flex flex-col grow px-8 py-10 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[300px] max-md:h-[400px]'>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-stone-900'>
                          Ravi Sharma
                        </div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-black max-md:mt-10'>
                      Collaborating with Hiring Tech has been a game-changer for
                      our organization. Their professionalism, attention to
                      detail, and commitment to excellence have transformed our
                      project outcomes. Hiring Tech's advanced technology and
                      personalized approach ensured that we connected with the
                      right talent seamlessly. They provided comprehensive
                      solutions tailored to our needs, delivering exceptional
                      results. We're impressed by their dedication, expertise.
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
            {/* <SwiperSlide></SwiperSlide>

            <SwiperSlide></SwiperSlide> */}
            <SwiperSlide>
              <div className='flex gap-20 mb-20'>
                <div className='flex flex-col w[33%] max-md:ml-0 max-md:w-full h-[400px]'>
                  <div className='flex flex-col grow px-8 py-10 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[300px] max-md:h-[400px]'>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-stone-900'>
                          Ravi Sharma
                        </div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-black max-md:mt-10'>
                      Collaborating with Hiring Tech has been a game-changer for
                      our organization. Their professionalism, attention to
                      detail, and commitment to excellence have transformed our
                      project outcomes. Hiring Tech's advanced technology and
                      personalized approach ensured that we connected with the
                      right talent seamlessly. They provided comprehensive
                      solutions tailored to our needs, delivering exceptional
                      results. We're impressed by their dedication, expertise.
                    </div>
                  </div>
                </div>

                <div className='flex flex-col w[33%] max-md:ml-0 max-md:w-full h-[400px]'>
                  <div className='flex flex-col grow px-8 py-10 bg-cyan-800 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10 h-[300px] max-md:h-[400px]'>
                    <div className='flex gap-5 justify-start text-2xl'>
                      <Image
                        loading='lazy'
                        src={hero}
                        alt='k'
                        className='w-16 h-16 rounded-full  top-0 left-0 border-4 border-white'
                      />
                      <div className='flex flex-col my-auto'>
                        <div className='font-bold text-white'>
                          Abhimanyu Singh
                        </div>
                      </div>
                    </div>
                    <div className='mt-12 text-[14px] leading9 text-white max-md:mt-10'>
                      Our experience partnering with Hiring Tech has been
                      nothing short of outstanding. Their team's expertise and
                      dedication have significantly streamlined our recruitment
                      process, resulting in the successful acquisition of
                      top-tier talent for our organization. From the initial
                      consultation to the final placement, Hiring Tech
                      demonstrated a deep understanding of our requirements.
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide></SwiperSlide>
            <SwiperSlide></SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  )
}

export default Testimonials

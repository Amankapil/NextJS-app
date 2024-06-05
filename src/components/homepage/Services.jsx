import React from 'react'
import Image from 'next/image'

// import img from "./asstes/training.png";
import img from './assets/training.png'
import img2 from './assets/concern.png'
import img3 from './assets/hr.png'
import img4 from './assets/web.png'
import img5 from './assets/arrow.png'
import img6 from './assetss/44.png'
import img7 from './assetss/45.png'
import img8 from './assetss/46.png'
import img9 from './assetss/47.png'

const Services = () => {
  return (
    <>
      <div className='home-service  max-lg:h-full'>
        <div className='mx-auto max-w-7xl'>
          <div className='servidc mb-20  max-sm:p-4'>
            <h3 className='self-start text-[#175574] text-xl font-bold leading-[51.2px]'>
              <span className='text-[#D79442]'>|</span> Services
            </h3>
            <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
              Our Services
            </h1>
          </div>
          <div className='flex justify-start items-center gap-4 flexwrap max-lg:justify-center max-lg:h-full max-md:flex-col max-md:p-4'>
            <a
              class='mb-[17px] service-cards w-[27.451%] h[350px] p-[20px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group client
 bg[#062b43] hover:shadow-xl transition-all hovertext-white hovertext-white max-md:w-full  rounded-md hover:bordersolid'
              href='/services'
            >
              <div class='justify-center items-center inline-flex w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex max-md:justify-center max-md:items-center'>
                  <Image
                    src={img6}
                    className='mix-blenddifference w-full'
                    alt='hero'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] max-sm:h-full h[143px] flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px] group-hover:underline grouphover:textwhite">
                    Tech Training
                  </div>
                  <div class="w[300px] leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                    Hiring tech service is working as placement consultant
                    service company serving the needs of the client.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px]  relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              class='mb-[17px] service-cards w-[27.451%] h[350px] p-[20px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group client
 hoverbg-[#062b43] hover:shadow-xl transition-all hovertext-white hovertext-white max-md:w-full  rounded-md
 
'
              href='/services'
            >
              <div class='justify-center items-center inline-flex  w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex'>
                  <Image
                    src={img7}
                    alt='hero'
                    className='mix-blenddifference w-full'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] h[143px] max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div
                    class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                  >
                    IT concerns.
                  </div>
                  <div class="w[300px]  leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                    We offer comprehensive programs tailored to empower
                    professionals in human resources management.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px] relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              class='mb-[17px] service-cards w-[27.451%] [350px] p-[20px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group client
  hoverbg-[#062b43] hover:shadow-xl transition-all hovertext-white hovertext-white max-md:w-full   rounded-md'
              href='/services'
            >
              <div class='justify-center items-center inline-flex  w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex'>
                  <Image
                    src={img8}
                    alt='hero'
                    className='mix-blenddifference w-full'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] h[143px] max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div
                    class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                  >
                    HR training
                  </div>
                  <div class="w[300px]  leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                    In our web development training consultancy, a comprehensive
                    programs designed to equip individuals with the skills.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px] relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
            <a
              class='mb-[17px] service-cards w-[27.451%] h[350px] pl-[20px] pr-[10px] py-[20px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group client hover:shadow-xl transition-all hovertext-white hovertext-white max-md:w-full  rounded-md'
              href='/services'
            >
              <div class='justify-center items-center inline-flex  w-full'>
                <div class='w-full h[62.77px] relative flex-col justify-start items-start flex'>
                  <Image
                    src={img9}
                    alt='hero'
                    className='mix-blenddifference w-full'
                  />
                </div>
              </div>
              <div class='flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black'>
                <div class='w[300px] h[143px]  max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full'>
                  <div
                    class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                  >
                    Web services
                  </div>
                  <div class="w[300px] leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                    Hiring Tech Services is working as a placement consultant
                    service company serving the needs of the clients.
                  </div>
                </div>
                <div class=' arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all'>
                  <div class='w-[31px] h-[21px] relative  flex-col justify-start items-start flex'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='32'
                      height='21'
                      viewBox='0 0 32 21'
                      fill='none'
                      className='group-hover:fill-white'
                    >
                      <g clip-path='url(#clip0_906_953)'>
                        <path
                          d='M2.48035 10.7594L29.2652 10.7594'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                        <path
                          d='M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527'
                          stroke='black'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_906_953'>
                          <rect
                            width='31'
                            height='21'
                            fill='white'
                            transform='translate(31.5 21) rotate(-180)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Services

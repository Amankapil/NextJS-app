import React from 'react'
import Image from 'next/image'
import hero from './assets/html.2ba4fabc69a89a8f71e6.png'
import hero2 from './assets/javascript.1ccd6ef9bb1f9c84ef00.png'
import hero3 from './assets/react.0cf951a69d8e58f83f9d.png'
import hero4 from './assets/css.69a82c2d9e45c933a9cb.png'
import hero5 from './assets/nextjs.48ddc8121a0fcb543d64.png'
import hero6 from './assets/github.3b9e32903aa89111875d.png'
import hero7 from './assets/graphql.fc6b9451733c620ceb86.png'
import hero8 from './assets/tailwind.e47ac876b8d4d0bba47a.png'
import imgte from './assets/Group 129.png'
import java from './assets/javaa.png'
import net from './assets/net.png'
import py from './assets/pythn.jpeg'
import vp from './assets/vps.png'
import aws from './assets/aws.jpeg'
import './style.scss'

const Tech2 = () => {
  return (
    <>
      <div className='w-full visio-bg py-20'>
        <div className='techstack w-full relative  bgyan-800 rounded-[35px_2px] my10 max-w-7xl mx-auto'>
          {/* <Image
            className='absolute right-0 -top-20 z-[999999] max-md:hidden'
            src={imgte}
            alt='k'
          /> */}
          <div className='max-w-6xl mx-auto'>
            <div className='flex flex-col self-end mt-10 max-md:mt-10 max-md:max-w-full'>
              {/* <div className='flex gap-5 self-start text-xl leading-9 text-sky-500 uppercase mt-10'>
                <div className='flex-auto  max-md:pl-6'>Start now</div>
                <div className='shrink-0 my-auto w-24 h-0.5 bg-sky-500 border-2 border-sky-500 border-solid' />
              </div> */}

              <div className='servidc mb-20'>
                <h3 className='self-start text-[#062B43] text-xl font-bold leading-[51.2px]'>
                  <span className='text-[#D79442]'>|</span> Technologies
                </h3>
                <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
                  Technology we serve
                </h1>
              </div>
            </div>
            {/* <p className=" text-[#733e3d] text-3xl mx-auto w-full max-w-7xl mb-4 font-bold border-b4 bordergray-500 p-2 flex max-lg:text-center">
              Technology we serve
            </p> */}

            <div className='max-w-7xl overflowhidden'>
              <div className='w[250%] flex '>
                {/* <div> */}
                {/* </div>  */}
                <div className='w-full justify-center items-start max-sm:w-[100%] flex flexwrap rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech'>
                  <div className='w-full justify-center items-center max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>HTML</p>
                    </div>
                    <div className='w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno '>
                      <Image
                        src={hero4}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>CSS</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero2}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>JavaScript</p>
                    </div>
                  </div>

                  <div className='w-full justify-center items-center max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech mt-28'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero3}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>React</p>
                    </div>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero8}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>Tailwind</p>
                    </div>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero5}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>Next JS</p>
                    </div>
                  </div>
                  <div className='w-full justify-center items-center max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech'>
                    <div className='  w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={hero7}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>GraphQL</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        className='w-20 mx-auto'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 24 24'
                        fill='#000000'
                      >
                        <path d='M12 0C5.37 0 0 5.37 0 12c0 5.302 3.438 9.8 8.205 11.385.6.11.82-.262.82-.58 0-.288-.012-1.05-.015-2.06-3.338.724-4.042-1.498-4.042-1.498-.546-1.386-1.334-1.755-1.334-1.755-1.09-.744.083-.728.083-.728 1.205.086 1.838 1.24 1.838 1.24 1.07 1.835 2.808 1.305 3.495.998.108-.776.42-1.306.763-1.605-2.67-.3-5.473-1.336-5.473-5.93 0-1.31.465-2.383 1.235-3.224-.125-.3-.54-1.526.118-3.18 0 0 1.008-.322 3.3 1.23a11.573 11.573 0 0 1 3-.402 11.573 11.573 0 0 1 3 .402c2.29-1.552 3.297-1.23 3.297-1.23.66 1.654.244 2.88.12 3.18.77.84 1.234 1.914 1.234 3.224 0 4.607-2.808 5.625-5.484 5.92.43.37.815 1.102.815 2.22 0 1.605-.015 2.896-.015 3.29 0 .322.215.695.825.577C20.566 21.795 24 17.296 24 12c0-6.63-5.37-12-12-12z' />
                      </svg>

                      <p className='mt-4'>GitHub</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <svg
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        fill='#4479A1'
                        className='w-20 mx-auto'
                      >
                        <path d='M12.174 0C18.894 0 24 2.975 24 5.852c0 2.877-5.106 5.852-11.826 5.852C5.094 11.704 0 8.729 0 5.852 0 2.975 5.094 0 12.174 0zm0 9.54c5.107 0 8.658-1.937 8.658-3.688 0-1.75-3.55-3.688-8.658-3.688-5.106 0-8.658 1.937-8.658 3.688 0 1.75 3.552 3.688 8.658 3.688zm0 11.384c5.107 0 8.658-1.937 8.658-3.688 0-1.75-3.55-3.688-8.658-3.688-5.106 0-8.658 1.937-8.658 3.688 0 1.75 3.552 3.688 8.658 3.688zM.696 12.447h2.608c.398 3.012 2.5 5.58 5.47 7.17-4.397-1.408-7.474-4.183-8.078-7.17zm17.452 7.17c2.97-1.59 5.072-4.158 5.47-7.17h2.608c-.604 2.987-3.682 5.762-8.078 7.17z' />
                      </svg>

                      <p className='mt-4'>SQL</p>
                    </div>
                  </div>
                  <div className='w-full justify-center items-center max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech mt-28'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={java}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>Java</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={py}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />
                      <p className='mt-4'>Python</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={net}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>DotNet</p>
                    </div>
                  </div>

                  <div className='w-full justify-center items-center max-sm:w-[100%] flex flex-col rid gridcols-2  gap-20 overflw-hidden text-center py-8 px12 sm:px-0  mtech'>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={aws}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>AWS</p>
                    </div>
                    <div className=' w-[150px] shadow-md hover:scale-105 duration-500 py-2 rounded-lg techno'>
                      <Image
                        src={vp}
                        width={200}
                        alt=''
                        className='w-20 mx-auto'
                      />

                      <p className='mt-4'>VPS</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Tech2

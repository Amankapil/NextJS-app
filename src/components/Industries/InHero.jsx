import React from 'react'
import './style.scss'
import Image from 'next/image'
import img from './assets/Frame.png'

const InHero = () => {
  return (
    <>
      {/* <div className='industriesweser'>
        <div className='w-full h-[635px] max-w7xl mxauto industrie '>
          <div className='w-4px] text-400 text-white  max-w-7xl mx-auto  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-center items-center h-[700px]'>
            <div className='max-w-4xl mx-auto flex flex-col justify-center items-center max-md:mt-20'>
              <h1 className='text-400 text-white text-[48px]  font-bold  leading-[108%] max-md:text-[40px] max-md:leading-[54px]'>
                Business Covered.
              </h1>
              <p className='text-400 text-white text-[32px]  font-bold max-md:text-[40px] max-md:leading-[54px]'>
                We serve businesses across a range of industries, delivering
                designs that get results.
              </p>
              <Image src={img} alt='industruies' />
            </div>
          </div>
        </div>
      </div> */}
      {/* div */}

      <section>
        ;
        <section className='w-full py12 serv h-[735px] max-md:h-[500px] relative overflow-hidden'>
          <div class='w-full max-w-7xl mx-auto '>
            <div class="w-4px] text-400 text-white text-[87.74px]  font-normal font['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px]  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify- items-start h-[648px] flex-col justify-between">
              <div className=' mt-10 w-[54%] max-md:w-full'>
                <h3 className='self-start text-[#175574] text-xl text-left font-bold leading-[51.2px]'>
                  <span className='text-[#D79442]'>|</span> Industries We Serve
                </h3>
                <h1 className='self-start text-[#062B43] text-left text-[41px] font-bold leading-[51.2px]'>
                  Empowering every sector with innovative technology solutions
                </h1>
              </div>
              <div className='servidc -mt-10 w-[100%] max-md:w-full flex justify-between'>
                <h3 className='self-start w-[10%] text-[#175574] text-xl text-left font-bold leading-[26.2px]'>
                  <span className='text-[41px]'>100+</span>
                  <br />
                  <span className='text-[20px]'>Great Team</span>
                </h3>
                <div className='flex flex-col'>
                  <div className='flex flexcol justify-center items-center'>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      width='50'
                      height='50'
                      viewBox='0 0 50 50'
                      fill='none'
                    >
                      <path
                        d='M45.7592 22.4321L36.9701 30.0161L39.6478 41.3579C39.7956 41.9736 39.7575 42.6192 39.5385 43.2133C39.3195 43.8074 38.9293 44.3232 38.4172 44.6957C37.9052 45.0681 37.2942 45.2804 36.6616 45.3058C36.0289 45.3312 35.4029 45.1686 34.8627 44.8384L24.9994 38.768L15.1303 44.8384C14.5901 45.1667 13.9648 45.3278 13.3333 45.3015C12.7017 45.2751 12.092 45.0625 11.581 44.6904C11.0701 44.3183 10.6806 43.8033 10.4617 43.2103C10.2428 42.6173 10.2043 41.9728 10.351 41.3579L13.0385 30.0161L4.24939 22.4321C3.77146 22.019 3.42581 21.4743 3.25561 20.866C3.08541 20.2576 3.0982 19.6126 3.29239 19.0115C3.48658 18.4104 3.85356 17.8798 4.34749 17.4861C4.84143 17.0923 5.44044 16.8527 6.0697 16.7973L17.5931 15.8676L22.0385 5.10984C22.2791 4.52354 22.6886 4.02204 23.215 3.66909C23.7413 3.31614 24.3608 3.12769 24.9945 3.12769C25.6283 3.12769 26.2477 3.31614 26.7741 3.66909C27.3004 4.02204 27.7099 4.52354 27.9506 5.10984L32.3939 15.8676L43.9174 16.7973C44.5479 16.8507 45.1486 17.0889 45.6444 17.4821C46.1401 17.8754 46.5088 18.4062 46.7042 19.008C46.8996 19.6098 46.913 20.2559 46.7428 20.8654C46.5726 21.4748 46.2264 22.0205 45.7474 22.4341L45.7592 22.4321Z'
                        fill='#D79442'
                      />
                    </svg>

                    <h3 className='self-start w[10%] text-[#175574] text-[60px] text-left font-bold leading-[55.2px]'>
                      4.3
                    </h3>
                  </div>

                  <h3 className='self-start w[10%] text-[#175574] text-xl text-left font-bold leading-[12.2px]'>
                    {/* <span className='text-[41px]'>100+</span> */}
                    <br />
                    <span className='text-[20px]'>25k reviews</span>
                  </h3>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default InHero

import React from 'react'
import './style.scss'
const Serve = () => {
  return (
    <>
      <section className='relative h-full  max-md:h-full'>
        <div className='serve'>
          <div className=' max-w-7xl mx-auto pt-20 max-mbg-[#000]'>
            {/* <div className='head'> */}
            <div className=' mt-10 w-[64%] max-md:w-full'>
              <h3 className='self-start text-[#175574] text-[41px] text-left font-bold leading-[51.2px]'>
                <span className='text-[#D79442]'>|</span> Our Expertise Across
                Industries
              </h3>
              <h1 className='self-start uppercase text-[#062B43] text-left text-xl font-bold leading-[51.2px]'>
                Industry Overview
              </h1>
            </div>
            {/* </div> */}
            <div className='iconssg flex py-8 flex-wrap justify-end items-center gap-6 text-white max-md:gap-5 max-md:flex-wrap max-md:justify-center'>
              <div className='flex flexwrap gap-8 max-md:flex-wrap'>
                <div className='flex flex-wrap gap-8 items-center justify-end max-md:justify-center max-md:flex-wrap'>
                  <div className='iconone2 relative rounded-[30px] icokk'>
                    <span className='text-[24px] absolute bottom-4 left-4'>
                      Fintech
                    </span>
                  </div>
                  <div className='iconone3 relative icokk
'>
                    <span className='text-[24px] absolute bottom-4 left-4'>
                      E-Commerce
                    </span>
                  </div>
                  <div className='iconone4 relative icokk
'>
                    <span className='text-[24px] absolute bottom-4 left-4'>
                      Manufacture
                    </span>
                  </div>
                  <div className='iconone5 relative icokk
'>
                    <span className='text-[24px] absolute bottom-4 left-4'>
                      Food & Beverages
                    </span>
                  </div>
                </div>
                <div className='flex'>
                  <div className='iconone6 relative icokk
'>
                    <span className='text-[24px] absolute bottom-4 left-4'>
                      Supply Chain
                    </span>
                  </div>
                </div>
              </div>

              <div
                className='iconone7 relative icokk

'
              >
                <span className='text-[24px] absolute bottom-4 left-4'>
                  Hospitality
                </span>
              </div>

              <div className='iconone8 relative icokk
'>
                <span className='text-[24px] absolute bottom-4 left-4'>
                  Real Estate
                </span>
              </div>
              <div
                className='iconone9 relative icokk

'
              >
                <span className='text-[24px] absolute bottom-4 left-4'>
                  Healthcare
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className='flex justify-center items-center h-[100px]'></div>
      </section>
    </>
  )
}

export default Serve

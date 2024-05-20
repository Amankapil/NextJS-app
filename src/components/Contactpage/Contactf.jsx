import React from 'react'
import herok from './assets/1106206051preview.mp4'
import './contactstyle.css'

const Contactf = () => {
  return (
    <>
      <section className='w-full py12 bggrayy h-[735px] max-md:h-[500px] relative overflow-hidden hero-container'>
        <div class='w-full max-w-7xl mx-auto '>
          <div class="w-4px] text-400 text-white text-[87.74px]  font-normal font['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px]  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-start items-start h-[500px]">
            <div className='servidc mt-12 w-1/2 max-lg:w-full'>
              <h3 className='self-start text-left text-[#062B43] text-xl font-bold leading-[51.2px]'>
                <span className='text-[#D79442]'>|</span> Talk to Us
              </h3>
              <h1 className='self-start text-left text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
                Feel free to connect with us!
              </h1>
            </div>

            <div className='w-[100%] overflow-hidden absolute bottom-16 left-[75%] max-md:left-0 max-mdrelative'>
              <h3 className='self-start text-left text-[#062B43] ml-20 mt-10 text-[41px] font-bold leading-[50.2px]'>
                {/* <span className='text-[#D79442]'>| </span> */}
                24/7
                <br />
                Available
              </h3>
            </div>
          </div>
        </div>
      </section>
      {/* <section>
        <div className='hero-container'>
          <div className='hero- flex justify-center items-center gap-0 py-40 h-full '>
            <div className='left-description w-[50%] max-lg:w-full max-md:p-3'>
              <h1 className='text-[55px] text-[#fff] font-bold leading-[120%] mt-6 text-center'>
                We'd love to hear from you. Contact us using the form below.
              </h1>
            </div>
            <div className='right-desc'></div>
          </div>
        </div>
      </section> */}
    </>
  )
}

export default Contactf

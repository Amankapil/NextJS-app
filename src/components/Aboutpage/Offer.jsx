import React from 'react'
import './about.scss'
const Offer = () => {
  return (
    <>
      <div className='flex justify-center items-start px-16 pb-20 w-full text-white max-lg:h-full   max-md:px-5 max-md:max-w-full about-bg-offer mx-auto max-w-[1200px] '>
        <div className='flex flex-col mt-9 w-1/2 max-md:max-w-full z-[999999] max-md:w-full'>
          <p className='self-  self-center  text-center text-[#062B43] text-[55px] font-bold leading-[62.2px]'>
            Ready to elevate your brand with Creative Design solutions?
          </p>

          <div className='mt-8 flex justify-center items-start'>
            <button className='px-8 py-3 hover:bg[#8AAAE5] bg-[#D79442] text-white hovertext-black rounded-3xl  '>
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Offer

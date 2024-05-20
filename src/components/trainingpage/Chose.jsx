import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import './train.scss'
// import Link from "next/link";
// import hero from './assets/prime.png'
import hero1 from './clients/xebia.png'
import hero2 from './clients/wns.png'
import hero3 from './clients/tm.png'
import hero4 from './clients/tele.png'
import hero5 from './clients/tech.png'
import hero6 from './clients/sep.png'
import hero7 from './clients/pur.png'
import hero8 from './clients/pay.png'
import hero9 from './clients/inc.png'
import hero10 from './clients/gen.png'
import hero11 from './clients/ch.png'

const Chose = () => {
  return (
    <section className='w-full py12 bggryy h-[735px] max-md:h-[500px] relative overflow-hidden'>
      <div class='w-full max-w-7xl mx-auto '>
        <div class="w-4px] text-400 text-white text-[87.74px]  font-normal font['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px]  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-start items-start h-[500px]">
          <div className='servidc mt-12 w-1/2 max-lg:w-full'>
            <h3 className='self-start text-left text-[#062B43] text-xl font-bold leading-[51.2px]'>
              Trainings
            </h3>
            <h1 className='self-start text-left text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
              Access the world’s best Learning courses With Hiring tech
            </h1>
          </div>

          <div className='w-[80%] overflow-hidden absolute bottom-10 -right-[25%]'>
            <div className=' flex gap-16 flexcol w[50%]  justify-center items-center max-md:gap-8 top-bot'>
              <div>
                <Image src={hero1} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero1} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero2} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero3} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero4} width={150} alt='hero' />
              </div>
              <div>
                <Image src={hero5} width={150} alt='hero' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Chose

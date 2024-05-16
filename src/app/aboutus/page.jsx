import About from '@/components/Aboutpage/About'
import Mission from '@/components/Aboutpage/Mission'
import Offer from '@/components/Aboutpage/Offer'
import Stream from '@/components/Aboutpage/Stream'
import Team from '@/components/Aboutpage/Team'
import React from 'react'

const page = () => {
  return (
    <>
      {/* <div>about page</div> */}
      <About />
      {/* <Mission /> */}
      <Stream />
      <Team />
      <Offer />
    </>
  )
}

export default page

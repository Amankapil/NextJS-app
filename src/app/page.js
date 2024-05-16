import Home2hero from '@/components/home2/Home2hero'
import Vision2 from '@/components/home2/Vision2'
import About2 from '@/components/home2/About2'
import Techstack from '@/components/homepage/Techstack'
import Testimonials from '@/components/homepage/Testimonials'
import Service2 from '@/components/home2/service2'
import Testimonials2 from '@/components/home2/Testimonials2'
import Trail from '@/components/home2/Trial'
import Clients from '@/components/homepage/Clients'
import Hero from '@/components/homepage/Hero'
import Vision from '@/components/homepage/Vision'
import Services from '@/components/homepage/Services'
import Testi2 from '@/components/homepage/Testi2'
import Tech2 from '@/components/homepage/Tech2'

export default function Home () {
  return (
    <>
      {/* <Home2hero /> */}
      <Hero />
      {/* <Trail /> */}
      <Vision2 />
      <About2 />
      {/* <Service2 /> */}
      <Services />
      <Clients />

      <section className='relative'>
        <Testimonials />
        {/* <Testi2 /> */}
        {/* <Techstack /> */}
        <Tech2 />
      </section>
    </>
  )
}

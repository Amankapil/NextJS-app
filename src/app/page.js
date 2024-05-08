import Home2hero from '@/components/home2/Home2hero'
import Vision2 from '@/components/home2/Vision2'
import About2 from '@/components/home2/About2'
import Techstack from '@/components/homepage/Techstack'
import Testimonials from '@/components/homepage/Testimonials'
import Service2 from '@/components/home2/service2'
import Testimonials2 from '@/components/home2/Testimonials2'
import Trail from '@/components/home2/Trial'
import Clients from '@/components/homepage/Clients'

export default function Home () {
  return (
    <>
      <Home2hero />
      <Trail />
      <About2 />
      <Service2 />
      <Clients />

      <section className='relative'>
        <Testimonials />
        <Techstack />
      </section>
    </>
  )
}

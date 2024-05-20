import React from 'react'
import Head from 'next/head'

import Image from 'next/image'

import img from './asstes/s2.webp'
// import img2 from "./asstes/offer.jpg";
import img2 from './asstes/offers.webp'
import img3 from './asstes/profil.jpg'
import devesh from './team/devesh.jpg'
import shruti from './team/shruti.jpg'
import abhi from './team/abhidutt.jpg'
import imgss from './asstes/23.png'
import amn from './team/amnp.JPG'
import sonam from './team/sonam.jpg'
import dev from './team/dev.jpg'
import './about.scss'
import Link from 'next/link'

const About = () => {
  return (
    <div className=' min-hscreen '>
      <Head>
        <title>About Us</title>
        <meta
          name='description'
          content='Learn about our team providing training on React and web technologies.'
        />
      </Head>

      <div className='w-full h-[435px] max-w7xl mxauto bggray max-md:h-full'>
        <div className="w-4px] text-400 text-white text-[87.74px]  font-normal font['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px] max-w7xl mx-auto  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-center itemscenter h-[500px] flex-wrap max-md:h-full">
          {/* <h1>Empowering Connections, Inspiring Futures.</h1> */}
          {/* <Image src={imgss} alt='k' /> */}
          <div className=' flex justify-between ite w-full px-16 max-md:px-4 max-lg:flex-wrap'>
            <div className='servidc mb20 mt-10'>
              <h3 className='self-start text-left text-[#062B43] text-xl font-bold leading-[51.2px]'>
                <span className='text-[#D79442]'>|</span> Our Expertise
              </h3>
              <h1 className='self-start text-[#062B43] text-[41px] font-bold leading-[51.2px]'>
                Why choose us?
              </h1>
            </div>
            <div className=' mb20 mt-10 w-[30%] max-md:w-full'>
              <h3 className='self-start text-[#062B43] text-[30px] font-bold leading-[51.2px] text-left'>
                1. Focused Training
              </h3>
              <p className='self-start text-[#175574] text-[20px] font-normal text-left leading-[30.2px]'>
                Learn web development essentials like React.js, JavaScript,
                HTML, and CSS from our experts.
              </p>
            </div>
          </div>

          <div className=' flex justify-between ite w-full px-20 ml-48 mt-[16%] max-sm:px-4 max-lg:flex-wrap max-lg:mt-20 max-md:ml-0 max-md:h-full '>
            <div className=' mb20 mt-10 w-[30%]  max-md:w-full'>
              <h3 className='self-start text-[#062B43] text-[30px] font-bold leading-[51.2px] text-left'>
                2. Supportive Guidance
              </h3>
              <p className='self-start text-[#175574] text-[20px] font-normal text-left leading-[30.2px]'>
                Get valuable feedback and guidance from our instructors to
                overcome challenges and reach your potential.
              </p>
            </div>
            <div className=' mb20 mt-10 pl-10 w-[30%] max-md:w-full max-md:pl-0'>
              <h3 className='self-start text-[#062B43] text-[30px] font-bold leading-[51.2px] text-left'>
                3.Hands-On Experience
              </h3>
              <p className='self-start text-[#175574] text-[20px] font-normal text-left leading-[30.2px]'>
                Gain practical skills through real-world projects and exercises.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container max-w-7xl mx-auto px-4 py-8 '>
        {/* <section className="mb-8 flex justify-between items-center gap-20 max-lg:flex-wrap">
          <div className="w-[50%] max-lg:w-full">
            <h2 className="text-4xl font-bold mb-4 text-[#062b43]">
              Our Mission
            </h2>
            <p className="text-gray-700 text-[18px]">
              We are Hiring Tech IT services, proudly offering advanced IT
              consultancy services alongside a group of esteemed placement
              agencies, carefully tending to the needs of both IT and Non-IT
              industries across India. In Indore, we are recognized as Hiring
              Tech, known for our excellence and rapid growth in providing
              top-quality placement solutions for newcomers and experienced
              professionals alike. Our services cover every corner of the
              country, ensuring that our clients receive personalized solutions
              that fit their specific needs.
              <br />
              <br />
              As a leading placement consultancy in Indore, endorsed by many
              reputable companies, Hiring Tech Consultants is respected for our
              reliability and consistency, having successfully served over a
              hundred companies. Our expertise includes Placement Services,
              Manpower Recruitment, Staffing Solutions, Human Resource
              Consultancy, and Career Consulting, with a proven track record of
              placing over a hundred and fifty candidates within India and
              abroad.
            </p>
          </div>

          <div className="rightimg">
            <Image src={img} width={600} alt="hero" />
          </div>
        </section> */}
        {/* <Mission/> */}
        <section className='my-20 mt-20 flex justify-between items-center gap-20 max-lg:flex-wrap-reverse'>
          {/* <div className="left">
            <Image src={img2} width={600} alt="hero" />
          </div> */}
          {/* <div className="w-[50%] max-lg:w-full">
            <h2 className="text-4xl font-bold mb-4 text-[#062b43]">
              What We Offer
            </h2>
            <p className="text-gray-700 text-[18px]">
              Our adept instructors specialize in comprehensive training
              programs for web development, covering vital topics like React.js,
              JavaScript, HTML, and CSS. We offer diverse learning avenues,
              including online courses, workshops, and personalized coaching,
              tailored to your needs. With a focus on practical learning, we
              provide real-world projects for hands-on experience. Our
              supportive instructors offer valuable guidance and feedback to
              help you navigate challenges and maximize your potential. Whether
              you're a novice or seasoned developer, our programs empower you to
              succeed in today's tech landscape. Join us to embark on an
              enriching learning journey, where you'll gain the skills and
              knowledge necessary to thrive as a web developer. Let's
              collaborate and shape the future of the web together.
            </p>
            <br />
            <p className="text-gray-700 text-[18px]">
              Our team of experienced instructors provides comprehensive
              training programs covering a wide range of topics, including
              React.js, JavaScript, HTML, CSS, and more. We offer online
              courses, workshops, and personalized coaching to help you reach
              your full potential as a web developer.
            </p>
          </div> */}

          {/* <Offer/> */}
        </section>
      </div>
    </div>
  )
}

export default About

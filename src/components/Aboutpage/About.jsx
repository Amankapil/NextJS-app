import React from "react";
import Head from "next/head";

import Image from "next/image";

import img from "./asstes/s2.webp";
// import img2 from "./asstes/offer.jpg";
import img2 from "./asstes/offers.webp";
import img3 from "./asstes/profil.jpg";
const About = () => {
  return (
    <div className="bggray-100 min-h-screen max-w-7xl mx-auto">
      <Head>
        <title>About Us</title>
        <meta
          name="description"
          content="Learn about our team providing training on React and web technologies."
        />
      </Head>
      {/* <header className="bg-blue-500 text-white py-4">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold">About Us</h1>
          <p className="mt-2">
            Empowering developers through cutting-edge training in React and web
            technologies.
          </p>
        </div>
      </header> */}

      <div class="w-full max-w-7xl mx-auto ">
        <div class="w-4px] text-400 text-black text-[87.74px]  font-normal font['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px]  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-center items-center h-[400px]">
          <div>Empowering Connections, Inspiring Futures.</div>
        </div>
      </div>
      <div className="container mx-auto px-4 py-8 ">
        <section className="mb-8 flex justify-between items-center gap-20 max-lg:flex-wrap">
          <div className="w-[50%] max-lg:w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#733e3d]">
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
        </section>
        <section className="my-20 mt-20 flex justify-between items-center gap-20 max-lg:flex-wrap-reverse">
          <div className="left">
            <Image src={img2} width={600} alt="hero" />
          </div>
          <div className="w-[50%] max-lg:w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#733e3d]">
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
          </div>
        </section>

        <section className="mb-28">
          <h2 className="text-2xl font-bold mb-10 text-[#733e3d]">
            Meet Our Team
          </h2>
          <div className="flex gap-10 flex-wrap justify-center">
            <div className="bg-white rounded-lg shadow-md p-2">
              <Image src={img3} width={300} alt="hero" />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold my-2">Thor</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </div>
              <p className="text-gray-700">Lead Instructor(God Of Thunder)</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-2">
              <Image src={img3} width={300} alt="hero" />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold my-2">Tony Stark</h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </div>
              <p className="text-gray-700">Senior Developer(Iron Man)</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-2">
              <Image src={img3} width={300} alt="hero" />
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-bold my-2">Peter Parker </h3>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </div>
              <p className="text-gray-700">UI/UX Specialist(Spiderman)</p>
            </div>
            {/* <div className="bg-white rounded-lg shadow-md p-2">
              <Image src={img3} width={300} alt="hero" />
              <h3 className="text-xl font-bold my-2">Aman Johnson</h3>
              <p className="text-gray-700">NEXTJS Specialist</p>
            </div> */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;

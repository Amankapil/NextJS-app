import React from "react";
import Head from "next/head";

import Image from "next/image";

import img from "./asstes/abouth.jpg";
import img2 from "./asstes/offer.jpg";
import img3 from "./asstes/profile.jpg";
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
      <div className="container mx-auto px-4 py-8 ">
        <section className="mb-8 flex justify-between items-center gap-20">
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-[#733e3d]">
              Our Mission
            </h2>
            <p className="text-gray-700 text-[18px]">
              We are on a mission to equip aspiring developers with the skills
              and knowledge needed to thrive in the ever-evolving world of web
              development.
              <br />
              <br />
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facere
              ducimus necessitatibus sint inventore ullam similique eligendi
              pariatur labore impedit nobis voluptatum molestiae blanditiis
              veniam aliquid sed facilis accusantium aut officia debitis, enim
              voluptas aspernatur.
            </p>
          </div>

          <div className="rightimg">
            <Image src={img} width={600} alt="hero" />
          </div>
        </section>
        <section className="my-20 mt-20 flex justify-between items-center gap-10">
          <div className="left">
            <Image src={img2} width={600} alt="hero" />
          </div>
          <div className="w-1/3">
            <h2 className="text-2xl font-bold mb-4 text-[#733e3d]">
              What We Offer
            </h2>
            <p className="text-gray-700 text-[18px]">
              Our team of experienced instructors provides comprehensive
              training programs covering a wide range of topics, including
              React.js, JavaScript, HTML, CSS, and more. We offer online
              courses, workshops, and personalized coaching to help you reach
              your full potential as a web developer.
            </p>
            <p className="text-gray-700">
              Our team of experienced instructors provides comprehensive
              training programs covering a wide range of topics, including
              React.js, JavaScript, HTML, CSS, and more. We offer online
              courses, workshops, and personalized coaching to help you reach
              your full potential as a web developer.
            </p>
          </div>
        </section>

        <section>
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
                <h3 className="text-xl font-bold my-2">Tony Start</h3>
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

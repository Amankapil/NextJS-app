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
            <p className="text-gray-700">
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
            <p className="text-gray-700">
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

              <h3 className="text-xl font-bold my-2">John Doe</h3>
              <p className="text-gray-700">Lead Instructor</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-2">
              <Image src={img3} width={300} alt="hero" />
              <h3 className="text-xl font-bold my-2">Jane Smith</h3>
              <p className="text-gray-700">Senior Developer</p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-2">
              <Image src={img3} width={300} alt="hero" />
              <h3 className="text-xl font-bold my-2">Alex Johnson</h3>
              <p className="text-gray-700">UI/UX Specialist</p>
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

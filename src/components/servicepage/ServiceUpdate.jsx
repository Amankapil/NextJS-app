import Image from "next/image";
import React from "react";
import "./service.scss";
import img from "./assets/vect.png";
import img2 from "./assets/3.png";
import img3 from "./assets/4.png";
import img4 from "./assets/2.png";

const ServiceUpdate = () => (
  <>
    <section className="servicebg max-md:px-4 max-md:py-20">
      <section>
        <div className="main flex max-w-7xl h[500px] mx-auto gap-10 items-center justify-center max-md:flex-wrap">
          <div className="left-section">
            <h1 className="text-[48px] text-[#082494]">Tech Training</h1>
            <p className="text-[20px] text-[#062D76]">
              In our tech training consultancy, we provide comprehensive
              programs tailored to the ever-evolving tech landscape. Our courses
              cover a broad spectrum of topics, including programming languages,
              software development, data science, cybersecurity, and more. With
              experienced instructors and hands-on learning opportunities, we
              offer flexible formats such as online courses, workshops, and
              personalized coaching sessions. Whether you're a beginner or an
              experienced professional, our training equips you with the skills
              and knowledge to thrive in the tech industry. Stay ahead of the
              curve with our cutting-edge curriculum and unlock new
              opportunities in the dynamic world of technology.
            </p>
          </div>
          <div className="right-div relative">
            <p className="someone -mt-32 text-[450px]">01</p>
            
            <Image
              src={img}
              alt="lj"
              className="absolute bottom-10 max-md:relative"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="main flex max-w-7xl h[500px] mx-auto gap-10 items-center justify-center max-md:flex-wrap-reverse">
          <div className="right-div relative">
            <p className="someone -mt-32 text-[450px]">02</p>

            <Image
              src={img3}
              alt="lj"
              className="absolute bottom-10 max-md:relative"
            />
          </div>

          <div className="left-section">
            <h1 className="text-[48px] text-[#082494]">IT Concern</h1>
            <p className="text-[20px] text-[#062D76]">
              We understand that every learner has unique needs and preferences,
              which is why we offer flexible training formats such as online
              courses, in-person workshops, and personalized coaching sessions.
              Our experienced instructors, who are industry professionals
              themselves, deliver practical, hands-on training that ensures
              participants gain real-world experience and proficiency in web
              development technologies.
              <br />
              Whether you're a beginner taking your first steps into the world
              of coding or an experienced developer looking to expand your skill
              set, our training programs cater to individuals at all levels of
              expertise. We provide a supportive learning environment where
              participants can ask questions, receive feedback, and collaborate
              with peers to enhance their learning experience.
            </p>
          </div>
        </div>
      </section>
      <section>
        <div className="main flex max-w-7xl h[500px] mx-auto gap-10 items-center justify-center max-md:flex-wrap">
          <div className="left-section">
            <h1 className="text-[48px] text-[#082494]">HR Training</h1>
            <p className="text-[20px] text-[#062D76]">
              In our HR training consultancy, we offer comprehensive programs
              tailored to empower professionals in human resources management.
              Our courses cover a broad spectrum of HR topics, including
              recruitment, employee relations, performance management, and
              organizational development. Through a blend of theoretical
              knowledge and practical application, participants gain valuable
              insights and skills essential for success in the dynamic field of
              HR.
              <br />
              We provide various training formats to accommodate diverse
              learning preferences, including in-person workshops, online
              courses, and customized training sessions. Our experienced
              instructors bring real-world expertise and industry best practices
              to the classroom, ensuring that participants receive relevant and
              up-to-date knowledge.
            </p>
          </div>
          <div className="right-div relative">
            <p className="someone -mt-32 text-[450px]">03</p>
            <Image
              src={img4}
              alt="lj"
              className="absolute bottom-0 max-md:relative"
            />
          </div>
        </div>
      </section>
      <section>
        <div className="main flex max-w-7xl h[500px] mx-auto gap-10 items-center justify-center max-md:flex-wrap-reverse max-md:gap-10">
          <div className="right-div relative">
            <p className="someone -mt-32 text-[450px] max-md:text-[200px] ">
              04
            </p>

            <Image
              src={img2}
              alt="lj"
              className="absolute bottom-10 max-md:relative"
            />
          </div>
          <div className="left-section">
            <h1 className="text-[48px] text-[#082494]">Web Development</h1>
            <p className="text-[20px] text-[#062D76]">
              In our web development training consultancy, we provide
              comprehensive programs designed to equip individuals with the
              skills and knowledge necessary to thrive in the rapidly evolving
              field of web development. Our courses cover a wide range of
              essential topics, including but not limited to HTML, CSS,
              JavaScript, React.js, and more.
            </p>
          </div>
        </div>
      </section>
    </section>
  </>
);

export default ServiceUpdate;

import React from "react";
// import img3 from "../assets/pexels-iryna-riabchykova-12876443 1.png"
import Image from "next/image";

import img from "./assets/hree.webp";

import './service.scss'


const ItConcern = () => {
  return (
    <>
      <>
        <div className="serviepageappdevs max-lg:px-4 bg-service ">
          <div className="w-full h-full relative max-lg:h-full">
            <div className="flex max-lg:flex-wrap-reverse  max-lg:justify-center  max-lg:items-center   max-w-7xl mx-auto justify-center gap-40">
              <div>
                <div className="w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-full left-[730px] mt[80px]  bg-inc-100 flex-col justify-center items-center inline-flex">
                  <Image src={img} width={700} hieght={400} alt="hero" />
                </div>
              </div>

              <div className="max-md:w-full">
                <div className="ml[80px] max-md:ml-0 mt-[80px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4">
                  <div className="flex-col justify-start items-start gap-[42px] flex">
                    <div className="flex-col justify-start items-start gap-[22px] flex">
                      <div className="w-[631.03px] max-md:w-full text-[#062b43] text-[49.20px] font-normal font[''] leading-[59.04px] max-sm:text-[40px]">
                        IT concern
                      </div>
                      <div className="w-[513.61px] max-md:w-full opacity80 text-black  font-normal font[''] leading-normal text-[18px]">
                        We understand that every learner has unique needs and
                        preferences, which is why we offer flexible training
                        formats such as online courses, in-person workshops, and
                        personalized coaching sessions. Our experienced
                        instructors, who are industry professionals themselves,
                        deliver practical, hands-on training that ensures
                        participants gain real-world experience and proficiency
                        in web development technologies.
                        <br />
                        <br />
                        Whether you're a beginner taking your first steps into
                        the world of coding or an experienced developer looking
                        to expand your skill set, our training programs cater to
                        individuals at all levels of expertise. We provide a
                        supportive learning environment where participants can
                        ask questions, receive feedback, and collaborate with
                        peers to enhance their learning experience.
                      </div>
                    </div>
                  </div>
                </div>

                {/* <div className="flex ml[80px] max-md:ml-0 mt-16 gap-10 w-[621px] flex-wrap max-md:w-full text-[18px] ">
                  <div className="w-[167.11px] left-[80px] top-[496px]  opacity-80 text-black text-[18px] font-normal font[''] leading-normal max-sm:w-[30%]">
                    lorem
                  </div>
                  <div className="w-[167.04px] left-[298px] top-[496px]  opacity-80 text-black  font-normal font[''] leading-normal max-sm:w-[50%]">
                    lorem
                  </div>
                  <div className="w-[166.55px] left-[513px] top-[496px]  opacity-80 text-black  font-normal font[''] leading-normal max-sm:w-[30%]">
                    lorem
                  </div>
                  <div className="w-[166px] left-[80px] top-[570.33px]  opacity-80 text-black  font-normal font[''] leading-normal max-md:w-full max-sm:w-[50%]">
                    lorem
                  </div>
                  <div className="w-[125.06px] left-[298.11px] top-[570.33px]  opacity-80 text-black  font-normal font[''] leading-normal max-sm:w-[100%]">
                    lorem
                  </div>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default ItConcern;

"use client";

import React, { useState } from "react";
// import img3 from "../assets/pexels-iryna-riabchykova-12876443 1.png"
import Image from "next/image";

import img from "./assets/it.webp";
import img2 from "./assets/trainin.jpg";
import "./service.scss";
const Servicepage = () => {
  const [data, setData] = useState(0);
  const handleclick = () => {
    setData(data + 1);
  };

  return (
    <>
      {/* <button onClick={handleclick}>add</button>
      {data} */}

      <div class="w-full bggrayy max-lgpx-4">
        <div class="w-4px] text-400 text-white text-[87.74px]  font-normal font['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px] max-w-7xl mx-auto max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-center items-center h-[650px] max-md:h-[500px]">
          <div>We must continue to innovate, and re-innovate every day.</div>
        </div>
      </div>
      {/* <>
        <div className="bg-service pb-10">
          <div className="serviepageappdevs  max-w-7xl mx-auto max-lg:px-4 ">
            <div className="w-full h-full relative max-lg:h-full">
              <div className="flex max-lg:flex-col  max-lg:justify-center  max-lg:items-center   max-w-7xl mx-auto justify-center">
                <div className="max-md:w-full">
                  <div className="ml[80px] max-md:ml-0 mt-[80px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4">
                    <div className="w-[521.42px] max-md:w-full justify-start items-center gap-[13.42px] inline-flex"></div>
                    <div className="flex-col justify-start items-start gap-[42px] flex">
                      <div className="flex-col justify-start items-start gap-[22px] flex">
                        <div className="w-[631.03px] max-md:w-full text-[#062b43] text-[49.20px] font-normal font[''] leading-[59.04px] max-sm:text-[40px]">
                          Tech training
                        </div>
                        <div className="w-[513.61px] max-md:w-full opacity80 text-black text-[18px] font-normal font[''] leading-normal">
                          In our tech training consultancy, we provide
                          comprehensive programs tailored to the ever-evolving
                          tech landscape. Our courses cover a broad spectrum of
                          topics, including programming languages, software
                          development, data science, cybersecurity, and more.
                          With experienced instructors and hands-on learning
                          opportunities, we offer flexible formats such as
                          online courses, workshops, and personalized coaching
                          sessions. Whether you're a beginner or an experienced
                          professional, our training equips you with the skills
                          and knowledge to thrive in the tech industry. Stay
                          ahead of the curve with our cutting-edge curriculum
                          and unlock new opportunities in the dynamic world of
                          technology.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-inc-100 flex-col justify-center items-center inline-flex">
                    <Image src={img} width={700} alt="hero" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </> */}
    </>
  );
};

export default Servicepage;

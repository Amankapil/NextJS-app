import React from "react";
import Image from "next/image";

import img from "./assets/hre.webp";

import './service.scss'
const Hr = () => {
  return (
    <>
      <div className="serviepageappdevs max-lg:px-4 bg-service pb-10">
        <div className="w-full h-full relative max-lg:h-full">
          <div className="flex max-lg:flex-col  max-lg:justify-center  max-lg:items-center   max-w-7xl mx-auto justify-center">
            <div className="max-md:w-full">
              <div className="ml[80px] max-md:ml-0 mt-[80px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4">
                <div className="w-[521.42px] max-md:w-full justify-start items-center gap-[13.42px] inline-flex">
                  {/* <div className="opacity-60 text-black text-sm font-normal font['Archivo'] uppercase leading-snug">
                      our services
                    </div>
                    <div className="grow shrink basis-0 h-[0px] opacity-60 border border-black"></div> */}
                </div>
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px] max-md:w-full text-[#062b43] text-[49.20px] font-normal font[''] leading-[59.04px] max-sm:text-[40px]">
                      Hr Training
                    </div>
                    <div className="w-[513.61px] max-md:w-full opacity80 text-black textbase font-normal font[''] leading-normal text-[18px]">
                      In our HR training consultancy, we offer comprehensive
                      programs tailored to empower professionals in human
                      resources management. Our courses cover a broad spectrum
                      of HR topics, including recruitment, employee relations,
                      performance management, and organizational development.
                      Through a blend of theoretical knowledge and practical
                      application, participants gain valuable insights and
                      skills essential for success in the dynamic field of HR.
                      <br />
                      <br />
                      We provide various training formats to accommodate diverse
                      learning preferences, including in-person workshops,
                      online courses, and customized training sessions. Our
                      experienced instructors bring real-world expertise and
                      industry best practices to the classroom, ensuring that
                      participants receive relevant and up-to-date knowledge.
                    </div>
                  </div>
                  {/* <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black text-base font-normal font[''] capitalize leading-normal">
                        Learn more
                      </div>
                    </button> */}
                </div>
              </div>

              {/* <div className="flex ml[80px] max-md:ml-0 mt-16 gap-10 w-[621px] flex-wrap max-md:w-full text-[18px] ">
                <div className="w-[167.11px] left-[80px] top-[496px]  opacity-80 text-black font-normal font[''] leading-normal max-sm:w-[30%]">
                  lorem
                </div>
                <div className="w-[167.04px] left-[298px] top-[496px]  opacity-80 text-black texe font-normal font[''] leading-normal max-sm:w-[50%]">
                  lorem
                </div>
                <div className="w-[166.55px] left-[513px] top-[496px]  opacity-80 text-black textbase font-normal font[''] leading-normal max-sm:w-[30%]">
                  lorem
                </div>
                <div className="w-[166px] left-[80px] top-[570.33px]  opacity-80 text-black textbase font-normal font[''] leading-normal max-md:w-full max-sm:w-[50%]">
                  lorem
                </div>
                <div className="w-[125.06px] left-[298.11px] top-[570.33px]  opacity-80 text-black textbase font-normal font[''] leading-normal max-sm:w-[100%]">
                  lorem
                </div>
              </div> */}
            </div>

            <div>
              <div className="w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-zinc100 flex-col justify-center items-center inline-flex">
                {/* <img
                    className="w-[360px] h-[434px] max-md:w-full   max-lg:w-[665px] max-lg:h-[800px] max-md:h-full"
                    src={img3}
                    alt="placeholder"
                  /> */}
                <Image src={img} width={600} alt="hero" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hr;

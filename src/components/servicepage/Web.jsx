import React from "react";
import Image from "next/image";

import img from "./assets/web.jpg";
import "./service.scss";

const Web = () => {
  return (
    <> 
      <div className="serviepageappdevs max-lg:px-4  bg-service">
        <div className="w-full h-full relative max-lg:h-full">
          <div className="flex max-lg:flex-wrap-reverse  max-lg:justify-center  max-lg:items-center   max-w-7xl mx-auto justify-center gap-40 max-md:gap-10">
            <div>
              <div className="w[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-zinc100 flex-col justify-center items-center inline-flex">
                <Image src={img} width={600} alt="hero" />
              </div>
            </div>
            <div className="max-md:w-full">
              <div className="ml[80px] max-md:ml-0 mt-[80px]  flex-col justify-center items-start gap-[30px] inline-flex max-xl:ml-4">
                <div className="flex-col justify-start items-start gap-[42px] flex">
                  <div className="flex-col justify-start items-start gap-[22px] flex">
                    <div className="w-[631.03px] max-md:w-full text-[#062b43] text-[49.20px] font-normal font[''] leading-[59.04px] max-sm:text-[40px]">
                      Web Development
                    </div>
                    <div className="w-[513.61px] max-md:w-full opacity80 text-black textbase text-[18px] font-normal font[''] leading-normal">
                      In our web development training consultancy, we provide
                      comprehensive programs designed to equip individuals with
                      the skills and knowledge necessary to thrive in the
                      rapidly evolving field of web development. Our courses
                      cover a wide range of essential topics, including but not
                      limited to HTML, CSS, JavaScript, React.js, and more.
                    </div>
                  </div>
                </div>
              </div>

              {/* <div className="flex ml[80px] max-md:ml-0 mt-16 gap-10 w-[621px] flex-wrap max-md:w-full text-[18px] ">
              <div className="w-[167.11px] left-[80px] top-[496px]  opacity-80 text-black textbase font-normal font[''] leading-normal max-sm:w-[30%]">
                lorem
              </div>
              <div className="w-[167.04px] left-[298px] top-[496px]  opacity-80 text-black textbase font-normal font[''] leading-normal max-sm:w-[50%]">
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
          </div>
        </div>
      </div>
    </>
  );
};

export default Web;

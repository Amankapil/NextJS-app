import React from "react";
// import img3 from "../assets/pexels-iryna-riabchykova-12876443 1.png"
import Image from "next/image";

import img from "./assets/trainin.jpg";
const Servicepage = () => {
  return (
    <>
      <div class="w-full max-w-7xl mx-auto ">
        <div class="w-4px] text-400 text-black text-[87.74px]  font-normal font['Graphik'] leading-[108%] max-md:text-[50px] max-md:leading-[54px]  max-lg:text-[70px] max-lg:leading-[7px] text-center flex justify-center items-center h-[400px]">
          <div>We must continue to innovate, and re-innovate every day.</div>
        </div>
      </div>
      <>
        <div className="serviepageappdevs">
          <div className="w-full h-[488px] relative max-lg:h-full">
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
                      <div className="w-[631.03px] max-md:w-full text-black text-[49.20px] font-normal font[''] leading-[59.04px] max-sm:text-[40px]">
                        Tech training
                      </div>
                      <div className="w-[513.61px] max-md:w-full opacity80 text-black text-[18px] font-normal font[''] leading-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit minus in saepe obcaecati explicabo error ipsa
                        libero doloribus tenetur voluptatem.
                      </div>
                    </div>
                    {/* <button className="px-8 py-4 rounded-[31px] border border-black justify-center items-center gap-2 inline-flex hover:bg-yellow-400 transition-all  hover:border-yellow-400 max-sm:w-full">
                      <div className="text-black text-base font-normal font[''] capitalize leading-normal">
                        Learn more
                      </div>
                    </button> */}
                  </div>
                </div>

                <div className="flex ml[80px] max-md:ml-0 mt-16 gap-10 w-[621px] flex-wrap max-md:w-full text-[18px] ">
                  <div className="w-[167.11px] left-[80px] top-[496px]  opacity-80 text-black tet-base font-normal font[''] leading-normal max-sm:w-[30%]">
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
                </div>
              </div>

              <div>
                <div className="w-[359px]  max-md:w-full max-md:h-full  max-lg:w-[665px] max-lg:h-[800px] h-[434px] left-[730px] mt-[80px]  bg-zinc-100 flex-col justify-center items-center inline-flex">
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
    </>
  );
};

export default Servicepage;

import React from "react";
import Image from "next/image";

// import img from "./asstes/training.png";
import img from "./assets/training.png";
import img2 from "./assets/concern.png";
import img3 from "./assets/hr.png";
import img4 from "./assets/web.png";
import img5 from "./assets/arrow.png";

const Services = () => {
  return (
    <>
      <div className="home-service mx-auto max-w-7xl max-lg:h-full">
        <div className="servidc">
          <h2 className=" text-[#733e3d] text-3xl font-bold mb-4 max-lg:text-center">
            Our Services
          </h2>
        </div>
        <div className="flex justify-start items-center gap-4 flex-wrap max-lg:justify-center max-lg:h-full max-md:flex-col">
          <a
            class="mb-[17px] service-cards w-[32.451%] h-[392px] pl-[30px] pr-[30px] py-[45px] bgwhite flex-col items-start gap-[46.12px] inline-flex  transitionall text-black group  hover:bg-[#733e3d] hover:shadow-xl transition-all hovertext-white hover:text-white max-md:w-full " 
            href="/services"
          >
            <div class="justify-center items-center inline-flex">
              <div class="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                <Image
                  src={img}
                  width={66}
                  className="mix-blenddifference"
                  alt="hero"
                />
              </div>
            </div>
            <div class="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black">
              <div class="w-[340px] max-sm:h-full h-[143px] flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full">
                <div
                  class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline group-hover:textwhite"
                >
                  Tech Training
                </div>
                <div class="w-[340px]  leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                  Hiring Tech Services is working as a placement consultant
                  service company serving the needs of the clients.
                </div>
              </div>
              <div class=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all">
                <div class="w-[31px] h-[21px]  relative  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="21"
                    viewBox="0 0 32 21"
                    fill="none"
                    className="group-hover:fill-white"
                  >
                    <g clip-path="url(#clip0_906_953)">
                      <path
                        d="M2.48035 10.7594L29.2652 10.7594"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_906_953">
                        <rect
                          width="31"
                          height="21"
                          fill="white"
                          transform="translate(31.5 21) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <a
            class="mb-[17px] service-cards w-[32.451%] h-[392px] pl-[30px] pr-[30px] py-[45px] bgwhite flex-col items-start gap-[46.12px] inline-flex hover:text-white  transitionall text-black group hover:bg-[#733e3d] hover:shadow-md transition-all max-md:w-full"
            href="/services"
          >
            <div class="justify-center items-center inline-flex">
              <div class="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                <Image src={img2} width={66} alt="hero" />
              </div>
            </div>
            <div class="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black">
              <div class="w-[340px] h-[143px] max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full">
                <div
                  class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                >
                  IT concerns.
                </div>
                <div class="w-[340px]  leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                  Hiring Tech Services is working as a placement consultant
                  service company serving the needs of the clients.
                </div>
              </div>
              <div class=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all">
                <div class="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="21"
                    viewBox="0 0 32 21"
                    fill="none"
                    className="group-hover:fill-white"
                  >
                    <g clip-path="url(#clip0_906_953)">
                      <path
                        d="M2.48035 10.7594L29.2652 10.7594"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_906_953">
                        <rect
                          width="31"
                          height="21"
                          fill="white"
                          transform="translate(31.5 21) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <a
            class="mb-[17px] service-cards w-[32.451%] h-[392px] pl-[30px] pr-[30px] py-[45px] bgwhite flex-col items-start gap-[46.12px] inline-flex hover:text-white transitionall text-black group  hover:bg-[#733e3d] hover:shadow-md transition-all max-md:w-full"
            href="/services"
          >
            <div class="justify-center items-center inline-flex">
              <div class="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                <Image src={img3} width={66} alt="hero" />
              </div>
            </div>
            <div class="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black">
              <div class="w-[340px] h-[143px] max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full">
                <div
                  class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                >
                  HR training
                </div>
                <div class="w-[340px]  leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                  Hiring Tech Services is working as a placement consultant
                  service company serving the needs of the clients.
                </div>
              </div>
              <div class=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all">
                <div class="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="21"
                    viewBox="0 0 32 21"
                    fill="none"
                    className="group-hover:fill-white"
                  >
                    <g clip-path="url(#clip0_906_953)">
                      <path
                        d="M2.48035 10.7594L29.2652 10.7594"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_906_953">
                        <rect
                          width="31"
                          height="21"
                          fill="white"
                          transform="translate(31.5 21) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </a>
          <a
            class="mb-[17px] service-cards w-[32.451%] h-[392px] pl-[30px] pr-[30px] py-[45px] bgwhite flex-col items-start gap-[46.12px] inline-flex hover:text-white transitionall text-black group hover:bg-[#733e3d] hover:shadow-md transition-all max-md:w-full"
            href="/services"
          >
            <div class="justify-center items-center inline-flex">
              <div class="w-[62.77px] h-[62.77px] relative flex-col justify-start items-start flex">
                <Image src={img4} width={66} alt="hero" />
              </div>
            </div>
            <div class="flex-col justify-end items-start gap-6 inline-flex max-[800px]:justify-between group-hoverbg-black">
              <div class="w-[340px] h-[143px]  max-sm:h-full flex-col justify-between items-start flex max-[800px]:h-[174px] max-[1310px]:w-full">
                <div
                  class="service-heading letter-spacing-4 text-[24px] font-normal font['Graphik'] leading-[28.80px]
                
                group-hover:underline"
                >
                  Web services
                </div>
                <div class="w-[340px]  leading[150%] opacity-80  text-[18px] font-normal font['Graphik'] leading-normal  max-[1310px]:w-full">
                  Hiring Tech Services is working as a placement consultant
                  service company serving the needs of the clients.
                </div>
              </div>
              <div class=" arrow-svg w-[68px] h-[27px] px-[18.50px] py-[3px] rounded-[54px] borde borderblack justify-center items-center inline-flex  group-hover:bg[#00246B] group-hover:ml-2  transition-all">
                <div class="w-[31px] h-[21px] relative  flex-col justify-start items-start flex">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="21"
                    viewBox="0 0 32 21"
                    fill="none"
                    className="group-hover:fill-white"
                  >
                    <g clip-path="url(#clip0_906_953)">
                      <path
                        d="M2.48035 10.7594L29.2652 10.7594"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M25.1714 6.66579L29.2648 10.7592L25.1714 14.8527"
                        stroke="black"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_906_953">
                        <rect
                          width="31"
                          height="21"
                          fill="white"
                          transform="translate(31.5 21) rotate(-180)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Services;

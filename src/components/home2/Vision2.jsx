import Image from "next/image";
import React from "react";
// Image
import img from "./assets/Group 112.png";
import img2 from "./assets/Group 115.png";

import "./style.scss";
const Vision2 = () => {
  return (
    <div className="bg[#20AFED] flex flex-col self-center p-10 pb-20 mt28 w-full max--[1021px] max-md:mt-10 max-md:max-w-full mx-auto backdrop-blur-[110.60px] vision-bg">
      <div className="max-w-[1021px] mx-auto">
        <div className="flex flex-col self-end max-w-full w[287px]">
          <div className="flex max-lg:flex-col max-md:items-center max-md:justify-center flex-wrap">
            <div className="flex z-10 flex-col mt-0 max-w-full w-[561px] max-md:mt-0 max-lg:w-full">
              <h1 className="text-4xl font-bold text-amber-600 leading-[51.2px] max-md:max-w-full max-md:text-center">
                Our Vision
              </h1>
              <div className="mt-8 text-3xl max-sm:text-[20px] tracking-tight text-slate-900 max-md:max-w-full max-md:text-center">
                Our vision is to empower individuals
                <br />
                worldwide through accessible <br />
                and innovative learning solutions.
              </div>
            </div>
            <div className="flex flex-col items-start pt-6 aspect bgstone-300 rounded[65px] max-md:pr-5">
              <div className="flex z-10 flex-col items-start px-5 pt-1 pb-6 mb-0 bordr max-md:mb-2.5">
                <Image
                  loading="lazy"
                  src={img2}
                  alt="k"
                  className="w-full aspect-[1.06]"
                />
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex justify-between max-lg:flex-wrap-reverse max-lg:w-full">
              <Image
                loading="lazy"
                src={img}
                alt="k"
                width={400}
                height={400}
                className="w aspect-[1.06]"
              />
              <div>
                <h1 className="self-end max-md:text-center text-end mt-16 text-4xl font-bold text-amber-600 leading-[51.2px] max-md:mt-10">
                  Our Mission
                </h1>
                <div className="self-end mt-0 mb-2.5 text-3xl tracking-tight text-right text-slate-900 max-md:mt-0 max-md:max-w-full max-md:self-start max-md:text-center max-sm:text-[20px]">
                  Our mission is to be the leading provider of transformative
                  education
                  <br />
                  and talent acquisition solutions.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision2;

import Image from "next/image";
import React from "react";

const Testimonials2 = () => {
  return (
    <>
      <div className="w-full vision-bg py-20">
        <div className="mx-5 mt-24 max-md:mt-10 max-md:mr-2.5 max-md:max-w-full ">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-8 py-10 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between text-2xl">
                  <Image
                    loading="lazy"
                    src=""
                    alt="k"
                    className="shrink-0 aspect-[0.87] w-[65px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="font-bold text-stone-900">Grace Turner</div>
                    <div className="mt-4 font-medium text-zinc-400">
                      Director
                    </div>
                  </div>
                </div>
                <div className="mt-12 text-2xl leading-9 text-black max-md:mt-10">
                  At hiring tech you get tremondous opportunities to elevate
                  your career.
                </div>
                <div className="self-end mt-20 text-8xl text-teal-900 max-md:mt-10 max-md:text-4xl">
                  “
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-9 pt-9 pb-16 mx-auto w-full bg-cyan-800 rounded-[35px_4px] max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between text-2xl leading-8">
                  <Image
                    loading="lazy"
                    src=""
                    alt="k"
                    className="shrink-0 aspect-[0.87] w-[65px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="font-bold text-white">Linda Carter</div>
                    <div className="mt-5 font-medium text-neutral-200">
                      Analyst
                    </div>
                  </div>
                </div>
                <div className="mt-10 text-xl leading-8 text-white">
                  Best place to find job easily, if someone is looking to make
                  their career in Full stack software development and it sector
                  then learning from them definitely serve your purpose.
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-[33%] max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow px-7 py-10 border-gray-300 border-solid border-[3px] leading-[128%] rounded-[35px_4px] max-md:px-5 max-md:mt-10">
                <div className="flex gap-5 justify-between text-2xl">
                  <Image
                    loading="lazy"
                    src=""
                    alt="k"
                    className="shrink-0 aspect-[0.87] w-[65px]"
                  />
                  <div className="flex flex-col my-auto">
                    <div className="font-bold text-stone-900">Alex Walker</div>
                    <div className="mt-5 font-medium text-zinc-400">
                      Attorney
                    </div>
                  </div>
                </div>
                <div className="mt-14 text-xl leading-9 text-black max-md:mt-10">
                  Collaborating with hiring tech has been game changer for our
                  organisation.
                </div>
                <div className="self-end mt-20 text-8xl text-teal-900 max-md:mt-10 max-md:text-4xl">
                  “
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials2;

// import * as React from "react";
import Image from "next/image";
import "./style.scss";
const Home2hero = () => {
  return (
    <div className="flex overflowhidden relative flex-col justify-center py16 w-full rounded-lg min-h[577px] max-md:max-w-full home-container h-[700px]">
      <div className="flex relative flex-col px-20 mb56 w-full max-md:px-5 max-md:mb-10 max-md:max-w-full">
        <div className="self-start mt-0 ml-12 text-5xl font-bold bg-clip-text leading-[64px] max-md:mt-10 max-md:max-w-full max-md:text-4xl max-md:leading-[60px] text-white">
          Cultivating Innovation, Crafting Success Pioneering Tech
          Transformation Together
        </div>
        <div className="mt-3 mr-20 ml-12 text-2xl leading-10 text-white max-md:mr-2.5 max-md:max-w-full">
          Information Technology Consulting Services IT Consulting services
          integrate new systems, ensure robust cybersecurity, or navigate the
          rapid pace of tech advancements.
        </div>
      </div>
    </div>
  );
};

export default Home2hero;

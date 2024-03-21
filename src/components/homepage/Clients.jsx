import React from "react";

import Image from "next/image";
// import Link from "next/link";
import hero from "./assets/prime.png";
import "./style.css";

const Clients = () => {
  return (
    <>
      {/* <div className="client">
        <div className="overflowhidden">
          <div className=" animate-marquee flex">
            <div>
              <Image src={hero} width={100} alt="hero" />
            </div>
            <div>
              <Image src={hero} width={100} alt="hero" />
            </div>
            <div>
              <Image src={hero} width={100} alt="hero" />
            </div>
            <div>
              <Image src={hero} width={100} alt="hero" />
            </div>
            <div>
              <Image src={hero} width={100} alt="hero" />
            </div>
          </div>
        </div>
      </div> */}

      {/* <marquee>
 
        <Image src={hero} width={100} alt="hero" />
        <Image src={hero} width={100} alt="hero" />
        <Image src={hero} width={100} alt="hero" />
        <Image src={hero} width={100} alt="hero" />
      </marquee> */}

      <div className="marquee-container">
        <div className="marquee-content flex">
          <Image src={hero} width={100} alt="hero" />
          <span>Your marquee content goes here. </span>
          <Image src={hero} width={100} alt="hero" />
          <Image src={hero} width={100} alt="hero" />
          <Image src={hero} width={100} alt="hero" />
        </div>
      </div>
    </>
  );
};

export default Clients;

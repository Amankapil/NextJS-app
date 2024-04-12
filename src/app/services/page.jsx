import Hr from "@/components/servicepage/Hr";
import ItConcern from "@/components/servicepage/ItConcern";
import Servicepage from "@/components/servicepage/Servicepage";
import Web from "@/components/servicepage/Web";
import React from "react";

const Services = () => {
  return (
    <>
      {/* <div>Services</div> */}
      <div className="">

      <Servicepage/>
      <ItConcern/>
      <Hr/>
      <Web/>
      </div>
    </>
  );
};

export default Services;

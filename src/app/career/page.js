import Accordian from "@/components/careerpage/Accordian";
import CareerHero from "@/components/careerpage/CareerHero";
import JobsPage from "@/components/careerpage/JobsPage";
import Whyus from "@/components/careerpage/Whyus";
import React from "react";

const Career = () => {
  return (
    <>
      {/* \<div>Career</div> */}
      <CareerHero />
      {/* <Accordian/> */}
      <Whyus />
      <JobsPage />
    </>
  );
};

export default Career;

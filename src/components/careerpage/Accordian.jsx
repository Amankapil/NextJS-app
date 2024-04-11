"use client";
import React, { useState } from "react";
import './career.scss';
const Accordian = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleBox = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };
  return (
    <>
     <div className="accordion flex">
      <div className="box h-[500px] w-[40px] bg-[#007667]">
        <div className="box-header" onClick={() => toggleBox(1)}>Box 1</div>
        {activeIndex === 1 && (
          <div className="box-content">
            Content of Box 1
          </div>
        )}
      </div>
      <div className="box">
        <div className="box-header" onClick={() => toggleBox(2)}>Box 2</div>
        {activeIndex === 2 && (
          <div className="box-content">
            Content of Box 2
          </div>
        )}
      </div>
      {/* Add more boxes as needed */}
    </div>
    </>
  );
};

export default Accordian;

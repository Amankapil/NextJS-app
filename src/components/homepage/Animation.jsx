"use client";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import CSS module or CSS-in-JS styles here

const ScrollingAnimation = () => {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // GSAP animation logic
    gsap.set(".panel", { zIndex: (i, target, targets) => targets.length - i });

    var images = gsap.utils.toArray(".panel:not(.purple)");
    images.forEach((image, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * (i + 0.5),
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });
      tl.to(image, { height: 0 });
    });

    gsap.set(".panel-text", {
      zIndex: (i, target, targets) => targets.length - i,
    });
    var texts = gsap.utils.toArray(".panel-text");
    texts.forEach((text, i) => {
      var tl = gsap.timeline({
        scrollTrigger: {
          trigger: "section.black",
          start: () => "top -" + window.innerHeight * i,
          end: () => "+=" + window.innerHeight,
          scrub: true,
          toggleActions: "play none reverse none",
          invalidateOnRefresh: true,
        },
      });
      tl.to(text, { duration: 0.33, opacity: 1, y: "50%" }).to(
        text,
        { duration: 0.33, opacity: 0, y: "0%" },
        0.66
      );
    });

    ScrollTrigger.create({
      trigger: "section.black",
      start: () => "top top",
      end: () => "+=" + (images.length + 1) * window.innerHeight,
      scrub: true,
      markers: true,
      pin: true,
      invalidateOnRefresh: true,
    });

    // Clean up function
    return () => {
      // Remove scroll triggers and animations if component unmounts
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section className="h-[900px] sticky top-4 z-[99999999999999999999999999999999999999999999999999999999999999999999999]">
      <div className="scroller">
        <section className="orange">
          <div className="text">This is some text inside of a div block.</div>
        </section>

        <section className="black">
          <div className="text-wrap">
            <div className="panel-text blue-text">Blue</div>
            <div className="panel-text red-text">Red</div>
            <div className="panel-text orange-text">Orange</div>
            <div className="panel-text purple-text">Purple</div>
          </div>

          <div className="p-wrap">
            <div className="panel blue"></div>
            <div className="panel red"></div>
            <div className="panel orange"></div>
            <div className="panel purple"></div>
          </div>
        </section>

        <section className="blue"></section>
      </div>
    </section>
  );
};

export default ScrollingAnimation;

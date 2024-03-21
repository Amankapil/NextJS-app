"use client";

import "./contact.scss";
import { useState, useEffect } from "react";
// import America from "./images/America.svg";
// import Europe from "./images/Europe.svg";
// import Asia from "./images/Asia.svg";
// import building from "./images/building.svg";
// import img from "./images/image 177.png";

const ContactHero = () => {
  const [time, setTime] = useState(new Date());
  const [time2, setTime2] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  useEffect(() => {
    const intervalId = setInterval(() => {
      // Use the time zone for Pacific Time
      const pacificTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Los_Angeles",
      });
      setTime2(new Date(pacificTime));
    }, 1000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);
  const hours = time.getHours();
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const hoursp = time2.getHours();
  const minutesp = time2.getMinutes();
  const secondsp = time2.getSeconds();

  const hourAngle = (360 / 12) * (hours % 12) + (360 / 12) * (minutes / 60);
  const minuteAngle = (360 / 60) * minutes + (360 / 60) * (seconds / 60);
  const secondAngle = (360 / 60) * seconds;
  const hourAnglep = (360 / 12) * (hoursp % 12) + (360 / 12) * (minutesp / 60);
  const minuteAnglep = (360 / 60) * minutesp + (360 / 60) * (secondsp / 60);
  const secondAnglep = (360 / 60) * secondsp;

  const formattedTime = time.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const formattedTime2 = time.toLocaleTimeString([], {
    timeZone: "America/Los_Angeles",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  const transformHourStyle = {
    transform: `rotate(${hourAngle}deg)`,
    transformOrigin: "bottom center",
  };

  const transformMinuteStyle = {
    transform: `rotate(${minuteAngle}deg)`,
    transformOrigin: "bottom center",
  };
  const transformSecondStyle = {
    transform: `rotate(${secondAngle}deg)`,
    transformOrigin: "bottom center",
  };
  const transformHourStylep = {
    transform: `rotate(${hourAnglep}deg)`,
    transformOrigin: "bottom center",
  };

  const transformMinuteStylep = {
    transform: `rotate(${minuteAnglep}deg)`,
    transformOrigin: "bottom center",
  };
  const transformSecondStylep = {
    transform: `rotate(${secondAnglep}deg)`,
    transformOrigin: "bottom center",
  };
  return (
    <>
      <section className="contact-hero">
        <h1 className="contact-hero-h1">
          Got any queries? Feel free to connect with us!
        </h1>

        <div className="flex justify-start gap-20 items-start">
          <div className="contact-form">
            <form action="" className="form">
              <div className="form-div">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Enter your first name"
                  className="name"
                />
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  className="name"
                  placeholder="Enter your last name"
                />
              </div>
              <input
                type="text"
                id="lname"
                name="lastname"
                placeholder="Enter your email"
                className="email"
              />
              <textarea
                id="subject"
                name="subject"
                placeholder="Your message"
                className="text"
              ></textarea>
            </form>
            <button className="hover:bg-[#dc4c51] bg-[#733e3d] text-white hovertext-black">
              Submit
            </button>
          </div>

          <div className="address-div2">
            {/* <h1 className="address-head">Office</h1> */}

            <div>
              {/* <h1>India</h1>
              <p>
                Sector 87
                <br /> Plasiya, Vijay Nagar,
                <br /> Indore, Mp 460001
              </p> */}

              <div class="mapouter w-[600px] h-[500px]">
                <div class="gmap_canvas">
                  <iframe
                    class="gmap_iframe w-[600px] h-[500px]"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=indore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>

                  <a href="https://strandsgame.net/">Strands Game</a>
                </div>

                {/* <style>
      
      .mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}


</style> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="regions">
        <h1>Regions we work in</h1>
        <div className="working-areas">
          <div>
            <img src={America} alt="" />
            <p>Americas</p>
          </div>
          <div>
            <img src={Europe} alt="" />
            <p>EMEA</p>
          </div>
          <div>
            <img src={Asia} alt="" />
            <p>Asia Pacific</p>
          </div>
        </div>
      </section> */}
      <section className="address">
        <div className="address-div">
          {/* <h1 className="address-head2">Our Offices</h1> */}

          {/* <img src={building} alt="" /> */}
        </div>
      </section>
      <section className="our-contact">
        <div className="contacts-info">
          <h1 className="contact-head"> Contact Us</h1>
          <div className="contact-details">
            <div>
              <h1>Call us</h1>
              <p>+1 415 523 5957</p>
            </div>
            <div>
              <h1>Write to us</h1>
              <p>info@hiringtech.in</p>
            </div>
            <div>
              <h1>Career inquiry </h1>
              <p>hr@hiringtech.in</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactHero;

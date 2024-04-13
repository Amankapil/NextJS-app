"use client";

import "./contact.scss";
import { useState, useEffect } from "react";
import axios from "axios";

const ContactHero = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [lastname, setLastname] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(name);
    console.log(email);
    // console.log(resume);
    try {
      const response = await axios.post("/api/contact", {
        name: name,
        email: email,
        lastname: lastname,
        message: message,
      });
      alert(response.status);
      console.log(response.data.message);
    } catch (error) {
      alert("Failed to send email");
      console.error("Error occurred while sending email:", error);
    }
  };

  return (
    <>
      <section className="contact-hero ">
        <h1 className="contact-hero-h1">
          Got any queries? Feel free to connect with us!
        </h1>

        <div className="flex justify-start mt-40 gap-20 items-start max-lg:flex-wrap max-lg:justify-center max-w-7xl mx-auto">
          <div className="contact-form wfull">
            <div className="form">
              <div className="form-div">
                <input
                  type="text"
                  id="fname"
                  name="firstname"
                  placeholder="Enter your first name"
                  className="name"
                  onChange={(e) => setName(e.target.value)}
                />
                <input
                  type="text"
                  id="lname"
                  name="lastname"
                  onChange={(e) => setLastname(e.target.value)}
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
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                id="subject"
                name="subject"
                placeholder="Your message"
                className="text"
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
            <button
              onClick={handleSubmit}
              className="hover:bg-[#dc4c51] bg-[#733e3d] text-white hovertext-black"
            >
              Submit
            </button>
          </div>

          <div className="address-div2">
            {/* <h1 className="address-head">Office</h1> */}

            <div>
              <div className="mapouter w-[500px] h-[500px] max-md:w-full">
                <div className="gmap_canvas">
                  <iframe
                    className="gmap_iframe w-[500px] h-[500px] max-md:w-full"
                    frameborder="0"
                    scrolling="no"
                    marginheight="0"
                    marginwidth="0"
                    src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=indore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>

                  {/* <a href="https://strandsgame.net/">Strands Game</a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="our-contact">
        <div className="contacts-info">
          <h1 className="contact-head"> Contact Us</h1>
          <div className="contact-details">
            <div>
              <h1>Call us</h1>
              <p>+91 877-0161528</p>
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

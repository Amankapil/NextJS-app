import React from "react";
import "./footer.css";
import Link from "next/link";
import Image from "next/image";

import tweet from "./assets/Vector (2).svg";
import tweet2 from "./assets/Vector (3).svg";
import tweet3 from "./assets/Vector.svg";
import tweet4 from "./assets/facebook-3-3 2.svg";
const Footer = () => {
  return (
    <>
      <footer className="main-footer bg-color-1 bg-[#733e3d] max-lg:p-4 z-50">
        <div className="pattern-layer"></div>
        <div className="auto-container max-w-6xl mx-auto">
          <div className="footer-top">
            <div className="widget-section">
              <div className="flex clearfix max-md:flex-wrap">
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget about-widget">
                    <div className="widget-title">
                      <h3>Office</h3>
                    </div>
                    <div className="text">
                      <p>
                        It is a long established fact that a reader will
                        distracted by the readable ...{" "}
                        <i className="fas fa-arrow-up"></i>
                      </p>
                      <p>
                        India
                        <br />
                        919 9th floor shekhar Central Indore <br />
                        MP 462010.
                      </p>
                    </div>
                    <div class="follow-us flex items-start justify-start mt-5 mb-10">
                      <div class="follow mr-6 text-white">Follow us on</div>
                      <div class="link-icon flex mr-5 gap-4 justify-center items-center ">
                        <Link href="https://x.com/">
                          <Image src={tweet2} alt="" />
                        </Link>
                        <Link href="https://x.com/">
                          <Image src={tweet} alt="" />
                        </Link>
                        <Image src={tweet3} alt="" />
                        <Image src={tweet4} alt="" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Useful Links</h3>
                    </div>
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/aboutus">About Us</Link>
                      </li>
                      <li>
                        <Link href="/services">Services</Link>
                      </li>
                      <li>
                        <Link href="/training">Our Solutions</Link>
                      </li>
                      <li>
                        <Link href="/">Testimonials</Link>
                      </li>
                      {/* <li>
                        <Link href="/">Employers</Link>
                      </li> */}
                      {/* <li>
                        <Link href="/">How It’s Work</Link>
                      </li> */}
                      <li>
                        <Link href="/career">Job Seekers</Link>
                      </li>
                      {/* <li>
                        <Link href="/">Industries</Link>
                      </li> */}
                      {/* <li>
                        <Link href="/">Leadership</Link>
                      </li> */}
                      <li>
                        <Link href="/contact">Let's Talk</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget contact-widget">
                    <div className="single-info-box">
                      <div className="widget-title">
                        <h3>For Employers</h3>
                      </div>
                      <ul className="info-box clearfix">
                        <li>
                          <Link href="tel:8004561234">+91 877-0161528</Link>
                        </li>
                        <li>
                          <Link href="mailto:hr@hiringtech.in">
                            hr@hiringtech.in
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className="single-info-box">
                      <div className="widget-title">
                        <h3>For Employees</h3>
                      </div>
                      <ul className="info-box clearfix">
                        <li>
                          <Link href="tel:8004560123">+91 877-0161528</Link>
                        </li>
                        <li>
                          <Link href="mailto:career@hiringtech.in">
                            career@hiringtech.in
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div class="footer-subscribe">
            <div class="text centred">
              <h3>Subscribe Us & Get Our Recruitment Updates in Your Inbox</h3>
            </div>
            <form action="contact.html" method="post" class="subscribe-form">
              <div class="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email address here ..."
                  required=""
                />
                
              </div>
            </form>
          </div> */}
          <div className="footer-bottom clearfix">
            <div className="copyright pull-left">
              <p>
                &copy; 2020 <a href="index.html">Hiring Tech</a>, All Rights
                Reserved.
              </p>
            </div>
            <ul className="footer-nav pull-right clearfix">
              <li>
                <Link href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link href="/">Terms & Conditions</Link>
              </li>
              <li>
                <Link href="">Site Map</Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

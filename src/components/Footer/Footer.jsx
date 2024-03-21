import React from "react";
import "./footer.css";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="main-footer bg-color-1 bg-[#733e3d] ">
        <div className="pattern-layer"></div>
        <div className="auto-container max-w-6xl mx-auto">
          <div className="footer-top">
            <div className="widget-section">
              <div className="flex clearfix">
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
                        United States <br />
                        866 Wilshire, 2nd Street <br />
                        Los Angeles 90024.
                      </p>
                    </div>
                    {/* <ul class="social-links clearfix">
                      <li>
                        <h5>Connected:</h5>
                      </li>
                      <li>
                        <a href="index.html">
                          <i class="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i class="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i class="fab fa-google-plus-g"></i>
                        </a>
                      </li>
                      <li>
                        <a href="index.html">
                          <i class="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul> */}
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 footer-column">
                  <div className="footer-widget links-widget">
                    <div className="widget-title">
                      <h3>Useful Links</h3>
                    </div>
                    <ul className="links-list clearfix">
                      <li>
                        <Link href="/">About Us</Link>
                      </li>
                      <li>
                        <Link href="/">Resources</Link>
                      </li>
                      <li>
                        <Link href="/">Our Solutions</Link>
                      </li>
                      <li>
                        <Link href="/">Testimonials</Link>
                      </li>
                      <li>
                        <Link href="/">Employers</Link>
                      </li>
                      <li>
                        <Link href="/">How It’s Work</Link>
                      </li>
                      <li>
                        <Link href="/career">Job Seekers</Link>
                      </li>
                      <li>
                        <Link href="/">Industries</Link>
                      </li>
                      <li>
                        <Link href="/">Leadership</Link>
                      </li>
                      <li>
                        <Link href="/contact">Contact Us</Link>
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
                          <a href="tel:8004561234">(800) 456-1234</a>
                        </li>
                        <li>
                          <a href="mailto:businesspartner@example.com">
                            business@hiringtech.com
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className="single-info-box">
                      <div className="widget-title">
                        <h3>For Employees</h3>
                      </div>
                      <ul className="info-box clearfix">
                        <li>
                          <a href="tel:8004560123">(800) 789-0123</a>
                        </li>
                        <li>
                          <a href="mailto:careeroption@example.com">
                            career@hiringtech.com
                          </a>
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
                <a href="/">Privacy Policy</a>
              </li>
              <li>
                <a href="index.html">Terms & Conditions</a>
              </li>
              <li>
                <a href="index.html">Site Map</a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;

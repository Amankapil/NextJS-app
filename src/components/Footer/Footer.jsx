import React from 'react'
import './footer.css'
import Link from 'next/link'
import Image from 'next/image'

import tweet from './assets/Vector (2).svg'
import tweet2 from './assets/Vector (3).svg'
import tweet3 from './assets/Vector.svg'
import tweet4 from './assets/facebook-3-3 2.svg'
const Footer = () => {
  return (
    <>
      <footer className='main-footer footer-bg bg-[#fff] text-[#175574] max-lg:p-4 z-50'>
        <div className='pattern-layer'></div>

        <div className='auto-container max-w-6xl mx-auto'>
          <div className='pt-10'>
            <Link href='/'>
              <div className='logobg'></div>
            </Link>
          </div>

          <div className='footer-top'>
            <div className='widget-section'>
              <div className='flex clearfix max-md:flex-wrap'>
                <div className='col-lg-4 col-md-6 col-sm-12 footer-column'>
                  <div className='footer-widget about-widget w-[50%]'>
                    <div className='widget-title'>
                      <h3>Office</h3>
                    </div>
                    <div className='text'>
                      {/* <p>
                        It is a long established fact that a reader will
                        distracted by the readable ...{" "}
                        <i className="fas fa-arrow-up"></i>
                      </p> */}
                      <p>
                        India
                        <br />
                        919 9th floor, Shekhar Central Indore, <br />
                        MP 452001.
                      </p>
                    </div>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 footer-column'>
                  <div className='footer-widget links-widget'>
                    <div className='widget-title'>
                      <h3>Useful Links</h3>
                    </div>
                    <ul className='links-list clearfix'>
                      <li>
                        <Link href='/aboutus'>About Us</Link>
                      </li>
                      <li>
                        <Link href='/services'>Services</Link>
                      </li>
                      <li>
                        <Link href='/expert'>Industry Expert</Link>
                      </li>
                      <li>
                        <Link href='/training'>Our Solutions</Link>
                      </li>
                      <li>
                        <Link href='/'>Testimonials</Link>
                      </li>
                      {/* <li>
                        <Link href="/">Employers</Link>
                      </li> */}
                      {/* <li>
                        <Link href="/">How It’s Work</Link>
                      </li> */}
                      <li>
                        <Link href='/career'>Job Seekers</Link>
                      </li>
                      <li>
                        <Link href='/Industries'>Industries</Link>
                      </li>

                      {/* <li>
                        <Link href="/">Industries</Link>
                      </li> */}
                      {/* <li>
                        <Link href="/">Leadership</Link>
                      </li> */}
                      <li>
                        <Link href='/contact'>Let's Talk</Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className='col-lg-4 col-md-6 col-sm-12 footer-column'>
                  <div className='footer-widget contact-widget'>
                    <div className='single-info-box'>
                      <div className='widget-title'>
                        <h3>For Employers</h3>
                      </div>
                      <ul className='info-box clearfix'>
                        <li>
                          <Link href='tel:8004561234'>+91 877-0161528</Link>
                        </li>
                        <li>
                          <Link href='mailto:hr@hiringtech.in'>
                            hr@hiringtech.in
                          </Link>
                        </li>
                      </ul>
                    </div>
                    <div className='single-info-box'>
                      <div className='widget-title'>
                        <h3>For Employees</h3>
                      </div>
                      <ul className='info-box clearfix'>
                        <li>
                          <Link href='tel:8004560123'>+91 877-0161528</Link>
                        </li>
                        <li>
                          <Link href='mailto:career@hiringtech.in'>
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
          <div className='footer-bottom clearfix flex justify-between gap-10 border-t-2 border-white max-md:flex-wrap'>
            <div className='flex gap-10 max-md:flex-wrap max-md:gap-4'>
              <div className='copyright pull-left'>
                <p>
                  &copy; 2020 <a href='index.html'>Hiring Tech</a>, All Rights
                  Reserved.
                </p>
              </div>
              <ul className='footer-nav pull-right clearfix'>
                <li>
                  <Link href='/privacy-policy'>Privacy Policy</Link>
                </li>
                <li>
                  <Link href='/'>Terms & Conditions</Link>
                </li>
                <li>
                  <Link href=''>Site Map</Link>
                </li>
              </ul>
            </div>

            <div className='follow-us flex items-start justify-start mt-5mb-10'>
              <div className='follow mr-6 text-white'>Follow us on</div>
              <div className='link-icon flex mr-5 gap-4 justify-center items-center '>
                <Link
                  target='_blank'
                  href='https://www.linkedin.com/company/hiring-tech/'
                >
                  <Image src={tweet2} alt='' />
                </Link>
                <Link target='_blank' href='https://twitter.com/HiringTech1'>
                  <Image src={tweet3} alt='' />
                </Link>
                <Link
                  target='_blank'
                  href='https://www.instagram.com/hiring_tech_recruitment/'
                >
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    x='0px'
                    y='0px'
                    width='25'
                    height='25'
                    viewBox='0 0 50 50'
                    fill='#fff'
                  >
                    <path
                      d='M 16 3 C 8.8324839 3 3 8.8324839 3 16 L 3 34 C 3 41.167516 8.8324839 47 16 47 L 34 47 C 41.167516 47 47 41.167516 47 34 L 47 16 C 47 8.8324839 41.167516 3 34 3 L 16 3 z M 16 5 L 34 5 C 40.086484 5 45 9.9135161 45 16 L 45 34 C 45 40.086484 40.086484 45 34 45 L 16 45 C 9.9135161 45 5 40.086484 5 34 L 5 16 C 5 9.9135161 9.9135161 5 16 5 z M 37 11 A 2 2 0 0 0 35 13 A 2 2 0 0 0 37 15 A 2 2 0 0 0 39 13 A 2 2 0 0 0 37 11 z M 25 14 C 18.936712 14 14 18.936712 14 25 C 14 31.063288 18.936712 36 25 36 C 31.063288 36 36 31.063288 36 25 C 36 18.936712 31.063288 14 25 14 z M 25 16 C 29.982407 16 34 20.017593 34 25 C 34 29.982407 29.982407 34 25 34 C 20.017593 34 16 29.982407 16 25 C 16 20.017593 20.017593 16 25 16 z'
                      fill='#fff'
                    ></path>
                  </svg>
                </Link>

                <Link
                  target='_blank'
                  href='https://www.linkedin.com/company/hiring-tech/'
                >
                  <Image src={tweet4} alt='' />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer

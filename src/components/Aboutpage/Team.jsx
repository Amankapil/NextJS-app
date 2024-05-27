import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import img from './asstes/s2.webp'
// import img2 from "./asstes/offer.jpg";
import img2 from './asstes/offers.webp'
import img3 from './asstes/profil.jpg'
import devesh from './team/dev.png'
import shruti from './team/shr.png'
import abhi from './team/abhidutt.jpg'
import amn from './team/amn.png'
import sonam from './team/sonam.jpg'
import dev from './team/kl.png'
import pro from './team/pro.png'
import sudh from './team/sud.png'
import faiz from './team/fai.png'
import abhii from './team/abhi.png'
import jat from './team/jat.png'

import './about.scss'
// import Offer from "./offer";
// import Mission from "./Mission";

const Team = () => {
  return (
    <>
      <section className='mb-28 pt-20 max-w-[1240px] mx-auto'>
        <h2 className='text-4xl font-bold mb-10 text-[#062b43]'>
          Meet Our Team
        </h2>
        <div className='flex gap-10 max-md:gap-0 flex-wrap justify-center items-center max-md:justify-center max-md:items-center '>
          <div className='bgwhite rounded-lg shadowmd p-2 max-w-[300px] max-md:max-w-[200px] group'>
            <Image src={abhii} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Abhidutt Sharma
                </h3>
                <p className='text-gray-700 font-medium'>Lead Instructor</p>
              </div>

              <Link
                target='_blanck'
                href='http://linkedin.com/in/abhidatt-sharma'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className='bgwhite rounded-lg shadowmd p-2 max-w-[300px] max-md:max-w-[200px] group'>
            <Image src={devesh} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Devesh Kumar
                </h3>
                <p className='text-gray-700 font-medium'>Senior Manager</p>
              </div>

              <Link
                target='_blanck'
                href='https://www.linkedin.com/in/devesh-kumar-shukla-ba98ba245'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className='bgwhite rounded-lg shadowmd p-2 max-w-[300px] max-md:max-w-[200px] group'>
            <Image src={shruti} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Shruti Dixit
                </h3>
                <p className='text-gray-700 font-medium'>Talent Acquisition</p>
              </div>

              <Link
                target='_blanck'
                href='http://www.linkedin.com/in/shruti-dixit-23b1021b7'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className='bgwhite rounded-lg group shadowmd p-2 max-w-[300px] max-md:max-w-[200px]'>
            <Image src={amn} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Aman Kapil
                </h3>
                <p className='text-gray-700 font-medium'>
                  Sr Full Stack Developer
                </p>
              </div>

              <Link
                target='_blanck'
                href='www.linkedin.com/in/aman-kapil-750640200'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className='bgwhite rounded-lg group shadowmd p-2 max-w-[300px] max-md:max-w-[200px]'>
            <Image src={dev} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Devayani Deshmukh
                </h3>
                <p className='text-gray-700 font-medium'>UI/UX Specialist</p>
              </div>

              <Link
                target='_blanck'
                href='http://linkedin.com/in/devayani-deshmukh-a29451297'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className='bgwhite rounded-lg shadowmd p-2 max-w-[300px] max-md:max-w-[200px] group'>
            <Image src={pro} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Projit Kumar
                </h3>
                <p className='text-gray-700 font-medium'>Front End Intern</p>
              </div>

              <Link
                target='_blanck'
                href='https://www.linkedin.com/in/projit-biswas-0a346a201'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className='bgwhite rounded-lg shadowmd p-2 max-w-[300px] max-md:max-w-[200px]  group'>
            <Image src={sudh} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Sudhanshu Gupta
                </h3>
                <p className='text-gray-700 font-medium'>
                  React Native Developer
                </p>
              </div>

              <Link
                target='_blanck'
                href='https://www.linkedin.com/in/sudhanshu-gupta-0b2787216'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>
          <div className='bgwhite rounded-lg shadowmd p-2 max-w-[300px] max-md:max-w-[200px] group'>
            <Image src={faiz} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Faizan Hussain
                </h3>
                <p className='text-gray-700 font-medium'> Front End Intern </p>
              </div>

              <Link
                target='_blanck'
                href='https://www.linkedin.com/in/faizan-husain'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>

          <div className='bgwhite rounded-lg shadowmd p-2 max-w-[300px] max-md:max-w-[200px] group'>
            <Image src={jat} width={300} height={300} alt='hero' />
            <div className='flex justify-center items-center relative'>
              <div>
                <h3 className='text-[20px] text-[#175574] font-bold my-2'>
                  Jatin Kumar
                </h3>
                <p className='text-gray-700 font-medium'>UI/UX Design Intern</p>
              </div>

              <Link
                target='_blanck'
                href='https://www.linkedin.com/in/jatinkumar05'
                className='absolute -right-10 opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                  fill='#175574'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
          </div>
          {/* <div className='bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]'>
            <Image src={shruti} width={300} className='h-[350px]' alt='hero' />
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold my-2'>Shruti Dixit</h3>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                x='0px'
                y='0px'
                width='30'
                height='30'
                viewBox='0 0 50 50'
              >
                <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
              </svg>
            </div>
            <p className='text-gray-700 font-medium'>Talent Acquisition</p>
            <p className='text-[16px] text-[#6B7280]'>
              Channeling the pulse of potential, our talent acquisition maestro
              orchestrates the rhythm of recruitment, harmonizing skills and
              passion to compose the perfect ensemble of talent.
            </p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]'>
            <Image
              src={devesh}
              width={300}
              height={300}
              className='h-[350px]'
              alt='hero'
            />
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold my-2'>Devesh Kumar</h3>
              <Link href='https://www.linkedin.com/in/devesh-kumar-shukla-ba98ba245'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
            <p className='text-gray-700 font-medium'>Senior Manager</p>
            <p className='text-[16px] text-[#6B7280]'>
              Steering the ship of strategy with seasoned expertise, our senior
              manager navigates the waves of challenge, anchoring our team in a
              harbor of success.
            </p>
          </div> */}
          {/* <div className="bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]">
            <Image src={sonam} width={300} className="h-[350px]" alt="hero" />
            <div className="flex justify-between items-center">
              <h3 className="text-xl font-bold my-2">Sonam kasliwal</h3>
              <Link
                href="https://www.linkedin.com/in/sonam-kasliwal-a1b82110a"
                target="_blank"
                rel="noopener"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="30"
                  height="30"
                  viewBox="0 0 50 50"
                >
                  <path d="M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z"></path>
                </svg>
              </Link>
            </div>
            <p className="text-gray-700 font-medium">Marketing Specialist</p>
            <p className="text-[16px] text-[#6B7280]">
              Mastering the art of persuasion with flair, our marketing sales
              virtuoso conducts the symphony of consumer engagement,
              transforming leads into loyal fans with each captivating note.
            </p>
          </div> */}
          {/* <div className='bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]'>
            <Image src={amn} width={300} className='h-[330px]' alt='hero' />
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold my-2'>Aman Kapil</h3>
              <Link
                target='_blank'
                rel='noopener'
                href='www.linkedin.com/in/aman-kapil-750640200'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
            <p className='text-gray-700 font-medium'>Sr Full Stack Developer</p>
            <p className='text-[16px] text-[#6B7280]'>
              the digital theater of innovation, our Full stack developer takes
              center stage, choreographing code with precision to deliver
              captivating user experiences that steal the spotlight.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]'>
            <Image
              src={dev}
              width={300}
              height={300}
              className='h-[330px]'
              alt='hero'
            />
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold my-2'>Devayani Deshmukh</h3>
              <Link
                href='http://linkedin.com/in/devayani-deshmukh-a29451297'
                target='_blank'
                rel='noopener'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
            <p className='text-gray-700 font-medium'>UI/UX specialist</p>
            <p className='text-[16px] text-[#6B7280]'>
              In the realm where creativity meets functionality, our UI/UX
              designer choreographs digital experiences with flair, crafting
              seamless journeys that dance effortlessly between user delight and
              innovation.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]'>
            <Image
              src={pro}
              width={300}
              height={300}
              className='h-[330px]'
              alt='hero'
            />
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold my-2'>Projit Kumar</h3>
              <Link
                href='https://www.linkedin.com/in/projit-biswas-0a346a201'
                target='_blank'
                rel='noopener'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
            <p className='text-gray-700 font-medium'>Trainee</p>
            <p className='text-[16px] text-[#6B7280]'>
              At the frontier of digital creation, our application developer
              orchestrates innovation with finesse, crafting code that
              harmonizes functionality and user experience into a seamless and
              captivating composition.
            </p>
          </div>
          <div className='bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]'>
            <Image
              src={faiz}
              width={300}
              height={300}
              className='h-[330px]'
              alt='hero'
            />
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold my-2'>Faizan Hussain</h3>
              <Link
                href='https://www.linkedin.com/in/projit-biswas-0a346a201'
                target='_blank'
                rel='noopener'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
            <p className='text-gray-700 font-medium'>Trainee</p>
            <p className='text-[16px] text-[#6B7280]'>
              Aspiring developer dedicated to refining abilities through
              mentorship and practical training opportunities.
            </p>
          </div>

          <div className='bg-white rounded-lg shadow-md p-2  max-w-[300px] max-md:max-w-[200px]'>
            <Image
              src={sudh}
              width={300}
              height={300}
              className='h-[330px]'
              alt='hero'
            />
            <div className='flex justify-between items-center'>
              <h3 className='text-xl font-bold my-2'>Sudhanshu Gupta</h3>
              <Link
                href='https://www.linkedin.com/in/projit-biswas-0a346a201'
                target='_blank'
                rel='noopener'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  x='0px'
                  y='0px'
                  width='30'
                  height='30'
                  viewBox='0 0 50 50'
                >
                  <path d='M41,4H9C6.24,4,4,6.24,4,9v32c0,2.76,2.24,5,5,5h32c2.76,0,5-2.24,5-5V9C46,6.24,43.76,4,41,4z M17,20v19h-6V20H17z M11,14.47c0-1.4,1.2-2.47,3-2.47s2.93,1.07,3,2.47c0,1.4-1.12,2.53-3,2.53C12.2,17,11,15.87,11,14.47z M39,39h-6c0,0,0-9.26,0-10 c0-2-1-4-3.5-4.04h-0.08C27,24.96,26,27.02,26,29c0,0.91,0,10,0,10h-6V20h6v2.56c0,0,1.93-2.56,5.81-2.56 c3.97,0,7.19,2.73,7.19,8.26V39z'></path>
                </svg>
              </Link>
            </div>
            <p className='text-gray-700 font-medium'>React Native developer</p>
            <p className='text-[16px] text-[#6B7280]'>
              Creating powerful cross-platform mobile applications with React
              Native for superior performance and accessibility. He is dedicated
              to continuous learning and contributing to impactful projects.
            </p>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default Team

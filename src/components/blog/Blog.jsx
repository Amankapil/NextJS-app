// 'use client'
// import React from 'react'
// import './blog.scss'
// // import img from "./assets/unsplash_L1y9f5O8wiA.svg";
// import img from './assets/2716353.jpg'
// import img2 from './assets/2716353.jpg'
// import img3 from './assets/lp.png'
// import img4 from './assets/ml.png'

// // import rain from './assets/Rainbow 1.png'
// import rainp from './assets/unsplash_HRZUzoX1e6w.png'
// import { useState } from 'react'
// import Link from 'next/link'
// import Image from 'next/image'
// import Emailsub from './Emailsub'

// const Blog = () => {
//   return (
//     <>
//       {/* ?///////////////////// */}
//       {/* div.fixed */}
//       {/* <div className="fixed-button">
//         <button className="fixed right-[50px] bottom-[50px]">
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             width="79"
//             height="80"
//             viewBox="0 0 79 80"
//             fill="none"
//           >
//             <circle cx="39.4639" cy="39.9436" r="39.375" fill="#3040D0" />
//           </svg>
//           <div className="absolute up">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="33"
//               height="32"
//               viewBox="0 0 33 32"
//               fill="none"
//             >
//               <path
//                 d="M22.9861 18.8026L16.4637 12.2803L9.94141 18.8026"
//                 stroke="white"
//                 strokeWidth="3.26117"
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//               />
//             </svg>
//           </div>
//         </button>
//       </div> */}

//       <section className='blog-main '>
//         <div className='blog flex flex-col items-center justify-center'>
//           <div className='blog-head pt-[15%] pb-4'>All Blogs</div>

//           <div className='all-blogs flex items-center justify-center flex-wrap pt-12'>
//             <div className='blog-box'>
//               <Link
//                 href='/blog/Tech-chronicles'
//                 className='in-box max-md:text-center'
//               >
//                 <Image src={img2} alt='' />

//                 <p className='pt-4 pb-0 max-md:text-center'>
//                   Tech Chronicles: Exploring the Digital Frontier
//                 </p>
//                 <span className='date p4'>02/04/2024</span>
//                 <div className='pt-2'>
//                   <Link href='/blog/Tech-chronicles'>Read More</Link>
//                 </div>
//               </Link>
//             </div>
//             <div className='blog-box'>
//               <Link
//                 href='/blog/Tech-Odyssey'
//                 className='in-box max-md:text-center'
//               >
//                 <Image src={img3} alt='' />

//                 <p className='pt-4 pb-0'>
//                   Tech Odyssey: Navigating the Digital Seas of Innovation
//                 </p>
//                 <span className='date p4'>13/04/2024</span>
//                 <div className='pt-2'>
//                   <Link href='/blog/Tech-Odyssey'>Read More</Link>
//                 </div>
//               </Link>
//             </div>
//             <div className='blog-box'>
//               <Link
//                 href='/blog/Digital-Frontiers'
//                 className='in-box max-md:text-center'
//               >
//                 <Image src={img4} alt='' />
//                 <p className='pt-4 pb-0'>
//                   Digital Frontiers: Exploring the Ever-Evolving Landscape of
//                   Tech Innovation
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='/blog/Digital-Frontiers'>Read More</Link>
//                 </div>
//               </Link>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box max-md:text-center'>
//                 <Image src={img} alt='' />

//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box max-md:text-center'>
//                 <Image src={img} alt='' />

//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box'>
//                 <Image src={img} alt='' />
//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box'>
//                 <Image src={img} alt='' />

//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box'>
//                 <Image src={img} alt='' />
//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box'>
//                 <Image src={img} alt='' />
//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box'>
//                 <Image src={img} alt='' />

//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box'>
//                 <Image src={img} alt='' />

//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//             <div className='blog-box'>
//               <div className='in-box'>
//                 <Image src={img} alt='' />

//                 <p className='pt-4 pb-0'>
//                   Lorem ipsum dolor sit amet consectetur.
//                 </p>
//                 <span className='date p4'>12/12/2012</span>
//                 <div className='pt-2'>
//                   <Link href='.'>Read More</Link>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* <div className="paginate flex items-center justify-center pt-24 max-md:flex-wrap">
//             <div className="prev">Prev</div>
//             <div className="page-number px-12 flex items-center justify-center">
//               <p className=" page active">1</p>
//               <span className="page-num ">2</span>
//               <span className="page-num ">3</span>
//               <span className="page-num ">4</span>
//               <span className="page-num ">5</span>
//             </div>
//             <div className="next">Next</div>
//           </div> */}
//         </div>
//       </section>

//       <Emailsub />
//     </>
//   )
// }

// export default Blog

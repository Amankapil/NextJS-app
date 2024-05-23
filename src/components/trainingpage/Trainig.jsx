'use client'
import axios from 'axios'
import Image from 'next/image'
import React, { useState } from 'react'
import img from './clients/23.png'
import img1 from './clients/21.png'
import img2 from './clients/22.png'

const Trainig = () => {
  const [loading, setLoading] = useState(false)
  const initializeRazorpay = () => {
    return new Promise(resolve => {
      const script = document.createElement('script')
      script.src = 'https://checkout.razorpay.com/v1/checkout.js'

      script.onload = () => {
        resolve(true)
      }
      script.onerror = () => {
        resolve(false)
      }

      document.body.appendChild(script)
    })
  }

  const makePayment = async () => {
    setLoading(true)
    const res = await initializeRazorpay()

    if (!res) {
      alert('Razorpay SDK Failed to load')
      setLoading(false)
      return
    }

    // Make API call to the serverless API
    const data = await fetch('/api/razorpay', { method: 'POST' }).then(t =>
      t.json()
    )

    // const data = await axios.post("/api/contact").then((t) => {
    //   console.log(t);
    // });
    console.log(data)
    var options = {
      key: 'rzp_test_WjOtHCtWT76ZeX', // Enter the Key ID generated from the Dashboard
      name: 'Name',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Thankyou for your test donation',
      image: 'https://manuarora.in/logo.png',
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
        setLoading(false)
      },
      prefill: {
        name: 'Aman Kapil',
        email: 'amankapil60@gmail.com',
        contact: '8103075691'
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }

  const makePayment2 = async () => {
    setLoading(true)
    const res = await initializeRazorpay()

    if (!res) {
      alert('Razorpay SDK Failed to load')
      setLoading(false)
      return
    }

    // Make API call to the serverless API
    const data = await fetch('/api/razorpay', { method: 'POST' }).then(t =>
      t.json()
    )

    // const data = await axios.post("/api/contact").then((t) => {
    //   console.log(t);
    // });
    console.log(data)
    var options = {
      key: 'rzp_test_WjOtHCtWT76ZeX', // Enter the Key ID generated from the Dashboard
      name: 'Name',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Thankyou for your test donation',
      image: 'https://manuarora.in/logo.png',
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
        setLoading(false)
      },
      prefill: {
        name: 'Aman Kapil',
        email: 'amankapil60@gmail.com',
        contact: '8103075691'
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }
  const makePayment3 = async () => {
    setLoading(true)
    const res = await initializeRazorpay()

    if (!res) {
      alert('Razorpay SDK Failed to load')
      setLoading(false)
      return
    }

    // Make API call to the serverless API
    const data = await fetch('/api/razorpay', { method: 'POST' }).then(t =>
      t.json()
    )

    // const data = await axios.post("/api/contact").then((t) => {
    //   console.log(t);
    // });
    console.log(data)
    var options = {
      key: 'rzp_test_WjOtHCtWT76ZeX', // Enter the Key ID generated from the Dashboard
      name: 'Name',
      currency: data.currency,
      amount: data.amount,
      order_id: data.id,
      description: 'Thankyou for your test donation',
      image: 'https://manuarora.in/logo.png',
      handler: function (response) {
        // Validate payment at server - using webhooks is a better idea.
        alert(response.razorpay_payment_id)
        alert(response.razorpay_order_id)
        alert(response.razorpay_signature)
        setLoading(false)
      },
      prefill: {
        name: 'Aman Kapil',
        email: 'amankapil60@gmail.com',
        contact: '8103075691'
      }
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.open()
  }
  return (
    <>
      <section className='maintraining py-28'>
        {/* <section className='abouttraining max-w-7xl mx-auto mb-20'>
          <p className='text-[#175574] text-[32px] leading-[48px] text-justify max-md:p-4 max-md:text-center max-md:text-[20px] max-md:leading-[30px]'>
            We offer customized content that specifically targets your unique
            challenges and objectives, ensuring maximum impact and
            applicability. Third, we provide flexible delivery options,
            including in-person workshops, virtual training sessions, or blended
            learning formats, to accommodate diverse preferences and needs.
            Lastly, our proven track record speaks for itself, with hundreds of
            satisfied clients who have experienced tangible benefits and results
            from our tailored training solutions. Join us and discover how our
            expertise can propel you or your organization forward.
          </p>
        </section> */}
        <section className='w-full py-6 md:py-12'>
          <div className='contaner px4 md:px6'>
            <div className='flex flex-wrap justify-center items-center gap-10 '>
              <div className='card border-2 shadow-2xl rounded-[40px] p12 border-[#ABE0F8] max-w-[400px] bg-white'>
                <div className='upimgae  rounded-[40px]'>
                  <Image
                    src={img}
                    alt=''
                    className=' rounded-t-[40px] rounded-r-[40px]'
                  />
                </div>

                <div className='p-6'>
                  <div className='flex flexcol items-start justify-between py-1'>
                    <div className='lef bg-[#175574]'>
                      <div className='flex items-center justify-center p-1 rounded-[10px]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M4.66667 3.83333C4.66667 2.94928 5.01786 2.10143 5.64298 1.47631C6.2681 0.851189 7.11594 0.5 8 0.5C8.88406 0.5 9.7319 0.851189 10.357 1.47631C10.9821 2.10143 11.3333 2.94928 11.3333 3.83333C11.3333 4.71739 10.9821 5.56523 10.357 6.19036C9.7319 6.81548 8.88406 7.16667 8 7.16667C7.11594 7.16667 6.2681 6.81548 5.64298 6.19036C5.01786 5.56523 4.66667 4.71739 4.66667 3.83333ZM4.66667 8.83333C3.5616 8.83333 2.50179 9.27232 1.72039 10.0537C0.938987 10.8351 0.5 11.8949 0.5 13C0.5 13.663 0.763392 14.2989 1.23223 14.7678C1.70107 15.2366 2.33696 15.5 3 15.5H13C13.663 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13C15.5 11.8949 15.061 10.8351 14.2796 10.0537C13.4982 9.27232 12.4384 8.83333 11.3333 8.83333H4.66667Z'
                            fill='white'
                          />
                        </svg>

                        <span className='text-white'>6.4k</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='25'
                        viewBox='0 0 50 50'
                        fill='none'
                      >
                        <path
                          d='M45.7592 22.4321L36.9701 30.0161L39.6478 41.3579C39.7956 41.9736 39.7575 42.6192 39.5385 43.2133C39.3195 43.8074 38.9293 44.3232 38.4172 44.6957C37.9052 45.0681 37.2942 45.2804 36.6616 45.3058C36.0289 45.3312 35.4029 45.1686 34.8627 44.8384L24.9994 38.768L15.1303 44.8384C14.5901 45.1667 13.9648 45.3278 13.3333 45.3015C12.7017 45.2751 12.092 45.0625 11.581 44.6904C11.0701 44.3183 10.6806 43.8033 10.4617 43.2103C10.2428 42.6173 10.2043 41.9728 10.351 41.3579L13.0385 30.0161L4.24939 22.4321C3.77146 22.019 3.42581 21.4743 3.25561 20.866C3.08541 20.2576 3.0982 19.6126 3.29239 19.0115C3.48658 18.4104 3.85356 17.8798 4.34749 17.4861C4.84143 17.0923 5.44044 16.8527 6.0697 16.7973L17.5931 15.8676L22.0385 5.10984C22.2791 4.52354 22.6886 4.02204 23.215 3.66909C23.7413 3.31614 24.3608 3.12769 24.9945 3.12769C25.6283 3.12769 26.2477 3.31614 26.7741 3.66909C27.3004 4.02204 27.7099 4.52354 27.9506 5.10984L32.3939 15.8676L43.9174 16.7973C44.5479 16.8507 45.1486 17.0889 45.6444 17.4821C46.1401 17.8754 46.5088 18.4062 46.7042 19.008C46.8996 19.6098 46.913 20.2559 46.7428 20.8654C46.5726 21.4748 46.2264 22.0205 45.7474 22.4341L45.7592 22.4321Z'
                          fill='#D79442'
                        />
                      </svg>
                      <span>4.1</span>
                    </div>
                  </div>
                  <div className='flex flex-col items-start py-1'>
                    <h3 className='text-3xl font-bold'>Advance Front End </h3>
                  </div>
                  <div className='grid gap-4 py-6 card-content'>
                    <div className='space-y-2'>
                      <h4 className='font-semibold'>Perfect for individuals</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Get started with essential features
                      </p>
                    </div>
                    <ul className='grid gap-4 text-[14px] text-[#175574]'>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span>
                          <span className='font-bold'>HTML, CSS, REACTJS,</span>
                          NEXTJS, TAILWIND CSS
                        </span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span>
                          <span className='font-bold'> 75-Day </span>
                          Intensive Training Program
                        </span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span>
                          <span className='font-bold'> 100% </span>
                          Placement Guaranteed
                        </span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Communication</span>
                        <span>Skills Workshop</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold max-md:w-full'>
                          Professional Resume
                        </span>
                        <span>Design Services</span>
                      </li>

                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Gap Year Support</span>
                        <span>Guidance and Program</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Remote </span>
                        <span>Opportunities: Learn from Home</span>
                      </li>
                    </ul>
                  </div>
                  <hr className='text-[#ABE0F8] bg-[#ABE0F8] h-[2px]' />

                  <div className='flex justify-between items-center'>
                    <p className='text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end'>
                      {/* <span className='text[0.416667em]'>₹</span>
                    <span className='text-3xl font-bold'>30,000</span>
                    <span>/3mo</span> */}

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='31'
                        viewBox='0 0 30 31'
                        fill='none'
                      >
                        <path
                          d='M15 10.1667V15.1667L18.75 18.9167M26.25 15.1667C26.25 16.6441 25.959 18.107 25.3936 19.4719C24.8283 20.8368 23.9996 22.077 22.955 23.1217C21.9103 24.1664 20.6701 24.995 19.3052 25.5604C17.9403 26.1258 16.4774 26.4167 15 26.4167C13.5226 26.4167 12.0597 26.1258 10.6948 25.5604C9.3299 24.995 8.08971 24.1664 7.04505 23.1217C6.00039 22.077 5.17172 20.8368 4.60636 19.4719C4.04099 18.107 3.75 16.6441 3.75 15.1667C3.75 12.1831 4.93526 9.32158 7.04505 7.2118C9.15483 5.10201 12.0163 3.91675 15 3.91675C17.9837 3.91675 20.8452 5.10201 22.955 7.2118C25.0647 9.32158 26.25 12.1831 26.25 15.1667Z'
                          stroke='#175574'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      <span>15h 25m</span>
                    </p>
                    <div className='flex justify-center py-3 wfull'>
                      <button
                        onClick={makePayment}
                        disabled={loading}
                        className='letta hover:bg-[#CC7914] bg-[#D79442] hoverborder-[#00557E] hovertext-[#00557E] hoverbg-[#E3F5FE] text-white p-4 rounded-full wfull font-bold'
                      >
                        {loading ? (
                          'Loading...'
                        ) : (
                          <>
                            <p className='text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end'>
                              <span className='text[0.416667em]'>₹</span>
                              <span className='text-2xl font-bold'>30,000</span>
                              <span>/3mo</span>
                            </p>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className='card border-2 shadow-2xl rounded-[40px] p12 border-[#ABE0F8] max-w-[400px] bg-white'>
                <div className='upimgae  rounded-[40px]'>
                  <Image
                    src={img1}
                    alt=''
                    className=' rounded-t-[40px] rounded-r-[40px]'
                  />
                </div>

                <div className='p-6'>
                  <div className='flex flexcol items-start justify-between py-1'>
                    <div className='lef bg-[#175574]'>
                      <div className='flex items-center justify-center p-1 rounded-[10px]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M4.66667 3.83333C4.66667 2.94928 5.01786 2.10143 5.64298 1.47631C6.2681 0.851189 7.11594 0.5 8 0.5C8.88406 0.5 9.7319 0.851189 10.357 1.47631C10.9821 2.10143 11.3333 2.94928 11.3333 3.83333C11.3333 4.71739 10.9821 5.56523 10.357 6.19036C9.7319 6.81548 8.88406 7.16667 8 7.16667C7.11594 7.16667 6.2681 6.81548 5.64298 6.19036C5.01786 5.56523 4.66667 4.71739 4.66667 3.83333ZM4.66667 8.83333C3.5616 8.83333 2.50179 9.27232 1.72039 10.0537C0.938987 10.8351 0.5 11.8949 0.5 13C0.5 13.663 0.763392 14.2989 1.23223 14.7678C1.70107 15.2366 2.33696 15.5 3 15.5H13C13.663 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13C15.5 11.8949 15.061 10.8351 14.2796 10.0537C13.4982 9.27232 12.4384 8.83333 11.3333 8.83333H4.66667Z'
                            fill='white'
                          />
                        </svg>

                        <span className='text-white'>6.4k</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='25'
                        viewBox='0 0 50 50'
                        fill='none'
                      >
                        <path
                          d='M45.7592 22.4321L36.9701 30.0161L39.6478 41.3579C39.7956 41.9736 39.7575 42.6192 39.5385 43.2133C39.3195 43.8074 38.9293 44.3232 38.4172 44.6957C37.9052 45.0681 37.2942 45.2804 36.6616 45.3058C36.0289 45.3312 35.4029 45.1686 34.8627 44.8384L24.9994 38.768L15.1303 44.8384C14.5901 45.1667 13.9648 45.3278 13.3333 45.3015C12.7017 45.2751 12.092 45.0625 11.581 44.6904C11.0701 44.3183 10.6806 43.8033 10.4617 43.2103C10.2428 42.6173 10.2043 41.9728 10.351 41.3579L13.0385 30.0161L4.24939 22.4321C3.77146 22.019 3.42581 21.4743 3.25561 20.866C3.08541 20.2576 3.0982 19.6126 3.29239 19.0115C3.48658 18.4104 3.85356 17.8798 4.34749 17.4861C4.84143 17.0923 5.44044 16.8527 6.0697 16.7973L17.5931 15.8676L22.0385 5.10984C22.2791 4.52354 22.6886 4.02204 23.215 3.66909C23.7413 3.31614 24.3608 3.12769 24.9945 3.12769C25.6283 3.12769 26.2477 3.31614 26.7741 3.66909C27.3004 4.02204 27.7099 4.52354 27.9506 5.10984L32.3939 15.8676L43.9174 16.7973C44.5479 16.8507 45.1486 17.0889 45.6444 17.4821C46.1401 17.8754 46.5088 18.4062 46.7042 19.008C46.8996 19.6098 46.913 20.2559 46.7428 20.8654C46.5726 21.4748 46.2264 22.0205 45.7474 22.4341L45.7592 22.4321Z'
                          fill='#D79442'
                        />
                      </svg>
                      <span>4.1</span>
                    </div>
                  </div>
                  <div className='flex flex-col items-start py-1'>
                    <h3 className='text-3xl font-bold'>
                      Application Developer
                    </h3>
                  </div>
                  <div className='grid gap-4 py-6 card-content'>
                    <div className='space-y-2'>
                      <h4 className='font-semibold'>Perfect for individuals</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Get started with essential features
                      </p>
                    </div>

                    <ul className='grid gap-4 text-[14px] text-[#175574]'>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Java/Kotlin,</span>
                        <span> React Native,Swift</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span>
                          <span className='font-bold'> 75-Day </span>
                          Intensive Training Program
                        </span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span>
                          <span className='font-bold'> 100% </span>
                          Placement Guaranteed
                        </span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Communication</span>
                        <span>Skills Workshop</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Professional Resume</span>
                        <span>Design Services</span>
                      </li>

                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Gap Year Support</span>
                        <span>Guidance and Program</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Remote </span>
                        <span>Opportunities: Learn from Home</span>
                      </li>
                    </ul>
                  </div>
                  <hr className='text-[#ABE0F8] bg-[#ABE0F8] h-[2px]' />

                  <div className='flex justify-between items-center'>
                    <p className='text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end'>
                      {/* <span className='text[0.416667em]'>₹</span>
                    <span className='text-3xl font-bold'>30,000</span>
                    <span>/3mo</span> */}

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='31'
                        viewBox='0 0 30 31'
                        fill='none'
                      >
                        <path
                          d='M15 10.1667V15.1667L18.75 18.9167M26.25 15.1667C26.25 16.6441 25.959 18.107 25.3936 19.4719C24.8283 20.8368 23.9996 22.077 22.955 23.1217C21.9103 24.1664 20.6701 24.995 19.3052 25.5604C17.9403 26.1258 16.4774 26.4167 15 26.4167C13.5226 26.4167 12.0597 26.1258 10.6948 25.5604C9.3299 24.995 8.08971 24.1664 7.04505 23.1217C6.00039 22.077 5.17172 20.8368 4.60636 19.4719C4.04099 18.107 3.75 16.6441 3.75 15.1667C3.75 12.1831 4.93526 9.32158 7.04505 7.2118C9.15483 5.10201 12.0163 3.91675 15 3.91675C17.9837 3.91675 20.8452 5.10201 22.955 7.2118C25.0647 9.32158 26.25 12.1831 26.25 15.1667Z'
                          stroke='#175574'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      <span>15h 25m</span>
                    </p>
                    <div className='flex justify-center py-3 wfull'>
                      <button
                        onClick={makePayment}
                        disabled={loading}
                        className='letta hover:bg-[#CC7914] bg-[#D79442] hoverborder-[#00557E] hovertext-[#00557E] hoverbg-[#E3F5FE] text-white p-4 rounded-full wfull font-bold'
                      >
                        {loading ? (
                          'Loading...'
                        ) : (
                          <>
                            <p className='text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end'>
                              <span className='text[0.416667em]'>₹</span>
                              <span className='text-2xl font-bold'>30,000</span>
                              <span>/3mo</span>
                            </p>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className='card border-2 shadow-2xl rounded-[40px] p12 border-[#ABE0F8] max-w-[400px] bg-white'>
                <div className='upimgae  rounded-[40px]'>
                  <Image
                    src={img2}
                    alt=''
                    className=' rounded-t-[40px] rounded-r-[40px]'
                  />
                </div>

                <div className='p-6'>
                  <div className='flex flexcol items-start justify-between py-1'>
                    <div className='lef bg-[#175574]'>
                      <div className='flex items-center justify-center p-1 rounded-[10px]'>
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          width='16'
                          height='16'
                          viewBox='0 0 16 16'
                          fill='none'
                        >
                          <path
                            fillRule='evenodd'
                            clipRule='evenodd'
                            d='M4.66667 3.83333C4.66667 2.94928 5.01786 2.10143 5.64298 1.47631C6.2681 0.851189 7.11594 0.5 8 0.5C8.88406 0.5 9.7319 0.851189 10.357 1.47631C10.9821 2.10143 11.3333 2.94928 11.3333 3.83333C11.3333 4.71739 10.9821 5.56523 10.357 6.19036C9.7319 6.81548 8.88406 7.16667 8 7.16667C7.11594 7.16667 6.2681 6.81548 5.64298 6.19036C5.01786 5.56523 4.66667 4.71739 4.66667 3.83333ZM4.66667 8.83333C3.5616 8.83333 2.50179 9.27232 1.72039 10.0537C0.938987 10.8351 0.5 11.8949 0.5 13C0.5 13.663 0.763392 14.2989 1.23223 14.7678C1.70107 15.2366 2.33696 15.5 3 15.5H13C13.663 15.5 14.2989 15.2366 14.7678 14.7678C15.2366 14.2989 15.5 13.663 15.5 13C15.5 11.8949 15.061 10.8351 14.2796 10.0537C13.4982 9.27232 12.4384 8.83333 11.3333 8.83333H4.66667Z'
                            fill='white'
                          />
                        </svg>

                        <span className='text-white'>6.4k</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='25'
                        height='25'
                        viewBox='0 0 50 50'
                        fill='none'
                      >
                        <path
                          d='M45.7592 22.4321L36.9701 30.0161L39.6478 41.3579C39.7956 41.9736 39.7575 42.6192 39.5385 43.2133C39.3195 43.8074 38.9293 44.3232 38.4172 44.6957C37.9052 45.0681 37.2942 45.2804 36.6616 45.3058C36.0289 45.3312 35.4029 45.1686 34.8627 44.8384L24.9994 38.768L15.1303 44.8384C14.5901 45.1667 13.9648 45.3278 13.3333 45.3015C12.7017 45.2751 12.092 45.0625 11.581 44.6904C11.0701 44.3183 10.6806 43.8033 10.4617 43.2103C10.2428 42.6173 10.2043 41.9728 10.351 41.3579L13.0385 30.0161L4.24939 22.4321C3.77146 22.019 3.42581 21.4743 3.25561 20.866C3.08541 20.2576 3.0982 19.6126 3.29239 19.0115C3.48658 18.4104 3.85356 17.8798 4.34749 17.4861C4.84143 17.0923 5.44044 16.8527 6.0697 16.7973L17.5931 15.8676L22.0385 5.10984C22.2791 4.52354 22.6886 4.02204 23.215 3.66909C23.7413 3.31614 24.3608 3.12769 24.9945 3.12769C25.6283 3.12769 26.2477 3.31614 26.7741 3.66909C27.3004 4.02204 27.7099 4.52354 27.9506 5.10984L32.3939 15.8676L43.9174 16.7973C44.5479 16.8507 45.1486 17.0889 45.6444 17.4821C46.1401 17.8754 46.5088 18.4062 46.7042 19.008C46.8996 19.6098 46.913 20.2559 46.7428 20.8654C46.5726 21.4748 46.2264 22.0205 45.7474 22.4341L45.7592 22.4321Z'
                          fill='#D79442'
                        />
                      </svg>
                      <span>4.1</span>
                    </div>
                  </div>
                  <div className='flex flex-col items-start py-1'>
                    <h3 className='text-3xl font-bold'>
                      Application Developer
                    </h3>
                  </div>
                  <div className='grid gap-4 py-6 card-content'>
                    <div className='space-y-2'>
                      <h4 className='font-semibold'>Perfect for individuals</h4>
                      <p className='text-sm text-gray-500 dark:text-gray-400'>
                        Get started with essential features
                      </p>
                    </div>
                    <ul className='grid gap-4 text-[14px] text-[#175574]'>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>NODEJS,</span>
                        <span>EXPRESSJS, MONGODB</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span>
                          <span className='font-bold'> 75-Day </span>
                          Intensive Training Program
                        </span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span>
                          <span className='font-bold'> 100% </span>
                          Placement Guaranteed
                        </span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Communication</span>
                        <span>Skills Workshop</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Professional Resume</span>
                        <span>Design Services</span>
                      </li>

                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Gap Year Support</span>
                        <span>Guidance and Program</span>
                      </li>
                      <li className='flex items-center space-x-2'>
                        <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                        <span className='font-bold'>Remote </span>
                        <span>Opportunities: Learn from Home</span>
                      </li>
                    </ul>
                  </div>
                  <hr className='text-[#ABE0F8] bg-[#ABE0F8] h-[2px]' />

                  <div className='flex justify-between items-center'>
                    <p className='text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end'>
                      {/* <span className='text[0.416667em]'>₹</span>
                    <span className='text-3xl font-bold'>30,000</span>
                    <span>/3mo</span> */}

                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        width='30'
                        height='31'
                        viewBox='0 0 30 31'
                        fill='none'
                      >
                        <path
                          d='M15 10.1667V15.1667L18.75 18.9167M26.25 15.1667C26.25 16.6441 25.959 18.107 25.3936 19.4719C24.8283 20.8368 23.9996 22.077 22.955 23.1217C21.9103 24.1664 20.6701 24.995 19.3052 25.5604C17.9403 26.1258 16.4774 26.4167 15 26.4167C13.5226 26.4167 12.0597 26.1258 10.6948 25.5604C9.3299 24.995 8.08971 24.1664 7.04505 23.1217C6.00039 22.077 5.17172 20.8368 4.60636 19.4719C4.04099 18.107 3.75 16.6441 3.75 15.1667C3.75 12.1831 4.93526 9.32158 7.04505 7.2118C9.15483 5.10201 12.0163 3.91675 15 3.91675C17.9837 3.91675 20.8452 5.10201 22.955 7.2118C25.0647 9.32158 26.25 12.1831 26.25 15.1667Z'
                          stroke='#175574'
                          stroke-width='2.5'
                          stroke-linecap='round'
                          stroke-linejoin='round'
                        />
                      </svg>
                      <span>15h 25m</span>
                    </p>
                    <div className='flex justify-center py-3 wfull'>
                      <button
                        onClick={makePayment}
                        disabled={loading}
                        className='letta  bg-[#D79442] hoverborder-[#00557E] hovertext-[#00557E] hoverbg-[#E3F5FE] text-white p-4 rounded-full wfull font-bold'
                      >
                        {loading ? (
                          'Loading...'
                        ) : (
                          <>
                            <p className='text[#2f1c6a] darkxt-gray-400 mt3 flex gap-1 items-end'>
                              <span className='text[0.416667em]'>₹</span>
                              <span className='text-2xl font-bold'>30,000</span>
                              <span>/3mo</span>
                            </p>
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className='card border-1 shadow-2xl p-12 border-[#062b43] max-w-[410px] bg-white'>
                <div className='flex flex-col items-start py-3'>
                  <h3 className='text-3xl font-bold'>Application Developer</h3>
                </div>
                <div className='grid gap-4 py-6 card-content'>
                  <div className='space-y-2'>
                    <h4 className='font-semibold'>Perfect for individuals</h4>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Get started with essential features
                    </p>
                  </div>
                  <ul className='grid gap-4 text-[14px]'>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Java/Kotlin,</span>
                      <span> React Native,Swift</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span>
                        <span className='font-bold'> 75-Day </span>
                        Intensive Training Program
                      </span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span>
                        <span className='font-bold'> 100% </span>
                        Placement Guaranteed
                      </span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Communication</span>
                      <span>Skills Workshop</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Professional Resume</span>
                      <span>Design Services</span>
                    </li>

                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Gap Year Support</span>
                      <span>Guidance and Program</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Remote </span>
                      <span>Opportunities: Learn from Home</span>
                    </li>
                  </ul>
                </div>
                <p className='text-[#2f1c6a] darkxt-gray-400 mt-3 flex gap-1 items-end'>
                  <span className='text[0.416667em]'>₹</span>
                  <span className='text-3xl font-bold'>30,000</span>
                  <span>/3mo</span>
                </p>
                <div className='flex justify-center py-6 w-full'>
                  <button
                    onClick={makePayment2}
                    disabled={loading}
                    className='lettal hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE] text-white p-4 rounded-full w-full font-bold'
                  >
                    {loading ? 'Loading...' : 'Proceed'}
                  </button>
                </div>
              </div>
              <div className='card border-1 shadow-2xl p-12 border-[#062b43]  max-w-[400px] bg-white'>
                <div className='flex flex-col items-start py-3'>
                  <h3 className='text-3xl font-bold'>Backend developer</h3>
                </div>
                <div className='grid gap-4 py-6 card-content'>
                  <div className='space-y-2'>
                    <h4 className='font-semibold'>Perfect for individuals</h4>
                    <p className='text-sm text-gray-500 dark:text-gray-400'>
                      Get started with essential features
                    </p>
                  </div>
                  <ul className='grid gap-4 text-[14px]'>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>NODEJS,</span>
                      <span>EXPRESSJS, MONGODB</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span>
                        <span className='font-bold'> 75-Day </span>
                        Intensive Training Program
                      </span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span>
                        <span className='font-bold'> 100% </span>
                        Placement Guaranteed
                      </span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Communication</span>
                      <span>Skills Workshop</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Professional Resume</span>
                      <span>Design Services</span>
                    </li>

                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Gap Year Support</span>
                      <span>Guidance and Program</span>
                    </li>
                    <li className='flex items-center space-x-2'>
                      <CheckCircleIcon className='w-4 h-4 flex-shrink-0' />
                      <span className='font-bold'>Remote </span>
                      <span>Opportunities: Learn from Home</span>
                    </li>
                  </ul>
                </div>
                <p className='text-[#2f1c6a] darkxt-gray-400 mt-3 flex gap-1 items-end'>
                  <span className='text[0.416667em]'>₹</span>
                  <span className='text-3xl font-bold'>30,000</span>
                  <span>/3mo</span>
                </p>
                <div className='flex justify-center py-6 w-full'>
                  <button
                    onClick={makePayment3}
                    disabled={loading}
                    className='lettal hover:border-[#00557E] hover:text-[#00557E] hover:bg-[#E3F5FE] text-white p-4 rounded-full w-full font-bold'
                  >
                    {loading ? 'Loading...' : 'Proceed'}
                  </button>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </section>
    </>
  )
}

export default Trainig

function CheckCircleIcon (props) {
  return (
    <svg
      {...props}
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      viewBox='0 0 24 24'
      fill='none'
      stroke='green'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
    >
      <path d='M22 11.08V12a10 10 0 1 1-5.93-9.14' />
      <polyline points='22 4 12 14.01 9 11.01' />
    </svg>
  )
}

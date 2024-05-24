'use client'
import React, { useState } from 'react'

const Emailsub = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [subscribed, setSubscribed] = useState(false)

  const handleInputChange = e => {
    setEmail(e.target.value)
  }

  const handleSubmit = e => {
    e.preventDefault()
    if (!email) {
      setError(true)
      return
    }
    console.log(`Subscribed with email: ${email}`)
    setError(false)

    setSubscribed(true)
  }
  return (
    <>
      <section className='news-letter mt-16 flex items-center justify-center pt16 bg[#F4F7FA] blog  bg'>
        <div className='letter flex items-center justify-center flex-col'>
          <h1>Subscribe to our newsletter</h1>
          <p className='pt-1 pb-8 max-md:w-full'>
            It is a long established fact that a reader will distracted by the
            readable ...
          </p>
          <>
            {error ? (
              <>
                <div className='w-[333px] h-11 p-2.5 bg-orange-100 rounded-xl flex-col justify-start items-start gap-2 inline-flex my-5'>
                  <div className='justify-center items-center gap-[19px] inline-flex'>
                    <div className='w-6 h-6 relative' />
                    <div className="text-orange-900 text-xs font-normal font-['poppins'] leading-[18px]">
                      please enter email id to subscribe
                    </div>
                  </div>
                </div>
              </>
            ) : (
              ''
            )}

            <div className='input-news flex max-md:flex-wrap max-md:gap-8 max-md:justify-center'>
              <input
                value={email}
                onChange={handleInputChange}
                type='email'
                placeholder='enter your email'
                required
              />
              {/* <button
                onClick={handleSubmit}
                className="subscribe ml-2 hover:bg-[#dc4c51] bg-[#733e3d] text-white"
              >
                Subscribe
              </button> */}

              <button className='flex flex-col justify-center self-stretch my-auto mx-2'>
                <div className='justify-center px-9 py-4 rounded text-white border-white border-solid border-[0.5px] max-md:px-5 letta bg-[#D79442]'>
                  Subscribe
                </div>
              </button>
            </div>
          </>

          {subscribed ? (
            <div className='thanks my-5'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  width='25'
                  height='25'
                  viewBox='0 0 25 25'
                  fill='none'
                >
                  <path
                    d='M10.3802 18.5001L4.68018 12.8001L6.10518 11.3751L10.3802 15.6501L19.5552 6.4751L20.9802 7.9001L10.3802 18.5001Z'
                    fill='#204F0A'
                  />
                </svg>
              </div>
              <h3>Thank you for subscribing!</h3>
            </div>
          ) : (
            ''
          )}
        </div>
      </section>
    </>
  )
}

export default Emailsub

'use client'

import './contact.scss'
import { useState, useEffect } from 'react'
import axios from 'axios'

const ContactHero = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [lastname, setLastname] = useState('')
  const [message, setMessage] = useState('')
  const handleSubmit = async e => {
    e.preventDefault()
    console.log(name)
    console.log(email)
    // console.log(resume);
    try {
      const response = await axios.post('/api/contact', {
        name: name,
        email: email,
        lastname: lastname,
        message: message
      })
      alert(response.status)
      console.log(response.data.message)
    } catch (error) {
      alert('Failed to send email')
      console.error('Error occurred while sending email:', error)
    }
  }

  return (
    <>
      <section className='contact-hero '>
        <h1 className='contact-hero-h1'>
          Got any queries? Feel free to connect with us!
        </h1>

        <div className='flex justify-center mt-20 gap-20 items-start max-lg:flex-wrap max-lg:justify-center max-w-7xl mx-auto'>
          <div className='address-div2  w-[60%] max-md:w-full'>
            <div className='max-w-7xl pb-20 mx-auto'>
              <div className='mapouter  w-full w[500px] h-[600px] max-md:w-full'>
                <div className='gmap_canvas'>
                  <iframe
                    className='gmap_iframe w-[100%] h-[600px] max-md:w-full'
                    frameborder='0'
                    scrolling='no'
                    marginheight='0'
                    src='https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=indore&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed'
                  ></iframe>

                  {/* <a href="https://strandsgame.net/">Strands Game</a> */}
                </div>
              </div>
            </div>
          </div>
          <div className='contact-form w-[40%]'>
            <div className='form w-full'>
              <div className='form-div'>
                <div className='w-full'>
                  <input
                    type='text'
                    id='fname'
                    name='firstname'
                    placeholder='Enter your first name'
                    className='name w-full'
                    onChange={e => setName(e.target.value)}
                  />
                </div>
              </div>
              <input
                type='text'
                id='lnamee'
                name='lastname'
                placeholder='Enter your email'
                className='email p-4'
                onChange={e => setEmail(e.target.value)}
              />
              <textarea
                id='subject'
                name='subject'
                placeholder='Your message'
                className='text p-4'
                onChange={e => setMessage(e.target.value)}
              ></textarea>
            </div>
            {/* <button
          
              className="hover:bg-[#dc4c51] bg-[#733e3d] text-white hovertext-black"
            >
              
            </button> */}

            <div
              onClick={handleSubmit}
              className='justify-center max-md:w-full px-9 py-4 rounded-[54px] border-white border-solid border-[0.5px] max-md:px-5 ettal hoverborder-[#00557E] hovertext-[#00557E] hoverg-[#E3F5FE] cursor-pointer text-white w- text-center bg-[#D79442]'
            >
              Submit
            </div>
          </div>
        </div>
      </section>

      <div className='max-w-7xl pb-20 mx-auto'>
        <div className='mapouter  w-full w[500px] h-[400px] max-md:w-full max-md:h-full'>
          {/* <h1 className='address-head'>Office</h1> */}
          <section className='our-contact '>
            <div className='contacts-info justify-start items-start'>
              <h1 className='contact-head'>Contact details</h1>
              <div className='contact-details flexcol justify-center items-center'>
                <div className='bg-[#fff] p-5 flex flex-col justify-center gap-4 items-center rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='80'
                    height='80'
                    viewBox='0 0 80 80'
                    fill='none'
                  >
                    <path
                      d='M25.9061 8.12994L29.4962 6.98327C32.8562 5.90994 36.4495 7.6466 37.8895 11.0399L40.7562 17.7999C42.0062 20.7433 41.3128 24.2066 39.0428 26.3599L32.7328 32.3533C33.1217 35.9399 34.3262 39.4699 36.3462 42.9433C38.2671 46.3028 40.8409 49.2439 43.9162 51.5933L51.5028 49.0599C54.3761 48.1033 57.5061 49.2066 59.2695 51.7966L63.3761 57.8299C65.4295 60.8433 65.0595 64.9966 62.5161 67.5499L59.7895 70.2866C57.0761 73.0099 53.2028 73.9999 49.6161 72.8799C41.1539 70.2399 33.3728 62.4033 26.2728 49.3699C19.1639 36.3144 16.655 25.2388 18.7462 16.1433C19.6262 12.3166 22.3528 9.2666 25.9128 8.12994'
                      fill='#D79442'
                    />
                  </svg>
                  <div>
                    <h1>Write to us</h1>
                    <p>career@hiringtech.in</p>
                  </div>
                </div>
                <div className='bg-[#fff] p-5 flex flex-col justify-center gap-4 items-center rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='80'
                    height='80'
                    viewBox='0 0 80 80'
                    fill='none'
                  >
                    <path
                      d='M73.3327 37.5333V25.36L41.1593 42.2133C40.8014 42.4008 40.4034 42.4987 39.9993 42.4987C39.5953 42.4987 39.1973 42.4008 38.8393 42.2133L6.66602 25.36V52.5L6.68268 53.1133C6.83934 55.876 8.04724 58.474 10.0586 60.3744C12.0699 62.2748 14.7322 63.3335 17.4993 63.3333H39.056C39.6693 61.9267 40.5393 60.6433 41.6327 59.55L61.3093 39.8733C62.8533 38.3314 64.822 37.2851 66.9639 36.8683C69.1057 36.4514 71.3232 36.683 73.3327 37.5333ZM62.4993 10H17.4993L16.8793 10.0167C14.305 10.164 11.8675 11.2247 10.0052 13.0082C8.14285 14.7917 6.97776 17.181 6.71935 19.7467L39.9993 37.18L73.2793 19.7467C73.01 17.0749 71.758 14.5985 69.7661 12.7976C67.7743 10.9967 65.1846 9.99968 62.4993 10ZM63.666 42.2333L43.9893 61.9067C42.8448 63.055 42.0317 64.4911 41.636 66.0633L40.1093 72.1667C39.9575 72.7739 39.9656 73.4101 40.1328 74.0133C40.3 74.6165 40.6206 75.1662 41.0634 75.6086C41.5061 76.051 42.056 76.3712 42.6593 76.538C43.2626 76.7047 43.8989 76.7123 44.506 76.56L50.606 75.0367C52.1798 74.6405 53.6172 73.8263 54.766 72.68L74.4393 53.0067C75.813 51.5669 76.569 49.6469 76.5456 47.6571C76.5222 45.6673 75.7214 43.7655 74.3143 42.3584C72.9072 40.9513 71.0054 40.1505 69.0156 40.1271C67.0258 40.1037 65.1058 40.8597 63.666 42.2333Z'
                      fill='#ABE0F8'
                    />
                  </svg>
                  <div>
                    <h1>Call us</h1>
                    <p>+91 877-0161528</p>
                  </div>
                </div>
                <div className='bg-[#fff] p-5 flex flex-col justify-center gap-4 items-center rounded-2xl'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='82'
                    height='82'
                    viewBox='0 0 82 82'
                    fill='none'
                  >
                    <path
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M55.9412 9.59431C56.1838 9.2047 56.5364 8.89575 56.9546 8.70651C57.3728 8.51727 57.8376 8.45622 58.2904 8.5311L70.2272 10.5229C70.8342 10.6241 71.3761 10.9622 71.7339 11.4628C72.0917 11.9633 72.2361 12.5855 72.1354 13.1925L70.1483 25.134C70.0725 25.5866 69.8642 26.0067 69.5497 26.341C69.2352 26.6753 68.8287 26.9089 68.3815 27.0122C67.9343 27.1156 67.4665 27.084 67.0373 26.9216C66.608 26.7592 66.2365 26.4732 65.9697 26.0997L62.7476 21.5961L46.154 32.2004C45.4464 32.6532 44.5989 32.8349 43.7679 32.7121C42.9368 32.5892 42.1782 32.17 41.6319 31.5318L32.3787 20.714L15.0748 29.605C14.2534 30.0274 13.298 30.1062 12.4186 29.8241C11.5392 29.542 10.8078 28.9221 10.3855 28.1008C9.96312 27.2794 9.88433 26.324 10.1664 25.4446C10.4485 24.5652 11.0684 23.8338 11.8898 23.4115L31.6451 13.2575C32.3426 12.8992 33.1405 12.7868 33.9099 12.9385C34.6792 13.0901 35.3748 13.497 35.884 14.0932L44.9562 24.7022L58.699 15.9179L56.0201 12.1711C55.7538 11.7975 55.6041 11.3533 55.5901 10.8947C55.576 10.436 55.6982 9.98354 55.9412 9.59431ZM25.549 32.3908L12.0755 40.0979C11.5432 40.402 11.1006 40.8411 10.7925 41.371C10.4843 41.9009 10.3215 42.5028 10.3205 43.1158V69.8122C10.3205 71.7344 11.8805 73.2944 13.8026 73.2944H25.549V32.3908ZM31.3526 73.2944H48.3826V41.6672L40.7265 45.4929L33.0751 32.1029C32.6887 31.4219 32.0833 30.8918 31.3573 30.5986L31.3526 73.2944ZM67.1954 73.2944H54.1862V38.7654L65.6401 33.0361C66.171 32.7711 66.7608 32.6461 67.3535 32.673C67.9463 32.7 68.5223 32.8779 69.027 33.19C69.5316 33.5021 69.9482 33.938 70.237 34.4563C70.5259 34.9746 70.6776 35.5581 70.6776 36.1515V69.8122C70.6776 70.7357 70.3107 71.6214 69.6577 72.2745C69.0047 72.9275 68.119 73.2944 67.1954 73.2944Z'
                      fill='#175574'
                    />
                  </svg>
                  <div>
                    <h1>Career inquiry </h1>
                    <p>hr@hiringtech.in</p>
                  </div>
                </div>
                {/* <div>
                  <h1>Write to us</h1>
                  <p>career@hiringtech.in</p>
                </div>
                <div>
                  <h1>Career inquiry </h1>
                  <p>hr@hiringtech.in</p>
                </div> */}
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  )
}
export default ContactHero

'use client'

import React, { useState } from 'react'
import axios from 'axios'
import './career.scss'

const Dummy = () => {
  const [filter, setFilter] = useState('')
  const [selectedJob, setSelectedJob] = useState(null)
  const [formData, setFormData] = useState({
    name: '',
    resume: null
  })

  const handleChange = e => {
    const { name, value, files } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: files ? files[0] : value
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    const formDataToSend = new FormData()
    formDataToSend.append('name', formData.name)
    formDataToSend.append('resume', formData.resume)
    console.log(formData)

    try {
      const response = axios.post('/api/apply', {
        formData
      })
      if (response.ok) {
        //         alert('Application submitted successfully! this runs')
        console.log(response)
      } else {
        alert('Error submitting application.')
      }
    } catch (error) {
      console.error('Error:', error)
      alert('An error occurred. Please try again later.')
    }
  }

  const handelApply = async () => {
    setApply(!apply)
  }
  const handledele = async () => {
    setApply(!apply)
    setSelectedJob(null)
  }
  return (
    <>
      <div className='fixed w-full bsolute inset-0 flex justify-center overflow-croll items-center bg-white bg-opacity50  z-[9999999999999999999999999999999999999999999999999999] max-md:p-10'>
        <form
          onSubmit={handleSubmit}
          className='flx felx-wrap gap-20 h-full mt-52'
        >
          <div className='flex gap-4'>
            <input
              type='text'
              name='name'
              value={formData.name}
              onChange={handleChange}
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            />
            {/* <input
              type='email'
              name='email'
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder='Your Email'
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            /> */}
          </div>
          {/* <div className='flex gap-4'>
            <input
              type='text'
              name='number'
              value={number}
              onChange={e => setNumber(e.target.value)}
              placeholder='Your Number'
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            />
            <input
              type='text'
              name='exp'
              value={experience}
              onChange={e => setExperience(e.target.value)}
              placeholder='Experince you have'
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            />
          </div> */}

          {/* <div className='flex gap-4'>
            <input
              type='number'
              name='ctc'
              value={CTC}
              onChange={e => setCTC(e.target.value)}
              placeholder='Current CTC'
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            />
            <input
              type='number'
              name='ectc'
              value={ECTC}
              onChange={e => setECTC(e.target.value)}
              placeholder='Expected CTC'
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            />
          </div> */}
          {/* <div className='flex gap-4'>
            <input
              type='text'
              name='location'
              value={location}
              onChange={e => setLocation(e.target.value)}
              placeholder='Current location'
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            />
            <input
              type='number'
              name='notice'
              value={Notice}
              onChange={e => setNotice(e.target.value)}
              placeholder='Notice period '
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            />
          </div> */}
          <div className='flex gap-4'>
            {/* <input
              type='text'
              name='resume'
              value={resume}
              onChange={e => setResume(e.target.value)}
              placeholder='paste only Google Drive Link here'
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
              required
            /> */}

            <div>
              <label>
                Resume:
                <input
                  type='file'
                  name='resume'
                  onChange={handleChange}
                  className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
                  accept='.pdf,.doc,.docx'
                  required
                />
              </label>
            </div>
          </div>
          {/* <div className='flex gap-4'>
            <select
              value={position}
              onChange={e => setPosition(e.target.value)}
              className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
            >
              <option value=''>Select Job Position</option>
              <option value='React dev'>React dev</option>
              <option value='React Native'>React Native</option>
              <option value='Java dev'>Java dev</option>
              <option value='Us It  Recruiter '>Us It Recruiter</option>
            </select>
          </div> */}
          <button
            type='submit'
            className='hover:bg-[#dc4c51] bg-[#062b43] text-white py-2 px-4 rounded-md w-full'
          >
            Apply Now
          </button>
        </form>
        <div className='absolute right-20 top-32 max-sm:right-4  max-sm:top-10'>
          <button
            type='reset'
            className='bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2'
            onClick={handledele}
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='24'
              height='24'
              viewBox='0 0 24 24'
            >
              <path d='M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z' />
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default Dummy

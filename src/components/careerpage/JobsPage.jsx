'use client'

import React, { useState } from 'react'
import axios from 'axios'
import './career.scss'
import img from './12.png'
import Image from 'next/image'

const jobsData = [
  {
    id: 6,
    title: 'Java Developer',
    location: 'Remote',
    tags: [
      'Java serverless Lambda/ Fuctional service,',
      'writing functions as a service,',
      'springboot or soap,',
      'python,',
      'mondodb,',
      'Aggregation pipline,',
      'API building,',
      'React,'
    ],
    description:
      ' Empower Professionals is a privately-owned, certified Minority Owned Business Enterprise (MBE), national business and technology consulting firm focused on efficiently and reliably providing flexible solutions for team building across all 50 states. Whether your organization needs a single resource, a niche team of resources, or a complete outsourced solution.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      '8 years of professional experience',
      'Budget: upto 45lpa',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 7,
    title: 'Software developer(IITians Only)',
    location: 'Remote',
    tags: ['Any Technology,', 'HTML', 'React,'],
    description:
      'Hiring Tech is a respected IT firm based in Indore, focusing on recruitment and consultancy. Our team comprises 100+ skilled professionals, including senior programmers, designers, and project managers. This diverse talent pool ensures robust support for clients and continuous access to valuable resources and information, enhancing our service capabilities.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      'Collaborate remotely to design, develop, and deploy React Native-based Android applications and React JS-based web applications for veterinary professionals and pet owners.',
      'Focus primarily on front-end development, ensuring exceptional user experiences on both Android and web platforms.',
      'Write clean, efficient, and maintainable code adhering to industry best practices.',
      'Conduct thorough testing to ensure quality, reliability, and performance.',
      'Assist in troubleshooting and debugging issues to ensure smooth operation.',
      'Stay updated on emerging technologies, tools, and trends in front-end',
      'Development and healthcare IT.'
    ]
  },
  {
    id: 8,
    title: 'UI/UX Specialist',
    location: 'Remote',
    tags: ['Figma,', 'Adobe', 'UI/UX,'],
    description:
      'Hiring Tech is a respected IT firm based in Indore, focusing on recruitment and consultancy. Our team comprises 100+ skilled professionals, including senior programmers, designers, and project managers. This diverse talent pool ensures robust support for clients and continuous access to valuable resources and information, enhancing our service capabilities.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      'A strong portfolio showcasing design projects and experience',
      'Familiarity with design tools - Figma (preferred)',
      'Knowledge of UX design principles and best practices'
    ]
  },
  {
    id: 5,
    title: 'US IT Recruiter',
    location: 'Indore',
    tags: [' Evening/ Night Shift ', ' verbal Communication Skills in English'],
    description:
      ' Empower Professionals is a privately-owned, certified Minority Owned Business Enterprise (MBE), national business and technology consulting firm focused on efficiently and reliably providing flexible solutions for team building across all 50 states. Whether your organization needs a single resource, a niche team of resources, or a complete outsourced solution.',
    responsiblity: [
      'Understanding the Clients need through the job description provided and sourcing candidates through job portals and other social websites accordingly.',
      'Identify and Search Professionals in the US Market through different Sources',
      'Sourcing, screening and evaluating and recruiting candidates through a structured recruitment process',
      'Shortlist and Interview candidates according to the job requirement',
      'Take care of Clients Requirements and place Software professionals',
      'Negotiate on Salary aspects and close the position',
      'Assist Account Manager (s)/Team Lead with urgent technical requirements',
      'Update the Resourcing Application System routinely'
    ],
    Prerequisite: [
      '0 - 6 months years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 1,
    title: 'Sr Java developer',
    location: 'Remote',
    tags: ['Java Spring boot ', 'Python'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 2,
    title: 'Frontend Developer',
    location: 'Remote',
    tags: ['React', 'HTML', 'CSS'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 3,
    title: 'Backend Developer',
    location: 'Remote',
    tags: ['Node.js', 'MongoDB'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  },
  {
    id: 4,
    title: 'Seo Specialist',
    location: 'Remote',
    tags: ['Google ads', 'Seo Tool'],
    description:
      'Advertisement technology or ad-tech is an $800 billion industry.  Brands rely on targeting consumers across digital ecosystem yet there are not unified solutions which simplify the complex. Tech leaders Google, Meta, even largest consumer tech companies like Amazon, Uber, Netflix rely on advertising revenue with an ever-evolving ecosystem, the problem statements are diverse, high velocity, and technically challenging for the advertisers. We’re a passionate team with experience that includes building a unicorn programmatic media company, & the development of many of the product & technologies used in scale ad targeting, measurement on digital platforms.',
    responsiblity: [
      'Design and build software solutions that directly impact customers and the world.',
      'Take ownership and be responsible for what you build',
      'Work collaboratively across multiple functions (e.g. Product, Sales, Marketing). ',
      'You will develop and execute against both short and long-term roadmaps, making effective tradeoffs between business impact, user experience, and a high-quality technical foundation.',
      'You will support your fellow engineers through feedback, code reviews, and the advancement of internal tools and processes.',
      'Ensuring that all deliverables adhere to our world-class standards',
      'Help with hiring and organizations building for future scale.'
    ],
    Prerequisite: [
      '5+ years of professional experience',
      'Professional experience using Java in production quality code.',
      'Excellent written and verbal English communication skills',
      'Strong design skills (HLD and LLD)',
      'Agile and comfortable working in a fast-paced startup environment.',
      'Focus on collaboration and making progress everyday over excellence. '
    ]
  }
]

const JobsPage = () => {
  const [filter, setFilter] = useState('')
  const [filteredJobs, setFilteredJobs] = useState(jobsData)
  const [selectedJob, setSelectedJob] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [resume, setResume] = useState('')
  const [number, setNumber] = useState('')
  const [experience, setExperience] = useState('')
  const [CTC, setCTC] = useState('')
  const [ECTC, setECTC] = useState('')
  const [location, setLocation] = useState('')
  const [Notice, setNotice] = useState('')
  const [load, setLoad] = useState(false)
  const [position, setPosition] = useState(false)

  const [apply, setApply] = useState(false)

  const handleFilterChange = e => {
    setFilter(e.target.value)
    const filtered = jobsData.filter(
      job =>
        job.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        job.location.toLowerCase().includes(e.target.value.toLowerCase()) ||
        job.tags.some(tag =>
          tag.toLowerCase().includes(e.target.value.toLowerCase())
        )
    )
    setFilteredJobs(filtered)
  }

  const handleJobClick = job => {
    setSelectedJob(job)
  }

  const handleApplyClick = () => {
    setSelectedJob(selectedJob => ({
      ...selectedJob,
      showForm: true
    }))
  }

  const handleSubmit = async e => {
    e.preventDefault()

    try {
      setLoad(true)
      const response = await axios.post('/api', {
        name: name,
        email: email,
        resume: resume,
        number: number,
        experience: experience,
        CTC: CTC,
        ECTC: ECTC,
        location: location,
        Notice: Notice,
        position: position
      })
      if (response.status == 200) {
        // setLoad(true);
        alert('Mail sent successfully')
      }
      // console.log(response.data.message);
    } catch (error) {
      alert('Failed to send email')
      console.error('Error occurred while sending email:', error)
    } finally {
      setLoad(false) // Reset load state back to false after submission
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
      <div className='bgcareer bg-[#FFF7F7] pt-20'>
        <div className='container mx-auto p-4 max-w-6xl mb-20 visionbg'>
          <h1 className='text-4xl font-bold mb-4 text-[#062b43]'>
            Job Listings
          </h1>
          <input
            type='text'
            placeholder='Filter by title, location, or tag'
            value={filter}
            onChange={handleFilterChange}
            className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
          />
          <ul className='flex flex-wrap gap-5 max-w-5xl mx-auto mt-10'>
            {filteredJobs.map(job => (
              <li
                key={job.id}
                className='mb-4 p-4 bg-[#fff] rounded-md cursor-pointer max-w-5xl  w-[1000px] flex justify-between max-md:flex-wrap max-md:'
                onClick={() => handleJobClick(job)}
              >
                <div className='flex flex-col'>
                  <div className='flex flexcol justifycenter items-center gap-3'>
                    <Image src={img} alt='' />
                    <h2 className='text-xl font-bold w-[200px]'>{job.title}</h2>
                  </div>
                  <ul className='mt-2 flx flex-wrap gap-5 w-[600px] max-md:w-full'>
                    <li>skills:</li>
                    {/* <br /> */}
                    {job.tags.map(tag => (
                      <li
                        key={tag}
                        className='inline-block bg[#062b43] font-bold text-[#001833] bg-[#EBF6FC]  px-2 py-1 rounded-md m-2 font '
                      >
                        {tag}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='flex flex-col gap-4 justify-center items-center'>
                  <p className='text-[#001833] w-[150px] max-md:w-[100px] text-center'>
                    {job.location}
                  </p>

                  <div className='mt-2'>
                    <button className='px-8 py-3 hover:bg[#8AAAE5] bg-[#D79442] hover:bg-[#CC7914] text-white hovertext-black rounded-3xl  '>
                      Apply
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          {selectedJob && (
            <div className='fixd inset-0 flex justify-center items-center bg-gray-900 bg-opacity-50 z-[9999999999999999999999999999999999999999999999999]'>
              <div className='bg-white p-8 max-w-md rounded-lg'>
                <div className='applyform'>
                  <div className='fixed w-full bsolute inset-0 flex justify-center overflow-croll items-center bg-white bg-opacity50  z-[9999999999999999999999999999999999999999999999999]'>
                    <div className='bg-white p-10 max-wxl rounded-lg overflowscroll  flex max-w-[1200px] gap-20 max-sm:gap-4 justify-center items-center max-lg:flex-wrap'>
                      <div className='job-discription max-w-6xl overflow-y-scroll h-[600px] mt-20 max-sm:h-[600px] max-sm:mt-4'>
                        <h2 className='text-2xl font-semibold mb-4'>
                          {selectedJob.title}
                        </h2>
                        <p className='text-gray-600 mb-4'>
                          {selectedJob.location}
                        </p>
                        <p className='mb-4'>{selectedJob.description}</p>
                        <h2 className='text-2xl font-semibold mb-4'>
                          responsiblity
                        </h2>
                        {selectedJob.responsiblity.map(tag => (
                          <li
                            key={tag}
                            className='lock list-disc text-black px-0 py-1 rounded-md mr-2'
                          >
                            {tag}
                          </li>
                        ))}
                        <h2 className='text-2xl font-semibold mb-4'>
                          Prerequisite
                        </h2>
                        {selectedJob.Prerequisite.map(tag => (
                          <li
                            key={tag}
                            className='lock list-disc text-black px-0 py-1 rounded-md '
                          >
                            {tag}
                          </li>
                        ))}

                        <button
                          className='mt-10 p-4 bg-gray-900 rounded-full text-white'
                          onClick={handelApply}
                        >
                          Apply Now
                        </button>
                      </div>

                      {apply && (
                        <div className='fixed w-full bsolute inset-0 flex justify-center overflow-croll items-center bg-white bg-opacity50  z-[9999999999999999999999999999999999999999999999999999] max-md:p-10'>
                          <form
                            onSubmit={handleSubmit}
                            className='flx felx-wrap gap-20 h-full mt-52'
                          >
                            <div className='flex gap-4'>
                              <input
                                type='text'
                                name='name'
                                value={name}
                                onChange={e => setName(e.target.value)}
                                placeholder='Your Name'
                                className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
                                required
                              />
                              <input
                                type='email'
                                name='email'
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                placeholder='Your Email'
                                className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
                                required
                              />
                            </div>
                            <div className='flex gap-4'>
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
                            </div>

                            <div className='flex gap-4'>
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
                            </div>
                            <div className='flex gap-4'>
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
                            </div>
                            <div className='flex gap-4'>
                              <input
                                type='text'
                                name='resume'
                                value={resume}
                                onChange={e => setResume(e.target.value)}
                                placeholder='paste only Google Drive Link here'
                                className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
                                required
                              />
                            </div>
                            <div className='flex gap-4'>
                              <select
                                value={position}
                                onChange={e => setPosition(e.target.value)}
                                className='w-full p-2 rounded-md mb-4 border border-gray-300 focus:outline-none focus:border-blue-500'
                              >
                                <option value=''>Select Job Position</option>
                                <option value='React dev'>React dev</option>
                                <option value='React Native'>
                                  React Native
                                </option>
                                <option value='Java dev'>Java dev</option>
                                <option value='Us It  Recruiter '>
                                  Us It Recruiter
                                </option>
                                {/* Add more options as needed */}
                              </select>
                            </div>
                            <button
                              type='submit'
                              className='hover:bg-[#dc4c51] bg-[#062b43] text-white py-2 px-4 rounded-md w-full'
                              disabled={load}
                            >
                              {load ? 'loading' : 'Apply Now'}
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
                      )}
                    </div>
                  </div>
                </div>
                {/* <button
              className="bg-blue-500 text-white py-2 px-4 rounded-md"
              onClick={handleApplyClick}
            >
              Apply
            </button>
            <button
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md ml-2"
              onClick={() => setSelectedJob(null)}
            >
              Close
            </button> */}
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default JobsPage

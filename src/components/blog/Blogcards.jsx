import React, { useState } from 'react'
import img from './assets/16.png'
import Image from 'next/image'

const Blogcards = () => {
  const [showAll, setShowAll] = useState(false)

  const cards = [
    {
      id: 1,
      title: 'NAVIGATING THE DIGITAL SEAS OF INNOVATION',
      description:
        'How can we effectively sail through the boundless waves of digital innovation?',
      image: img
    },
    {
      id: 2,
      title: 'TRANSFORMING WEB MARKETING WITH TECH WONDERS',
      description:
        'How are tech wonders reshaping the landscape of web marketing?',
      image: img
    },
    {
      id: 3,
      title: 'EXPLORING THE UNCHARTED TERRITORIES BLOCK CHAIN',
      description:
        'What discoveries await in the uncharted territories of blockchain technology?',
      image: img
    },
    {
      id: 4,
      title: 'CARD TITLE 4',
      description: 'Description for card 4.',
      image: img
    },
    {
      id: 5,
      title: 'CARD TITLE 5',
      description: 'Description for card 5.',
      image: img
    },
    {
      id: 6,
      title: 'CARD TITLE 6',
      description: 'Description for card 6.',
      image: img
    }
    //     {
    //       id: 7,
    //       title: 'CARD TITLE 7',
    //       description: 'Description for card 7.',
    //       image: '/path/to/image7.jpg'
    //     },
    //     {
    //       id: 8,
    //       title: 'CARD TITLE 8',
    //       description: 'Description for card 8.',
    //       image: '/path/to/image8.jpg'
    //     },
    //     {
    //       id: 9,
    //       title: 'CARD TITLE 9',
    //       description: 'Description for card 9.',
    //       image: '/path/to/image9.jpg'
    //     }
  ]

  const visibleCards = showAll ? cards : cards.slice(0, 3)

  const handleViewMore = () => {
    setShowAll(!showAll)
  }

  return (
    <div className='p-5'>
      <h2 className='text-lg font-semibold text-blue-500'>GET THE LATEST</h2>
      <h1 className='text-2xl font-bold mt-2 mb-5'>What’s hot right now?</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>
        {visibleCards.map(card => (
          <div
            key={card.id}
            className='relative bg-cover bg-center bg-no-repeat h-96 rounded-lg shadow-lg overflow-hidden'
            style={{ backgroundImage: `url(${card.image})` }}
          >
            {/* <Image
              src={card.image}
              alt={card.title}
              className='w-full h-48 object-cover'
            /> */}
            <div className='p-5'>
              <h3 className='text-xl font-bold mb-2'>{card.title}</h3>
              <p className='text-gray-700 mb-4'>{card.description}</p>
              <a href='/read-more' className='text-blue-600 hover:underline'>
                &rarr; Read More
              </a>
            </div>
          </div>
        ))}
      </div>
      <div className='mt-5 text-center'>
        <button
          onClick={handleViewMore}
          className='bg-yellow-500 text-white py-2 px-4 rounded-full hover:bg-yellow-600 transition duration-300'
        >
          {showAll ? 'View less' : 'View all topics'} &darr;
        </button>
      </div>
    </div>
  )
}

export default Blogcards

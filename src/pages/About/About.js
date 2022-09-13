import React from 'react'
import { useState } from 'react';
import Footer from '../../common/Footer/Footer';
import Navbars from '../../common/Navigation/Navbars';

const About = () => {

  const timelines = [
    {
      id: 1,
      title: 'first timeline',
      date: '01/12/2002',
      description: 'First Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia officiis accusantium tempore ipsum unde eum sint eaque vero modi repellat nulla ratione perferendis itaque vitae magnam repellendus, nesciunt aliquam accusamus.'
    },
    {
      id: 2,
      title: 'second timeline',
      date: '02/12/2002',
      description: 'Second Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia officiis accusantium tempore ipsum unde eum sint eaque vero modi repellat nulla ratione perferendis itaque vitae magnam repellendus, nesciunt aliquam accusamus.'
    },
    {
      id: 3,
      title: 'third timeline',
      date: '03/12/2002',
      description: 'Third Lorem ipsum dolor, sit amet consectetur adipisicing elit. Mollitia officiis accusantium tempore ipsum unde eum sint eaque vero modi repellat nulla ratione perferendis itaque vitae magnam repellendus, nesciunt aliquam accusamus.'
    }
  ]

  const [result, setResult] = useState('None')

  const handleClick = (ids) => {
    setResult(timelines[ids - 1].description)
  }

  return (
    <div>
      <Navbars />
      <div className="container m-auto py-6">
        <div className="flex flex-col md:flex-row bg-white">
          <div className="p-12 flex flex-col justify-center md:w-1/2 2xl:w-full 2xl:p-44">
            <h5 className="text-gray-900 text-xl font-medium mb-2">I'm title</h5>
            <p className="text-gray-700 text-base mb-4">
              Born in France with a father from Spain, Roman is a natural mover because of his hip-hop and contemporary dance background in which he interacts with the Unknown, as he calls it. This hard-working and mysterious model enjoys taking risks and discovering different aspect of himself when in front of the camera. Roman has shot for Aldo Shoes.
            </p>
            <p className="text-gray-600 text-xs text-right italic">- Roman Uzal</p>
          </div>
          <img className="md:w-1/2 h-52 md:h-auto object-cover" src="https://images.squarespace-cdn.com/content/v1/620e74d7c40768323153fba5/56194fee-7329-4bd6-8ef7-2670db26238d/Roman_6372%2Bcopie.jpg" alt="" />
        </div>
      </div>
      <div className="container m-auto py-6">
        <div className="timeline-section flex">
          <div className="w-1/2 text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
            {timelines.map(timeline => {
              return (
                <button type="button"
                  key={timeline.id}
                  onClick={() => handleClick(timeline.id)}
                  className="flex justify-between py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700 transition duration-150 ease-in-out"
                >
                  {timeline.title} <span className="">{timeline.date}</span>
                </button>
              )
            })
            }
          </div>
          <div className="result-timeline w-1/2 h-auto p-5 border border-gray-200">
            <p className="font-medium transition duration-150 ease-in-out">{result}</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
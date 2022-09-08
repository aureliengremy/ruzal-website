import React from 'react'
import Footer from '../../common/Footer/Footer';
import Navbars from '../../common/Navigation/Navbars';

const About = () => {
  return (
    <div>
      <Navbars />
      <div className="container m-auto">
        <div class="flex flex-col md:flex-row bg-white">
          <div class="p-6 flex flex-col justify-center w-1/2">
            <h5 class="text-gray-900 text-xl font-medium mb-2">I'm title</h5>
            <p class="text-gray-700 text-base mb-4">
            Born in France with a father from Spain, Roman is a natural mover because of his hip-hop and contemporary dance background in which he interacts with the Unknown, as he calls it. This hard-working and mysterious model enjoys taking risks and discovering different aspect of himself when in front of the camera. Roman has shot for Aldo Shoes.
            </p>
            <p class="text-gray-600 text-xs text-right italic">- Roman Uzal</p>
          </div>
          <img class="w-1/2 h-72 md:h-auto object-cover" src="https://images.squarespace-cdn.com/content/v1/620e74d7c40768323153fba5/56194fee-7329-4bd6-8ef7-2670db26238d/Roman_6372%2Bcopie.jpg" alt="" />
        </div>
      </div>
      <div className="container m-auto">

      <div class="w-1/2 text-sm font-medium text-gray-900 bg-white border border-gray-200 dark:bg-gray-700 dark:border-gray-600 dark:text-white">
        <button type="button" class="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
          Profile
        </button>
        <button type="button" class="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
          Settings
        </button>
        <button type="button" class="py-2 px-4 w-full font-medium text-left border-b border-gray-200 cursor-pointer hover:bg-gray-100 hover:text-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:text-blue-700">
          Messages
        </button>

      </div>
      </div>


      <Footer />
    </div>
  )
}

export default About
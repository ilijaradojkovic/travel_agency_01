import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function SearchCard() {
  return (
  <div className="bg-white shadow-md overflow-hidden h-auto sm:h-110">
    <div className="w-full h-40 sm:h-56 overflow-hidden">
      <img src="./images/cityExample.jpg" className="w-full h-full object-cover" />
    </div>

    <div className="bg-teal-400 text-black flex items-center gap-2 sm:gap-4 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm flex-wrap">
      <div className="flex items-center gap-1">
        <FaRegCalendarAlt className='text-white'/> <span className='text-white'>1</span>
      </div>
      <div className="flex items-center gap-1">
        <FaUser className='text-white'/> <span className='text-white'>13+</span>
      </div>
      <div className="flex items-center gap-1">
        <FaMapMarkerAlt className='text-white'/> <span className='text-white'>Latest</span>
      </div>
    </div>

    <div className="p-3 sm:p-6">
      <h2 className="text-base sm:text-xl text-black font-bold mb-2 sm:mb-3">Summer Fun</h2>
      <p className="text-gray-500 mb-3 sm:mb-4 text-xs sm:text-sm">
        Lorem ipsum dolor sit amet, consectetur uer adipis cing elit....
      </p>

      <div className="flex items-center gap-3 sm:gap-5 text-xs sm:text-sm font-semibold">
        <span className='text-black'>$860</span>
        <div className="flex items-center gap-1 text-gray-600">
          ⭐ 6.0 <span className="ml-1 font-medium">Good</span>
        </div>
      </div>
    </div>
  </div>
  )
}

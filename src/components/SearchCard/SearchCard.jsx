import React from 'react'
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";

export default function SearchCard() {
  return (
  <div className="bg-white shadow-md overflow-hidden h-110 ">
    <div className="w-full h-56 overflow-hidden">
      <img src="./images/cityExample.jpg" className="w-full object-cover" />
    </div>

    <div className="bg-teal-400 text-black flex items-center gap-4 px-4 py-3 text-sm">
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

    <div className="p-6">
      <h2 className="text-xl text-black font-bold mb-3">Summer Fun</h2>
      <p className="text-gray-500 mb-4">
        Lorem ipsum dolor sit amet, consectetur uer adipis cing elit....
      </p>

      <div className="flex items-center gap-5 text-sm font-semibold">
        <span className='text-black '>$860</span>
        <div className="flex items-center gap-1 text-gray-600">
          ⭐ 6.0 <span className="ml-1 font-medium">Good</span>
        </div>
      </div>
    </div>
  </div>




  )
}

import React from 'react'

export default function SearchCard() {
  return (
  <div className="bg-white rounded-xl shadow-md overflow-hidden h-110 ">
    <div className="w-full h-56 overflow-hidden">
      <img src="your-image-1.jpg" className="w-full object-cover" />
    </div>

    <div className="bg-teal-400 text-black flex items-center gap-4 px-4 py-2 text-sm">
      <div className="flex items-center gap-1">
        <span>📅</span> <span>1</span>
      </div>
      <div className="flex items-center gap-1">
        <span>👤</span> <span>13+</span>
      </div>
      <div className="flex items-center gap-1">
        <span>📍</span> <span>Latest</span>
      </div>
    </div>

    <div className="p-6">
      <h2 className="text-xl text-black font-bold mb-3">Summer Fun</h2>
      <p className="text-gray-500 mb-4">
        Lorem ipsum dolor sit amet, consectetur uer adipis cing elit....
      </p>

      <div className="flex items-center justify-between text-sm font-semibold">
        <span>$860</span>
        <div className="flex items-center gap-1 text-gray-600">
          ⭐ 6.0 <span className="ml-1 font-medium">Good</span>
        </div>
      </div>
    </div>
  </div>




  )
}

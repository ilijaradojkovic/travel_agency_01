import React, { useState } from "react";
import SearchCard from "../components/SearchCard/SearchCard";
import { FaSearch } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaRegCalendarAlt } from "react-icons/fa";
import { FaLongArrowAltDown } from "react-icons/fa";
import { FaLongArrowAltUp } from "react-icons/fa";
import { FaSort } from "react-icons/fa";


export default function SearchPage() {
  const [selectedSort, setSelectedSort] = useState("date");

  const sortOptions = [
    { key: "date", label: "Date", icon: <FaRegCalendarAlt /> },
    { key: "lowToHigh", label: "Price low to high", icon: <FaLongArrowAltDown /> },
    { key: "highToLow", label: "Price high to low", icon: <FaLongArrowAltUp /> },
    { key: "name", label: "Name (a-z)", icon: <FaSort /> },
  ];

  return (
    <div className="w-full h-[200vh] bg-amber-600 flex flex-col items-center relative">
      <div className="relative w-full h-[60vh] overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-fixed"
          style={{ backgroundImage: "url('./images/search.jpg')" }}
        ></div>
        <h1 className="relative flex items-center justify-center h-full text-white text-6xl font-bold">
          Tours Search Page
        </h1>
      </div>


      <div className="w-[70%] min-h-[100vh] top-100 absolute left-1/2 -translate-x-1/2 bg-white">
        {/* SORT FILTERI */}
        <div className="bg-gray-300 flex flex-row gap-10 h-20 items-center">
          {sortOptions.map((opt) => (
            <div
              key={opt.key}
              onClick={() => setSelectedSort(opt.key)}
              className={`uppercase h-full flex justify-center items-center flex-1 font-bold cursor-pointer px-3 py-2 rounded transition 
        ${selectedSort === opt.key
                  ? "bg-[#35D0CE] text-white "
                  : "text-white hover:text-white hover:scale-105"
                }`}
            >
              <div className="flex items-center gap-2">
                {opt.icon}
                <span className="text-sm">{opt.label}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-row w-full p-15 gap-15">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <SearchCard />
            <SearchCard />
            <SearchCard />
            <SearchCard />
          </div>

          {/* 🟦 FILTER PANEL */}
          <div className="w-[30%] bg-[#35D0CE] p-6 text-white space-y-8 ">

            {/* TITLE */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
              <p className="opacity-80">It's time to plan just the perfect vacation!</p>
            </div>

            {/* Search fields */}
            <div className="space-y-3">

              {/* Search Tour */}
              <div className="flex items-center bg-white/20 p-3  gap-3">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search Tour"
                  className="bg-transparent outline-none w-full placeholder-white/80"
                />
              </div>

              {/* Where To */}
              <div className="flex items-center bg-white/20 p-3  gap-3">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  placeholder="Where To?"
                  className="bg-transparent outline-none w-full placeholder-white/80"
                />
              </div>

              {/* Month */}
              <div className="flex items-center bg-white/20 p-3  gap-3">
                <FaRegCalendarAlt />
                <input
                  type="month"
                  className="bg-transparent outline-none w-full placeholder-white/80"
                />
              </div>

            </div>

            {/* Filter by price */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Filter by price</h3>

              {/* Min / Max Inputs */}
              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full p-3  bg-white text-black"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full p-3  bg-white text-black"
                />
              </div>
            </div>



            {/* Button */}
            <button className="w-full bg-white text-black p-5 text-sm  tracking-widest font-semibold hover:bg-gray-200">
              SEARCH
            </button>

          </div>


        </div>
      </div>
    </div>
  );
}

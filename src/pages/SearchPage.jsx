import React, { useState, useEffect } from "react";
import SearchCard from "../components/SearchCard/SearchCard";
import Footer from "../components/Footer/Footer";

import {
  FaSearch,
  FaMapMarkerAlt,
  FaRegCalendarAlt,
  FaLongArrowAltDown,
  FaLongArrowAltUp,
  FaSort
} from "react-icons/fa";

export default function SearchPage() {
  const [selectedSort, setSelectedSort] = useState("date");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10; // koliko elemenata po stranici

  // Dummy data - 10 elemenata
  const allItems = Array.from({ length: 10 }, (_, i) => i + 1);

  // Pagination logika
  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll na vrh
  };

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sortOptions = [
    { key: "date", label: "Date", icon: <FaRegCalendarAlt /> },
    { key: "lowToHigh", label: "Price low to high", icon: <FaLongArrowAltDown /> },
    { key: "highToLow", label: "Price high to low", icon: <FaLongArrowAltUp /> },
    { key: "name", label: "Name (a-z)", icon: <FaSort /> },
  ];

  return (
    <div className="flex flex-col min-h-screen">

      {/* Glavni sadržaj */}
      <div className="flex-1 w-full flex flex-col items-center relative">

        {/* Hero / Parallax Slika */}
        <div className="relative w-full h-[60vh] overflow-hidden">
          <img
            src="./images/search.jpg"
            alt="Slika"
            className="absolute w-full h-full object-cover"
            style={{ transform: `translateY(${offset}px)` }}
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-6xl font-bold">
            Tours Search Page
          </h1>
        </div>

        {/* Content + Sidebar */}
        <div className="w-[70%] bg-white mt-[-80px] relative z-10 p-6 flex flex-row gap-8">

          {/* Glavni grid sa karticama */}
          <div className="flex-1 flex flex-col gap-6">

            {/* SORT FILTERI */}
            <div className="bg-gray-300 flex flex-row gap-4 h-16 items-center ">
              {sortOptions.map((opt) => (
                <div
                  key={opt.key}
                  onClick={() => setSelectedSort(opt.key)}
                  className={`uppercase h-full flex justify-center items-center flex-1 font-bold cursor-pointer px-3 py-2 transition 
                    ${selectedSort === opt.key
                      ? "bg-[#35D0CE] text-white"
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

            {/* SearchCard Grid sa pagination */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-4">
              {currentItems.map((item) => (
                <SearchCard key={item} />
              ))}
            </div>

            {/* Pagination */}
            <div className="flex justify-center gap-3 mt-6">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className="px-3 py-1 bg-gray-300  hover:bg-gray-400"
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1  ${currentPage === i + 1 ? "bg-[#35D0CE] text-white" : "bg-gray-200"}`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                className="px-3 py-1 bg-gray-300  hover:bg-gray-400"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>

          </div>

          {/* Sidebar Filter Panel */}
          <div className="w-[30%] bg-[#35D0CE] p-6 text-white space-y-8 ">

            {/* TITLE */}
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Plan Your Trip</h2>
              <p className="opacity-80">It's time to plan just the perfect vacation!</p>
            </div>

            {/* Search fields */}
            <div className="space-y-3">

              <div className="flex items-center bg-white/20 p-3 gap-3 ">
                <FaSearch />
                <input
                  type="text"
                  placeholder="Search Tour"
                  className="bg-transparent outline-none w-full placeholder-white/80"
                />
              </div>

              <div className="flex items-center bg-white/20 p-3 gap-3 ">
                <FaMapMarkerAlt />
                <input
                  type="text"
                  placeholder="Where To?"
                  className="bg-transparent outline-none w-full placeholder-white/80"
                />
              </div>

              <div className="flex items-center bg-white/20 p-3 gap-3 ">
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

              <div className="flex gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full p-3 bg-white text-black "
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full p-3 bg-white text-black "
                />
              </div>
            </div>

            {/* Search Button */}
            <button className="w-full bg-white text-black p-3 text-sm font-semibold hover:bg-gray-200 ">
              SEARCH
            </button>

          </div>

        </div>
      </div>

      {/* Footer */}
      <Footer />

    </div>
  );
}

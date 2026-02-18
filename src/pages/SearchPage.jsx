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

import { useSearchParams } from "react-router-dom";

export default function SearchPage() {
  /** -------------------------------
   * QUERY PARAMS
   --------------------------------*/
  const [searchParams, setSearchParams] = useSearchParams();

  /** -------------------------------
   * FORM STATE (popunjava se iz URL-a)
   --------------------------------*/
  const [form, setForm] = useState({
    search: searchParams.get("search") || "",
    country: searchParams.get("country") || "",
    month: searchParams.get("month") || "",
    days: searchParams.get("days") || "",
    min: searchParams.get("min") || "",
    max: searchParams.get("max") || "",
  });

  const updateField = (key, value) => {
    setForm((prev) => ({ ...prev, [key]: value }));
  };

  /** -------------------------------
   * SORT + PAGINACIJA
   --------------------------------*/
  const [selectedSort, setSelectedSort] = useState("date");
  const [offset, setOffset] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 10;

  // dummy data
  const allItems = Array.from({ length: 10 }, (_, i) => i + 1);

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = allItems.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(allItems.length / itemsPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  /** -------------------------------
   * PARALLAX
   --------------------------------*/
  useEffect(() => {
    const handleScroll = () => setOffset(window.scrollY * 0.5);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /** -------------------------------
   * SORT OPCIJE
   --------------------------------*/
  const sortOptions = [
    { key: "date", label: "Date", icon: <FaRegCalendarAlt /> },
    { key: "lowToHigh", label: "Price low to high", icon: <FaLongArrowAltDown /> },
    { key: "highToLow", label: "Price high to low", icon: <FaLongArrowAltUp /> },
    { key: "name", label: "Name (a-z)", icon: <FaSort /> },
  ];

  /** -------------------------------
   * API FETCH (mock)
   --------------------------------*/
  const fetchResults = () => {
    console.log("Fetching with params:", Object.fromEntries([...searchParams]));
  };

  useEffect(() => {
    fetchResults();
  }, [searchParams]);

  /** -------------------------------
   * SEARCH dugme → update URL parametara
   --------------------------------*/
  const handleSearch = () => {
    setSearchParams({
      search: form.search,
      country: form.country,
      month: form.month,
      days: form.days,
      min: form.min,
      max: form.max,
    });
  };

  /** -------------------------------
   * RETURN UI
   --------------------------------*/
  return (
    <div className="flex flex-col min-h-screen">

      {/* Glavni sadržaj */}
      <div className="flex-1 w-full flex flex-col items-center relative">

        {/* HERO PARALLAX */}
        <div className="relative w-full h-40 sm:h-[60vh] overflow-hidden">
          <img
            src="./images/search.jpg"
            alt="Slika"
            className="absolute w-full h-full object-cover"
            style={{ transform: `translateY(${offset}px)` }}
          />
          <h1 className="absolute inset-0 flex items-center justify-center text-white text-2xl sm:text-4xl md:text-6xl font-bold px-4 text-center">
            Tours Search Page
          </h1>
        </div>

        {/* CONTENT */}
        <div className="w-[95%] sm:w-[85%] md:w-[70%] bg-white mt-[-40px] sm:mt-[-80px] relative z-10 p-4 sm:p-6 flex flex-col-reverse lg:flex-row gap-6 sm:gap-8">

          {/* MAIN GRID */}
          <div className="flex-1 flex flex-col gap-4 sm:gap-6">

            {/* SORT FILTER */}
            <div className="bg-gray-300 flex flex-col sm:flex-row gap-2 sm:gap-4 max-h-64 sm:h-16 items-stretch sm:items-center overflow-y-auto sm:overflow-y-visible">
              {sortOptions.map((opt) => (
                <div
                  key={opt.key}
                  onClick={() => setSelectedSort(opt.key)}
                  className={`uppercase flex justify-center items-center font-bold cursor-pointer px-2 sm:px-3 py-2 sm:py-2 transition text-xs sm:text-sm flex-1
                    ${selectedSort === opt.key
                      ? "bg-[#35D0CE] text-white"
                      : "text-white hover:text-white hover:scale-105"
                    }`}
                >
                  <div className="flex items-center gap-1 sm:gap-2">
                    <span className="text-xs sm:text-base">{opt.icon}</span>
                    <span className=" sm:inline">{opt.label}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* GRID */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-6 mt-2 sm:mt-4">
              {currentItems.map((item) => (
                <SearchCard key={item} />
              ))}
            </div>

            {/* PAGINATION */}
            <div className="flex justify-center gap-2 mt-4 sm:mt-6 flex-wrap">
              <button
                onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-300 hover:bg-gray-400"
                disabled={currentPage === 1}
              >
                Prev
              </button>

              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-2 sm:px-3 py-1 text-xs sm:text-sm ${
                    currentPage === i + 1
                      ? "bg-[#35D0CE] text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {i + 1}
                </button>
              ))}

              <button
                onClick={() => handlePageChange(Math.min(currentPage + 1, totalPages))}
                className="px-2 sm:px-3 py-1 text-xs sm:text-sm bg-gray-300 hover:bg-gray-400"
                disabled={currentPage === totalPages}
              >
                Next
              </button>
            </div>

          </div>

          {/* SIDEBAR */}
          <div className="w-full lg:w-[30%] bg-[#35D0CE] p-4 sm:p-6 text-white space-y-6 sm:space-y-8">

            {/* TITLE */}
            <div className="space-y-2">
              <h2 className="text-xl sm:text-2xl font-semibold">Plan Your Trip</h2>
              <p className="opacity-80 text-xs sm:text-base">It's time to plan just the perfect vacation!</p>
            </div>

            {/* FORM */}
            <div className="space-y-2 sm:space-y-3">

              <div className="flex items-center bg-white/20 p-2 sm:p-3 gap-2 sm:gap-3 text-sm sm:text-base">
                <FaSearch className="flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Search Tour"
                  value={form.search}
                  onChange={(e) => updateField("search", e.target.value)}
                  className="bg-transparent outline-none w-full placeholder-white/80 text-sm"
                />
              </div>

              <div className="flex items-center bg-white/20 p-2 sm:p-3 gap-2 sm:gap-3 text-sm sm:text-base">
                <FaMapMarkerAlt className="flex-shrink-0" />
                <input
                  type="text"
                  placeholder="Where To?"
                  value={form.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  className="bg-transparent outline-none w-full placeholder-white/80 text-sm"
                />
              </div>

              <div className="flex items-center bg-white/20 p-2 sm:p-3 gap-2 sm:gap-3 text-sm sm:text-base">
                <FaRegCalendarAlt className="flex-shrink-0" />
                <input
                  type="month"
                  value={form.month}
                  onChange={(e) => updateField("month", e.target.value)}
                  className="bg-transparent outline-none w-full placeholder-white/80 text-sm"
                />
              </div>

            </div>

            {/* PRICE FILTER */}
            <div className="space-y-2 sm:space-y-3">
              <h3 className="font-semibold text-base sm:text-lg">Filter by price</h3>

              <div className="flex gap-2 sm:gap-3">
                <input
                  type="number"
                  placeholder="Min"
                  value={form.min}
                  onChange={(e) => updateField("min", e.target.value)}
                  className="w-full p-2 sm:p-3 bg-white text-black text-sm"
                />
                <input
                  type="number"
                  placeholder="Max"
                  value={form.max}
                  onChange={(e) => updateField("max", e.target.value)}
                  className="w-full p-2 sm:p-3 bg-white text-black text-sm"
                />
              </div>
            </div>

            {/* BUTTON */}
            <button
              onClick={handleSearch}
              className="w-full bg-white text-black p-2 sm:p-3 text-xs sm:text-sm font-semibold hover:bg-gray-200"
            >
              SEARCH
            </button>

          </div>

        </div>
      </div>

      {/* FOOTER */}
      <Footer />
    </div>
  );
}

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaGlobe,
  FaClock,
} from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [whereOpen, setWhereOpen] = useState(false);
  const [monthOpen, setMonthOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);

  const [whereValue, setWhereValue] = useState("");
  const [monthValue, setMonthValue] = useState("");
  const [countryValue, setCountryValue] = useState("");

  const [daysValue, setDaysValue] = useState("");
  const navigate = useNavigate();

  const [searchQuery, setSearchQuery] = useState("");

  const cities = ["Paris", "Rome", "Belgrade", "New York", "Tokyo", "Dubai", "Barcelona", "Sydney"];
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const countries = ["Serbia", "Italy", "France", "Spain", "Greece", "USA", "Japan", "Germany", "Canada", "Turkey", "Croatia", "Montenegro", "India"];

  return (
    <div className="w-full px-4 sm:px-0 sm:max-w-5xl sm:-mt-10 z-20 sm:absolute sm:bottom-[-2rem] sm:left-1/2 sm:-translate-x-1/2 shadow-lg rounded-t-lg">
      <div className="bg-white p-2 sm:p-3 shadow-lg rounded-md flex flex-col sm:flex-row items-stretch sm:items-center overflow-visible gap-2 sm:gap-0">

        {/* COUNTRY */}
        <div
          className="relative flex flex-1 items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-5 sm:border-r cursor-pointer border-b sm:border-b-0"
          onClick={() => {
            setTypeOpen(!typeOpen);
            setWhereOpen(false);
            setMonthOpen(false);
          }}
        >
          <FaGlobe className="text-gray-400 text-lg flex-shrink-0" />

          <span
            className={`font-medium text-sm sm:text-base ${countryValue ? "text-gray-700" : "text-gray-400"
              }`}
          >
            {countryValue || "Where to?"}
          </span>

          {typeOpen && (
            <div
              className="absolute left-0 top-full mt-2 bg-white shadow-lg rounded-md 
                         w-full p-2 max-h-60 overflow-y-auto z-30 scrollbar-hide"
            >
              {countries.map((c) => (
                <div
                  key={c}
                  className="px-3 py-2 text-black text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setCountryValue(c);
                    setTypeOpen(false);
                  }}
                >
                  {c}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* MONTH */}
        <div
          className="relative flex flex-1 items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-5 sm:border-r cursor-pointer border-b sm:border-b-0"
          onClick={() => {
            setMonthOpen(!monthOpen);
            setWhereOpen(false);
            setTypeOpen(false);
          }}
        >
          <FaCalendarAlt className="text-gray-400 text-lg flex-shrink-0" />

          <span
            className={`font-medium text-sm sm:text-base ${monthValue ? "text-gray-700" : "text-gray-400"
              }`}
          >
            {monthValue || "Month"}
          </span>

          {monthOpen && (
            <div className="absolute scrollbar-hide left-0 top-full mt-2 bg-white shadow-lg rounded-md w-full p-2 max-h-60 overflow-y-auto z-30">
              {months.map((m) => (
                <div
                  key={m}
                  className="px-3 py-2 text-black text-sm hover:bg-gray-100 cursor-pointer"
                  onClick={() => {
                    setMonthValue(m);
                    setMonthOpen(false);
                  }}
                >
                  {m}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* DAYS — NUMBER INPUT */}
        <div className="flex flex-1 items-center gap-2 sm:gap-3 px-3 sm:px-6 py-3 sm:py-5 sm:border-r border-b sm:border-b-0">
          <FaClock className="text-gray-400 text-lg flex-shrink-0" />

          <input
            type="number"
            min="1"
            className="w-full outline-none text-gray-700 font-medium text-sm sm:text-base"
            placeholder="Days"
            value={daysValue}
            onChange={(e) => setDaysValue(e.target.value)}
          />
        </div>

        {/* BUTTON */}
        <button className="bg-teal-400 cursor-pointer hover:bg-teal-500 text-white font-semibold tracking-wide px-6 sm:px-10 py-3 sm:py-5 rounded-md flex-shrink-0 text-sm sm:text-base" onClick={()=>navigate(`/search?country=${countryValue}&month=${monthValue}&days=${daysValue}`)}>
          FIND NOW
        </button>
      </div>
    </div>
  );
}

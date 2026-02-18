import React from "react";
import { useNavigate } from "react-router-dom";

export default function TravelGridElement({
  title,
  destinations,
  titleImage,
  reverse,
}) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/tours?country=${title}`);
    window.scrollTo({ top: 0, behavior: "smooth" }); // scroll na vrh
  };

  return (
    <div
      className={`flex items-center gap-3 sm:gap-6 w-[95%] sm:w-[90%] md:w-[85%] justify-center flex-col sm:flex-col md:flex-col ${
        reverse ? "lg:flex-row-reverse" : "lg:flex-row"
      }`}
    >
      {/* Circle logo */}
      <div
        className="flex flex-1 justify-center items-center cursor-pointer w-full sm:w-auto"
        onClick={handleClick}
      >
        <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-40 md:h-40 lg:w-60 lg:h-60 rounded-full overflow-hidden relative group">
          {/* Image with zoom on hover */}
          <img
            src={titleImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Black transparent overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Centered title */}
          <div className="absolute inset-0 flex items-center justify-center px-2">
            <span className="text-white text-lg sm:text-2xl md:text-3xl font-bold drop-shadow-lg text-center">
              {title}
            </span>
          </div>
        </div>
      </div>

      {/* Destination cards */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-6">
        {destinations.map((dest) => (
          <div
            key={dest.name}
            className="relative bg-pink-300 h-40 sm:h-40 md:h-40 lg:h-60 flex-1 overflow-hidden rounded-lg cursor-pointer transform transition duration-300 hover:scale-105"
          >
            <img
              src={dest.img}
              alt={dest.name}
              className="w-full h-full object-cover"
            />

            <div className="absolute bottom-2 left-2 text-white">
              <h3 className="font-bold text-sm sm:text-base md:text-lg">{dest.name}</h3>
              <p className="text-xs sm:text-sm">
                ⭐ {dest.rating} {dest.review}
              </p>
            </div>
            <div className="absolute bottom-2 right-2 text-white font-bold text-sm sm:text-base md:text-lg">
              ${dest.price}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

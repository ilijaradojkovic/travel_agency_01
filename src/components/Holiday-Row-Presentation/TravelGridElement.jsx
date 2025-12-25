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
      className={`flex items-center gap-6 w-[80%] justify-center  ${
        reverse ? "lg:flex-row-reverse md:flex-col" : "lg:flex-row md:flex-col"
      } `}
    >
      {/* Circle logo */}
      <div
        className="flex flex-1 justify-center items-center cursor-pointer"
        onClick={handleClick}
      >
        <div className="lg:w-60 lg:h-60 md:h-40 md:w-40 rounded-full overflow-hidden relative group">
          {/* Image with zoom on hover */}
          <img
            src={titleImage}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          />

          {/* Black transparent overlay */}
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Centered title */}
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-3xl font-bold drop-shadow-lg">
              {title}
            </span>
          </div>
        </div>
      </div>

      {/* Destination cards */}
      {destinations.map((dest) => (
        <div
          key={dest.name}
          className="relative bg-pink-300 lg:h-60 md:h-40 md:w-full flex-1 overflow-hidden rounded-lg cursor-pointer transform transition duration-300 hover:scale-105"
        >
          <img
            src={dest.img}
            alt={dest.name}
            className="lg:w-full lg:h-full md:h-40 md:w-full object-cover"
          />

          <div className="absolute bottom-2 left-2 text-white">
            <h3 className="font-bold text-lg">{dest.name}</h3>
            <p className="text-sm">
              ⭐ {dest.rating} {dest.review}
            </p>
          </div>
          <div className="absolute bottom-2 right-2 text-white font-bold text-lg">
            ${dest.price}
          </div>
        </div>
      ))}
    </div>
  );
}

import React from "react";

export default function HeroTitle({ topTitle, mainTitle, subTitle, style, textColor }) {
  return (
    <div
      className="flex flex-col justify-center items-center w-[95%] sm:w-[80%] md:w-[60%] lg:w-[30%] gap-2 sm:gap-3 z-10 px-4"
      style={style}
    >
      <p className="text-center text-2xl sm:text-3xl md:text-5xl font-yellowtail" style={{ color: textColor }}>
        {topTitle}
      </p>

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-semibold" style={{ color: textColor }}>
        {mainTitle}
      </h2>

      <p className="text-center text-xs sm:text-sm md:text-base lg:text-lg" style={{ color: textColor }}>
        {subTitle}
      </p>
    </div>
  );
}


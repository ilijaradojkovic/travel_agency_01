import React from "react";

export default function HeroTitle({ topTitle, mainTitle, subTitle, style, textColor }) {
  return (
    <div
      className="flex flex-col justify-center items-center w-[30%] gap-3 z-10"
      style={style}
    >
      <p className="text-center text-5xl font-yellowtail" style={{ color: textColor }}>
        {topTitle}
      </p>

      <h2 className="text-center text-6xl font-semibold" style={{ color: textColor }}>
        {mainTitle}
      </h2>

      <p className="text-center text-lg" style={{ color: textColor }}>
        {subTitle}
      </p>
    </div>
  );
}


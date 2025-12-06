import React from "react";

export default function Navbar() {
  return (
    <div className=" bg-white h-[10vh] flex flex-row justify-center items-center overflow-hidden relative">
      <div className="  absolute left-0">
        <img src="./logo/logo.png" className="scale-20" />
      </div>
      <div className="flex flex-row justify-center items-center gap-10 flex-1">
        <NavbarElement text="Home" />
        <NavbarElement text="About" />
        <NavbarElement text="Tours" />
        <NavbarElement text="Contact" />
      </div>
    </div>
  );
}

function NavbarElement({ text }) {
  return (
    <span
      className="cursor-pointer text-black text-lg font-semibold relative transition-all duration-200 hover:text-blue-600 hover:scale-105
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-blue-600 after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      {text}
    </span>
  );
}

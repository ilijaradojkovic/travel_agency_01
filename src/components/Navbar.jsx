import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate=useNavigate();
  return (
   <div className="bg-white h-[10vh] flex items-center relative px-0">
  <div className="absolute left-10 flex items-center">
    <img
      src="./logo/logo.png"
      className="scale-5 origin-left"
    />
  </div>

  <div className="flex flex-row justify-center items-center gap-10 flex-1">
        <NavbarElement text="Home" onClick={() => navigate("/")} />
        <NavbarElement text="About" onClick={() => navigate("/about")} />
        <NavbarElement text="Tours" onClick={() => navigate("/tours")} />
        <NavbarElement text="Contact" onClick={() => navigate("/contact")} />
  </div>
</div>

  );
}

function NavbarElement({ text, onClick }) {
  return (
    <span
      className="cursor-pointer text-black text-lg font-semibold relative transition-all duration-200 hover:text-primary-hover hover:scale-105
  after:content-[''] after:absolute after:left-0 after:-bottom-1 after:w-full after:h-[2px] after:bg-primary after:scale-x-0 after:origin-left after:transition-transform after:duration-300 hover:after:scale-x-100"
    >
      {text}
    </span>
  );
}

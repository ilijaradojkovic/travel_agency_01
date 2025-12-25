import React from "react";
import { HashLink as Link } from "react-router-hash-link";

function NavbarElement({ text, to }) {
  return (
    <Link
      smooth
      to={to}
      className="relative cursor-pointer text-black text-lg font-semibold transition-all duration-200
                 hover:text-primary-hover hover:scale-105
                 after:content-[''] after:absolute after:left-0 after:-bottom-1
                 after:w-full after:h-[2px] after:bg-primary after:scale-x-0
                 after:origin-left after:transition-transform after:duration-300
                 hover:after:scale-x-100"
    >
      {text}
    </Link>
  );
}

export default function Navbar() {
  return (
    <nav className="bg-white h-[10vh] flex items-center relative px-6">
      {/* Logo */}
      <div className="absolute left-6 flex items-center">
        <Link to="/">
          <img
            src="./logo/logo.png"
            alt="Atlas Logo"
            className="scale-5 origin-left cursor-pointer"
          />
        </Link>
      </div>

      {/* Menu */}
      <div className="flex flex-1 justify-center items-center gap-10">
        <NavbarElement text="Home" to="/" />
        <NavbarElement text="About" to="/about" />
        <NavbarElement text="Tours" to="/tours" />
        <NavbarElement text="Contact" to="/home#contact-section" />
      </div>
    </nav>
  );
}

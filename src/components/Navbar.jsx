import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import { FiMenu, FiX } from "react-icons/fi";

function NavbarElement({ text, to, onClose }) {
  return (
    <Link
      smooth
      to={to}
      onClick={onClose}
      className="relative cursor-pointer text-black sm:text-lg text-base font-semibold transition-all duration-200
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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <nav className="bg-white h-[10vh] flex items-center relative px-4 sm:px-6 z-50">
      {/* Logo */}
      <div className="flex items-center">
        <Link to="/">
          <img
            src="./logo/logo.png"
            alt="Atlas Logo"
            className="scale-5 origin-left cursor-pointer"
          />
        </Link>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex flex-1 justify-center items-center gap-6 lg:gap-10">
        <NavbarElement text="Home" to="/" />
        <NavbarElement text="About" to="/about" />
        <NavbarElement text="Tours" to="/tours" />
        <NavbarElement text="Contact" to="/countact-us" />
      </div>

      {/* Mobile Menu Button */}
      <div className="ml-auto md:hidden">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 text-black text-2xl"
        >
          {mobileMenuOpen ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-[10vh] left-0 right-0 bg-white border-t border-gray-200 md:hidden z-40">
          <div className="flex flex-col items-center gap-6 py-6 px-4">
            <NavbarElement text="Home" to="/" onClose={closeMobileMenu} />
            <NavbarElement text="About" to="/about" onClose={closeMobileMenu} />
            <NavbarElement text="Tours" to="/tours" onClose={closeMobileMenu} />
            <NavbarElement text="Contact" to="/countact-us" onClose={closeMobileMenu} />
          </div>
        </div>
      )}
    </nav>
  );
}

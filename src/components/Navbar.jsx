import { useState } from "react";
import Logo from "../assets/Logo.svg";

function Navbar() {
  const [isNavOpen, setNavOpen] = useState(false);

  const toggleNav = () => {
    setNavOpen(!isNavOpen);
  };

  return (
    <nav className="bg-gray-100 px-6 py-3">
      <div className=" mx-auto flex justify-between items-center">
        <a href="/" className="flex  w-11 gap-2 items-start">
          <img src={Logo}/>
          <div>
            <span className="text-xl leading-none	font-semibold">
              LOREM IPSUM
            </span>
          </div>
        </a>

        {/* Hamburger icon for mobile */}
        <div className={`lg:hidden`}>
          <button onClick={toggleNav} className=" focus:outline-none">
            ☰
          </button>
        </div>

        {/* Dropdown for mobile */}
        <div className={`lg:hidden ${isNavOpen ? "block" : "hidden"}`}>
          <div className="bg-gray-100  py-3 space-y-2 ">
            <a href="/" className="block">
              Home
            </a>
            <a href="/works" className="block">
              Works
            </a>
            <a href="/blog" className="block">
              Blog
            </a>
            <a href="/contact" className="block">
              Contact
            </a>
          </div>
        </div>

        {/* Navigation links for larger screens */}
        <div className={`lg:flex space-x-4 hidden gap-14 lg:pr-28`}>
          <a href="/" className="hover:underline">
            Home
          </a>
          <a href="/works" className="hover:underline">
            Works
          </a>
          <a href="/blog" className="hover:underline">
            Blog
          </a>
          <a href="/contact" className="hover:underline">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

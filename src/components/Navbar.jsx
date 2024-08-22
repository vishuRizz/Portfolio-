import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GiCrossMark } from "react-icons/gi";

function Navbar() {
  const [nav, setNav] = useState(false);

  return (
    <>
      <nav className="fixed flex items-center justify-between w-full h-20 px-4 ">
        <div>
          <h1 className="cursor-pointer font-dancing">Vishu</h1>
        </div>
        <div className="flex">
          <ul className="flex mt-2 max-md:hidden">
            <li className="px-4 font-medium text-gray-600 cursor-pointer hover:scale-110">
              Home
            </li>
            <li className="px-4 font-medium text-gray-600 cursor-pointer hover:scale-110">
              About
            </li>
            <li className="px-4 font-medium text-gray-600 cursor-pointer hover:scale-110">
              Portfolio
            </li>
            <li className="px-4 font-medium text-gray-600 cursor-pointer hover:scale-110">
              Experience
            </li>
            <li className="px-4 font-medium text-gray-600 cursor-pointer hover:scale-110">
              Contact
            </li>
          </ul>
          <div
            onClick={() => setNav(!nav)}
            className="z-10 cursor-pointer md:hidden"
          >
            {nav ? <GiCrossMark size={30} /> : <RxHamburgerMenu size={30} />}
          </div>
        </div>

        {/* Full-screen menu */}
        <ul
          className={`absolute top-0 left-0 flex flex-col items-center justify-center w-full h-screen text-gray-500 bg-gradient-to-b from-white to-pink-200 transition-transform duration-300 ${
            nav ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <li className="px-4 py-6 text-4xl cursor-pointer hover:scale-110">
            Home
          </li>
          <li className="px-4 py-6 text-4xl cursor-pointer hover:scale-110">
            About
          </li>
          <li className="px-4 py-6 text-4xl cursor-pointer hover:scale-110">
            Portfolio
          </li>
          <li className="px-4 py-6 text-4xl cursor-pointer hover:scale-110">
            Experience
          </li>
          <li className="px-4 py-6 text-4xl cursor-pointer hover:scale-110">
            Contact
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Link } from "react-scroll";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block">
      <button
        onClick={toggleDropdown}
        className="h4 cursor-pointer flex items-center justify-center rounded-none"
        style={{ marginTop: "3%" }}
      >
        More
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
            <Link
              to="about"
              smooth={true}
              spy={true}
              offset={-200}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={toggleDropdown}
            >
              About Us
            </Link>
            <Link
              to="services"
              smooth={true}
              spy={true}
              offset={-200}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={toggleDropdown}
            >
              Our Services
            </Link>
            <Link
              to="testimonials"
              smooth={true}
              spy={true}
              offset={-200}
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
              role="menuitem"
              onClick={toggleDropdown}
            >
              Testimonials
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;

import { useState } from "react";
import Logo from "../assets/TEST.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);

  const handleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="min-h-10 bg-white-100">
      {/* Navbar Container */}
      <nav className="bg-primary p-4">
        <div className="container mx-auto flex justify-between items-center relative">
          {/* Logo and Menu Items */}
          <div className="flex items-center gap-8">
            <img src={Logo} alt="Logo" className="h-7 w-10" />

            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:space-x-8 md:items-center`}
            >
              {/* Home with Dropdown */}
              <li className="relative text-textcolor font-bold hover:text-gray-500 py-2 md:py-0">
                <button onClick={() => handleDropdown("home")}>HOME</button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-10 bg-white text-textcolor shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
                    dropdownOpen === "home"
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                  }`}
                >
                  <ul className="p-4 space-y-2">
                    <li className="hover:text-gray-500 cursor-pointer">
                      Get Started
                    </li>
                  </ul>
                </div>
              </li>

              {/* Collections with Dropdown */}
              <li className="relative text-textcolor font-bold hover:text-gray-500 py-2 md:py-0">
                <button onClick={() => handleDropdown("collections")}>
                  COLLECTIONS
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-10 bg-white text-black shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
                    dropdownOpen === "collections"
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                  }`}
                >
                  <ul className="p-4 space-y-2">
                    <li className="hover:text-gray-500 cursor-pointer">
                      Fantasy
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      Romance
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      Thriller
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      History
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      Mystery
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      Action-Adventure
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      Science Fiction
                    </li>
                  </ul>
                </div>
              </li>

              {/* About with Dropdown */}
              <li className="relative text-textcolor font-bold hover:text-gray-500 py-2 md:py-0">
                <button onClick={() => handleDropdown("about")}>ABOUT</button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-10 bg-white text-black shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
                    dropdownOpen === "about"
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                  }`}
                >
                  <ul className="p-4 space-y-2">
                    <li className="hover:text-gray-500 cursor-pointer">
                      Contact
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      Manual
                    </li>
                    <li className="hover:text-gray-500 cursor-pointer">
                      Terms and Conditions
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-textcolor font-bold hover:text-gray-500"
            >
              ☰
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

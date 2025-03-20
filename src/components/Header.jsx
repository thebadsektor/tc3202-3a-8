import { useState, useEffect } from "react";
import Logo from "../assets/TEST.png";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(null);
  const [hasShadow, setHasShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setHasShadow(true);
      } else {
        setHasShadow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDropdown = (menu) => {
    setDropdownOpen(dropdownOpen === menu ? null : menu);
  };

  return (
    <div className="min-h-20 bg-creamywhite pt-16">
      <nav
        className={`p-4 fixed top-0 left-0 w-full z-30 transition-shadow duration-500 ease-out ${
          hasShadow ? "shadow-md" : "shadow-none"
        }`}
        style={{ backgroundColor: "#FFFDFA" }}
      >
        <div className="container mx-auto flex justify-between items-center relative">
          <div className="flex items-center gap-8">
            <img src={Logo} alt="Logo" className="h-7 w-10" />

            <ul
              className={`${
                isOpen ? "block" : "hidden"
              } md:flex md:space-x-8 md:items-center`}
            >
              <li className="relative text-softblack text-lg font-inter hover:text-gray-500 py-2 md:py-0">
                <button>HOME</button>
              </li>

              {/* Collections with Dropdown */}
              <li className="relative text-softblack text-lg font-inter hover:text-gray-500 py-2 md:py-0">
                <button onClick={() => handleDropdown("Collections")}>
                  COLLECTIONS
                </button>
                <div
                  className={`absolute left-1/2 -translate-x-1/2 w-40 top-8 rounded-lg bg-creamywhite text-softblack shadow-lg z-20 transition-all duration-300 ease-in-out transform ${
                    dropdownOpen === "Collections"
                      ? "opacity-100 translate-y-0 scale-100"
                      : "opacity-0 -translate-y-4 scale-95 pointer-events-none"
                  }`}
                >
                  <ul className="p-4 space-y-2">
                    <li className="font-inter hover:text-gray-500 cursor-pointer">
                      Fantasy
                    </li>
                    <li className="font-inter hover:text-gray-500 cursor-pointer">
                      Romance
                    </li>
                    <li className="font-inter hover:text-gray-500 cursor-pointer">
                      Thriller
                    </li>
                    <li className="font-inter hover:text-gray-500 cursor-pointer">
                      History
                    </li>
                    <li className="font-inter hover:text-gray-500 cursor-pointer">
                      Mystery
                    </li>
                    <li className="font-inter hover:text-gray-500 cursor-pointer">
                      Action-Adventure
                    </li>
                    <li className="font-inter hover:text-gray-500 cursor-pointer">
                      Science Fiction
                    </li>
                  </ul>
                </div>
              </li>

              {/* About with Dropdown */}
              <li className="relative text-softblack text-lg font-inter hover:text-gray-500 py-2 md:py-0">
                <button> ABOUT </button>
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

export default Header;

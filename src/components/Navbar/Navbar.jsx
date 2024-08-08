import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { NavMenu } from "./variables/NavMenu";
import { HiMenu } from "react-icons/hi";
import { FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    // Close the menu whenever the location changes
    setMenuOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        // Scrolling down
        setShowNavbar(false);
      } else {
        // Scrolling up
        setShowNavbar(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`z-20 fixed w-full bg-color-primary-500 p-2 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <nav className="w-full max-w-screen-xl mx-auto p-2 px-2 flex flex-row-reverse lg:flex-row items-center justify-between">
        <div>
          <img src="/logo/suitmedia_logo.png" alt="" className="w-24" />
        </div>
        <ul className="lg:inline-flex gap-x-4 text-white text-sm hidden">
          {NavMenu.map((menu) => (
            <li key={menu.id}>
              <NavLink
                to={menu.link}
                className={({ isActive }) =>
                  `hover:text-color-primary-100 p-2 transition-colors ${
                    isActive
                      ? "border-white border-b-4 "
                      : "border-transparent border-b-4"
                  }`
                }
              >
                {menu.label}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="lg:hidden" onClick={() => setMenuOpen(true)}>
          <button className="p-2">
            <HiMenu className="text-white font-bold"></HiMenu>
          </button>
        </div>
      </nav>
      <div
        className={`absolute w-full h-screen top-0 right-0 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform`}
      >
        <div className="bg-white w-full h-full flex flex-col gap-y-2 p-4 px-6">
          <div className="inline-flex justify-between">
            <div>
              <img
                src="/logo/suitmedia_logo_colored.png"
                alt=""
                className="w-12"
              />
            </div>
            <button className="" onClick={() => setMenuOpen(false)}>
              <FaTimes className="text-neutral-500"></FaTimes>
            </button>
          </div>
          <ul className="text-xs px-2 w-full font-semibold flex flex-col gap-y-1">
            {NavMenu.map((menu) => (
              <li key={menu.id} className="w-full">
                <NavLink
                  to={menu.link}
                  className={({ isActive }) =>
                    `inline-flex w-full py-2 ${
                      isActive
                        ? "text-color-primary-500 border-b-2 border-color-primary-500"
                        : ""
                    }`
                  }
                >
                  {menu.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

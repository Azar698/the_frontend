import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { logoImg, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full fixed top-0 z-50 py-4 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo & Title */}
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logoImg}
            alt="logo"
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain"
          />
          <p className="text-white text-[16px] sm:text-[18px] font-bold cursor-pointer">
            Azar
            <span className="hidden md:inline"> | Frontend Developer</span>
          </p>
        </Link>

        {/* Desktop/Tablet Navigation */}
        <ul className="hidden sm:flex gap-6 md:gap-10 list-none">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[16px] md:text-[18px] font-medium cursor-pointer transition`}
              onClick={() => setActive(nav.title)}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-5 h-6 mr-4 cursor-pointer object-contain"
            onClick={() => setToggle(!toggle)}
          />

          {/* Mobile Dropdown */}
          <div
            className={`${
              toggle ? "flex" : "hidden"
            } absolute top-20 right-12 w-[50vw] max-w-[250px] black-gradient p-6 rounded-xl z-30 shadow-lg`}
          >
            <ul className="flex flex-col gap-4 w-full">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`text-[16px] font-medium cursor-pointer ${
                    active === nav.title ? "text-white" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(false);
                    setActive(nav.title);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

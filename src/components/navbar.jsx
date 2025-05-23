import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close, mainlogo } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      if (scrollTop > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${
        styles.paddingX
      } w-full flex items-center py-5 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={mainlogo}
            alt="logo"
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-20 lg:h-20 object-contain"
          />
          {/* <p className='text-white text-[18px] font-bold cursor-pointer flex '>
            CTG &nbsp;
          </p> */}
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`${
                active === nav.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(nav.title)}
            >
              {/* <a href={`#${nav.id}`}>{nav.title}</a> */}
            </li>
          ))}
          <Link
            to={"/"}
            className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
          >
            Home
          </Link>
          <Link
            to={"/blog"}
            className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
          >
            Blog
          </Link>
          {/* <Link to={'/categories'} className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer">Categories</Link> */}
          <NavHashLink
            smooth={true}
            to={"/#contact"}
            className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
          >
            Contact
          </NavHashLink>
          {/* <Link to={'/#contact'}>Contact Me</Link> */}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
             
              <Link
                to={"/"}
                className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              >
                Home
              </Link>
              <Link
                to={"/blog"}
                className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              >
                Blog
              </Link>
              {/* <Link to={'/categories'} className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer">Categories</Link> */}
              <NavHashLink
                smooth={true}
                to={"/#contact"}
                className=" text-secondary hover:text-white text-[18px] font-medium cursor-pointer"
              >
                Contact
              </NavHashLink>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

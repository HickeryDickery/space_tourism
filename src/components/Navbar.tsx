import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { navLinks } from "../constants";
import { motion } from "framer-motion";
import { Hamburger } from ".";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("HOME");

  useEffect(() => {
    if (location.pathname === "/") {
      setActive("HOME");
    } else {
      setActive(location.pathname.toUpperCase().replace("/", ""));
    }
  }, [location]);

  return (
    <nav className="w-full flex items-center absolute top-0 z-20  text-tertiary sm:max-md:text-nav-tablet text-nav-desktop ">
      <div className="flex w-full justify-between m-5 sm:m-0 lg:my-10">
        <Link to="/" className="flex items-center">
          <img
            src="./src/assets/shared/logo.svg"
            alt="logo"
            className="object-contain lg:mx-14 sm:mx-10 w-[40px] h-[40px] sm:w-[48px] sm:h-[48px] "
          />
        </Link>

        <div className="sm:flex hidden lg:flex-1 items-center">
          <div className="flex-1 lg:flex hidden h-[1px] bg-gray-600 -mr-[2%] z-10" />

          <div className="items-center justify-center navbackground lg:w-[65%] sm:max-lg:px-10 h-[100px] m-0">
            <ul className="list-none flex flex-row items-center w-full justify-center gap-12 px-0 pr-[2.5%] h-[100px] ">
              {navLinks.map((link, index) => (
                <li
                  key={link}
                  onClick={() => {
                    setActive(link);
                    navigate(`/${link !== "HOME" ? link.toLowerCase() : ""}`);
                  }}
                  className={`h-full flex text-center items-center cursor-pointer relative transition-all ease-in-out duration-300 border-b-[4px] border-transparent  ${
                    active !== link && "hover:border-gray-500"
                  }`}
                >
                  <div className="flex font-barlow-condensed">
                    <span className="font-bold lg:block hidden font-barlow-condensed">
                      0{index} &nbsp;
                    </span>
                    {link}
                  </div>
                  {active === link && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-[3px] bg-white hidden sm:block"
                      layoutId="underline"
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Hamburger active={active} setActive={setActive} />
      </div>
    </nav>
  );
};

export default Navbar;

import open from "../assets/shared/icon-hamburger.svg";
import close from "../assets/shared/icon-close.svg";
import { navLinks } from "../constants";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { preloadImages } from "../utils";
import { useNavigate } from "react-router-dom";

interface HamburgerProps {
  active: string;
  setActive: React.Dispatch<React.SetStateAction<string>>;
}

const Hamburger = ({ active, setActive }: HamburgerProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const imagePaths = [open, close];

    preloadImages(imagePaths);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  return (
    <div className="sm:hidden block">
      <div className="h-full flex items-center z-20">
        <img
          alt="hamburger menu open/close"
          src={`${isOpen === true ? close : open}`}
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-20"
        />
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ translateX: "100%" }}
            animate={{ translateX: "0%" }}
            exit={{ translateX: "100%" }}
            transition={{ duration: 0.3 }}
            className="absolute top-0 w-[70%] right-0 min-h-screen hamburger flex flex-row items-start py-24"
          >
            <ul className="w-full ml-10">
              {navLinks.map((link, index) => (
                <li
                  key={link}
                  onClick={() => {
                    setActive(link);
                    setIsOpen(false);
                    navigate(`/${link !== "HOME" ? link.toLowerCase() : ""}`);
                  }}
                  className={`h-full w-full flex flex-col text-left cursor-pointer relative my-10 transition-all ease-in-out duration-300 ${
                    active !== link &&
                    "border-r-[4px] border-transparent hover:border-gray-400"
                  }`}
                >
                  <div className="font-barlow-condensed">
                    <span className="font-bold font-barlow-condensed">
                      0{index} &nbsp;
                    </span>
                    {link}
                  </div>
                  {active === link && (
                    <motion.div
                      className="absolute right-0 h-full w-1 bg-white"
                      layoutId="hamburger"
                    />
                  )}
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Hamburger;

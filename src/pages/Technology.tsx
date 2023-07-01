import { motion, AnimatePresence } from "framer-motion";
import { technology } from "../constants";
import { useEffect, useState } from "react";
import { preloadImages } from "../utils";

const Technology = () => {
  const [techIndex, setTechIndex] = useState(0);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);

    handleResize();

    const imagePaths = Array<string>();

    technology.map((tech) => {
      imagePaths.push(tech.images.portrait);
      imagePaths.push(tech.images.landscape);
    });

    preloadImages(imagePaths);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [setWidth]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop "
    >
      <div className="flex w-full flex-col mt-10 sm:mt-32 mb-10 ">
        <div className="w-full text-center sm:px-20 lg:px-32 sm:text-left text-h5-mobile sm:text-h5-tablet lg:text-h5-desktop font-barlow-condensed my-10 lg:mt-20 lg:mb-10">
          <span className="text-gray-600 font-black">03 &nbsp;</span>
          SPACE LAUNCH 101
        </div>

        <div className="flex flex-col-reverse lg:flex-row justify-between lg:ml-32 items-center gap-12">
          <div className="flex lg:flex-row flex-col justify-start flex-1">
            <ul className="flex lg:flex-col flex-row justify-center items-center lg:justify-start gap-x-6 lg:gap-0">
              {technology.map((tech, index) => (
                <li
                  key={tech.name}
                  onClick={() => {
                    setTechIndex(index);
                  }}
                  className={`w-[40px] h-[40px] sm:w-[60px] sm:h-[60px] lg:w-[80px] lg:h-[80px] rounded-full border-solid border-[1px] text-center flex items-center justify-center my-2 lg:my-0 lg:mb-10 cursor-pointer font-bellefair text-h4-mobile sm:text-h4-tablet lg:text-h4-desktop transition-all ease-in-out duration-500 ${
                    techIndex === index
                      ? "border-primary bg-white text-primary"
                      : "border-gray-600 text-tertiary hover:border-white"
                  } `}
                >
                  {index + 1}
                </li>
              ))}
            </ul>

            <div className="flex flex-col mx-10 sm:mx-20 flex-1 items-center lg:items-start">
              <span className="font-barlow-condensed text-nav-desktop text-secondary text-center lg:text-left mt-6 mb-4 lg:m-0">
                THE TERMINOLOGY..
              </span>
              <AnimatePresence mode="wait">
                <motion.span
                  key={technology[techIndex].name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-h3-mobile sm:text-h3-tablet lg:text-h3-desktop font-bellefair text-center lg:text-left mb-4 lg:m-0"
                >
                  {technology[techIndex].name.toUpperCase()}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.span
                  key={technology[techIndex].description}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-body-mobile sm:text-body-tablet lg:text-body-desktop text-secondary leading-[25px] sm:leading-7 lg:leading-8 text-center lg:text-left sm:max-lg:max-w-[70%]"
                >
                  {technology[techIndex].description}
                </motion.span>
              </AnimatePresence>
            </div>
          </div>
          <div>
            <AnimatePresence mode="wait">
              <motion.img
                key={technology[techIndex].images.portrait}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={`${
                  width >= 1040
                    ? technology[techIndex].images.portrait
                    : technology[techIndex].images.landscape
                }`}
                alt={`${technology[techIndex].name} image`}
                className={`w-[515px] ${width < 1040 && "w-screen"}`}
              />
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Technology;

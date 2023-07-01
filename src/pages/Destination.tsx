import { AnimatePresence, motion } from "framer-motion";
import { destinations } from "../constants";
import { useState } from "react";

const Destination = () => {
  const [destinationIndex, setDestinationIndex] = useState(0);
  const [activeDestination, setActiveDestination] = useState("Moon");

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop "
    >
      <div className="flex w-full flex-col mt-10 sm:mt-32 mb-10 ">
        <div className="w-full text-center sm:px-20 lg:px-32 sm:text-left text-h5-mobile sm:text-h5-tablet lg:text-h5-desktop font-barlow-condensed my-10 lg:my-20">
          <span className="text-gray-600 font-black">01 &nbsp;</span>
          PICK YOUR DESTINATION
        </div>

        <div className="flex flex-col lg:flex-row justify-center items-center gap-10 lg:gap-32">
          <div>
            <AnimatePresence mode="wait">
              <motion.img
                alt={`${destinations[destinationIndex].name} image`}
                key={destinations[destinationIndex].images.png}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={`${destinations[destinationIndex].images.png}`}
                className="w-[170px] h-[170px] sm:w-[300px] sm:h-[300px] lg:w-[445px] lg:h-[445px]"
              />
            </AnimatePresence>
          </div>

          <div className="max-w-[75%] sm:max-w-[75%] lg:max-w-[30%]">
            <ul className="flex flex-row w-full justify-center lg:justify-start gap-6 sm:gap-10 h-[50px]">
              {destinations.map((destination, index) => (
                <li
                  onClick={() => {
                    setDestinationIndex(index);
                    setActiveDestination(destination.name);
                  }}
                  key={destination.name}
                  className={`flex text-center items-center cursor-pointer relative font-barlow-condensed text-nav-desktop border-b-[4px] border-transparent transition-all ease-in-out duration-300 ${
                    activeDestination != destination.name &&
                    "text-secondary hover:border-gray-500"
                  }`}
                >
                  {destination.name.toUpperCase()}
                  {activeDestination === destination.name && (
                    <motion.div
                      className="absolute bottom-0 left-0 w-full h-1 bg-white "
                      layoutId="destination"
                    />
                  )}
                </li>
              ))}
            </ul>
            <div className="flex flex-col mb-14 mt-4 sm:mt-0 text-center lg:text-left lg:min-h-[20%]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={destinations[destinationIndex].name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop font-bellefair"
                >
                  {destinations[destinationIndex].name.toUpperCase()}
                </motion.span>
              </AnimatePresence>
              <AnimatePresence mode="wait">
                <motion.p
                  key={destinations[destinationIndex].description}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-secondary text-body-mobile sm:text-body-tablet lg:text-body-desktop leading-[25px] sm:leading-7 lg:leading-8"
                >
                  {destinations[destinationIndex].description}
                </motion.p>
              </AnimatePresence>
            </div>

            <div className="w-full h-[1px] bg-gray-600 my-8" />

            <div className="flex flex-col sm:flex-row gap-6 sm:gap-20 w-full justify-center lg:justify-start">
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-barlow-condensed text-nav-tablet text-secondary">
                  AVG. DISTANCE
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={destinations[destinationIndex].distance}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-bellefair text-sub1-desktop"
                  >
                    {destinations[destinationIndex].distance.toUpperCase()}
                  </motion.span>
                </AnimatePresence>
              </div>
              <div className="flex flex-col items-center lg:items-start">
                <span className="font-barlow-condensed text-nav-tablet text-secondary">
                  EST. TRAVEL TIME
                </span>
                <AnimatePresence mode="wait">
                  <motion.span
                    key={destinations[destinationIndex].travel}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="font-bellefair text-sub1-desktop"
                  >
                    {destinations[destinationIndex].travel.toUpperCase()}
                  </motion.span>
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Destination;

import { motion, AnimatePresence } from "framer-motion";
import { crew } from "../constants";
import { useState } from "react";

const Crew = () => {
  const [crewIndex, setCrewIndex] = useState(0);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container bg-crew-mobile md:bg-crew-tablet lg:bg-crew-desktop "
    >
      <div className="flex w-full flex-col mt-10 sm:mt-32">
        <div className="w-full text-center sm:px-20 lg:px-32 sm:text-left text-h5-mobile sm:text-h5-tablet lg:text-h5-desktop font-barlow-condensed my-10 lg:my-20">
          <span className="text-gray-600 font-black">02 &nbsp;</span>
          MEET YOUR CREW
        </div>

        <div className="flex flex-col-reverse sm:flex-col lg:flex-row justify-between items-center lg:ml-32 lg:mr-20 mt-10 lg:mt-0 sm:max-lg:flex-1 ">
          <div className="lg:max-w-[50%] max-w-[75%] sm:max-w-[65%] flex flex-col-reverse sm:flex-col mb-6 mt-4 sm:mt-0">
            <div className="text-center lg:text-left flex flex-col">
              <AnimatePresence mode="wait">
                <motion.span
                  key={crew[crewIndex].role}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-h4-mobile sm:text-h4-tablet lg:text-h4-desktop font-bellefair text-gray-400"
                >
                  {crew[crewIndex].role.toUpperCase()}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.span
                  key={crew[crewIndex].name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-h3-mobile sm:text-h3-tablet lg:text-h3-desktop font-bellefair"
                >
                  {crew[crewIndex].name.toUpperCase()}
                </motion.span>
              </AnimatePresence>

              <AnimatePresence mode="wait">
                <motion.p
                  key={crew[crewIndex].bio}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                  className="text-secondary text-body-mobile sm:text-body-tablet lg:text-body-desktop lg:max-w-[70%] leading-[25px] sm:leading-7 lg:leading-8"
                >
                  {crew[crewIndex].bio}
                </motion.p>
              </AnimatePresence>
            </div>
            <ul className="w-full flex flex-row justify-center lg:justify-start gap-4 lg:my-28 my-6">
              {crew.map((crewMember, index) => (
                <li
                  key={crewMember.name}
                  onClick={() => {
                    setCrewIndex(index);
                  }}
                  className={`cursor-pointer list-none lg:w-[15px] lg:h-[15px] w-[10px] h-[10px] rounded-full transition-all ease-in-out duration-500 ${
                    crewIndex === index
                      ? "bg-white"
                      : "bg-gray-600 hover:bg-gray-400"
                  }`}
                ></li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col">
            <AnimatePresence mode="wait">
              <motion.img
                alt={`${crew[crewIndex].name} profile picture`}
                key={crew[crewIndex].images.png}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                src={`${crew[crewIndex].images.png}`}
                className="-mt-[10px] object-contain lg:max-h-[712px] sm:max-h-[572px] max-h-[223px]"
              />
            </AnimatePresence>
            <div className="w-[90vw] h-[1px] bg-gray-600 sm:hidden" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Crew;

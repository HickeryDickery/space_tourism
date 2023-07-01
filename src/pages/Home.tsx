import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container bg-home-mobile md:bg-home-tablet lg:bg-home-desktop "
    >
      <div className="flex flex-col lg:flex-row items-center justify-center w-full mt-28 sm:mt-36">
        <div className="flex flex-col items-center lg:items-start max-w-[75%] sm:max-w-[50%] lg:max-w-[35%] m-auto text-center lg:text-left">
          <span className="text-secondary text-h5-mobile md:text-h5-tablet lg:text-h5-desktop">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span className="font-bellefair text-h1-mobile sm:text-h1-desktop">
            SPACE
          </span>
          <span className="text-body-mobile sm:text-body-tablet md:text-body-desktop text-secondary leading-[25px] sm:leading-7 lg:leading-8">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </span>
        </div>
        <div className="my-20 mx-auto">
          <button
            className="explore"
            onClick={() => {
              navigate("/destination");
            }}
          >
            EXPLORE
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default Home;

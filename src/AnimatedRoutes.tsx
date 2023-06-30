import { Route, Routes, useLocation } from "react-router-dom";
import { Home, Crew, Destination, Technology } from "./pages";
import { AnimatePresence } from "framer-motion";

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;

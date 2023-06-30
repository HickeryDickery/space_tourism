import { BrowserRouter } from "react-router-dom";
import { Navbar } from "./components";
import AnimatedRoutes from "./AnimatedRoutes";

function App() {
  return (
    <div className=" max-w-full min-h-screen m-0 p-0 bg-primary">
      <BrowserRouter>
        <Navbar />
        <AnimatedRoutes />
      </BrowserRouter>
    </div>
  );
}

export default App;

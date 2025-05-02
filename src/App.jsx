import { useEffect, useState } from "react";
import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import CustomCursor from "./components/CustomCursor";

const App = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === "u") {
        e.preventDefault();
        setShowPopup(true);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const closePopup = () => setShowPopup(false);

  return (
    <BrowserRouter>
      <CustomCursor />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
      {showPopup && (
  <div className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-sm flex items-center justify-center z-[9999]">
    <div className="bg-white bg-opacity-10 backdrop-blur-md border border-white border-opacity-20 rounded-xl p-6 max-w-sm w-full text-white shadow-xl relative">
      <button
        className="absolute top-2 right-3 text-white text-2xl font-bold hover:text-red-400"
        onClick={closePopup}
      >
        &times;
      </button>
      
      <div className="flex items-center gap-2 justify-center">
      <h2 className="text-2xl font-semibold">Source Code Locked</h2>
      <img className="w-[30px] h-[30px]" src="src/assets/hard-code.png" alt="lock-img"/>
      </div>
      
      <p className="mt-3 text-sm text-center text-gray-100">
        Viewing source code is disabled for this webpage.
      </p>
      </div>
  </div>
)}

    </BrowserRouter>
  );
};

export default App;

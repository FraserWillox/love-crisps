import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { crispData } from "../crispData";

const SpinWheel: React.FC = () => {
  const [selectedCrisp, setSelectedCrisp] = useState<{ flavor: string; image: string } | null>(null);
  const [isSpinning, setIsSpinning] = useState(false);

  // Pick a random crisp
  const getRandomCrisp = () => {
    return crispData[Math.floor(Math.random() * crispData.length)];
  };

  // Initialize with a random crisp on page load
  useEffect(() => {
    setSelectedCrisp(getRandomCrisp());
  }, []);

  // Handle spin event
  const spinWheel = () => {
    if (isSpinning) return;
    setIsSpinning(true);

    let spinInterval = setInterval(() => {
      setSelectedCrisp(getRandomCrisp());
    }, 200); // Change crisp every 200ms

    setTimeout(() => {
      clearInterval(spinInterval); // Stop changing crisps
      setSelectedCrisp(getRandomCrisp()); // Set final crisp
      setIsSpinning(false);
    }, 5000); // 5 seconds total spin duration
  };

  return (
    <div className="spinwheel-container flex flex-col items-center">
      {selectedCrisp && (
        <>
          {/* Crisp Image Spins */}
          <motion.div
            className="wheel w-48 h-48 rounded-full border-4 border-white flex items-center justify-center bg-gray-100"
            animate={isSpinning ? { rotate: 1440 } : {}}
            transition={isSpinning ? { duration: 5, ease: "easeOut" } : {}}
          >
            <img
              src={selectedCrisp.image}
              alt={selectedCrisp.flavor}
              className="w-40 h-40 object-contain"
            />
          </motion.div>

          {/* Crisp Flavor Name */}
          <h2 className="mt-4 text-3xl font-semibold text-white">
            {selectedCrisp.flavor}
          </h2>
        </>
      )}

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200"
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>
    </div>
  );
};

export default SpinWheel;

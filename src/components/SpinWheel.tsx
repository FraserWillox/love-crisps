import { useCrispHistory } from '../context/CrispHistoryProvider';
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { crispData } from "../crispData";

const SpinWheel: React.FC = () => {
  const { addCrispToHistory } = useCrispHistory();
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

    const spinInterval = setInterval(() => {
      setSelectedCrisp(getRandomCrisp());
    }, 200); // Change crisp every 200ms

    setTimeout(() => {
      clearInterval(spinInterval); // Stop changing crisps
      const finalCrisp = getRandomCrisp();
      setSelectedCrisp(finalCrisp); // Set final crisp
      addCrispToHistory(finalCrisp); // Add `{ flavor, image }` to history
      setIsSpinning(false);
    }, 5000); // 5 seconds total spin duration
  };

  return (
    <div className="spinwheel-container flex flex-col items-center">
      {selectedCrisp && (
        <>
          {/* Crisp Image Spins */}
          <motion.div
            className="wheel w-50 h-50 rounded-full border-4 border-white flex items-center justify-center bg-gray-100"
            animate={isSpinning ? { rotate: 1440 } : {}}
            transition={isSpinning ? { duration: 5, ease: "easeOut" } : {}}
          >
            <img
              src={selectedCrisp.image}
              alt={selectedCrisp.flavor}
              className="w-80 h-80 object-contain"
            />
          </motion.div>

          {/* Crisp Flavor Name */}
          <h2 className="mt-10 z-20 text-4xl font-extrabold text-white font-[\'Comic Sans MS\', \'cursive\']">
            {selectedCrisp.flavor}
          </h2>
        </>
      )}

      {/* Spin Button */}
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="mt-10 px-10 py-5 bg-gradient-to-r from-yellow-400 via-pink-500 to-red-500 text-white font-bold rounded-full text-xl shadow-lg transition-transform duration-300 hover:scale-110 animate-text-grow"
      >
        {isSpinning ? "Spinning..." : "Click for Random Crisps!"}
      </button>
    </div>
  );
};

export default SpinWheel;

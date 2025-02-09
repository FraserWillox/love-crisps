import { useState } from "react";
import { motion } from "framer-motion";

const flavors = [
  "Cheese & Onion",
  "Salt & Vinegar",
  "Barbecue",
  "Prawn Cocktail",
  "Sour Cream & Onion",
  "Sweet Chili",
  "Ready Salted",
  "Beef & Onion",
];

const SpinWheel = () => {
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [isSpinning, setIsSpinning] = useState(false);

  const spinWheel = () => {
    if (isSpinning) return; // Prevent multiple clicks

    setIsSpinning(true);

    const randomIndex = Math.floor(Math.random() * flavors.length);
    setTimeout(() => {
      setSelectedFlavor(flavors[randomIndex]);
      setIsSpinning(false);
    }, 2000); // Simulate spin duration
  };

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <motion.div
        className="w-48 h-48 rounded-full border-4 border-yellow-400 flex items-center justify-center text-center font-bold text-lg bg-white shadow-lg"
        animate={{ rotate: isSpinning ? 720 : 0 }} // 2 full spins
        transition={{ duration: 2, ease: "easeOut" }}
      >
        {selectedFlavor || "Spin Me!"}
      </motion.div>

      <button
        onClick={spinWheel}
        className="mt-6 px-6 py-3 bg-yellow-400 text-white font-bold rounded-lg shadow-md hover:bg-yellow-500 transition"
        disabled={isSpinning}
      >
        {isSpinning ? "Spinning..." : "Spin the Wheel"}
      </button>
    </div>
  );
};

export default SpinWheel;

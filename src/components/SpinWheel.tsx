import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface SpinWheelProps {
  onSpin: (flavor: string) => void;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ onSpin }) => {
  const [isSpinning, setIsSpinning] = useState(false);

  const flavors = [
    'Cheese & Onion',
    'Salt & Vinegar',
    'Barbecue',
    'Prawn Cocktail',
    'Sour Cream & Onion',
    'Sweet Chili',
    'Ready Salted',
    'Beef & Onion',
  ];

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    const randomIndex = Math.floor(Math.random() * flavors.length);
    setTimeout(() => {
      onSpin(flavors[randomIndex]);
      setIsSpinning(false);
    }, 2000);
  };

  return (
    <div className="spinwheel-container">
      <motion.div
        className="wheel w-48 h-48 rounded-full border-4 border-white flex items-center justify-center"
        animate={{ rotate: isSpinning ? 720 : 0 }}
        transition={{ duration: 2, ease: 'easeOut' }}
      >
        <span className="text-xl text-white">Spin Me!</span>
      </motion.div>
      <button
        onClick={spinWheel}
        disabled={isSpinning}
        className="mt-6 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-gray-200"
      >
        {isSpinning ? 'Spinning...' : 'Spin the Wheel'}
      </button>
    </div>
  );
};

export default SpinWheel;
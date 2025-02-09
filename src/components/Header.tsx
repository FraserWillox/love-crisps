import React, { useState, useEffect } from 'react';
import LoveCrispsSVG from "../assets/LoveCrisps.svg";
// import { motion } from 'framer-motion';
import SpinWheel from './SpinWheel';
import Barbeque from "../assets/crisps/Barbeque.png";
import BeefAndOnion from "../assets/crisps/beef-and-onion.png";
import CheeseAndOnion from "../assets/crisps/cheese-and-onion.png";
import PrawnCocktail from "../assets/crisps/prawn-cocktail.png";
import ReadySalted from "../assets/crisps/ready-salted.png";
import SaltAndVinegar from "../assets/crisps/salt-and-vinegar.png";
import SourCreamAndOnion from "../assets/crisps/sour-cream-and-onion.png";
import SweetChilli from "../assets/crisps/sweet-chilli.png";

const crispData = [
  { flavor: 'Cheese & Onion', image: CheeseAndOnion },
  { flavor: 'Salt & Vinegar', image: SaltAndVinegar },
  { flavor: 'Barbecue', image: Barbeque },
  { flavor: 'Prawn Cocktail', image: PrawnCocktail },
  { flavor: 'Sour Cream & Onion', image: SourCreamAndOnion },
  { flavor: 'Sweet Chili', image: SweetChilli },
  { flavor: 'Ready Salted', image: ReadySalted },
  { flavor: 'Beef & Onion', image: BeefAndOnion },
];

const Header: React.FC = () => {
  const [selectedCrisp, setSelectedCrisp] = useState<{ flavor: string; image: string } | null>(null);

  // Function to pick a random crisp
  const getRandomCrisp = () => {
    return crispData[Math.floor(Math.random() * crispData.length)];
  };

  // Initialize with a random crisp on page load
  useEffect(() => {
    setSelectedCrisp(getRandomCrisp());
  }, []);

  // Handler for spin result
  const handleSpinResult = (flavor: string) => {
    const crisp = crispData.find((crisp) => crisp.flavor === flavor);
    setSelectedCrisp(crisp || null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-center py-10">
      {/* Arched Header Text */}
       <img src={LoveCrispsSVG} alt="Love Crisps" className="w-280 h-auto" />

      {/* Crisp Display */}
      {selectedCrisp && (
        <div className="flex flex-col items-center mt-6">
          <img
            src={selectedCrisp.image}
            alt={selectedCrisp.flavor}
            className="w-40 h-40 object-contain"
          />
          <h2 className="mt-4 text-3xl font-semibold text-white">
            {selectedCrisp.flavor}
          </h2>
        </div>
      )}

      {/* SpinWheel Component */}
      <div className="mt-10">
        <SpinWheel onSpin={handleSpinResult} />
      </div>
    </div>
  );
};

export default Header;

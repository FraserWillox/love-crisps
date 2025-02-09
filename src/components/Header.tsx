import React, { useState, useEffect } from 'react';
import SpinWheel from './SpinWheel';
import LoveCrispsSVG from '../assets/LoveCrisps.svg';
import FloatingCrispPackets from './FloatingCrispPackets';
import { crispData } from '../crispData';

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

  // Handle spin result
  const handleSpinResult = (flavor: string) => {
    const crisp = crispData.find((crisp) => crisp.flavor === flavor);
    setSelectedCrisp(crisp || null);
  };

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-center py-10">
      {/* Love Crisps Arched SVG */}
      <img src={LoveCrispsSVG} alt="Love Crisps" className="w-280 h-auto" />

      {/* Floating Crisp Packets */}
      <FloatingCrispPackets />

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

import React from 'react';
import SpinWheel from './SpinWheel';
import LoveCrispsSVG from '../assets/LoveCrisps.svg';
import FloatingCrispPackets from './FloatingCrispPackets';


const Header: React.FC = () => {

  return (
    <div className="relative flex flex-col items-center justify-center bg-gradient-to-r from-yellow-400 via-pink-400 to-red-400 text-center py-10">
      
      {/* Love Crisps Arched SVG */}
      <img src={LoveCrispsSVG} alt="Love Crisps" className="w-280 h-auto" />

      {/* Floating Crisp Packets */}
      <FloatingCrispPackets />

      {/* SpinWheel Component */}
      <div className="mt-10">
        <SpinWheel />
      </div>
    </div>
  );
};

export default Header;

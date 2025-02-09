// Header.tsx
import React from 'react';
import SpinWheel from './SpinWheel';
import LoveCrispsSVG from '../assets/LoveCrisps.svg';
import FloatingCrispPackets from './FloatingCrispPackets';

const Header: React.FC = () => {
  return (
    <div
      className="relative flex flex-col items-center justify-center bg-gradient-to-b from-[#113C9C] via-[#149CAE] to-[#92BB85] text-center py-10 min-h-screen"
    >
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
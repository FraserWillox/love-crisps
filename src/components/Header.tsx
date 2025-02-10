import React from 'react';
import BackgroundSpinWheel from '../BackgroundSpinWheel';
import SpinWheel from './SpinWheel';
import LoveCrispsText from '../assets/Love-Crisps.svg';
import FloatingCrispPackets from './FloatingCrispPackets';

const Header: React.FC = () => {
  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background Spin Wheel */}
      <BackgroundSpinWheel />

      {/* Content Wrapper - Ensures content is above the spinning wheel */}
      <div className=" z-10 ">
        {/* Love Crisps Arched SVG */}
        <img src={LoveCrispsText} alt="Love Crisps" className="w-280 h-auto" />

        {/* Floating Crisp Packets */}
        <FloatingCrispPackets />

        {/* SpinWheel Component */}
        <div>
          <SpinWheel />
        </div>
      </div>
    </div>
  );
};

export default Header;

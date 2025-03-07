import React, { useState } from 'react';
import BackgroundSpinWheel from './BackgroundSpinWheel';
import SpinWheel from './components/SpinWheel';
import CrispHistoryModal from './components/CrispHistoryModal';
import LoveCrispsText from './assets/Love-Crisps.svg';
import FloatingCrispPackets from './components/FloatingCrispPackets';
import CrispCursor from './components/CrispCursor';

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Cursor of mouse */}
      <CrispCursor />

      {/* Background Spin Wheel */}
      <BackgroundSpinWheel />

      {/* Modal - Crisp History */}
      <button className="absolute top-4 right-4 bg-gray-800 text-white px-4 py-2 rounded" onClick={() => setModalOpen(true)}>
        Advanced History
      </button>
      <CrispHistoryModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />

      {/* Content Wrapper - Ensures content is above the spinning wheel */}
      <div className="z-10">
        {/* Love Crisps Arched SVG */}
        <img src={LoveCrispsText} alt="Love Crisps" className="w-280 h-[180px]" />
        
        {/* Floating Crisp Packets */}
        <FloatingCrispPackets />

        {/* SpinWheel Component */}
        <div>
          <SpinWheel />
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useEffect, useState } from "react";
import CrispIcon from "../assets/crisps/barbeque.png";

const CrispCursor: React.FC = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", moveCursor);
    return () => window.removeEventListener("mousemove", moveCursor);
  }, []);

  return (
    <>
      {/* Custom Crisp Cursor */}
      <div
        className="fixed pointer-events-none w-10 h-10"
        style={{
          left: `${position.x}px`,
          top: `${position.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      >
        <img src={CrispIcon} alt="Crisp Cursor" className="w-full h-full animate-bounce" />
      </div>
    </>
  );
};

export default CrispCursor;

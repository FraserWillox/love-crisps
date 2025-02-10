import React from "react";

const BackgroundSpinWheel: React.FC = () => {
  return (
    <div className="absolute inset-0 flex items-center justify-center overflow-hidden">
      <svg
        width="4000"
        height="4000"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_324_499)">
          <rect width="1000" height="1000" fill="white" />

          {/* Spin Wheel Segments - Each with animation */}
          <path d="M500 500 L1000 250 L1000 500 Z" fill="#FF0000" className="animate-lighten" />
          <path d="M500 500 L1000 500 L1000 750 Z" fill="#00FF00" className="animate-lighten" />
          <path d="M500 500 L1000 750 L750 1000 Z" fill="#0000FF" className="animate-lighten" />
          <path d="M500 500 L750 1000 L500 1000 Z" fill="#33A1FF" className="animate-lighten" />
          <path d="M500 500 L500 1000 L250 1000 Z" fill="#FF33A8" className="animate-lighten" />
          <path d="M500 500 L250 1000 L0 750 Z" fill="#A133FF" className="animate-lighten" />
          <path d="M500 500 L0 750 L0 500 Z" fill="#FF8C33" className="animate-lighten" />
          <path d="M500 500 L0 500 L0 250 Z" fill="#33FFC1" className="animate-lighten" />
          <path d="M500 500 L0 250 L250 0 Z" fill="#FF3366" className="animate-lighten" />
          <path d="M500 500 L250 0 L500 0 Z" fill="#3366FF" className="animate-lighten" />
          <path d="M500 500 L500 0 L750 0 Z" fill="#66FF33" className="animate-lighten" />
          <path d="M500 500 L750 0 L1000 250 Z" fill="#FFB533" className="animate-lighten" />

          {/* Lines for Visual Sections */}
          <line x1="750" y1="0" x2="250" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="250" y1="0" x2="750" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="1000" y1="250" x2="0" y2="750" stroke="black" strokeWidth="2" />
          <line x1="1000" y1="750" x2="0" y2="250" stroke="black" strokeWidth="2" />
          <line x1="1000" y1="0" x2="0" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="0" y1="0" x2="1000" y2="1000" stroke="black" strokeWidth="2" />
          <line x1="1000" y1="500" x2="0" y2="500" stroke="black" strokeWidth="2" />
          <line x1="500" y1="1000" x2="500" y2="0" stroke="black" strokeWidth="2" />
        </g>
        <defs>
          <clipPath id="clip0_324_499">
            <rect width="1000" height="1000" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundSpinWheel;

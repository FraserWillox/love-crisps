import React from "react";

const BackgroundSpinWheel: React.FC = () => {
  return (
    <div className="absolute flex items-center justify-center overflow-hidden">
      <svg
        width="4000"
        height="4000"
        viewBox="0 0 1000 1000"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clipPath="url(#clip0_324_499)">
          <rect width="4000" height="4000" fill="white" />



{/* 

pinkish is 251, 118, 122 in hexidecimal is #FB767A
Green is 132, 186, 119 in hexidecimal is #84BA77
brown dark is 119, 90, 82 in hexidecimal is #775A52
redish is 255, 92, 100 in hexidecimal is #FF5C64
Turqoise is 61, 176, 167 in hexidecimal is #3DB0A7
brown is 192, 151, 106 in hexidecimal is #C0976A */}


          {/* Spin Wheel Segments - Each with animation */}
          <path d="M500 500 L1000 250 L1000 500 Z" fill="#FB767A" className="animate-lighten" />
          <path d="M500 500 L1000 500 L1000 750 Z" fill="#84BA77" className="animate-lighten" />
          <path d="M500 500 L1000 750 L750 1000 Z" fill="#775A52" className="animate-lighten" />
          <path d="M500 500 L750 1000 L500 1000 Z" fill="#FF5C64" className="animate-lighten" />
          <path d="M500 500 L500 1000 L250 1000 Z" fill="#3DB0A7" className="animate-lighten" />
          <path d="M500 500 L250 1000 L0 750 Z" fill="#C0976A" className="animate-lighten" />


          <path d="M500 500 L0 750 L0 500 Z" fill="#FB767A" className="animate-lighten" />
          <path d="M500 500 L0 500 L0 250 Z" fill="#84BA77" className="animate-lighten" />
          <path d="M500 500 L0 250 L250 0 Z" fill="#775A52" className="animate-lighten" />
          <path d="M500 500 L250 0 L500 0 Z" fill="#FF5C64" className="animate-lighten" />
          <path d="M500 500 L500 0 L750 0 Z" fill="#3DB0A7" className="animate-lighten" />
          <path d="M500 500 L750 0 L1000 250 Z" fill="#C0976A" className="animate-lighten" />

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
            <rect width="4000" height="4000" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
};

export default BackgroundSpinWheel;

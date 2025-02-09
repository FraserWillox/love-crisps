import React from 'react';
import { motion } from 'framer-motion';
import Barbeque from "../assets/crisps/Barbeque.png";
import BeefAndOnion from "../assets/crisps/beef-and-onion.png";
import CheeseAndOnion from "../assets/crisps/cheese-and-onion.png";
import PrawnCocktail from "../assets/crisps/prawn-cocktail.png";
import ReadySalted from "../assets/crisps/ready-salted.png";
import SaltAndVinegar from "../assets/crisps/salt-and-vinegar.png";
import SourCreamAndOnion from "../assets/crisps/sour-cream-and-onion.png";
import SweetChilli from "../assets/crisps/sweet-chilli.png";

const leftPositions = [
  { top: "10%", left: "10%", image: CheeseAndOnion },
  { top: "30%", left: "15%", image: ReadySalted },
  { top: "50%", left: "5%", image: Barbeque },
  { top: "70%", left: "10%", image: PrawnCocktail },
];

const rightPositions = [
  { top: "10%", right: "10%", image: SaltAndVinegar },
  { top: "30%", right: "15%", image: SourCreamAndOnion },
  { top: "50%", right: "5%", image: BeefAndOnion },
  { top: "70%", right: "10%", image: SweetChilli },
];

const floatingAnimation = {
  animate: { y: [0, -10, 0] },
  transition: { repeat: Infinity, duration: 3 },
};

const FloatingCrispPackets: React.FC = () => {
  return (
    <>
      {/* Left Side Packets */}
      {leftPositions.map(({ top, left, image }, index) => (
        <motion.img
          key={`left-${index}`}
          src={image}
          alt="Crisp"
          className="absolute w-16 sm:w-20 md:w-24"
          style={{ top, left }}
          {...floatingAnimation}
        />
      ))}

      {/* Right Side Packets */}
      {rightPositions.map(({ top, right, image }, index) => (
        <motion.img
          key={`right-${index}`}
          src={image}
          alt="Crisp"
          className="absolute w-16 sm:w-20 md:w-24"
          style={{ top, right }}
          {...floatingAnimation}
        />
      ))}
    </>
  );
};

export default FloatingCrispPackets;

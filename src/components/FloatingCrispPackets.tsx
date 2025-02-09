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

const FloatingCrispPackets: React.FC = () => {
  return (
    <>

    {/* Left Hand Side */}
      <motion.img
        src={CheeseAndOnion}
        alt="Crisp"
        className="absolute top-20 left-20 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={ReadySalted}
        alt="Crisp"
        className="absolute top-40 left-90 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={Barbeque}
        alt="Crisp"
        className="absolute top-60 left-55 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={PrawnCocktail}
        alt="Crisp"
        className="absolute top-80 left-20 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={SweetChilli}
        alt="Crisp"
        className="absolute top-100 left-90 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={SourCreamAndOnion}
        alt="Crisp"
        className="absolute top-120 left-55 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
       <motion.img
        src={SaltAndVinegar}
        alt="Crisp"
        className="absolute top-140 left-20 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={BeefAndOnion}
        alt="Crisp"
        className="absolute top-160 left-90 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />

      {/* Right Hand Side */}
      <motion.img
        src={SaltAndVinegar}
        alt="Crisp"
        className="absolute top-20 right-20 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={SourCreamAndOnion}
        alt="Crisp"
        className="absolute top-40 right-90 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={BeefAndOnion}
        alt="Crisp"
        className="absolute top-60 right-55 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={PrawnCocktail}
        alt="Crisp"
        className="absolute top-80 right-20 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={ReadySalted}
        alt="Crisp"
        className="absolute top-100 right-90 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={SweetChilli}
        alt="Crisp"
        className="absolute top-120 right-55 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={CheeseAndOnion}
        alt="Crisp"
        className="absolute top-140 right-20 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={Barbeque}
        alt="Crisp"
        className="absolute top-160 right-90 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
    </>
  );
};

export default FloatingCrispPackets;

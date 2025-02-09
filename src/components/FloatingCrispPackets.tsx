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
      <motion.img
        src={CheeseAndOnion}
        alt="Crisp"
        className="absolute top-10 left-5 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={SaltAndVinegar}
        alt="Crisp"
        className="absolute top-10 right-5 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={Barbeque}
        alt="Crisp"
        className="absolute top-40 left-10 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={BeefAndOnion}
        alt="Crisp"
        className="absolute top-40 right-10 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={PrawnCocktail}
        alt="Crisp"
        className="absolute top-70 left-5 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={ReadySalted}
        alt="Crisp"
        className="absolute top-70 right-5 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
      <motion.img
        src={SourCreamAndOnion}
        alt="Crisp"
        className="absolute top-100 left-10 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />
      <motion.img
        src={SweetChilli}
        alt="Crisp"
        className="absolute top-100 right-10 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3.5 }}
      />
    </>
  );
};

export default FloatingCrispPackets;

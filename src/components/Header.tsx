import { motion } from "framer-motion";
import crisp1 from "../assets/crisp1.png";
import crisp2 from "../assets/crisp2.png";

const Header = () => {
  return (
    <div className="relative h-[300px] flex flex-col items-center justify-center bg-yellow-400 text-center">
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl font-bold text-white"
      >
        Welcome to LoveCrisps!
      </motion.h1>

      {/* Floating Crisp Packets */}
      <motion.img
        src={crisp1}
        alt="Crisp"
        className="absolute top-10 left-5 w-16"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 3 }}
      />

      <motion.img
        src={crisp2}
        alt="Crisp"
        className="absolute top-5 right-5 w-20"
        animate={{ y: [0, -10, 0] }}
        transition={{ repeat: Infinity, duration: 4 }}
      />
    </div>
  );
};

export default Header;

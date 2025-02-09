import Barbeque from "../assets/crisps/Barbeque.png";
import BeefAndOnion from "../assets/crisps/beef-and-onion.png";
import CheeseAndOnion from "../assets/crisps/cheese-and-onion.png";
import PrawnCocktail from "../assets/crisps/prawn-cocktail.png";
import ReadySalted from "../assets/crisps/ready-salted.png";
import SaltAndVinegar from "../assets/crisps/salt-and-vinegar.png";
import SourCreamAndOnion from "../assets/crisps/sour-cream-and-onion.png";
import SweetChilli from "../assets/crisps/sweet-chilli.png";

const CrispGallery = () => {
  return (
    <div className="grid grid-cols-4 gap-4">
      <img src={Barbeque} alt="Barbeque" />
      <img src={BeefAndOnion} alt="Beef and Onion" />
      <img src={CheeseAndOnion} alt="Cheese and Onion" />
      <img src={PrawnCocktail} alt="Prawn Cocktail" />
      <img src={ReadySalted} alt="Ready Salted" />
      <img src={SaltAndVinegar} alt="Salt and Vinegar" />
      <img src={SourCreamAndOnion} alt="Sour Cream and Onion" />
      <img src={SweetChilli} alt="Sweet Chilli" />
    </div>
  );
};

export default CrispGallery;

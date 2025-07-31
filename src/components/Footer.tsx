import { MdHome } from "react-icons/md";
import { FaRegCompass } from "react-icons/fa";
import { PiShoppingCartSimpleDuotone } from "react-icons/pi";
import { FaRegBell } from "react-icons/fa6";
import { MdPersonOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div>
      <div className="flex gap-10 md:gap-16 justify-center fixed bottom-0 bg-white w-full left-0 py-2 z-10">
        <MdHome className="text-3xl md:text-4xl" />
        <FaRegCompass className="text-3xl  md:text-4xl" />
        <PiShoppingCartSimpleDuotone className="text-3xl  md:text-4xl" />
        <FaRegBell className="text-3xl  md:text-4xl" />
        <MdPersonOutline className="text-3xl  md:text-4xl" />
      </div>
    </div>
  );
};

export default Footer;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import VariantButton from "./VariantButton";
import Logo from "../assets/Logo.webp";
import Icon from "./Icon";

const Navbar = () => {
  const [navOpen, setNavOpen] = useState(true);
  const handleNavToggle = () => {
    setNavOpen((prev) => !prev);
    console.log(navOpen);
  };

  return (
    <div className="h-[68px] w-full px-2 flex justify-between bg-card-bg items-center">
      <div className="flex items-center gap-2">
        <button
          className="hover:cursor-pointer hover:bg-gray-400 p-2 rounded-xl block lg:hidden"
          onClick={handleNavToggle}
        >
          <Icon name="menu" />
        </button>
        <div className="h-[68px] w-[68px] flex justify-center items-center lg:ml-4">
          <img src={Logo} alt="MitMit" />
        </div>
      </div>
      <div className="flex items-center gap-8 px-8">
        <div className="hidden lg:block">
          <ul className="flex space-x-4 text-[18px] font-semibold items-center gap-4">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                Features
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                How it Works
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About
              </Link>
            </li>
          </ul>
        </div>

        <VariantButton
          onClick={null}
          variant="green"
          size="large"
          text="Sign Up"
        />
      </div>
    </div>
  );
};

export default Navbar;

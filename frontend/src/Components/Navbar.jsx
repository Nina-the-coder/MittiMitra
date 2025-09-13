import React from "react";
import { Link } from "react-router-dom";
import VariantButton from "./VariantButton";
import Logo from "../assets/Logo.webP"

const Navbar = () => {
  return (
    <div className="h-[68px] w-full px-8 flex justify-between bg-card-bg items-center">
      <div className="h-[68px] w-[68px] flex justify-center items-center">
        <img src={Logo} alt="MitMit" />
      </div>
      <div>
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
          <VariantButton
            onClick={null}
            variant="green"
            size="large"
            text="Sign Up"
          />
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

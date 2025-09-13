import React from "react";
import Navbar from "../Components/Navbar";
import tree from "../assets/tree.webP";
import mitmit from "../assets/mitmit.webP";
import VariantButton from "../Components/VariantButton";

const Home = () => {
  return (
    <div>
      <Navbar />

      {/* cta section */}
      <div className="flex h-[600px] w-full mt-8">
        <div className="h-[600px] w-[600px] relative right-[250px]">
          <img src={tree} alt="" />
        </div>
        <div className="flex flex-col h-full justify-center mr-8" >
            <div className="text-[64px] font-bold">Namaste!</div>
            <div className="text-[36px] font-semibold">I am <span className="text-green tracking-wider">MittiMitra</span></div>
            <div className="text-[36px] font-semmibold mb-8">Your AI Farming Buddy</div>
            <div><VariantButton variant="green" size="extra-large" text="Ask a Question" icon="arrow-right" /></div>
        </div>
        <div className="h-[450px] w-[450px]">
          <img src={mitmit} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;

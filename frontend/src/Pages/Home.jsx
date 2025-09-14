import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import tree from "../assets/tree.webp";
import mitmit from "../assets/mitmit.webp";
import VariantButton from "../Components/VariantButton";
import FeatureCard from "../Components/cards/FeatureCard";

const Home = () => {
  const [finishedFirst, setFinishedFirst] = useState(false);
  const [finishedSecond, setFinishedSecond] = useState(false);

  useEffect(() => {
    const timer1 = setTimeout(() => setFinishedFirst(true), 4000); // 4s typing
    const timer2 = setTimeout(() => setFinishedSecond(true), 8000); // another 4s for second line
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <div>
      <Navbar />

      {/* CTA Section */}
      <div className="flex h-[600px] w-full items-center mt-8">
        {/* Tree Background Image */}
        <div className="h-[600px] w-[600px] relative right-[250px]">
          <img src={tree} alt="" />
        </div>

        {/* Text Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col h-fit border rounded-2xl p-16 justify-center mr-8"
        >
          <div
            className={`text-[64px] font-bold typewriter-text ${
              finishedFirst ? "finished" : ""
            }`}
          >
            Namaste!
          </div>
          <div
            className={`text-[36px] font-semibold typewriter-text ${
              finishedSecond ? "finished" : ""
            }`}
            style={{ animationDelay: "3s" }}
          >
            I am <span className="text-green tracking-wider">MittiMitra</span>
          </div>
          <div className="text-[36px] font-semmibold mb-8">
            Your AI Farming Buddy
          </div>
          <div>
            <VariantButton
              variant="green"
              size="extra-large"
              text="Ask a Question"
              icon="arrow-right"
            />
          </div>
        </motion.div>

        {/* MittiMitra Image with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="h-[400px] w-[400px]"
        >
          <img src={mitmit} alt="MittiMitra" />
        </motion.div>
      </div>

      {/* Features */}
      <div className="overflow-hidden">
        <div className="w-[2000px] h-[1000px] bg-green relative right-[100px] top-[150px] -rotate-10"></div>
        <div className="relative bottom-[700px] h-[700px] flex flex-col items-center p-8 pl-20 w-full">
          <div className="mt-8 text-[36px] font-bold">Why MittiMitra ?</div>
          <div className="text-[32px] font-medium mb-12">
            Helping farmers make smarter choices everyday.
          </div>
          <FeatureCard />
        </div>
      </div>

      {/* how it works */}
      <div className="relative bottom-[300px] flex flex-col justify-center items-center">
        <div className="text-[36px] font-bold ">How it Works</div>
        <div className="flex mt-10 items-center justify-center w-full">
          {/* step 1 */}
          <div className="w-1/4">
            <div className="flex items-center">
              <div className="h-[60px] w-[60px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                1
              </div>
              <div className="border-2 w-[90%] h-0 border-green"></div>
            </div>
            <div className="text-[24px]">Enter Your Soil and Location</div>
          </div>

          {/* step 2 */}
          <div className="w-1/4">
            <div className="flex items-center">
              <div className="h-[60px] w-[60px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                2
              </div>
              <div className="border-2 w-[90%] h-0 border-green"></div>
            </div>
            <div className="text-[24px]">Get Crop Suggestions</div>
          </div>

          {/* step 3 */}
          <div className="w-1/4">
            <div className="flex items-center">
              <div className="h-[60px] w-[60px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                3
              </div>
              <div className="border-2 w-[90%] h-0 border-green"></div>
            </div>
            <div className="text-[24px]">Maximize Profit</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

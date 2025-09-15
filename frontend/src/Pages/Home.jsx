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
    <div className="w-full">
      <Navbar />

      {/* CTA Section */}
      <div className="flex flex-col-reverse md:flex-row md:justify-evenly md:my-10 h-fit w-full items-center lg:mt-8">
        {/* Tree Background Image */}
        <div className="h-0 w-0 xl:h-[500px] xl:w-[500px] relative right-[250px]">
          <img src={tree} alt="tree illustration" />
        </div>

        {/* Text Content with Animation */}
        <motion.div
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col h-fit w-[320px] sm:w-auto border rounded-2xl p-8 sm:p-10 lg:p-16 justify-center lg:m-10"
        >
          <div
            className={`text-[32px] sm:text-[48px] lg:text-[64px] font-bold typewriter-text ${
              finishedFirst ? "finished" : ""
            }`}
          >
            Namaste!
          </div>
          <div
            className={`text-[24px] sm:text-[30px] lg:text-[36px] font-semibold typewriter-text ${
              finishedSecond ? "finished" : ""
            }`}
            style={{ animationDelay: "3s" }}
          >
            I am <span className="text-green tracking-wider">MittiMitra</span>
          </div>
          <div className="text-[24px] sm:text-[30px] lg:text-[36px] font-semmibold mb-4 lg:mb-8">
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
          className=" h-[180px] sm:h-[300px] lg:h-[400px] w-auto lg:mx-16 lg:mr-24 my-10 flex items-center justify-center"
        >
          <img src={mitmit} alt="MittiMitra" className="h-full w-full" />
        </motion.div>
      </div>

      {/* Features */}
      <div className="w-full mt-10 lg:mt-20 overflow-clip">
        {/* upper triangle */}
        <div
          class="w-0 h-0 
            border-l-[100vw] border-l-transparent
            border-r-0 border-r-transparent
            border-b-[5rem] 
            lg:border-b-[10rem] 
            border-green"
        ></div>

        {/* Your content */}
        <div className="flex flex-col py-16 lg:py-20 items-center bg-green">
          <h2 className="text-[28px] lg:text-[36px] font-bold text-center">
            Why MittiMitra?
          </h2>
          <p className="text-[24px] lg:text-[32px] font-medium mb-16 text-center">
            Helping farmers make smarter choices everyday.
          </p>
          <FeatureCard />
        </div>

        {/* lower triangle */}
        <div
          class="w-0 h-0 
            border-r-[100vw] border-l-transparent
            border-l-0 border-r-transparent
            border-t-[5rem] 
            lg:border-t-[10rem] 
            border-green"
        ></div>
      </div>

      {/* how it works */}
      <div className="flex flex-col justify-center items-center w-full mb-100">
        <div className="my-10 text-[36px] font-bold ">How it Works</div>
        <div className="items-center justify-center w-full hidden md:flex">

          {/* step 1 */}
          <div className="w-1/4">
            <div className="flex items-center">
              <div className="h-[60px] w-[60px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                1
              </div>
              <div className="border-2 w-[90%] h-0 border-green"></div>
            </div>
            <div className="text-[24px] min-h-[100px] pr-8 mt-4">
              Enter Your Soil and Location
            </div>
          </div>

          {/* step 2 */}
          <div className="w-1/4">
            <div className="flex items-center">
              <div className="h-[60px] w-[60px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                2
              </div>
              <div className="border-2 w-[90%] h-0 border-green"></div>
            </div>
            <div className="text-[24px] min-h-[100px]  pr-8 mt-4">
              Get Crop Suggestions
            </div>
          </div>

          {/* step 3 */}
          <div className="w-1/4">
            <div className="flex items-center">
              <div className="h-[60px] w-[60px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                3
              </div>
              <div className="border-2 w-[90%] h-0 border-green"></div>
            </div>
            <div className="text-[24px] min-h-[100px]  pr-8 mt-4">
              Maximize Profit
            </div>
          </div>
        </div>

        {/* for smaller screens */}
        <div className="mx-8 md:hidden">
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="h-[50px] w-[50px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                1
              </div>
              <div className="border-2 w-0 h-[100px] border-green"></div>
            </div>
            <div className="text-[20px] min-h-[100px] mt-2 ml-4">
              Enter Your Soil and Location
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="h-[50px] w-[50px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                2
              </div>
              <div className="border-2 w-0 h-[100px] border-green"></div>
            </div>
            <div className="text-[20px] min-h-[100px]  mt-2 ml-4">
              Get Crop Suggestions
            </div>
          </div>
          <div className="flex">
            <div className="flex flex-col items-center">
              <div className="h-[50px] w-[50px] bg-gray-300 rounded-full border text-[32px] flex justify-center items-center ">
                3
              </div>
            </div>
            <div className="text-[20px] min-h-[100px] mt-2 ml-4">
              Maximize Profit
            </div>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Home;

import React from "react";
import plant from "../../assets/plant.webp";
import marketinsights from "../../assets/marketinsights.webp";
import chatbot from "../../assets/chatbot.webp";

const FeatureCard = () => {
  const items = [
    {
      image: plant,
      title: "Crop Recommendations",
      description: "Get the Best Crop for your Soil & Weather",
    },
    {
      image: chatbot,
      title: "Smart ChatBot",
      description: "Your 24/7 AI Farming buddy - always ready with answers.",
    },
    {
      image: marketinsights,
      title: "Market Insights",
      description:
        "Stay updated with real time Mandi prices to get the best deals",
    },
  ];
  return (
    <div className="flex gap-8 lg:gap-16 w-full flex-wrap lg:flex-nowrap lg:w-fit items-center justify-center">

      {items.map((item, index) => (
        <div key={index} className="flex flex-col justify-evenly w-[300px] lg:w-[348px] h-[360px] lg:h-[420px] rounded-2xl bg-white">
          <div className="h-[150px] lg:h-[200px] mt-4 flex justify-center items-center p-0">
            <img className="h-full object-cover" src={item.image} alt={item.title} />
          </div>
          <div className = "p-8">
            <div className="text-[20px] lg:text-[24px] my-2 font-bold text-center">
              {item.title}
            </div>
            <div className="text-[18px] lg:text-[20px] text-center">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;

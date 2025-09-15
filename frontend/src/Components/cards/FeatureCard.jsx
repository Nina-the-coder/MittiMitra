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
    <div className="flex gap-16 w-full flex-wrap lg:flex-nowrap lg:w-fit">
      {items.map((item, index) => (
        <div key={index} className="w-[348px] h-[420px] rounded-2xl bg-white">
          <div className="h-[200px] mt-4 flex justify-center items-center p-0">
            <img className="h-full object-cover" src={item.image} alt={item.title} />
          </div>
          <div className = "p-8">
            <div className="text-[24px] my-2 font-bold text-center">
              {item.title}
            </div>
            <div className="text-[20px] text-center">{item.description}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;

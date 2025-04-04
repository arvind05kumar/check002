import { Wifi, Coffee, Gift, Gamepad, Award, Smile } from "lucide-react";
import { motion } from "framer-motion";

const WhatWeOffer = () => {
  const offerings = [
    { icon: <Gift className="w-6 h-6 text-white" />, title: "Swag & Goodies", description: "Amazing swag and prizes for winners" },
    { icon: <Award className="w-6 h-6 text-white" />, title: "Certificates", description: "Get certified for your participation" },
    { icon: <Smile className="w-6 h-6 text-white" />, title: "Networking", description: "Connect with like-minded developers" },
    { icon: <Coffee className="w-6 h-6 text-white" />, title: "Food & Refreshments", description: "Enjoy complimentary snacks and beverages" },
    { icon: <Gamepad className="w-6 h-6 text-white" />, title: "Fun & Mini Games", description: "Fun challenges & games to keep you engaged" },
    { icon: <Wifi className="w-6 h-6 text-white" />, title: "High-Speed WiFi", description: "Seamless internet access for all participants" }
  ];

  return (
    <section className="py-16 animate-fade-in" id="offerings">
      <h2 className="text-4xl font-bold font-orbitron text-white mb-12 text-center">What We Offer</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offerings.slice(0, 3).map((offering, index) => (
          <motion.div
            key={index}
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5,  }}
            viewport={{ once: true }}
            className="group relative"
          >
            {/* Entire div hover effect */}
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-[#4a1f1a] via-[#151310] to-[#000000] p-4 rounded-lg backdrop-blur-sm  border-primary/20 group-hover:border-primary/100 group-hover:shadow-xl group-hover:scale-105 group-hover:translate-y-2 transition-all duration-500"
            >
              <div className="mb-4 transform group-hover:scale-100 transition-transform duration-300">
                {offering.icon}
              </div>
              <h3 className="text-xl text-white font-semibold mb-2 transition-all duration-300">{offering.title}</h3>
              <p className="text-gray-400 transition-all duration-300">{offering.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {offerings.slice(3).map((offering, index) => (
          <motion.div
            key={index + 3}  
            initial={{ y: -50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5,}}
            viewport={{ once: true }}
            className="group relative"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-gradient-to-br from-[#4a1f1a] via-[#151310] to-[#000000] p-4 rounded-lg backdrop-blur-sm  border-primary/20 group-hover:border-primary/100 group-hover:shadow-xl group-hover:scale-105 group-hover:translate-y-2 transition-all duration-300"
            >
              {/* Icon container with hover effect */}
              <div className="mb-4 transform group-hover:scale-100 transition-transform duration-300">
                {offering.icon}
              </div>
              <h3 className="text-xl text-white font-semibold mb-2 transition-all duration-300">{offering.title}</h3>
              <p className="text-gray-400 transition-all duration-300">{offering.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default WhatWeOffer;



import React from "react";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import { horses } from "../data/horsesData";

const HeroHorses: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-3">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-6xl">
        {horses.map((horse, index) => (
          <motion.div
            key={index}
            animate={{ opacity: 1, y: 0 }}
            className={`relative overflow-hidden rounded-3xl shadow-lg bg-white/10 backdrop-blur-sm 
              transition-transform duration-300 hover:scale-105`}
            initial={{ opacity: 0, y: 50 }}
            whileHover={{ scale: 1.09 }}
          >
            <Image
              alt={horse.name}
              className="w-full h-80 object-cover rounded-t-3xl"
              height={320}
              radius="none"
              shadow="lg"
              src={horse.image}
              width={500}
            />
            <div className="p-6">
              <h2 className="text-2xl font-bold ">{horse.name}</h2>
              <p className="text-sm  italic">{horse.breed}</p>
              <p className="text-md mt-2">{horse.description}</p>
              <Link
                className="mt-4 inline-block px-6 py-3 bg-[#bb9557] text-white text-md font-semibold rounded-lg hover:bg-[#9b7d48] transition duration-300"
                to={`/horse/${horse.name}`}
              >
                View More
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroHorses;

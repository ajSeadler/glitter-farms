// src/components/HeroHorses.tsx
import React from "react";
import { Image } from "@heroui/image";
import { Button } from "@heroui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation

import { horses } from "../data/horsesData"; // Import the horses data

const HeroHorses: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <div className="grid grid-cols-1 gap-8 w-full max-w-xl">
        {horses.map((horse, index) => (
          <motion.div
            key={index}
            className="shadow-xl rounded-2xl overflow-hidden transition-transform"
            whileHover={{ scale: 1.05 }}
          >
            <Image
              isZoomed
              alt={horse.name}
              className="w-full h-96 object-cover"
              height={400}
              radius="none"
              shadow="lg"
              src={horse.image}
              width={600}
            />
            <div className="p-6">
              <h2 className="text-3xl font-semibold">{horse.name}</h2>
              <p className="text-md mb-2">{horse.breed}</p>
              <p className="text-lg">{horse.description}</p>
              <Link className="mt-6 w-full" to={`/horse/${horse.name}`}>
                <Button className="w-full bg-blue-500 text-white text-lg py-3 rounded-xl hover:bg-blue-600">
                  View More
                </Button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default HeroHorses;

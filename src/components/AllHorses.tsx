import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

import { horses } from "../data/horsesData";
import { Image } from "@heroui/image";

const AllHorses: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6">
      <div className="w-full">
        <h1 className="text-4xl font-bold mb-8">Horses</h1>
        <ul className="space-y-8">
          {horses.map((horse) => (
            <motion.li
              key={horse.name}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center justify-between p-6 bg-transparent backdrop-blur-md rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center">
                <Image
                  alt={horse.name}
                  className="w-28 h-28 object-cover rounded-full mr-6"
                  src={horse.image}
                />
                <div>
                  <h3 className="text-xl font-semibold">{horse.name}</h3>
                  <p className="text-sm italic mt-1">{horse.breed}</p>
                  <p className="text-sm mt-2">
                    Sired by{" "}
                    <span className="text-yellow-600">
                      {horse.sire || "Unknown"}
                    </span>{" "}
                    out of{" "}
                    <span className="text-yellow-600">
                      {horse.dam || "Unknown"}
                    </span>
                  </p>
                </div>
              </div>
              <Link
                className="text-sm font-medium text-[#bb9557] hover:text-[#9b7d48] transition duration-300"
                to={`/horse/${horse.name}`}
              >
                View Details
              </Link>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AllHorses;

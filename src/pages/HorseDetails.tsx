import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Image } from "@heroui/image";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

import { horses } from "../data/horsesData";

import DefaultLayout from "@/layouts/default";

const HorseDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const navigate = useNavigate();
  const horse = horses.find((horse) => horse.name === name);

  if (!horse) {
    return (
      <div className="text-center text-lg font-semibold mt-10">
        Horse not found
      </div>
    );
  }

  return (
    <DefaultLayout>
      {/* Back Button */}

      {/* HERO SECTION */}
      <div className="relative w-full flex items-center justify-center overflow-hidden">
        <motion.div
          animate={{ opacity: 1 }}
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          transition={{ duration: 1 }}
        />
        <Image
          alt={horse.name}
          className="absolute inset-0 w-full h-full object-cover scale-110 opacity-60 blur-sm"
          src={horse.image}
        />
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="relative z-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold uppercase tracking-wider drop-shadow-lg">
            {horse.name}
          </h1>
          <p className="text-xl md:text-2xl">
            {horse.breed} | {horse.sex}
          </p>
        </motion.div>
      </div>

      {/* HORSE DETAILS SECTION */}
      <div className=" mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="w-full rounded-lg"
            initial={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              alt={horse.name}
              className="w-full h-full object-cover rounded-lg"
              radius="lg"
              shadow="lg"
              src={horse.image}
            />
          </motion.div>

          {/* Horse Details */}
          <motion.div
            animate={{ opacity: 1, x: 0 }}
            className="rounded-2xl backdrop-blur-sm bg-transparent shadow-lg p-6"
            initial={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.8 }}
          >
            {/* Horse Details */}
            <div className="space-y-4 text-lg">
              {horse.sire && (
                <p className="flex justify-between border-b border-gray-500 pb-2 px-3">
                  <span>Sire</span>
                  <span className="font-semibold">{horse.sire}</span>
                </p>
              )}
              {horse.dam && (
                <p className="flex justify-between border-b border-gray-500 pb-2 px-3">
                  <span>Dam</span>
                  <span className="font-semibold">{horse.dam}</span>
                </p>
              )}

              {horse.age && (
                <p className="flex justify-between border-b border-gray-500 pb-2 px-3">
                  <span>Age</span>
                  <span className="font-semibold">{horse.age}</span>
                </p>
              )}
              {horse.color && (
                <p className="flex justify-between border-b border-gray-500 pb-2 px-3">
                  <span>Color</span>
                  <span className="font-semibold">{horse.color}</span>
                </p>
              )}
            </div>

            {/* Accomplishments Section */}
            {horse.accomplishments && horse.accomplishments.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2">
                  Accomplishments
                </h3>
                <ul className="mt-3 space-y-2">
                  {horse.accomplishments.map((accomplishment, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 rounded-md bg-white/10 border border-gray-500 backdrop-blur-md hover:bg-blue-500/20 hover:border-blue-500/50 hover:shadow-lg transition-all duration-300"
                    >
                      {accomplishment}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Winnings Section */}
            {horse.winnings && horse.winnings.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2">
                  Winnings
                </h3>
                <ul className="mt-3 space-y-2">
                  {horse.winnings.map((win, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 rounded-md bg-white/10 border border-gray-500 backdrop-blur-md hover:bg-green-500/20 hover:border-green-500/50 hover:shadow-lg transition-all duration-300"
                    >
                      {win}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Championships Section */}
            {horse.championships && horse.championships.length > 0 && (
              <div className="mt-6">
                <h3 className="text-xl font-semibold border-b border-gray-500 pb-2">
                  Championships
                </h3>
                <ul className="mt-3 space-y-2">
                  {horse.championships.map((championship, index) => (
                    <li
                      key={index}
                      className="px-4 py-2 rounded-md bg-white/10 border border-gray-500 backdrop-blur-md hover:bg-red-500/20 hover:border-red-500/50 hover:shadow-lg transition-all duration-300"
                    >
                      {championship}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>
        </div>

        {/* Horse Description */}
        <motion.p
          animate={{ opacity: 1, y: 0 }}
          className="text-lg md:text-xl leading-relaxed mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          transition={{ duration: 0.8 }}
        >
          {horse.description}
        </motion.p>
      </div>
      <div className="max-w-7xl mx-auto py-4">
        <button
          className="flex align-center justify-center items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft /> Back
        </button>
      </div>
    </DefaultLayout>
  );
};

export default HorseDetails;

// src/pages/HorseDetails.tsx
import React from "react";
import { useParams } from "react-router-dom";
import { Image } from "@heroui/image";

import { horses } from "../data/horsesData"; // Import the horses data

import DefaultLayout from "@/layouts/default";

const HorseDetails: React.FC = () => {
  const { name } = useParams<{ name: string }>(); // This should match /horse/:name
  const horse = horses.find((horse) => horse.name === name); // Find the horse by name

  if (!horse) {
    return <div>Horse not found</div>; // If no horse is found, show a message
  }

  return (
    <DefaultLayout>
      <div className="backdrop-blur-md ">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-semibold">{horse.name}</h1>
          <p className="text-xl mb-4">{horse.breed}</p>
          <Image
            isZoomed
            alt={horse.name}
            className="w-full h-full object-cover"
            height={600}
            radius="lg"
            shadow="lg"
            src={horse.image}
            width={900}
          />
          <p className="text-lg mt-4">{horse.description}</p>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default HorseDetails;

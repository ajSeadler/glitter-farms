import { useRef } from "react";
import { button as buttonStyles } from "@heroui/theme";
import { Button } from "@heroui/button";

import DefaultLayout from "@/layouts/default";
import HeroHorses from "@/components/HeroHorses";

export default function IndexPage() {
  // Create a reference to the HeroHorses section
  const heroHorsesRef = useRef<HTMLDivElement>(null);

  // Function to scroll to the HeroHorses section
  const handleScroll = () => {
    if (heroHorsesRef.current) {
      heroHorsesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-20 md:py-20">
        <div className="h-screen">
          {/* Image */}
          <div className="flex flex-col items-center justify-center gap-0">
            <img
              alt="Glitter Farms Logo"
              className="w-full sm:w-full md:w-1/2" // Adjust sizes for mobile, tablet, and desktop
              src="/pictures/glitter farms round logo transparent-17.PNG"
            />
            <div className="">
              <Button
                className={
                  buttonStyles({
                    radius: "full",
                    variant: "shadow",
                  }) + " text-lg py-6 px-9 bg-[#bb9557] text-white"
                }
                onClick={handleScroll} // Use the handleScroll function on button click
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>

        {/* HeroHorses Section with ref */}
        <div ref={heroHorsesRef} id="hero-horses">
          <HeroHorses />
        </div>
      </section>
    </DefaultLayout>
  );
}

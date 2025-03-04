import { Link } from "@heroui/link";
import { button as buttonStyles } from "@heroui/theme";

import DefaultLayout from "@/layouts/default";
import AboutUs from "@/components/AboutUs";
import HeroHorses from "@/components/HeroHorses";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10">
        <div className="h-screen">
          {/* Image */}
          <div className="flex flex-col items-center justify-center gap-0">
            <img
              alt="Glitter Farms Logo"
              className="w-full sm:w-full md:w-1/2" // Adjust sizes for mobile, tablet, and desktop
              src="/pictures/glitter farms round logo transparent-17.PNG"
            />
            <div className="">
              <Link
                isExternal
                className={
                  buttonStyles({
                    radius: "full",
                    variant: "shadow",
                  }) + " text-lg py-6 px-9"
                } // Added text size and padding to make the button larger
                href="#learn-more" // Replace with the actual link
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        {/* <AboutUs /> */}
        <HeroHorses />

        {/* Learn More Button */}
      </section>
    </DefaultLayout>
  );
}

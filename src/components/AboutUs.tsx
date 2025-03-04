import { Button } from "@heroui/button";
const AboutUs = () => {
  return (
    <section className="py-16 px-4 sm:px-8 lg:px-16 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            About Us
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-gray-600 dark:text-gray-300">
            Discover our story, values, and vision for the future.
          </p>
        </div>

        {/* Our Story Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Story
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            posuere erat a ante. Donec ullamcorper nulla non metus auctor
            fringilla. Curabitur blandit tempus porttitor. Nulla vitae elit
            libero, a pharetra augue. Vivamus sagittis lacus vel augue laoreet
            rutrum faucibus dolor auctor.
          </p>
        </div>

        {/* Our Values Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Our Values
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Integrity",
                description:
                  "We uphold the highest standards of integrity in all of our actions.",
              },
              {
                title: "Innovation",
                description:
                  "We constantly pursue new ideas to improve our services.",
              },
              {
                title: "Excellence",
                description: "We strive for excellence in everything we do.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gray-300 dark:bg-gray-700 rounded-full mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {value.title}
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Team Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Meet the Horses
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                name: "Horse 1",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                name: "Horse 2",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
              {
                name: "Horse 3",
                bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
              },
            ].map((horse, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 sm:w-40 sm:h-40 bg-gray-300 dark:bg-gray-700 rounded-full mb-4" />
                <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {horse.name}
                </h4>
                <p className="text-lg text-gray-600 dark:text-gray-300">
                  {horse.bio}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Our Vision Section */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-4">
            Our Vision
          </h3>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
            odio. Praesent libero. Sed cursus ante dapibus diam. Duis sagittis
            ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta.
          </p>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <h3 className="text-3xl font-semibold text-gray-900 dark:text-white mb-6">
            Contact{" "}
          </h3>
          <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam
            iste ipsum quas temporibus quod ullam vel, est recusandae iure
            voluptate a, et consequatur iusto voluptates, laudantium nemo
            praesentium error repellendus.{" "}
          </p>
          <Button className="px-6 py-3 text-lg font-semibold   rounded-lg shadow-lg  focus:outline-none focus:ring-4 focus:ring-blue-300">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

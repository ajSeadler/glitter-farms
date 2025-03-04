import { useEffect, useMemo, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import {
  type Container,
  type ISourceOptions,
  MoveDirection,
  OutMode,
} from "@tsparticles/engine";
import { loadSlim } from "@tsparticles/slim"; // Slim load for lightweight particles

const ParticlesBackground = () => {
  const [init, setInit] = useState(false);

  // Initialize particles engine on mount
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine); // Load slim version of the engine
    }).then(() => {
      setInit(true);
    });
  }, []);

  // Particle loaded callback function
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const particlesLoaded = async (_container?: Container): Promise<void> => {};

  // Particle options definition
  const options: ISourceOptions = useMemo(
    () => ({
      background: {
        color: {
          value: "transparent", // No background color, particles will be on a transparent canvas
        },
      },
      fpsLimit: 60, // Adjust the FPS limit
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push", // Push new particles on click
          },
          onHover: {
            enable: true,
            mode: "repulse", // Repulse particles when hovered
          },
        },
        modes: {
          push: {
            quantity: 4,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#bb9557", // Gold color for the glitter particles
        },
        move: {
          direction: MoveDirection.bottom, // Move particles downward
          enable: true,
          outModes: {
            default: OutMode.out, // Remove particles when they go out of bounds
          },
          random: false,
          speed: 1, // Adjust speed of falling particles
          straight: true,
        },
        number: {
          density: {
            enable: true,
          },
          value: 80, // Adjust number of particles
        },
        opacity: {
          value: 0.8, // Particles should have some opacity for a glitter effect
        },
        shape: {
          type: "polygon", // Use polygon shape for diamond effect
          polygon: {
            sides: 2, // 4 sides for a diamond shape
            inset: 1, // Adjust this value for the desired sharpness of the diamond
          },
        },
        size: {
          value: { min: 2, max: 5 }, // Glitter particles size range
        },
      },
      detectRetina: true,
    }),
    []
  );

  // Render particles once initialized
  if (init) {
    return (
      <Particles
        id="tsparticles"
        options={options}
        particlesLoaded={particlesLoaded}
      />
    );
  }

  // Render nothing until particles are initialized
  return <></>;
};

export default ParticlesBackground;

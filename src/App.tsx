// src/App.tsx
import { Route, Routes } from "react-router-dom";

import ParticlesBackground from "./components/ParticlesBackground";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";
import HorseDetails from "@/pages/HorseDetails"; // Import the HorseDetails page

function App() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ParticlesBackground />
      <div style={{ position: "relative", zIndex: 1 }}>
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<DocsPage />} path="/docs" />
          <Route element={<PricingPage />} path="/pricing" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<AboutPage />} path="/about" />
          <Route element={<HorseDetails />} path="/horse/:name" />{" "}
          {/* Dynamic route for horse details */}
        </Routes>
      </div>
    </div>
  );
}

export default App;

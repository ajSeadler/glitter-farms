import { Route, Routes } from "react-router-dom";

import ParticlesBackground from "./components/ParticlesBackground";

import IndexPage from "@/pages/index";
import DocsPage from "@/pages/docs";
import PricingPage from "@/pages/pricing";
import BlogPage from "@/pages/blog";
import AboutPage from "@/pages/about";

function App() {
  return (
    <div style={{ position: "relative", height: "100vh" }}>
      <ParticlesBackground /> {/* Add the particles background component */}
      <div style={{ position: "relative", zIndex: 1 }}>
        {/* Your actual page content */}
        <Routes>
          <Route element={<IndexPage />} path="/" />
          <Route element={<DocsPage />} path="/docs" />
          <Route element={<PricingPage />} path="/pricing" />
          <Route element={<BlogPage />} path="/blog" />
          <Route element={<AboutPage />} path="/about" />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import AchievementsSection from "./components/AchievementsSection";
import { Toaster } from "react-hot-toast";
import "react-notion/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";

import { use } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <Toaster position="top-center" reverseOrder={false} />
      <Navbar />
      <div className="container mt-24 mx-auto px-12 py-4">
        <HeroSection />
        <AchievementsSection />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

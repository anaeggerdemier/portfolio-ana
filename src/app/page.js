import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";
import KeyMetricBanner from "./components/KeyMetricBanner";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#f4f4f4]">
      <Navbar />
      <div className="container mx-auto mt-24 px-12 py-4">
        <HeroSection />
        <KeyMetricBanner />
        <AboutSection />
        <ProjectsSection />
        <EmailSection />
      </div>
      <Footer />
    </main>
  );
}

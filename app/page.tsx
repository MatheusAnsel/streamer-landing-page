import LoadingScreen from "@/components/ui/LoadingScreen";
import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import Stats from "@/components/sections/Stats";
import About from "@/components/sections/About";
import Reactions from "@/components/sections/Reactions";
import ContentGrid from "@/components/sections/ContentGrid";
import Clips from "@/components/sections/Clips";
import Schedule from "@/components/sections/Schedule";
import Community from "@/components/sections/Community";
import Support from "@/components/sections/Support";
import Footer from "@/components/sections/Footer";

export default function Home() {
  return (
    <>
      <LoadingScreen />
      <Navbar />
      <main id="main-content">
        <Hero />
        <Stats />
        <About />
        <Reactions />
        <ContentGrid />
        <Clips />
        <Schedule />
        <Community />
        <Support />
      </main>
      <Footer />
    </>
  );
}

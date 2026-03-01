import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import Footer from "@/components/Footer";
import GithubContributions from "@/components/GithubContributions";

export default function Home() {
  return (
    <div className="page-wrapper">
      <Navbar />
      <main>
        <HeroSection />
        <ProjectsSection />
        <GithubContributions />
      </main>
      <Footer />
    </div>
  );
}

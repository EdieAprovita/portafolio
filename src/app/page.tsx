import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ProjectsSection from "./components/ProjectsSection";
import EmailSection from "./components/EmailSection";
import Footer from "./components/Footer";

export default function Home() {
	return (
		<main className="min-h-screen bg-background">
			<Navbar />
			<HeroSection />
			<AboutSection />
			<ProjectsSection />
			<EmailSection />
			<Footer />
		</main>
	);
}

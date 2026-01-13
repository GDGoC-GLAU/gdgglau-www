import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import AboutSection from "@/components/sections/AboutSection";
import EventsSection from "@/components/sections/EventsSection";
import HeroSection from "@/components/sections/HeroSection";
import TeamSection from "@/components/sections/TeamSection";

export default function HomePage() {
	return (
		<>
			<Navbar />
			<main>
				<HeroSection />
				<AboutSection />
				<TeamSection />
				<EventsSection />
			</main>
			<Footer />
		</>
	);
}

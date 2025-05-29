import Hero from "@/components/organisms/Hero";
import NavBar from "@/components/organisms/NavBar";
import Reservation from "@/components/organisms/Reservation";
import Image from "next/image";
import InterventionZone from "@/components/organisms/InterventionZone";
import MansonryHomePage from "@/components/organisms/MansonryHomePage";
import GoogleReviews from "@/components/organisms/GoogleReviews";
export default function Home() {
	return (
		<>
			<div className="relative w-full h-screen">
				<Image
					src="/FondHero.png" // <- image d’arrière-plan
					alt="Image de fond"
					fill
					priority
				/>
				<div className="absolute top-0 left-0 w-full h-full flex flex-col   ">
					<NavBar />
					<Hero />
				</div>
			</div>
			<Reservation />
			<InterventionZone />
			<MansonryHomePage />
			<GoogleReviews />
		</>
	);
}

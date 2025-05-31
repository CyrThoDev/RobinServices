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
			<NavBar />
			<div className="relative w-full min-h-screen">
				<Image
					src="/FondHero.png"
					alt="Image de fond"
					fill
					priority
					className="object-cover"
				/>
				<div className="relative z-10">
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

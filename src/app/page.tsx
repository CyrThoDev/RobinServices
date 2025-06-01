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
			<section className=" bg-[#f9f6f2] relative w-full py-14 lg:min-h-screen flex items-center justify-center">
				<Image
					src="/FondHero.png"
					alt="Image de fond"
					fill
					priority
					className="object-cover"
				/>
				<div className="  w-full relative z-10">
					<Hero />
				</div>
			</section>

			<Reservation />
			<InterventionZone />
			<MansonryHomePage />
			<GoogleReviews />
		</>
	);
}

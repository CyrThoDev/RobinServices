import Hero from "@/components/organisms/Hero";
import NavBar from "@/components/organisms/NavBar";
import Reservation from "@/components/organisms/Reservation";
import Image from "next/image";
import InterventionZone from "@/components/organisms/InterventionZone";
import MansonryHomePage from "@/components/organisms/MansonryHomePage";
import GoogleReviews from "@/components/organisms/GoogleReviews";
import NewHero from "@/components/organisms/NewHero";
import Summary from "@/components/organisms/Summary";
export default function Home() {
	return (
		<div className=" flex flex-col ">
			<div >
			<NavBar />
			<section>
				{/* <Image
					src="/FondHero.png"
					alt="Image de fond"
					fill
					priority
					className="object-cover"
				/> */}
			
					{/* <Hero /> */}
					<NewHero />
				
			</section>
			<Summary />
			<Reservation />
				<div className="h-px max-w-7xl bg-darkbraun my-4 mx-auto" />
				<InterventionZone />
			
			<MansonryHomePage />
		
			
			<GoogleReviews />
			</div>
		</div>
	);
}

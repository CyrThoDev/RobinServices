
import NavBar from "@/components/organisms/NavBar";
import Reservation from "@/components/organisms/Reservation";

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
	
					<NewHero />
				
			</section>
			<Summary />
			<Reservation />
				{/* <div className="h-px max-w-2/3 bg-darkbraun  mx-auto" /> */}
				<InterventionZone />
			
			<MansonryHomePage />
		
			
			<GoogleReviews />
			</div>
		</div>
	);
}

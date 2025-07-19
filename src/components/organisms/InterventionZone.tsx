import React from "react";
import InterventionCities from "../molecules/InterventionCities";
import CarteZoneWrapper from "../molecules/CarteZoneWrapper";

function InterventionZone() {
	return (
		<section className="bg-lightbg px-10 lg:px-20 py-20">
			<div className=" flex flex-col lg:flex-row items-center justify-between gap-12">
				<div className="w-full lg:w-1/2">
					<InterventionCities />
				</div>
				<div className="w-full lg:w-1/2 z-10">
					<CarteZoneWrapper />
				</div>
			</div>
		</section>
	);
}

export default InterventionZone;

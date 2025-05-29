import React from "react";
import InterventionCities from "../molecules/InterventionCities";
import CarteZone from "../molecules/CarteZone";

function InterventionZone() {
	return (
		<section className="">
			<div className=" flex flex-col lg:flex-row items-start justify-between gap-12">
				<div className="w-full lg:w-1/2">
					<InterventionCities />
				</div>
				<div className="w-full lg:w-1/2">
					<CarteZone />
				</div>
			</div>
		</section>
	);
}

export default InterventionZone;

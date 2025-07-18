import { RiCheckboxCircleLine } from "react-icons/ri";

const Zones = [
	{
		id: 1,
		name: "Aureilhan",
	},
	{
		id: 2,
		name: "Bias",
	},
	{
		id: 3,
		name: "Mézos",
	},
	{
		id: 4,
		name: "Mimizan",
	},
	{
		id: 5,
		name: "Pontenx-les-Forges",
	},
	{
		id: 6,
		name: "Saint-Paul-en-Born",
	},
];
export default function InterventionCities() {
	return (
		<section className="pt-10 lg:pt-0 px-10 lg:px-20">
			<h2 className="text-3xl font-bold text-center pb-2 relative inline-block">
				<span className="relative z-10 text-dark">Zone d&#39;intervention</span>
				<div className="mx-auto mt-2 h-0.5 bg-orange w-[80%] max-w-xs rounded-full" />
			</h2>

			<p className="text-lg pb-8">
				Robin Aménagements Services intervient dans les communes suivantes :
			</p>
			<ul className=" mt-4 text-gray-800 flex flex-col gap-4">
				{Zones.map((zone) => (
					<li key={zone.id} className="flex gap-4 items-center ">
						<RiCheckboxCircleLine className="text-[#FFB903]" />
						{zone.name}
					</li>
				))}
			</ul>
		</section>
	);
}

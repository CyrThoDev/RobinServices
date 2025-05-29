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
		<section className="pt-12 pl-20">
			<h2 className="text-3xl font-bold  text-center pb-8">
				Zone d'intervention
			</h2>
			<p className="text-lg pb-8">
				Robin Aménagements Services intervient dans les communes suivantes :
			</p>
			<ul className="list-none list-inside mt-4 text-gray-800">
				{Zones.map((zone) => (
					<li key={zone.id} className="flex gap-1 items-center">
						<RiCheckboxCircleLine className="text-secondary" />
						{zone.name}
					</li>
				))}
			</ul>
		</section>
	);
}

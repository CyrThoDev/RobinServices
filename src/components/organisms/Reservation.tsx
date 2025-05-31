import IconStep from "../molecules/IconStep";
import Image from "next/image";
import Button from "../atoms/Button";

const steps = [
	{
		id: 1,
		src: "/Icone1.png",
		alt: "Outils",
		title: "Je choisis mon service",
		description:
			"Petits travaux, entretien, gros projets ou location de matériel : sélectionnez ce qui vous correspond.",
	},
	{
		id: 2,
		src: "/Icone1.png",
		alt: "Calendrier",
		title: "On échange sur votre besoin Flexible",
		description:
			"Un échange rapide pour comprendre votre projet et vous proposer la meilleure solution.",
	},
	{
		id: 3,
		src: "/Icone1.png",
		alt: "Maison",
		title: "On planifie vos travaux",
		description:
			"Une fois le projet défini, nous fixons ensemble la date de l’intervention.",
	},
];
export default function Reservation() {
	return (
		<div className="bg-primary text-white py-20">
			<div className="flex flex-col gap-8">
				<h2 className="text-center text-3xl font-bold pb-10">
					Réservez votre service en 3 étapes
				</h2>
				<div className="md:block relative">
					<div className="flex justify-center  items-center mb-8">
						<div className="relative w-full lg:max-w-6xl flex flex-col gap-4 lg:flex-row justify-between items-center z-10">
							{steps.map((step) => (
								<div key={step.id}>
									<IconStep {...step} />
								</div>
							))}
							<div className="hidden lg:block lg:absolute lg:top-1/3 lg:left-[15%] lg:right-[15%] lg:transform lg:-translate-y-1/2  lg:-z-10">
								<Image
									src="/Dashline.png"
									alt="ligne pointillée"
									width={800}
									height={20}
									className="w-full h-auto"
								/>
							</div>
						</div>
					</div>
				</div>
				<div className="mx-auto flex flex-col items-center justify-center px-10 xl:px-20">
					<Button
						title="RESERVER UN SERVICE"
						width="max-w-fit"
						link="/contact"
					/>
				</div>
			</div>
		</div>
	);
}

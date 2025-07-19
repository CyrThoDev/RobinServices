import IconStep from "../molecules/IconStep";
import Image from "next/image";
import Button from "../atoms/Button";

const steps = [
	{
		id: 1,
		src: "/tools.png",
		alt: "Outils",
		title: "Je choisis mon service",
		description:
			"Petits travaux, entretien, gros projets ou location de matériel : sélectionnez ce qui vous correspond.",
	},
	{
		id: 2,
		src: "/schedule.png",
		alt: "Calendrier",
		title: "On échange sur votre besoin",
		description:
			"Un échange rapide pour comprendre votre projet et vous proposer la meilleure solution.",
	},
	{
		id: 3,
		src: "/home.png",
		alt: "Maison",
		title: "On planifie vos travaux",
		description:
			"Une fois le projet défini, nous fixons ensemble la date de l’intervention.",
	},
];

export default function Reservation() {
	return (
		<div className="bg-lightbg text-white py-20 px-10">
			<div className="flex flex-col gap-12">
				<h2 className="text-3xl font-bold text-center pb-2 relative inline-block">
					<span className="relative z-10 text-black">
						Réservez votre service en 3 étapes
					</span>
					<div className="mx-auto mt-2 h-0.5 bg-orange w-[80%] max-w-xs rounded-full" />
				</h2>

				<div className="relative flex justify-center items-center mb-8">
					<div className=" relative w-full lg:max-w-6xl flex flex-col lg:flex-row justify-between items-center gap-8 text-black">
					{steps.map((step) => (
  <div
    key={step.id}
    className="flex flex-col items-center  justify-center text-center max-w-xs min-h-[340px] h-full relative"
  >
    <IconStep {...step} />
  </div>
))}

						{/* Ligne pointillée centrée derrière les blocs */}
<div className="hidden lg:block absolute -translate-y-10 left-[12%] right-[12%] z-0">
  <Image
    src="/Dashline.png"
    alt="ligne pointillée"
    width={1200}
    height={20}
    className="w-full h-auto"
  />
</div>




					</div>
				</div>

				<div className="mx-auto flex flex-col items-center justify-center">
					<Button
						title="Demander un devis"
						width="max-w-fit"
						link="/contact"
					/>
				</div>
			</div>
		</div>
	);
}

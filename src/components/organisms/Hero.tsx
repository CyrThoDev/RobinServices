import Image from "next/image";
import Button from "../atoms/Button";

function Hero() {
	return (
		<div className="relative  min-h-[80vh] flex flex-col md:flex-row items-center justify-between px-10 xl:px-20 overflow-hidden">
			{/* Contenu principal */}
			<div className="flex flex-col gap-8 md:text-left justify-between pl-10 z-10">
				<h1 className="text-4xl md:text-7xl font-bold text-darkbraun ">
					Robin  <span className="text-darkgreen">Services Habitat</span>
				</h1>
				<p className="text-xl md:text-3xl font-bold text-lightgreen ">
					Votre artisan au quotidien à Mimizan
				</p>
				{/* <p className="text-base md:text-xl font-medium text-lightgreen ">
					Besoin d’un service ?
				</p> */}
				<Button
					title="Réserver un service"
					width="max-w-fit"
					link="/contact"
				/>
			</div>

			<div className="w-full max-w-md md:max-w-lg lg:max-w-xl z-10">
				<Image
					src="/cloture4.jpg"
					alt="Image à droite"
					width={900}
					height={700}
					className="w-full h-auto object-cover rounded-md shadow-2xl"
				/>
			</div>

			{/* SVG décoratif en bas */}
			<div className="absolute bottom-0 left-0 w-full pointer-events-none z-0">
				<svg
					data-name="Layer 1"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
					className="w-full h-24 md:h-32"
				>
					<path
						d="M892.25 114.72L0 0 0 120 1200 120 1200 0 892.25 114.72z"
						className="shape-fill"
						fill="#7E4F25" // adapte la couleur ici
					></path>
				</svg>
			</div>
		</div>
	);
}

export default Hero;

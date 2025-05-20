import maison from "@/../public/maison.jpg";
import fondHero from "@/../public/FondHero.png";
import Image from "next/image";
import NavBar from "./NavBar";
function Hero() {
	return (
		<>
			<div className="flex-1  text-center md:text-left">
				<h1 className="text-4xl md:text-5xl font-bold mb-4">
					Bienvenue sur Flowee
				</h1>
				<p className="text-lg md:text-xl">
					Une plateforme pensée pour vos projets
				</p>
			</div>

			<div className="flex-1 flex items-center justify-center">
				<Image
					src="/maison.jpg" // <- image différente de l’arrière-plan
					alt="Image à droite"
					width={500}
					height={500}
					className="object-cover max-h-[600px] rounded-xl shadow-2xl"
				/>
			</div>
		</>
	);
}

export default Hero;

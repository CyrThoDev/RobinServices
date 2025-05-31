import Image from "next/image";
import Button from "../atoms/Button";

function Hero() {
	return (
		<>
			<div className="h-full flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-10 xl:px-20 gap-10 md:gap-14 py-10">
				<div className="flex flex-col gap-6 text-center md:text-left">
					<h1 className="text-4xl md:text-6xl font-bold mb-4">
						Robin Services
					</h1>
					<p className="text-lg md:text-2xl">
						Votre artisan au quotidien à Mimizan
					</p>
					<p className="text-base md:text-xl">Besoin d’un service ?</p>

					<Button
						title="RESERVER UN SERVICE"
						width="max-w-fit"
						link="/contact"
					/>
				</div>

				<div className="w-full max-w-sm md:max-w-md lg:max-w-xl">
					<Image
						src="/cloture4.jpg"
						alt="Image à droite"
						width={700}
						height={700}
						className="w-full h-auto object-cover rounded-md shadow-2xl"
					/>
				</div>
			</div>
		</>
	);
}

export default Hero;

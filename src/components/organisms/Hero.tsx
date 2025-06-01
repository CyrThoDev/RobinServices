import Image from "next/image";
import Button from "../atoms/Button";

function Hero() {
	return (
		<>
			<div className="h-full flex flex-col md:flex-row items-center lg:justify-around px-10  xl:px-20 gap-10 ">
				<div className="flex flex-col gap-4 md:text-left mx-auto">
					<h1 className="text-4xl md:text-6xl font-bold">Robin Services</h1>
					<p className="text-xl md:text-3xl">
						Votre artisan au quotidien à Mimizan
					</p>
					<p className="text-base md:text-xl">Besoin d’un service ?</p>

					<Button
						title="RESERVER UN SERVICE"
						width="max-w-fit"
						link="/contact"
					/>
				</div>

				<div className="w-full max-w-md md:max-w-lg lg:max-w-2xl">
					<Image
						src="/cloture4.jpg"
						alt="Image à droite"
						width={900}
						height={700}
						className="w-full h-auto object-cover rounded-md shadow-2xl"
					/>
				</div>
			</div>
		</>
	);
}

export default Hero;

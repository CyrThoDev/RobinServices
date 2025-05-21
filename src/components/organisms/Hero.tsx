import Image from "next/image";
import Button from "../atoms/Button";

function Hero() {
	return (
		<>
			<div className="h-full flex flex-col md:flex-row items-center justify-around px-10 xl:px-20  gap-8  ">
				<div className="flex flex-col gap-10">
					<div className="">
						<h1 className="text-4xl md:text-7xl font-bold mb-4">
							Robin Services
						</h1>
						<p className="text-lg md:text-4xl">
							Votre artisan au quotidien à Mimizan
						</p>
						<p className="text-lg md:text-2xl">Besoin d&#39;un service?</p>
					</div>

					<Button
						title="RESERVER UN SERVICE"
						width="max-w-fit"
						link="/contact"
					/>
				</div>

				<div className="">
					<Image
						src="/maison.jpg" // <- image différente de l’arrière-plan
						alt="Image à droite"
						width={700}
						height={700}
						className="object-cover max-h-[900px] rounded-md shadow-2xl"
					/>
				</div>
			</div>
		</>
	);
}

export default Hero;

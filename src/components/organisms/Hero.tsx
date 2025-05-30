import Image from "next/image";
import Button from "../atoms/Button";

function Hero() {
	return (
		<>
			<div className="h-full flex flex-col lg:flex-row lg:items-center justify-center px-10 xl:px-20  md:gap-14 ">
				<div className="flex flex-col gap-8">
					<div className="">
						<h1 className="text-5xl lg:text-7xl font-bold mb-4">
							Robin Services
						</h1>
						<p className="text-lg md:text-4xl">
							Votre artisan au quotidien à Mimizan
						</p>
						<p className="text-lg lg:text-2xl">Besoin d&#39;un service?</p>
					</div>

					<Button
						title="RESERVER UN SERVICE"
						width="max-w-fit"
						link="/contact"
					/>
				</div>

				<div className="mt-10">
					<Image
						src="/cloture4.jpg"
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

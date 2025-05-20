import Hero from "@/components/organisms/Hero";
import NavBar from "@/components/organisms/NavBar";
import Image from "next/image";

export default function Home() {
	return (
		<>
			<div className="relative w-full">
				<Image
					src="/FondHero.png" // <- image d’arrière-plan
					alt="Image de fond"
					width={1920}
					height={400}
					className="w-full h-full"
				/>
				<div className="absolute top-0 left-0 w-full h-full flex flex-col   ">
					<NavBar />
					<Hero />
				</div>
			</div>
			<h2 className="py-50 border border-t-amber-700">Coucou</h2>
		</>
	);
}

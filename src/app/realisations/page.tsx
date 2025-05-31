import { client } from "@/sanity/client";
import { Realisations } from "@/queries/sanityqueries";
import RealisationsGallery from "@/components/organisms/RealisationsGallery";
import Image from "next/image";

export default async function RealisationsPage() {
	const realisations = await client.fetch(Realisations);
	console.info(realisations);

	return (
		<>
			<section className="relative w-full h-[40vh] sm:h-[60vh] md:h-[70vh]">
				<Image
					src="/bardage3.jpg"
					alt="Image d’en-tête"
					fill
					className="object-cover"
					priority
				/>
			</section>

			<RealisationsGallery realisations={realisations} />
		</>
	);
}

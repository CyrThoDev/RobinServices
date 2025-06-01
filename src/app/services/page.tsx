import { groq } from "next-sanity";
import { client, urlFor } from "@/sanity/client";
import Image from "next/image";

export interface ServiceType {
	_id: string;
	titre: string;
	slug: { current: string };
	description: string;
	image: {
		_type: "image";
		asset: {
			_ref: string;
			_type: "reference" | "sanity.imageAsset";
		};
	};
	bouton: string;
	couleurBouton: string;
}

export const revalidate = 60; // ISR: refresh every 60s

export default async function ServicesPage() {
	const services = await getServices();

	return (
		<main className="bg-[#f9f6f2] min-h-screen py-16 px-6 md:px-20">
			<h1 className="text-3xl md:text-4xl font-bold text-center mb-2">
				Mes services
			</h1>
			<div className="w-16 h-[2px] bg-yellow-400 mx-auto mb-12" />

			<div className="grid grid-cols-1 md:grid-cols-2 gap-12">
				{services.map((service: ServiceType) => (
					<ServiceCard key={service._id} service={service} />
				))}
				s
			</div>
		</main>
	);
}

async function getServices() {
	const query = groq`*[_type == "services"] | order(_createdAt asc){
		_id,
		titre,
		slug,
		description,
		image,
		bouton,
		couleurBouton
	}`;
	return await client.fetch(query);
}

function ServiceCard({ service }: { service: Service }) {
	const imageUrl = urlFor(service.image).width(800).height(400).url();

	return (
		<div className="flex flex-col gap-4">
			<div className="w-full h-48 relative">
				<Image
					src={imageUrl}
					alt={service.titre}
					fill
					className="object-cover rounded-md"
				/>
			</div>
			<h2 className="text-lg font-semibold">{service.titre}</h2>
			<p className="text-sm text-red-500 leading-snug">{service.description}</p>
			<a
				href={service.slug?.current || "#"}
				className={`mt-4 px-6 py-3 rounded-md font-semibold text-center w-fit ${
					service.couleurBouton === "bleu"
						? "bg-[#03647d] text-white"
						: "bg-[#fbbf24]"
				}`}
			>
				{service.bouton}
			</a>
		</div>
	);
}

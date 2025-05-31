"use client";

import { useState, useMemo } from "react";
import Image from "next/image";
import { urlFor } from "@/sanity/client";

interface Realisation {
	_id: string;
	titre: string;
	alt: string;
	categorie: string;
	image: unknown; // or use a more specific type if you know the structure, e.g. SanityImageSource
}

export default function RealisationsGallery({
	realisations,
}: { realisations: Realisation[] }) {
	const [activeCategory, setActiveCategory] = useState<string | null>(null);

	const categories = useMemo(() => {
		return Array.from(new Set(realisations.map((r) => r.categorie)));
	}, [realisations]);

	const filtered = useMemo(() => {
		if (!activeCategory) return realisations;
		return realisations.filter((r) => r.categorie === activeCategory);
	}, [activeCategory, realisations]);

	return (
		<section className="p-6 md:p-10 flex flex-col gap-6">
			<h1 className="text-3xl font-bold text-center pb-2 relative inline-block">
				<span className="relative z-10">Mes réalisations</span>
				<div className="mx-auto mt-2 h-0.5 bg-secondary w-[80%] max-w-xs rounded-full" />
			</h1>

			<div className="flex flex-wrap justify-center gap-4 mb-6">
				<button
					type="button"
					onClick={() => setActiveCategory(null)}
					className={`px-4 py-2 rounded-full text-white ${
						!activeCategory ? "bg-primary" : "bg-gray-300"
					}`}
				>
					Tout
				</button>
				{categories.map((cat) => (
					<button
						type="button"
						key={cat}
						onClick={() => setActiveCategory(cat)}
						className={`px-4 py-2 rounded-full text-white ${
							activeCategory === cat ? "bg-primary" : "bg-gray-300"
						}`}
					>
						{cat}
					</button>
				))}
			</div>

			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
				{filtered.map((item) => (
					<div
						key={item._id}
						className="relative w-full overflow-hidden rounded shadow"
					>
						<div className="relative w-full h-auto aspect-[3/2]">
							<Image
								src={urlFor(item.image).width(800).height(600).url()}
								alt={item.alt}
								fill
								className="object-cover"
								sizes="(max-width: 768px) 100vw,
                     (max-width: 1200px) 50vw,
                     33vw"
							/>
						</div>
						<div className="p-3">
							<h2 className="text-lg font-semibold">{item.titre}</h2>
							<p className="text-sm text-gray-500">{item.categorie}</p>
						</div>
					</div>
				))}
			</div>
		</section>
	);
}

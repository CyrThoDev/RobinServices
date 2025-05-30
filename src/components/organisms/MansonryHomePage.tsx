"use client";
import Image from "next/image";

const images = [
	"/construction6.jpg",
	"/bardage3.jpg",
	"/construction5.jpg",
	"/construction1.jpg",
	"/bardage2.jpg",
	"/construction6.jpg",
	"/maison.jpg",
];

export default function MasonryHomePage() {
	return (
		<div
			className="relative bg-cover bg-center bg-no-repeat py-20 px-10"
			style={{ backgroundImage: 'url("/maison.jpg")' }}
		>
			<div className="absolute inset-0 bg-white/60 z-0" />
			<div className="relative z-10 text-gray-800">
				<div className="rounded-xl  max-w-screen-xl mx-auto">
					<div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
						{images.map((src, index) => (
							<div
								key={index}
								className="break-inside-avoid rounded-xl overflow-hidden shadow-md"
							>
								<Image
									src={src}
									alt={`Image ${index + 1}`}
									className="w-full h-auto object-cover rounded-xl"
									layout="responsive"
									width={600} // valeur indicative, elle sera adaptée
									height={400} // idem
									sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
								/>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}

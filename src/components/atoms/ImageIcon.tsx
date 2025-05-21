import Image from "next/image";

export default function ImageIcon({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="w-full max-w-[150px] md:max-w-[180px] mb-4 md:mb-0">
			<Image
				src={src}
				alt={alt}
				width={300}
				height={300}
				className="w-full h-auto"
			/>
		</div>
	);
}

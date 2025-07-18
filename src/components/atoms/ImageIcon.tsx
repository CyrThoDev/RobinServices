import Image from "next/image";

export default function ImageIcon({ src, alt }: { src: string; alt: string }) {
	return (
		<div className="w-full max-w-[100px] md:max-w-[100px] mb-4 md:mb-0 z-0">
			<Image
				src={src}
				alt={alt}
				width={100}
				height={100}
				className="w-full h-auto z-0"
			/>
		</div>
	);
}

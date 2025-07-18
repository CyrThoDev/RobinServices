import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<Image
				src={"/Logo.webp"}
				alt="logo Marron Robin services habitat"
				width={100}
				height={70}
			/>
		</Link>
	);
}

export default Logo;

import Image from "next/image";
import Link from "next/link";

function Logo() {
	return (
		<Link href="/">
			<Image
				src={"/Logosample.png"}
				alt="logo Orange Henko"
				width={100}
				height={70}
			/>
		</Link>
	);
}

export default Logo;

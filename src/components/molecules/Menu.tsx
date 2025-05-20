import Link from "next/link";

function Menu() {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center gap-8  ">
			<Link href="">Services</Link>
			<Link href="">Réalisations</Link>
			<Link href="">A propos</Link>
		</div>
	);
}

export default Menu;

import Link from "next/link";

function Menu() {
	return (
		<div className="flex flex-col lg:flex-row justify-center items-center gap-8  ">
			<Link href="/services">Services</Link>
			<Link href="/realisations">Réalisations</Link>
			<Link href="/apropos">A propos</Link>
		</div>
	);
}

export default Menu;

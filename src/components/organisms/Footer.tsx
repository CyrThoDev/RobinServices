import Link from "next/link";
import Button from "../atoms/Button";
import CurrentYear from "../molecules/CurrentYear";

function Footer() {
	return (
		<div className="bg-darkgreen text-white px-10 lg:px-20 py-8 font-medium">
			<div className="flex flex-col">
				<div className="grid lg:grid-cols-3 lg:justify-items-between justify-items-center gap-4">
					<div className="flex flex-col items-center lg:items-start gap-2 ">
						<h2 className="font-bold text-xl">Zone d&#39;intervention</h2>
						<h3>Communauté de communes de Mimizan</h3>
					</div>
					<div className="flex flex-col items-center gap-4 order-3 lg:order-none lg:gap-8">
						<div className="flex flex-col gap-2 ">
							<h2 className="text-center font-bold text-xl">Email</h2>
							<Link href="mailto:robinnicolas40@gmail.com">
								robinnicolas40@gmail.com
							</Link>
						</div>
						<div className="max-w-fit justify-center mx-auto">
							<Button
								title="Réserver un service"
								width="max-w-fit"
								link="/contact"
							/>
						</div>
					</div>
					<div className="flex flex-col items-end gap-2 ">
						<h2 className="font-bold text-xl">Téléphone</h2>
						<Link href="Tel:+33678913974">06 78 91 39 74</Link>
					</div>
				</div>
			</div>
			<div className="w-full h-[1px] bg-white my-4" />
			<div className="flex flex-col-reverse md:flex-row justify-between items-center">
				<CurrentYear />
				<div className="flex flex-col items-center md:flex-row gap-4 pb-4 md:pb-0">
					<p>Mentions légales</p>
					<p>Confidentialité</p>
					<p>CGV</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;

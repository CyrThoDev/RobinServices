import Link from "next/link";
import Button from "../atoms/Button";

function Footer() {
	return (
		<div className="bg-primary text-white px-10 lg:px-20 py-8">
			<div className="flex flex-col">
				<div className="grid grid-cols-3 justify-items-between  gap-4">
					<div className="flex flex-col items-start gap-2 ">
						<h2>Zone d&#39;intervention</h2>
						<h3>Communauté de communes de Mimizan</h3>
					</div>
					<div className="flex flex-col items-center gap-8">
						<div className="flex flex-col gap-2 ">
							<h2 className="text-center">Email</h2>
							<Link href="mailto:mail@mail.com">mail@mail.com</Link>
						</div>
						<div className="max-w-fit justify-center mx-auto">
							<Button
								title="RESERVER UN SERVICE"
								width="w-auto"
								link="/contact"
							/>
						</div>
					</div>
					<div className="flex flex-col items-end gap-2 ">
						<h2>Téléphone</h2>
						<Link href="tel:0606060606">0606060606</Link>
					</div>
				</div>
			</div>
			<div className="w-full h-[1px] bg-white my-4" />
			<div className="flex flex-col lg:flex-row justify-between items-center">
				<p>2025 -Robin Services</p>
				<div className="flex flex-col lg:flex-row gap-4">
					<p>Mentions légales</p>
					<p>Confidentialité</p>
					<p>CGV</p>
				</div>
			</div>
		</div>
	);
}

export default Footer;

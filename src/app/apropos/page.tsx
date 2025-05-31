import Button from "@/components/atoms/Button";
import Image from "next/image";

function Apropos() {
	return (
		<>
			{/* SECTION BLEUE */}
			<div className="relative bg-primary pb-20 lg:pb-40">
				<h1 className="py-20 text-center text-white text-3xl font-bold ">
					A PROPOS
				</h1>

				{/* IMAGE À CHEVAL */}
				<div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 z-10 pt-10 lg:pt-0">
					<Image
						src="/bardage1.jpg"
						alt="Bardage bois"
						width={500}
						height={300}
						className="w-[90vw] max-w-sm lg:w-[500px] h-auto rounded-xl shadow-lg"
					/>
				</div>
			</div>

			{/* SECTION BLANCHE */}
			<div className="bg-white pt-50 lg:pt-60 lg:max-w-4xl mx-auto pb-20 px-10 lg:px-0">
				<p className="mb-6">
					Mon entreprise ROBIN AMENAGEMENTS, créée en 2014, vise la construction
					bois sur vos espaces extérieurs dans le secteur de la communauté des
					communes de Mimizan. Je réalise chez les particuliers et
					professionnels des terrasses bois, clôtures, bardages en rénovation
					et/ou isolation de façades, abris individuels de type pergola,
					appentis, carport, abris de jardin, garage ainsi que des portails et
					autres demandes spécifiques.
				</p>
				<p>
					Titulaire d&#39;un CAP constructeur bois, je m&#39;efforce de
					pérenniser un savoir-faire, de soigner la propreté de mes chantiers,
					d&#39;échanger et d&#39;apporter les meilleures solutions à mes
					clients, dont 73 % m&#39;ont recontacté pour d&#39;autres travaux.
				</p>
			</div>

			<div className="flex justify-center pb-20">
				<Button
					title="JE SOUHAITE DISCUTER DE MON PROJET"
					link="/contact"
					width="w-[20rem] md:w-[22rem]"
				/>
			</div>
		</>
	);
}

export default Apropos;

import Image from "next/image";

function ContactPresentation() {
	return (
		<div className="flex flex-col lg:flex-row items-center py-8 px-10 lg:px-0">
			<div className="lg:w-1/2 flex flex-col gap-8  lg:pl-20  ">
				<h1 className="text-2xl font-bold text-left lg:pr-30">
					VOTRE ENTREPRISE MULTISERVICES DANS LES LANDES{" "}
				</h1>
				<div className="flex flex-col gap-4 lg:gap-2 mb-20 lg:mb-0">
					<p>
						Robin Services est une entreprise générale située dans les Landes,
						spécialisée dans les petits travaux de rénovation, l&#39;aménagement
						extérieur, la création de terrasses sur mesure, ainsi que
						l&#39;entretien de jardins et la location de matériel pour vos
						chantiers.
					</p>
					<p>
						Basée à proximité de Mimizan, j&#39;interviens dans toute la
						Communauté de communes de Mimizan et ses alentours (Aureilhan, Bias,
						Mézos, Pontenx-les-Forges, Saint-Paul-en-Born...).
					</p>
					<p>
						Depuis 20XX, je travaille en étroite collaboration avec mes clients
						– particuliers, professionnels et collectivités – pour proposer des
						prestations sur mesure, alliant qualité, fiabilité et proximité.
					</p>
				</div>
			</div>
			<div className="lg:w-1/2  ">
				<Image
					src="/cloture5.jpg"
					alt="Image à droite"
					width={500}
					height={500}
					className="object-cover mx-auto max-h-[500px] rounded-md shadow-2xl"
				/>
			</div>
		</div>
	);
}

export default ContactPresentation;

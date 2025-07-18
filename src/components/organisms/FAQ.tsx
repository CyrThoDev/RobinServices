"use client";
import { useState } from "react";
import Button from "../atoms/Button";

const faqs = [
	{
		question: "Quels types de services propose Robin Aménagement ?",
		answer:
			"Robin Aménagement vous accompagne pour tous vos projets extérieurs : petits travaux (pose de clôtures, réparations diverses), entretien de jardin (tonte, taille, nettoyage), aménagements plus complexes comme la création de terrasse ou d’allées, ainsi que la location de matériel pour vos chantiers personnels.",
	},
	{
		question:
			"Faut-il un minimum de surface ou de montant pour faire appel à vous ?",
		answer:
			"Non, il n’y a pas de minimum requis. Nous intervenons aussi bien pour des petites réparations que pour des projets de plus grande envergure. Chaque demande est étudiée pour vous proposer un devis personnalisé.",
	},
	{
		question: "Comment obtenir un devis ?",
		answer:
			"Vous pouvez nous contacter par téléphone, par mail ou via le formulaire de contact sur le site. Une visite sur place peut être proposée pour évaluer précisément vos besoins.",
	},
	{
		question:
			"Proposez-vous la location de matériel sans prestation associée ?",
		answer:
			"Oui, la location de matériel est possible même si vous ne faites pas appel à nos services. Nous vous fournissons le matériel avec des consignes d’utilisation claires et assurons un suivi en cas de besoin.",
	},
	{
		question:
			"Puis-je combiner plusieurs services (entretien + travaux par exemple) ?",
		answer:
			"Absolument ! Nos prestations sont modulables. Vous pouvez combiner plusieurs services dans un même devis ou planifier des interventions différentes selon vos priorités.",
	},
	{
		question: "Travaillez-vous uniquement pour les particuliers ?",
		answer:
			"Non, nous travaillons aussi bien avec les particuliers qu’avec les professionnels ou les collectivités locales. N’hésitez pas à nous faire part de votre projet.",
	},
	{
		question: "Quels sont les moyens de paiement acceptés ?",
		answer:
			"Vous pouvez régler par chèque, virement bancaire ou espèces. Un acompte peut être demandé selon le montant des travaux ou la durée de location du matériel.",
	},
];

function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const toggleFAQ = (index: number) => {
		setOpenIndex(openIndex === index ? null : index);
	};

	return (
		<div className=" px-10 lg:px-20 flex flex-col gap-20 py-10 ">
			<h2 className=" relative flex flex-col text-lg md:text-2xl font-tanker">
				<span className="text-3xl text-darkbraun z-10">FAQ</span>
				<div className="w-[2rem] h-3  bg-darkorange -mt-3 -z-1" />
			</h2>
			<div className="space-y-6">
				{faqs.map((faq, index) => (
					<div key={index} className="border-b border-white pb-4">
						<button
							type="button"
							className="w-full text-left text-darkbraun font-semibold mb-2 cursor-pointer flex items-center justify-between focus:outline-none"
							onClick={() => toggleFAQ(index)}
							aria-expanded={openIndex === index}
							aria-controls={`faq-answer-${index}`}
						>
							{faq.question}
							<span
								className={`transform transition-transform duration-300 text-darkbraun ${
									openIndex === index ? "rotate-180" : "rotate-0"
								}`}
							>
								▼
							</span>
						</button>
						{openIndex === index && (
							<p id={`faq-answer-${index}`} className="text-darkbraun mt-2">
								{faq.answer}
							</p>
						)}
					</div>
				))}
				<p className="text-center">
					Tu n&#39;as pas trouvé réponse à ta question ?
				</p>
				<Button
					title="JE SOUHAITE AVOIR PLUS D'INFOS"
					link="/contact"
					width="max-w-fit"
				/>
			</div>
		</div>
	);
}

export default FAQ;

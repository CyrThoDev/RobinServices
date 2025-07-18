'use client';

import Image from 'next/image';


const services = [
  {
    title: 'PETITS TRAVAUX INTERIEUR',
    image: "/travauxintérieur.png", // à remplacer avec tes assets
    alt: 'Icône Petits Travaux',
  },
  {
    title: 'ENTRETIEN',
    image: '/entretien.png',
    alt: 'Icône Entretien',
  },
  {
    title: 'PETITS TRAVAUX EXTERIEUR',
    image: '/travauxextérieur.png',
    alt: 'Icône Prestations',
  },
  {
    title: 'LOCATION DE MATERIEL',
    image: '/location.png',
    alt: 'Icône Location de Matériel',
  },
];

export default function Summary() {
  return (
    <section className="bg-darkbraun text-center px-6 md:px-20 py-20 md:py-30">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
      <p className=" md:text-2xl  text-lightbg max-w-5xl  mx-auto  text-center leading-relaxed font-bold">
          Je vous aide à révéler tout le potentiel de votre maison, à l’intérieur comme à l’extérieur. <br /> <br />Qu’il s’agisse d’un petit dépannage, d’un aménagement
          extérieur ou d’un besoin ponctuel en matériel, je vous propose des services fiables,
          personnalisés et réalisés avec soin — sur la communauté de communes de Mimizan.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-lightbg rounded-lg p-6 flex flex-col items-center justify-between hover:shadow-lg transition"
            >
              <Image
                src={service.image}
                alt={service.alt}
                width={100}
                height={100}
                className="mb-4"
              />
              <h3 className="text-sm font-semibold text-dark">{service.title}</h3>
            </div>
          ))}
        </div>
       
      </div>
    </section>
  );
}

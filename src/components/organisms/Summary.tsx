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
   <section className="bg-darkgreen text-center px-6 md:px-20 py-20 ">
  <div className="max-w-6xl mx-auto flex flex-col gap-20">
    
    {/* Layout principal : responsive */}
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center ">
      
      {/* Colonne gauche : Paragraphe */}
      <div className="">
        <p className="text-lightbg text-lg md:text-xl lg:text-2xl leading-relaxed font-bold text-left lg:pr-8">
          Je vous aide à révéler tout le potentiel de votre maison, à l'intérieur comme à l'extérieur. 
          <br /><br />
          Qu'il s'agisse d'un petit dépannage, d'un aménagement extérieur ou d'un besoin ponctuel en matériel, 
          je vous propose des services fiables, personnalisés et réalisés avec soin — sur la communauté de communes de Mimizan.
        </p>
      </div>
      
      {/* Colonne droite : Grid 2x2 des services */}
     
<div className="order-1 lg:order-2">
  <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-lg mx-auto lg:mx-0 h-full">
    {services.map((service) => (
      <div
        key={service.title}
        className="bg-lightbg rounded-lg p-4 lg:p-6 flex flex-col items-center justify-center hover:shadow-lg transition h-full min-h-[200px] lg:min-h-[250px]"
      >
        <div className="flex flex-col items-center justify-center flex-1 gap-3 lg:gap-4">
          <Image
            src={service.image}
            alt={service.alt}
            width={120}
            height={120}
            className="flex-shrink-0"
          />
          <h3 className="text-base font-semibold text-dark text-center leading-tight">{service.title}</h3>
        </div>
      </div>
    ))}
  </div>
</div>
      
    </div>
    
  </div>
</section>
  );
}

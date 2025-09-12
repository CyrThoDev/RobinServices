import React from "react";
import Image from "next/image";
import vehicule from "../../../public/vehicule.png";

import Button from "@/components/atoms/Button";


const COLORS = {
  cream: "#fdf4f0",
  orange: "#E19251",
  red: "#D16565",
  dark: "#1f1f1f",
};
function NewHero() {
  return (
    <section className=" py-10 md:py-0 md:min-h-screen flex items-center justify-center px-10">
  
      <div className=" max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* COLONNE 1 : TEXTE + BOUTONS */}
        <div className=" flex flex-col gap-6 w-full">
          {/* TEXTE */}
          <div className=" space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-7xl font-bold text-darkbraun">
              Robin <span className="text-orange">Services Habitat</span>
            </h1>
            <p className="text-black text-lg md:text-2xl">
             Artisan de confiance à Mimizan & alentours. Devis gratuit, intervention rapide et soignée pour l’intérieur comme l’extérieur.
            </p>
            <ul className="mt-6 grid gap-2 text-sm text-neutral-700">
              {[
                "Multi-services",
                "Entretien habitat",
                "Location de matériel",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <svg
                    className="mt-0.5 h-5 w-5 flex-none"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={COLORS.orange}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* IMAGE (visible seulement en mobile ici) */}
          <div className=" md:hidden relative w-full aspect-[16/10] rounded-3xl overflow-hidden">
            <Image
              src={vehicule}
              alt="Aperçu du site"
              className="w-full h-full object-contain"
            />
          </div>

          {/* BOUTONS */}
          <div className="flex flex-col md:flex-row gap-4 md:justify-start">
            <Button
              title="Demander un devis"
              link="#contact"
              variant="primary"
              width="w-full md:w-auto"
            />
            <Button
              title="Voir les projets"
              link="#projets"
              variant="secondary"
              width="w-full md:w-auto"
            />
          </div>
        </div>

        {/* COLONNE 2 : IMAGE en desktop uniquement */}
        <div className="hidden md:block relative w-full rounded-3xl overflow-hidden">
          <Image
            src={vehicule}
            alt="Aperçu du site"
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default NewHero;

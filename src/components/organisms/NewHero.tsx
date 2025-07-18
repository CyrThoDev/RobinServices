import React from "react";
import Image from "next/image";
import vehicule from "../../../public/vehicule.png";
import Button from "@/components/atoms/Button";

function NewHero() {
  return (
    <section className="bg-lightbg py-16 md:min-h-screen flex items-center justify-center px-10">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* COLONNE 1 : TEXTE + BOUTONS */}
        <div className="flex flex-col gap-6 w-full">
          {/* TEXTE */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-darkbraun">
              Robin <span className="text-orange">Services Habitat</span>
            </h1>
            <p className="text-black text-lg md:text-2xl">
              Votre artisan de confiance, proche de chez vous, pour prendre soin
              de votre maison dans les Landes.
            </p>
          </div>

          {/* IMAGE (visible seulement en mobile ici) */}
          <div className="md:hidden relative w-full aspect-[16/10] rounded-3xl overflow-hidden">
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
        <div className="hidden md:block relative w-full h-[450px] rounded-3xl overflow-hidden">
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

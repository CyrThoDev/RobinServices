// components/wrappers/CarteZoneWrapper.tsx
"use client";

import dynamic from "next/dynamic";

const CarteZone = dynamic(() => import("../molecules/CarteZone"), {
	ssr: false,
	loading: () => <p>Chargement de la carte...</p>,
});

export default function CarteZoneWrapper() {
	return <CarteZone />;
}

"use client";
import { MapContainer, TileLayer, GeoJSON } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import type { LatLngTuple } from "leaflet";
import { useEffect, useState } from "react";

export default function CarteZone() {
	const center: LatLngTuple = [44.2, -1.28];

	const [zone, setZone] = useState<GeoJSON.FeatureCollection | null>(null);

	useEffect(() => {
		fetch("/map.geojson")
			.then((res) => res.json())
			.then((data) => setZone(data));
	}, []);

	return (
		<section className="w-full h-[500px] p-10">
			<div className="w-full h-full">
				<MapContainer
					center={center}
					zoom={10}
					style={{ height: "100%", width: "100%" }}
					scrollWheelZoom={false}
					dragging={true}
					doubleClickZoom={false}
					touchZoom={true}
					zoomControl={true}
					className="rounded-xl"
				>
					<TileLayer
						attribution="&copy; OpenStreetMap contributors"
						url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
					/>
					{zone && (
						<GeoJSON
							data={zone}
							style={{
								color: "#D16565",
								fillColor: "#D16565",
								fillOpacity: 0.3,
								weight: 2,
							}}
						/>
					)}
				</MapContainer>
			</div>
		</section>
	);
}

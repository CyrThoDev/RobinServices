import { NextResponse } from "next/server";
import axios from "axios";

// 🔒 Cache local côté serveur
interface GoogleReview {
	author_name: string;
	author_url: string;
	language: string;
	profile_photo_url: string;
	rating: number;
	relative_time_description: string;
	text: string;
	time: number;
}

let cachedReviews: GoogleReview[] | null = null;
let lastFetched: number | null = null;
const CACHE_DURATION = 1000 * 60 * 60; // 1 heure

export async function GET() {
	try {
		const now = Date.now();

		// ✅ Renvoie depuis le cache si les données sont encore valides
		if (cachedReviews && lastFetched && now - lastFetched < CACHE_DURATION) {
			console.log("✅ Avis Google servis depuis le cache");
			return NextResponse.json(cachedReviews);
		}

		console.log("📡 Requête à Google Places API...");
		const placeId = process.env.GOOGLE_PLACES;
		const apiKey = process.env.GOOGLE_API;

		if (!placeId || !apiKey) {
			throw new Error(
				"Les variables d'environnement GOOGLE_PLACES ou GOOGLE_API sont manquantes",
			);
		}

		const response = await axios.get(
			"https://maps.googleapis.com/maps/api/place/details/json",
			{
				params: {
					place_id: placeId,
					fields: "reviews",
					key: apiKey,
					language: "fr",
				},
			},
		);

		const reviews = response.data.result?.reviews ?? [];

		// 🔒 Mise en cache
		cachedReviews = reviews;
		lastFetched = now;

		console.log("✅ Avis mis en cache");

		return NextResponse.json(reviews);
	} catch (error) {
		let errorMessage = "Erreur lors de la récupération des avis";
		if (error instanceof Error) {
			errorMessage = error.message;
		}
		console.error(
			"❌ Erreur lors de la récupération des avis Google:",
			errorMessage,
		);
		return NextResponse.json(
			{ error: "Erreur lors de la récupération des avis" },
			{ status: 500 },
		);
	}
}

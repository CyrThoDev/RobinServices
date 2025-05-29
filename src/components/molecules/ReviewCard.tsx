// components/reviews/ReviewCard.tsx
"use client";

import { FaStar } from "react-icons/fa6";
import Link from "next/link";

const GOOGLE_PLACES = process.env.NEXT_PUBLIC_GOOGLE_PLACES;

export type Review = {
	time: number;
	author_name: string;
	author_url: string;
	text: string;
	rating: number;
};

const transformGoogleUrl = (url: string) => {
	const match = url.match(/contrib\/(\d+)/);
	if (!match) return url;
	const userId = match[1];
	return `https://www.google.com/maps/contrib/${userId}/place/${GOOGLE_PLACES}/`;
};

export default function ReviewCard({ review }: { review: Review }) {
	return (
		<div className="border-[0.025rem] rounded-xl border-gold flex flex-col w-full gap-2 p-4 shadow-lg bg-white">
			<p className="text-mb font-bold font-poppin">
				{review.author_name.split(" ")[0].toUpperCase()}
			</p>
			<p className="line-clamp-4 italic text-gray-700">
				&quot;{review.text}&quot;
			</p>
			<Link
				href={transformGoogleUrl(review.author_url)}
				className="font-semibold text-darkorange hover:text-darkorange"
				target="_blank"
			>
				Lire plus
			</Link>
			<p className="text-sm text-gray-600">
				<strong>Note :</strong> {review.rating}/5
			</p>
			<div className="flex flex-row">
				{[...Array(review.rating)].map((_, i) => (
					<span key={i}>
						<FaStar className="text-yellow-400" />
					</span>
				))}
			</div>
		</div>
	);
}

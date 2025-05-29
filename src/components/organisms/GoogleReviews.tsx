"use client";

import { useEffect, useState } from "react";
import Button from "../atoms/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import ReviewCard, { type Review } from "../molecules/ReviewCard";

export default function GoogleReviews() {
	const [reviews, setReviews] = useState<Review[]>([]);

	useEffect(() => {
		const fetchAvis = async () => {
			try {
				const res = await fetch("/api/google-reviews");
				const data = await res.json();
				setReviews(data);
			} catch (error) {
				console.error("Erreur lors de la récupération des avis :", error);
			}
		};

		fetchAvis();
	}, []);

	return (
		<div className="px-10 lg:px-20 flex flex-col gap-10 py-10">
			<h2 className="text-3xl font-bold text-center pb-2 relative inline-block">
				<span className="relative z-10">Avis et Témoignages</span>
				<div className="mx-auto mt-2 h-0.5 bg-secondary w-[80%] max-w-xs rounded-full" />
			</h2>

			{/* Swiper mobile */}
			<div className="w-full lg:hidden">
				{reviews.length > 0 ? (
					<Swiper
						slidesPerView={1.2}
						spaceBetween={20}
						modules={[Pagination]}
						pagination={{ clickable: true }}
						className="mySwiper"
					>
						{reviews.map((review) => (
							<SwiperSlide key={review.time}>
								<ReviewCard review={review} />
							</SwiperSlide>
						))}
					</Swiper>
				) : (
					<p className="text-center text-gray-500">Aucun avis trouvé.</p>
				)}
			</div>

			{/* Desktop */}
			<div className="hidden lg:flex gap-4 justify-center flex-wrap">
				{reviews.length > 0 ? (
					reviews.map((review) => (
						<div key={review.time} className="w-full lg:w-1/5">
							<ReviewCard review={review} />
						</div>
					))
				) : (
					<p className="text-center text-gray-500">Aucun avis trouvé.</p>
				)}
			</div>

			<div className="self-center flex flex-col lg:flex-row gap-4">
				<Button title="DEPOSER UN AVIS" link="" width="w-[16rem]" />
			</div>
		</div>
	);
}

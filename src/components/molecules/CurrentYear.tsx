"use client";
import { useEffect, useState } from "react";

export default function CurrentYear() {
	const [year, setYear] = useState<number | null>(null);

	useEffect(() => {
		setYear(new Date().getFullYear());
	}, []);

	return <>{year ? `${year} - Robin Services` : null}</>;
}
// This component is used to display the current year in the footer of the website.
// It uses the useEffect hook to set the year state when the component mounts.

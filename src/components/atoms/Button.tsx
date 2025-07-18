// atoms/Button.tsx
import Link from "next/link";

export default function Button({ title, link = "#", variant = "primary", width = "" }) {
	const base =
		"px-6 py-3 rounded-2xl font-semibold transition text-center flex items-center justify-center";

	const styles = {
		primary: "bg-orange text-white hover:bg-[#5E3A1B]",
		secondary: "border border-[#D9C8BA] text-darkbraun hover:bg-[#DBBEA4]",
	};

	return (
		<Link href={link} className={`${base} ${styles[variant]} ${width}`}>
			{title}
		</Link>
	);
}

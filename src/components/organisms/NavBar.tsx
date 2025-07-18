"use client";
import Link from "next/link";
import Button from "../atoms/Button";

import Menu from "../molecules/Menu";
import { useEffect, useState } from "react";
import MobileMenu from "../molecules/MobileMenu";
import Logo from "../atoms/Logo";

function NavBar() {
	const [isNavOpen, setIsNavOpen] = useState(false);
	const [isSticky, setIsSticky] = useState(false);

	const toggleNav = () => setIsNavOpen((prev) => !prev);

	useEffect(() => {
		const handleScroll = () => {
			setIsSticky(window.scrollY > 50);
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<>
			{/* Mobile menu */}
			<div
				className={`${
					isSticky
						? "sticky top-0 py-4 px-10 bg-lightbg shadow-md"
						: "bg-lightbg"
				}  py-4 px-10 flex items-center justify-between  min-[1150px]:hidden z-20 transition-all duration-300 `}
			>
				<Logo />
				<button
					type="button"
					className="space-y-2"
					onClick={toggleNav}
					aria-label="Ouvrir le menu mobile"
				>
					<span className="block h-0.5 w-8 bg-darkbraun " />
					<span className="block h-0.5 w-8 bg-darkbraun  " />
					<span className="block h-0.5 w-8 bg-darkbraun " />
				</button>

				<MobileMenu isNavOpen={isNavOpen} toggleNav={toggleNav} />
			</div>

			{/*Desktop menu*/}
			<div
				className={`hidden ${
					isSticky ? "sticky top-0 bg-lightbg shadow-md" : "bg-lightbg"
				}   min-[1150px]:flex justify-between  px-10 xl:px-20 py-4 z-50 `}
			>
		<Logo />

				<Menu />
				<div className="flex flex-row items-center gap-12">
					<Button
						title="Réserver un service"
						width="max-w-fit"
						link="/contact"
					/>
					<Link
						href="Tel:+33678913974"
						className="px-6 py-3 border border-[#D9C8BA] text-darkbraun  rounded-2xl font-semibold hover:bg-[#DBBEA4] transition "
					>
						06 78 91 39 74
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;

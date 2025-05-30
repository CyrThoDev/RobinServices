"use client";
import Link from "next/link";
import Button from "../atoms/Button";
import Image from "next/image";
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
					isSticky ? "sticky top-0 py-4 px-10 bg-white shadow-md" : "bg-white"
				}  py-4 px-10 flex items-center justify-between  min-[1150px]:hidden z-20 transition-all duration-300 `}
			>
				<Logo />
				<button
					type="button"
					className="space-y-2"
					onClick={toggleNav}
					aria-label="Ouvrir le menu mobile"
				>
					<span className="block h-0.5 w-8 bg-black " />
					<span className="block h-0.5 w-8 bg-black  " />
					<span className="block h-0.5 w-8 bg-black  " />
				</button>

				<MobileMenu isNavOpen={isNavOpen} toggleNav={toggleNav} />
			</div>

			{/*Desktop menu*/}
			<div
				className={`hidden ${
					isSticky ? "sticky top-0 bg-white shadow-md" : ""
				} min-[1150px]:flex justify-between  px-10 xl:px-20 py-4 z-20`}
			>
				<Link href="/">
					<Image
						src="/Logosample.png"
						alt="Logo"
						width={100}
						height={100}
						className="hidden md:block"
					/>
				</Link>

				<Menu />
				<div className="flex flex-row items-center gap-12">
					<Button
						title="RESERVER UN SERVICE"
						width="max-w-fit"
						link="/contact"
					/>
					<Link
						href="Tel:+33678913974"
						className=" text-black  font-medium border-2 py-3  px-3 rounded-md"
					>
						06 78 91 39 74
					</Link>
				</div>
			</div>
		</>
	);
}

export default NavBar;

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
					isSticky ? "sticky top-0 bg-white shadow-md" : ""
				}  flex items-center justify-between  min-[1150px]:hidden z-20 transition-all duration-300 `}
			>
				<Logo />
				<button
					type="button"
					className="space-y-2"
					onClick={toggleNav}
					aria-label="Ouvrir le menu mobile"
				>
					<span className="block h-0.5 w-8 bg-black" />
					<span className="block h-0.5 w-8 bg-black" />
					<span className="block h-0.5 w-8 bg-black" />
				</button>

				<MobileMenu isNavOpen={isNavOpen} toggleNav={toggleNav} />
			</div>

			{/*Desktop menu*/}
			<div
				className={`hidden ${
					isSticky ? "sticky top-0 bg-white shadow-md" : ""
				} min-[1150px]:flex justify-between  px-10 xl:px-20 py-2 z-20`}
			>
				<Link href="">
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
					<Link href="" className="">
						0606060606
					</Link>
					<Button title="RESERVER UN SERVICE" width="w-3rem" link="/contact" />
				</div>
			</div>
		</>
	);
}

export default NavBar;

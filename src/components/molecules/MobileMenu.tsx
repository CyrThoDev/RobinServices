import React from "react";
import Logo from "../atoms/Logo";
import Menu from "./Menu";

type MobileMenuPropsType = {
	isNavOpen: boolean;
	toggleNav: () => void;
};

function MobileMenu({ isNavOpen, toggleNav }: MobileMenuPropsType) {
	return (
		<div
			className={`${
				isNavOpen
					? "fixed inset-0 w-full h-screen z-20 flex flex-col justify-center gap-10 items-center bg-white"
					: "hidden"
			}`}
		>
			<button
				type="button"
				className="absolute top-4 right-4"
				onClick={toggleNav}
				aria-label="Fermer le menu"
			>
				<svg
					className="h-8 w-8 text-black"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					strokeWidth="2"
					strokeLinecap="round"
					strokeLinejoin="round"
				>
					<title>cross</title>
					<line x1="18" y1="6" x2="6" y2="18" />
					<line x1="6" y1="6" x2="18" y2="18" />
				</svg>
			</button>
			<Logo />
			<Menu />
		</div>
	);
}

export default MobileMenu;

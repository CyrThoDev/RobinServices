import type { Metadata } from "next";
import { Geist, Geist_Mono, Quicksand } from "next/font/google";
import "./globals.css";
import Footer from "@/components/organisms/Footer";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

const quicksand = Quicksand({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
	variable: "--font-quicksand",
	display: "swap",
});

export const metadata: Metadata = {
	title: "Robin services",
	description: "Multiservices habitat à Mimizan",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} ${quicksand.variable}  font-quicksand antialiased`}
			>
				{children}
			</body>
			<Footer />
		</html>
	);
}

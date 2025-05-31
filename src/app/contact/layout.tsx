import NavBar from "@/components/organisms/NavBar";

export default function PagesLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<NavBar />
			<div>{children}</div>
		</>
	);
}

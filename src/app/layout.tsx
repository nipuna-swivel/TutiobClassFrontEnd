"use client";
import type { Metadata } from "next";
import { store } from "@/store";
import { Provider } from "react-redux";

const metadata: Metadata = {
	title: "Tution Class Application",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>
				{" "}
				<Provider store={store}>{children}</Provider>
			</body>
		</html>
	);
}

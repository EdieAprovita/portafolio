import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
	subsets: ["latin"],
	variable: '--font-inter',
});

const spaceGrotesk = Space_Grotesk({
	subsets: ["latin"],
	variable: '--font-space-grotesk',
});

const jetbrainsMono = JetBrains_Mono({
	subsets: ["latin"],
	variable: '--font-jetbrains-mono',
});

export const metadata: Metadata = {
	title: "Edgar Chavero | Full Stack Developer",
	description:
		"Full Stack Developer with 6+ years of experience in React, Node.js, TypeScript, and modern web technologies. Based in Mexico City.",
	keywords: [
		"Full Stack Developer",
		"React",
		"Node.js",
		"TypeScript",
		"JavaScript",
		"Mexico City",
		"Software Engineer",
	],
	authors: [{ name: "Edgar Chavero" }],
	openGraph: {
		title: "Edgar Chavero - Full Stack Developer",
		description:
			"Creative Full Stack Developer with 6+ years of experience building scalable web applications.",
		type: "website",
		locale: "en_US",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth">
			<body className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} font-sans`}>
				{children}
			</body>
		</html>
	);
}

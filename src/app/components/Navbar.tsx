"use client";

import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

interface NavLinkItem {
	title: string;
	path: string;
}

const navLinks: NavLinkItem[] = [
	{
		title: "About",
		path: "#about",
	},
	{
		title: "Projects",
		path: "#projects",
	},
	{
		title: "Contact",
		path: "#contact",
	},
];

const Navbar: React.FC = () => {
	const [navbarOpen, setNavbarOpen] = useState<boolean>(false);
	const [scrolled, setScrolled] = useState<boolean>(false);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 50);
		};
		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav 
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled 
					? "bg-background/80 backdrop-blur-xl border-b border-border" 
					: "bg-transparent"
				}`}>
			<div className="container-custom">
				<div className="flex items-center justify-between h-20 px-4 sm:px-6 lg:px-8">
					<Link href={"/"} className="flex items-center gap-3 group">
						<div className="relative">
							<Image 
								src="/images/logo.png" 
								width={45} 
								height={45} 
								alt="Logo"
								className="transition-transform duration-300 group-hover:scale-110"
							/>
						</div>
						<span className="font-display font-bold text-xl text-foreground hidden sm:block">
							Edgar<span className="text-accent">.</span>
						</span>
					</Link>

					<div className="hidden md:flex items-center gap-8">
						{navLinks.map((link, index) => (
							<motion.div
								key={link.path}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: index * 0.1 }}
							>
								<NavLink href={link.path} title={link.title} />
							</motion.div>
						))}
						<motion.a
							href="/CV.pdf"
							download
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="btn-primary text-sm py-2 px-6"
						>
							<span>Download CV</span>
						</motion.a>
					</div>

					<div className="md:hidden">
						<button
							onClick={() => setNavbarOpen(!navbarOpen)}
							className="p-2 rounded-lg text-foreground-muted hover:text-foreground hover:bg-background-elevated transition-colors"
							aria-label="Toggle menu">
							{navbarOpen ? (
								<XMarkIcon className="h-6 w-6" />
							) : (
								<Bars3Icon className="h-6 w-6" />
							)}
						</button>
					</div>
				</div>
			</div>

			<AnimatePresence>
				{navbarOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border">
						<MenuOverlay links={navLinks} />
					</motion.div>
				)}
			</AnimatePresence>
		</nav>
	);
};

export default Navbar;

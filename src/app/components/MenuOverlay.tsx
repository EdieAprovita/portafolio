import React from "react";
import Link from "next/link";

interface NavLinkType {
	title: string;
	path: string;
}

interface MenuOverlayProps {
	links: NavLinkType[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
	return (
		<ul className="flex flex-col py-6 px-4 space-y-2">
			{links.map((link, index) => (
				<li key={link.path}>
					<Link
						href={link.path}
						className="block py-3 px-4 text-foreground-muted hover:text-foreground hover:bg-background-card rounded-lg transition-all duration-200 font-medium"
					>
						{link.title}
					</Link>
				</li>
			))}
			<li className="pt-4 border-t border-border mt-4">
				<a
					href="/CV.pdf"
					download
					className="block w-full py-3 px-4 bg-accent text-background text-center rounded-lg font-semibold hover:bg-accent/90 transition-colors"
				>
					Download CV
				</a>
			</li>
		</ul>
	);
};

export default MenuOverlay;

import React from "react";
import { v4 as uuidv4 } from "uuid";

import NavLink from "./NavLink";

interface NavLink {
	title: string;
	path: string;
}

interface MenuOverlayProps {
	links: NavLink[];
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({ links }) => {
	return (
		<ul className="flex flex-col py-4 items-center">
			{links.map(link => (
				<li key={uuidv4()}>
					<NavLink href={link.path} title={link.title} />
				</li>
			))}
		</ul>
	);
};

export default MenuOverlay;

import Link from "next/link";

interface NavLinkProps {
	href: string;
	title: string;
}

const NavLink: React.FC<NavLinkProps> = ({ href, title }) => {
	return (
		<Link
			href={href}
			className="nav-link font-medium text-sm uppercase tracking-wider">
			{title}
		</Link>
	);
};

export default NavLink;

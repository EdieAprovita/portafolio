import Image from "next/image";
import Link from "next/link";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-gray-400 border-t border-gray-700 p-4 md:p-8">
			<div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
				<div className="flex items-center space-x-4">
					<Image src="/images/logo.png" width={50} height={50} alt="Logo" />
					<p>© {new Date().getFullYear()} All rights reserved.</p>
				</div>
				<div className="flex mt-4 md:mt-0 space-x-6">
					<Link href="#" className="hover:text-white transition-colors">
						Home
					</Link>
					<Link href="#about" className="hover:text-white transition-colors">
						About
					</Link>
					<Link href="#projects" className="hover:text-white transition-colors">
						Projects
					</Link>
				</div>
				<div className="flex mt-4 md:mt-0 space-x-6">
					<a
						href="https://www.facebook.com/eacm316"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors">
						<Image src="/images/facebook.png" alt="Facebook" width={34} height={34} />
					</a>
					<a
						href="https://twitter.com/ed316"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors">
						<Image src="/images/twitter.png" alt="Twitter" width={34} height={34} />
					</a>
					<a
						href="https://instagram.com/ed316"
						target="_blank"
						rel="noopener noreferrer"
						className="hover:text-white transition-colors">
						<Image src="/images/instagram.png" alt="Instagram" width={34} height={34} />
					</a>
				</div>
			</div>
		</footer>
	);
};

export default Footer;

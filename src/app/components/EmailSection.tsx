import Image from "next/image";
import Link from "next/link";

const EmailSection: React.FC = () => {
	return (
		<section
			id="contact"
			className="flex flex-col md:flex-row items-center justify-center md:justify-between my-12 py-24 gap-6 relative bg-gradient-to-br from-gray-800 to-gray-900 text-white">
			<div className="bg-[radial-gradient(circle,_var(--tw-gradient-stops))] from-blue-600 to-transparent rounded-full h-80 w-80 blur-lg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 filter opacity-20"></div>
			<div className="z-10 px-4 text-center md:text-left">
				<h5 className="text-2xl font-bold mb-2">Lets Connect</h5>
				<p className="text-gray-300 mb-4 max-w-lg">
					Im currently looking for new opportunities, my inbox is always open. Whether you
					have a question or just want to say hi, I´ll try my best to get back to you!
				</p>
				<div className="flex justify-center md:justify-start gap-4">
					<Link href="https://github.com/EdieAprovita">
						<Image
							className="hover:scale-110 transition-transform"
							src="/github-icon.svg"
							alt="Github Icon"
							width={30}
							height={30}
							layout="fixed"
						/>
					</Link>
					<Link href="https://www.linkedin.com/in/edgar-chavero/">
						<Image
							className="hover:scale-110 transition-transform"
							src="/linkedin-icon.svg"
							alt="LinkedIn Icon"
							width={30}
							height={30}
							layout="fixed"
						/>
					</Link>
					<Link href="mailto:eacm316@gmail.com">
						<Image
							className="hover:scale-110 transition-transform"
							src="/images/gmail.png"
							alt="Gmail Icon"
							width={28}
							height={28}
							layout="fixed"
						/>
					</Link>
				</div>
			</div>
		</section>
	);
};

export default EmailSection;

"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
	return (
		<section className="lg:py-16">
			<div className="grid grid-cols-1 sm:grid-cols-12">
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
					<h1 className="text-white mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, I&apos;m{" "}
						</span>
						<br></br>
						<TypeAnimation
							sequence={[
								"Edgar Chavero",
								1000,
								"Frontend",
								1000,
								"Backend",
								1000,
								"React / Node",
								1000,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl">
						I am a creative and advanced full-stack developer based in Mexico City with
						over five years of experience specializing in both front-end and back-end
						technologies. Proficient in JavaScript, React, Node.js, MongoDB, HTML, CSS,
						Express, and Mongoose, I have a track record of developing robust digital
						solutions and enhancing server performance using modern software development
						methodologies including Agile and Scrum. I have contributed significantly to
						various high-impact projects, such as developing scalable APIs for government
						revenue systems and e-commerce platforms, and architecting digital platforms
						for educational services. My roles have ranged from Application Developer at
						Eviden, where I focused on server optimization and UI enhancements, to Lead
						Software Developer at Persistent Systems, overseeing UI development and API
						construction. Additionally, I have held positions at TCS and as a freelance
						developer, further honing my skills in system architecture, data privacy, and
						performance optimization. Educationally, I am advancing my expertise with a
						Masters in Cloud Computing from Universidad Tecnológica and have completed
						professional development in cloud technologies. My technical prowess is
						complemented by my fluency in English and Spanish, enabling effective
						communication and teamwork in diverse environments.
					</p>
					<div>
						<Link
							href="/CV.pdf"
							download={true}
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Download CV
							</span>
						</Link>
						<Link
							href="https://github.com/EdieAprovita"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-white mt-3">
							<span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">
								Github
							</span>
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/images/image.png"
							alt="hero image"
							className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={300}
							height={300}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;

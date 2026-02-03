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
					<h1 className="text-white mb-4 text-xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
							Hello, I&apos;m{" Edgar Chavero "}
						</span>
						<br />
						<TypeAnimation
							sequence={[
								"Edgar Chavero",
								2000,
								"Frontend",
								2000,
								"Backend",
								2000,
								"React / Node",
								2500,
								"Fullstack",
								2500,
							]}
							wrapper="span"
							speed={50}
							repeat={Infinity}
						/>
					</h1>
					<p className="text-[#f0f0f0] text-base sm:text-lg mb-8 lg:text-xl">
						I am a creative Full Stack Developer based in Mexico City with over six years
						of experience. Currently working at GBG, I am proficient in JavaScript, React,
						Node.js, TypeScript, MongoDB, PostgreSQL, HTML, and CSS. I excel in both
						front-end and back-end development, having contributed to high-impact projects
						including scalable APIs for government systems and e-commerce platforms. My
						bilingual proficiency in English and Spanish supports effective communication
						and collaboration in diverse teams.
					</p>
					<div>
						<Link
							href="/CV.pdf"
							download={true}
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-gold-500 mt-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-dark">
							<span className="block bg-primary-600 hover:bg-primary-500 rounded-full px-5 py-2 text-white">
								Download CV
							</span>
						</Link>
						<Link
							href="https://github.com/EdieAprovita"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-gold-500 mt-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-dark">
							<span className="block bg-primary-600 hover:bg-primary-500 rounded-full px-5 py-2 text-white">
								Github
							</span>
						</Link>
						<Link
							href="https://www.hackerrank.com/profile/edieveg316"
							className="px-1 inline-block py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-500 to-secondary-500 hover:bg-slate-800 text-gold-500 mt-3 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2 focus:ring-offset-dark">
							<span className="block bg-primary-600 hover:bg-primary-500 rounded-full px-5 py-2 text-white">
								HackerRank
							</span>
						</Link>
					</div>
				</motion.div>
				<motion.div
					initial={{ opacity: 0, scale: 0.5 }}
					animate={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.5 }}
					className="col-span-4 place-self-center mt-4 lg:mt-0">
					<div className="rounded-full bg-dark-lighter w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
						<Image
							src="/images/image.png"
							alt="hero image"
							className=" rounded-full absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
							width={400}
							height={400}
						/>
					</div>
				</motion.div>
			</div>
		</section>
	);
};

export default HeroSection;

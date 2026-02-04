"use client";

import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { ArrowDownIcon } from "@heroicons/react/24/outline";

// Custom SVG Icons
const GithubIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
  </svg>
);

const LinkedinIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
);

const HeroSection = () => {
	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
			{/* Background Elements */}
			<div className="absolute inset-0 overflow-hidden">
				<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[128px]" />
				<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-violet/20 rounded-full blur-[128px]" />
				<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-accent/10 to-accent-violet/10 rounded-full blur-[100px]" />
			</div>

			{/* Grid Pattern */}
			<div 
				className="absolute inset-0 opacity-[0.02]"
				style={{
					backgroundImage: `linear-gradient(rgba(255,255,255,.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.1) 1px, transparent 1px)`,
					backgroundSize: '50px 50px'
				}}
			/>

			<div className="container-custom relative z-10 px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					{/* Left Content */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, ease: "easeOut" }}
						className="text-center lg:text-left"
					>
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-background-elevated border border-border mb-6"
						>
							<span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
							<span className="text-sm text-foreground-muted font-mono">Available for work</span>
						</motion.div>

						<h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-6">
							<span className="text-foreground">Hi, I&apos;m </span>
							<br className="hidden sm:block" />
							<span className="text-gradient">Edgar Chavero</span>
						</h1>

						<div className="h-16 sm:h-20 mb-8">
							<TypeAnimation
								sequence={[
									"Full Stack Developer",
									2000,
									"React Specialist",
									2000,
									"Node.js Expert",
									2000,
									"TypeScript Enthusiast",
									2000,
								]}
								wrapper="span"
								speed={50}
								repeat={Infinity}
								className="text-2xl sm:text-3xl lg:text-4xl text-foreground-muted font-light"
							/>
						</div>

						<p className="text-lg text-foreground-muted max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed">
							Creative developer with 6+ years of experience building scalable web applications. 
							Currently at GBG, crafting intelligent solutions with React, Node.js, and TypeScript.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<motion.a
								href="/CV.pdf"
								download
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
								className="btn-primary inline-flex items-center justify-center gap-2"
							>
								<span>Download CV</span>
								<ArrowDownIcon className="w-4 h-4" />
							</motion.a>
							
							<div className="flex gap-3 justify-center">
								<motion.a
									href="https://github.com/EdieAprovita"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="btn-outline p-4"
								>
									<GithubIcon />
								</motion.a>
								<motion.a
									href="https://www.linkedin.com/in/edgar-chavero/"
									target="_blank"
									rel="noopener noreferrer"
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.9 }}
									className="btn-outline p-4"
								>
									<LinkedinIcon />
								</motion.a>
							</div>
						</div>
					</motion.div>

					{/* Right Content - Image */}
					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.3 }}
						className="relative flex justify-center lg:justify-end"
					>
						<div className="relative">
							{/* Glow Effect */}
							<div className="absolute inset-0 bg-gradient-to-r from-accent/30 to-accent-violet/30 rounded-full blur-3xl scale-110" />
							
							{/* Image Container */}
							<motion.div
								animate={{ y: [0, -20, 0] }}
								transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
								className="relative w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[450px] lg:h-[450px]"
							>
								<Image
									src="/images/image.png"
									alt="Edgar Chavero"
									fill
									className="object-contain drop-shadow-2xl"
									priority
								/>
							</motion.div>

							{/* Floating Tech Badges */}
							<motion.div
								animate={{ y: [0, -10, 0] }}
								transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
								className="absolute -left-4 top-1/4 px-4 py-2 bg-background-card/90 backdrop-blur-sm rounded-lg border border-border shadow-xl"
							>
								<span className="text-accent font-mono text-sm">React</span>
							</motion.div>

							<motion.div
								animate={{ y: [0, 10, 0] }}
								transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
								className="absolute -right-4 top-1/2 px-4 py-2 bg-background-card/90 backdrop-blur-sm rounded-lg border border-border shadow-xl"
							>
								<span className="text-accent-violet font-mono text-sm">Node.js</span>
							</motion.div>

							<motion.div
								animate={{ y: [0, -8, 0] }}
								transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
								className="absolute left-1/4 -bottom-4 px-4 py-2 bg-background-card/90 backdrop-blur-sm rounded-lg border border-border shadow-xl"
							>
								<span className="text-foreground font-mono text-sm">TypeScript</span>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Scroll Indicator */}
			<motion.div
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ delay: 1.5 }}
				className="absolute bottom-8 left-1/2 -translate-x-1/2"
			>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{ duration: 2, repeat: Infinity }}
					className="flex flex-col items-center gap-2 text-foreground-muted"
				>
					<span className="text-sm font-mono">Scroll</span>
					<div className="w-[1px] h-12 bg-gradient-to-b from-accent to-transparent" />
				</motion.div>
			</motion.div>
		</section>
	);
};

export default HeroSection;

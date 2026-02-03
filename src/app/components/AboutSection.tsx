"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useInView } from "framer-motion";
import TabButton from "./TabButton";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
	ssr: false,
});

const STATS = [
	{ value: 6, label: "Years Experience", suffix: "+" },
	{ value: 500, label: "LinkedIn Connections", suffix: "+" },
	{ value: 1000, label: "Followers", suffix: "+" },
];

interface TabData {
	title: string;
	id: string;
	content: JSX.Element;
}

const TAB_DATA: TabData[] = [
	{
		title: "Skills",
		id: "skills",
		content: (
			<ul className="list-none space-y-2 pl-5">
				{[
					"React.js",
					"Node.js",
					"TypeScript",
					"JavaScript (ES6+)",
					"PostgreSQL",
					"MongoDB",
					"HTML/CSS",
					"Express.js",
					"CSS Grid / Flexbox",
				].map(item => (
					<li key={item} className="flex items-center">
						<Image
							src="/check.svg"
							alt="Check icon"
							width={24}
							height={24}
							className="mr-2"
						/>
						{item}
					</li>
				))}
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-none space-y-2 pl-5">
				{[
					"TECH Technological University",
					"Degree: Software Engineering",
					"Graduation: January 2024",
				].map(item => (
					<li key={item} className="flex items-center">
						<Image
							src="/check.svg"
							alt="Check icon"
							width={24}
							height={24}
							className="mr-2"
						/>
						{item}
					</li>
				))}
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-none space-y-2 pl-5">
				{[
					"Platzi - React.js, HTML/CSS, CSS Grid, Frontend Developer",
					"Ironhack - Web Development Bootcamp",
					"Claude Code Certification",
				].map(item => (
					<li key={item} className="flex items-center">
						<Image
							src="/check.svg"
							alt="Check icon"
							width={24}
							height={24}
							className="mr-2"
						/>
						{item}
					</li>
				))}
			</ul>
		),
	},
];

const AboutSection: React.FC = () => {
	const [tab, setTab] = useState<string>("skills");
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const handleTabChange = (id: string) => {
		setTab(id);
	};

	return (
		<section id="about" className="bg-secondary-600 text-white py-12 px-4 md:px-8 lg:px-12">
			<motion.div
				ref={ref}
				initial={{ opacity: 0, y: 50 }}
				animate={isInView ? { opacity: 1, y: 0 } : {}}
				transition={{ duration: 0.6 }}
				className="container mx-auto">
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<Image
						src="/images/setup.png"
						width={500}
						height={500}
						alt="About Me"
						className="rounded-lg shadow-lg w-full max-w-sm mx-auto md:mx-0 md:max-w-none"
					/>
					<div>
						<h2 className="text-4xl font-bold mb-6">About Me</h2>
						<p className="text-lg mb-4 leading-relaxed">
							Creative full stack developer with a strong passion for bringing new ideas
							to life and extensive experience in collaborative development. Currently
							working at GBG, I am skilled in JavaScript, React, Node.js, TypeScript,
							MongoDB, and PostgreSQL. I am looking to contribute my expertise in full
							stack development to help transform innovative concepts into impactful
							digital solutions.
						</p>
						<div className="flex space-x-4 overflow-x-auto pb-4">
							{TAB_DATA.map(tabData => (
								<TabButton
									key={tabData.id}
									selectTab={() => handleTabChange(tabData.id)}
									active={tab === tabData.id}>
									{tabData.title}
								</TabButton>
							))}
						</div>
						<div className="pt-4">{TAB_DATA.find(t => t.id === tab)?.content}</div>
					</div>
				</div>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : {}}
					transition={{ duration: 0.6, delay: 0.3 }}
					className="grid grid-cols-3 gap-8 mt-12 pt-8 border-t border-gray-700">
					{STATS.map(stat => (
						<div key={stat.label} className="text-center">
							<div className="flex items-center justify-center text-4xl font-bold text-primary-400">
								<AnimatedNumbers
									includeComma
									animateToNumber={stat.value}
								/>
								<span>{stat.suffix}</span>
							</div>
							<p className="text-muted mt-2">{stat.label}</p>
						</div>
					))}
				</motion.div>
			</motion.div>
		</section>
	);
};

export default AboutSection;

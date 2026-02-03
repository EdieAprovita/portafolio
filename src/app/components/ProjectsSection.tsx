"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";
import ProjectTag from "./ProjectTag";

interface Project {
	id: string;
	title: string;
	description: string;
	image: string;
	tag: string[];
	gitUrl?: string;
	previewUrl: string;
}

const projectsData: Project[] = [
	{
		id: "gbg-smart-capture",
		title: "Smart Capture Web SDK at GBG",
		description:
			"Lead developer of a Web Components SDK for intelligent document and facial capture. Built with Lit.js, TypeScript, WebRTC, and WASM for real-time image analysis, glare/blur detection, and biometric verification.",
		image: "/images/projects/gbg-logo.png",
		tag: ["Client"],
		previewUrl: "https://www.gbg.com/en/",
	},
	{
		id: "eviden-app-dev",
		title: "Application Developer at Eviden",
		description:
			"Worked with servers and increased server velocity using Node.js and Express. Implemented new UI features with React and Material UI, and followed Agile methodologies.",
		image: "/images/projects/HomeDepot.png",
		tag: ["Client"],
		previewUrl: "https://www.homedepot.com/",
	},
	{
		id: "government-saas",
		title: "API Development for Government Revenue SaaS",
		description:
			"Lead UI development and API construction for a sophisticated SaaS platform that served a government revenue company using Node.js and React.",
		image: "/images/projects/Rsi.jpeg",
		tag: ["Client"],
		previewUrl: "https://www.rsidelivers.com/",
	},
	{
		id: "tcs-systems",
		title: "Assistant Systems Engineer at TCS",
		description:
			"Drove front-end development using React, Bootstrap, Redux, Hooks-redux, and JavaScript DOM. Implemented API architecture, created microservices with JWT, and used AWS (S3, EC2, Lambda) with MongoDB/Mongoose.",
		image: "/images/projects/USAA.png",
		tag: ["Client"],
		previewUrl: "https://www.usaa.com",
	},
	{
		id: "ecommerce-api",
		title: "E-commerce API",
		description:
			"Designed and implemented a scalable API for an e-commerce platform, integrating database operations with Sequelize and Mongoose, ensuring data integrity and security.",
		image: "/images/projects/5.png",
		tag: ["Personal"],
		gitUrl: "https://github.com/EdieAprovworking/ecommerce-api",
		previewUrl: "https://yourecommerceapi.com",
	},
	{
		id: "education-platform",
		title: "Digital Platform for Education",
		description:
			"Developed a digital platform for education, implementing real-time chat functionality, grading systems, and a resource-sharing module.",
		image: "/images/projects/6.png",
		tag: ["Personal"],
		gitUrl: "https://github.com/EdieAprovita/education-platform",
		previewUrl: "https://youreducationplatform.com",
	},
	{
		id: "travel-backend",
		title: "Backend Developer at Travel Assistance Company",
		description:
			"Worked on improving traveler experience by designing and implementing the Coupons and Travel Agencies modules using PostgreSQL, Node.js, and Express.",
		image: "/images/projects/Traveling.jpeg",
		tag: ["Client"],
		previewUrl: "https://yourtravelassistanceproject.com",
	},
];

const ProjectsSection: React.FC = () => {
	const [tag, setTag] = useState<string>("Client");
	const ref = useRef<HTMLUListElement>(null);
	const isInView = useInView(ref, { once: true });

	const handleTagChange = (newTag: string) => {
		setTag(newTag);
	};

	const filteredProjects = projectsData.filter(project => project.tag.includes(tag));

	const cardVariants = {
		initial: { y: 50, opacity: 0 },
		animate: { y: 0, opacity: 1 },
	};

	return (
		<section id="projects" className="bg-dark text-white py-12 px-4 md:px-8 lg:px-12">
			<div className="container mx-auto">
				<h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">My Projects</h2>
				<div className="flex justify-center items-center gap-4 mb-6">
					{["Client", "Personal"].map(item => (
						<ProjectTag
							key={item}
							onClick={() => handleTagChange(item)}
							name={item}
							isSelected={tag === item}
						/>
					))}
				</div>
				<ul ref={ref} className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
					{filteredProjects.map((project, index) => (
						<motion.li
							key={project.id}
							variants={cardVariants}
							initial="initial"
							animate={isInView ? "animate" : "initial"}
							transition={{ duration: 0.3, delay: index * 0.1 }}
							className="shadow-lg hover:shadow-xl transition-shadow duration-300">
							<ProjectCard
								title={project.title}
								description={project.description}
								imgUrl={project.image}
								gitUrl={project.gitUrl}
								previewUrl={project.previewUrl}
							/>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	);
};

export default ProjectsSection;

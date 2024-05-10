"use client";

import React, { useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

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
			<ul className="list-disc pl-5 space-y-2">
				<li>Node.js</li>
				<li>Express</li>
				<li>PostgreSQL</li>
				<li>MongoDB</li>
				<li>Sequelize</li>
				<li>Typescript</li>
				<li>React</li>
			</ul>
		),
	},
	{
		title: "Education",
		id: "education",
		content: (
			<ul className="list-disc pl-5 space-y-2">
				<li>Universidad Tecnologica Techtitute</li>
				<li>Degree: Software Engineer</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-5 space-y-2">
				<li>Universidad Tecnologica Techtitute</li>
				<li>Master: Cloud Computing</li>
			</ul>
		),
	},
];

const AboutSection: React.FC = () => {
	const [tab, setTab] = useState<string>("skills");

	const handleTabChange = (id: string) => {
		setTab(id);
	};

	return (
		<section className="bg-gray-800 text-white py-12 px-4">
			<div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
				<Image
					src="/images/setup.png"
					width={500}
					height={500}
					alt="About Me"
					className="rounded-lg shadow-lg"
				/>
				<div>
					<h2 className="text-4xl font-bold mb-6">About Me</h2>
					<p className="text-lg mb-4">
						Creative full stack developer with a strong passion for bringing new ideas to
						life and extensive experience in collaborative development. Skilled in
						JavaScript, React, Node.js, MongoDB, HTML, CSS, Express, and Mongoose, Im
						looking to contribute my expertise in full stack development to help the
						company transform innovative concepts into impactful digital solutions.
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
		</section>
	);
};

export default AboutSection;

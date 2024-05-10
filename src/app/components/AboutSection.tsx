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
			<ul className="list-disc pl-2">
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
			<ul className="list-disc pl-2">
				<li>Universidad Tecnologica Techtitute</li>
				<li>Degree: Software Engineer</li>
			</ul>
		),
	},
	{
		title: "Certifications",
		id: "certifications",
		content: (
			<ul className="list-disc pl-2">
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
		<section className="text-white" id="about">
			<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
				<Image src="/images/setup.png" width={500} height={500} alt="" />
				<div className="mt-4 md:mt-0 text-left flex flex-col h-full">
					<h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
					<p className="text-base lg:text-lg">
						Creative full stack developer with a strong passion for bringing new ideas to
						life and extensive experience in collaborative development. Skilled in
						JavaScript, React, Node.js, MongoDB, HTML, CSS, Express, and Mongoose, Im
						looking to contribute my expertise in full stack development to help the
						company transform innovative concepts into impactful digital solutions.
					</p>
					<div className="flex flex-row justify-start mt-8">
						{TAB_DATA.map(tabData => (
							<TabButton
								key={tabData.id}
								selectTab={() => handleTabChange(tabData.id)}
								active={tab === tabData.id}>
								{tabData.title}
							</TabButton>
						))}
					</div>
					<div className="mt-8">{TAB_DATA.find(t => t.id === tab)?.content}</div>
				</div>
			</div>
		</section>
	);
};

export default AboutSection;

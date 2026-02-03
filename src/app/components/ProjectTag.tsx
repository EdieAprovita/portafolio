import React from "react";

interface ProjectTagProps {
	name: string;
	onClick: (name: string) => void;
	isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "text-white bg-primary-600 border-primary-600"
		: "text-muted bg-transparent border-muted hover:bg-primary-500 hover:text-white hover:border-primary-500";
	return (
		<button
			className={`rounded-full border-2 px-6 py-3 text-base cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 ${buttonStyles}`}
			onClick={() => onClick(name)}>
			{name}
		</button>
	);
};

export default ProjectTag;

import React from "react";

interface ProjectTagProps {
	name: string;
	onClick: (name: string) => void;
	isSelected: boolean;
}

const ProjectTag: React.FC<ProjectTagProps> = ({ name, onClick, isSelected }) => {
	const buttonStyles = isSelected
		? "text-white bg-blue-500 border-blue-500"
		: "text-gray-300 bg-transparent border-gray-500 hover:bg-blue-500 hover:text-white hover:border-blue-500";
	return (
		<button
			className={`rounded-full border-2 px-6 py-3 text-xl cursor-pointer transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${buttonStyles}`}
			onClick={() => onClick(name)}>
			{name}
		</button>
	);
};

export default ProjectTag;

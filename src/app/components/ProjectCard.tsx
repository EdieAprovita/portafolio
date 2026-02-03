import React from "react";
import { CodeBracketIcon, EyeIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import Image from "next/image";

interface ProjectCardProps {
	imgUrl: string;
	title: string;
	description: string;
	gitUrl?: string;
	previewUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
	imgUrl,
	title,
	description,
	gitUrl,
	previewUrl,
}) => {
	// Detectar si es un logo (archivos con 'logo' en el nombre)
	const isLogo = imgUrl.toLowerCase().includes('logo');

	return (
		<div className="shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-xl overflow-hidden">
			<div className={`h-52 md:h-72 rounded-t-xl relative group overflow-hidden ${isLogo ? 'bg-white' : ''}`}>
				<Image
					src={imgUrl}
					alt={title}
					fill
					className={isLogo ? 'object-contain p-8' : 'object-cover'}
					sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
				/>
				<div className="overlay items-center justify-center absolute top-0 left-0 w-full h-full bg-dark-lighter bg-opacity-0 hidden group-hover:flex group-hover:bg-opacity-80 transition-all duration-500 gap-4 z-10">
					{gitUrl && (
						<Link
							href={gitUrl}
							className="h-14 w-14 border-2 rounded-full border-muted hover:border-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300">
							<CodeBracketIcon className="h-8 w-8 text-muted hover:text-white cursor-pointer" />
						</Link>
					)}
					{previewUrl && (
						<Link
							href={previewUrl}
							className="h-14 w-14 border-2 rounded-full border-muted hover:border-white flex items-center justify-center transition-colors focus:outline-none focus:ring-2 focus:ring-blue-300">
							<EyeIcon className="h-8 w-8 text-muted hover:text-white cursor-pointer" />
						</Link>
					)}
				</div>
			</div>
			<div className="text-white rounded-b-xl bg-dark-lighter py-6 px-4">
				<h5 className="text-xl font-semibold mb-2">{title}</h5>
				<p className="text-muted">{description}</p>
			</div>
		</div>
	);
};

export default ProjectCard;

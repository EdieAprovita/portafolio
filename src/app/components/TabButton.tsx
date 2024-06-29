import React from "react";
import { motion } from "framer-motion";

const variants = {
	default: { width: 0 },
	active: { width: "calc(100% - 0.75rem)" },
};

interface TabButtonProps {
	active: boolean;
	selectTab: () => void;
	children: React.ReactNode;
}

const TabButton: React.FC<TabButtonProps> = ({ active, selectTab, children }) => {
	const buttonClasses = active
		? "text-white bg-blue-500 border-blue-500"
		: "text-gray-300 bg-transparent border-gray-500 hover:bg-blue-500 hover:text-white hover:border-blue-500";

	return (
		<button
			onClick={selectTab}
			className={`px-4 py-2 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-300 ${buttonClasses}`}>
			<p className="font-semibold">{children}</p>
			<motion.div
				animate={active ? "active" : "default"}
				variants={variants}
				className="h-1 bg-primary-500 mt-2"
			/>
		</button>
	);
};

export default TabButton;

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
		? "text-white bg-primary-600 border-primary-600"
		: "text-muted bg-transparent border-muted hover:bg-primary-500 hover:text-white hover:border-primary-500";

	return (
		<button
			onClick={selectTab}
			className={`relative px-4 py-3 rounded-full border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-400 ${buttonClasses}`}>
			<p className="font-semibold">{children}</p>
			<motion.div
				animate={active ? "active" : "default"}
				variants={variants}
				className="absolute bottom-0 left-0 h-1 bg-primary-500 mt-2"
			/>
		</button>
	);
};

export default TabButton;

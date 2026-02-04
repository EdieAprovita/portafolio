"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import ProjectCard from "./ProjectCard";

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  tag: string[];
  tech: string[];
  gitUrl?: string;
  previewUrl: string;
}

const projectsData: Project[] = [
  {
    id: "gbg-smart-capture",
    title: "Smart Capture Web SDK",
    description:
      "Lead developer of a Web Components SDK for intelligent document and facial capture. Built with Lit.js, TypeScript, WebRTC, and WASM for real-time image analysis and biometric verification.",
    image: "/images/projects/gbg-logo.png",
    tag: ["Client"],
    tech: ["Lit.js", "TypeScript", "WebRTC", "WASM"],
    previewUrl: "https://www.gbg.com/en/",
  },
  {
    id: "eviden-app-dev",
    title: "Home Depot E-commerce",
    description:
      "Worked with servers and increased server velocity using Node.js and Express. Implemented new UI features with React and Material UI for enhanced customer experience.",
    image: "/images/projects/HomeDepot.png",
    tag: ["Client"],
    tech: ["React", "Node.js", "Express", "Material UI"],
    previewUrl: "https://www.homedepot.com/",
  },
  {
    id: "government-saas",
    title: "Government Revenue SaaS",
    description:
      "Lead UI development and API construction for a sophisticated SaaS platform serving a government revenue company using Node.js and React with complex data visualization.",
    image: "/images/projects/Rsi.jpeg",
    tag: ["Client"],
    tech: ["Node.js", "React", "PostgreSQL", "AWS"],
    previewUrl: "https://www.rsidelivers.com/",
  },
  {
    id: "tcs-systems",
    title: "USAA Banking Platform",
    description:
      "Drove front-end development using React, Bootstrap, Redux. Implemented API architecture, created microservices with JWT, and utilized AWS services with MongoDB.",
    image: "/images/projects/USAA.png",
    tag: ["Client"],
    tech: ["React", "Redux", "AWS", "MongoDB"],
    previewUrl: "https://www.usaa.com",
  },
  {
    id: "ecommerce-api",
    title: "E-commerce API",
    description:
      "Designed and implemented a scalable RESTful API for an e-commerce platform, integrating database operations with Sequelize and Mongoose, ensuring data integrity.",
    image: "/images/projects/5.png",
    tag: ["Personal"],
    tech: ["Node.js", "Express", "Sequelize", "MongoDB"],
    gitUrl: "https://github.com/EdieAprovworking/ecommerce-api",
    previewUrl: "https://yourecommerceapi.com",
  },
  {
    id: "education-platform",
    title: "Education Platform",
    description:
      "Developed a comprehensive digital platform for education featuring real-time chat, grading systems, and resource-sharing capabilities for students and teachers.",
    image: "/images/projects/6.png",
    tag: ["Personal"],
    tech: ["React", "Socket.io", "Node.js", "MongoDB"],
    gitUrl: "https://github.com/EdieAprovita/education-platform",
    previewUrl: "https://youreducationplatform.com",
  },
];

const categories = ["All", "Client", "Personal"];

const ProjectsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.tag.includes(activeCategory));

  return (
    <section id="projects" className="section-padding relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-violet/5 rounded-full blur-[150px]" />
      </div>

      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-mono text-sm mb-4">
            Portfolio
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-2xl mx-auto">
            A selection of my recent work, ranging from enterprise applications 
            to personal passion projects.
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? "bg-accent text-background shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                  : "bg-background-card text-foreground-muted hover:text-foreground border border-border"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard
                title={project.title}
                description={project.description}
                image={project.image}
                tech={project.tech}
                gitUrl={project.gitUrl}
                previewUrl={project.previewUrl}
                tag={project.tag[0]}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* View More CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <a
            href="https://github.com/EdieAprovita"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline inline-flex items-center gap-2"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;

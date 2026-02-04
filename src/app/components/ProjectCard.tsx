"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowTopRightOnSquareIcon, CodeBracketIcon } from "@heroicons/react/24/outline";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tech: string[];
  gitUrl?: string;
  previewUrl: string;
  tag: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tech,
  gitUrl,
  previewUrl,
  tag,
}) => {
  const isLogo = image.toLowerCase().includes("logo");

  return (
    <motion.div
      whileHover={{ y: -8 }}
      transition={{ duration: 0.3 }}
      className="card-glass h-full flex flex-col group"
    >
      {/* Image Container */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className={`transition-transform duration-500 group-hover:scale-110 ${
            isLogo ? "object-contain p-8 bg-white/5" : "object-cover"
          }`}
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background-card via-background-card/50 to-transparent opacity-60" />
        
        {/* Tag Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 rounded-full text-xs font-mono font-medium ${
            tag === "Client" 
              ? "bg-accent/20 text-accent border border-accent/30" 
              : "bg-accent-violet/20 text-accent-violet border border-accent-violet/30"
          }`}>
            {tag}
          </span>
        </div>

        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {gitUrl && (
            <Link
              href={gitUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
              aria-label="View Source Code"
            >
              <CodeBracketIcon className="w-5 h-5" />
            </Link>
          )}
          <Link
            href={previewUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-background/90 backdrop-blur-sm rounded-lg border border-border hover:border-accent hover:text-accent transition-colors"
            aria-label="View Live Project"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </Link>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-grow p-6">
        <h3 className="font-display font-semibold text-xl text-foreground mb-3 group-hover:text-accent transition-colors">
          {title}
        </h3>
        <p className="text-foreground-muted text-sm leading-relaxed mb-4 flex-grow">
          {description}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tech.map((item) => (
            <span
              key={item}
              className="px-3 py-1 text-xs font-mono bg-background/50 border border-border rounded-md text-foreground-muted"
            >
              {item}
            </span>
          ))}
        </div>
      </div>

      {/* Hover Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 to-accent-violet/5 rounded-2xl" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;

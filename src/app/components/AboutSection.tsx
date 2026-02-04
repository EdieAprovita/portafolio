"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { 
  CodeBracketIcon, 
  AcademicCapIcon, 
  TrophyIcon,
  CheckCircleIcon 
} from "@heroicons/react/24/outline";

const AnimatedNumbers = dynamic(() => import("react-animated-numbers"), {
  ssr: false,
});

const STATS = [
  { value: 6, label: "Years Experience", suffix: "+" },
  { value: 50, label: "Projects Completed", suffix: "+" },
  { value: 20, label: "Technologies", suffix: "+" },
];

const SKILLS = [
  { name: "React.js", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "TypeScript", level: 92 },
  { name: "Next.js", level: 88 },
  { name: "PostgreSQL", level: 85 },
  { name: "MongoDB", level: 82 },
  { name: "AWS", level: 78 },
  { name: "GraphQL", level: 75 },
];

const EDUCATION = [
  {
    school: "TECH Technological University",
    degree: "Software Engineering",
    year: "2024",
    description: "Comprehensive software engineering program with focus on modern development practices.",
  },
];

const CERTIFICATIONS = [
  { name: "Platzi - Frontend Developer Career", issuer: "Platzi" },
  { name: "Ironhack Web Development Bootcamp", issuer: "Ironhack" },
  { name: "AWS Cloud Practitioner", issuer: "Amazon Web Services" },
];

interface Tab {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const tabs: Tab[] = [
  { id: "skills", label: "Skills", icon: <CodeBracketIcon className="w-5 h-5" /> },
  { id: "education", label: "Education", icon: <AcademicCapIcon className="w-5 h-5" /> },
  { id: "certifications", label: "Certifications", icon: <TrophyIcon className="w-5 h-5" /> },
];

const AboutSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-background-elevated/50" />
      
      <div className="container-custom relative z-10" ref={ref}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-accent/10 text-accent font-mono text-sm mb-4">
            About Me
          </span>
          <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-foreground mb-6">
            Passionate About <span className="text-gradient">Code</span>
          </h2>
          <p className="text-foreground-muted text-lg max-w-3xl mx-auto leading-relaxed">
            I&apos;m a creative full stack developer who loves turning complex problems into 
            elegant solutions. With expertise in modern web technologies, I build applications 
            that are both powerful and user-friendly.
          </p>
        </motion.div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Image */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-accent/20 to-accent-violet/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="relative overflow-hidden rounded-2xl border border-border">
                <Image
                  src="/images/setup.png"
                  width={600}
                  height={400}
                  alt="My workspace"
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <p className="font-mono text-sm text-foreground-muted">
                    <span className="text-accent">$</span> currently_working_at = &quot;GBG&quot;;
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {STATS.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  className="card-glass p-6 text-center group"
                >
                  <div className="flex items-center justify-center text-3xl sm:text-4xl font-display font-bold text-foreground mb-2">
                    <AnimatedNumbers includeComma animateToNumber={stat.value} />
                    <span className="text-accent">{stat.suffix}</span>
                  </div>
                  <p className="text-foreground-muted text-sm">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right - Tabs Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Tab Buttons */}
            <div className="flex flex-wrap gap-2 mb-8">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-accent text-background shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                      : "bg-background-card text-foreground-muted hover:text-foreground hover:bg-background-elevated border border-border"
                  }`}
                >
                  {tab.icon}
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="card-glass p-8 min-h-[400px]">
              <AnimatePresence mode="wait">
                {activeTab === "skills" && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                      Technical Expertise
                    </h3>
                    {SKILLS.map((skill, index) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-foreground font-medium">{skill.name}</span>
                          <span className="text-foreground-muted">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-background rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                            className="h-full bg-gradient-to-r from-accent to-accent-violet rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "education" && (
                  <motion.div
                    key="education"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                      Education
                    </h3>
                    {EDUCATION.map((edu) => (
                      <div key={edu.school} className="border-l-2 border-accent pl-6 pb-6">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-mono">
                            {edu.year}
                          </span>
                        </div>
                        <h4 className="text-lg font-semibold text-foreground mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-accent font-medium mb-2">{edu.school}</p>
                        <p className="text-foreground-muted text-sm">{edu.description}</p>
                      </div>
                    ))}
                  </motion.div>
                )}

                {activeTab === "certifications" && (
                  <motion.div
                    key="certifications"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h3 className="font-display font-semibold text-xl text-foreground mb-6">
                      Certifications
                    </h3>
                    {CERTIFICATIONS.map((cert) => (
                      <div
                        key={cert.name}
                        className="flex items-start gap-4 p-4 bg-background/50 rounded-lg border border-border hover:border-accent/50 transition-colors"
                      >
                        <CheckCircleIcon className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-medium text-foreground">{cert.name}</h4>
                          <p className="text-foreground-muted text-sm">{cert.issuer}</p>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

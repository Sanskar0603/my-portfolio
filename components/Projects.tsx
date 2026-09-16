"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const projects = [
  {
    title: "School Attendance Management System",
    category: "Full-Stack Application",
    description: "A full-stack React (Vite) and Node.js/Express application with a MySQL database. Features secure role-based authentication, email-based password recovery, and full CRUD functionality with strict data integrity safeguards.",
    tags: ["React", "Node.js", "Express", "MySQL"],
    github: "https://lnkd.in/dGUfM-pV",
    live: "https://lnkd.in/dT8HdFuB",
  },
  {
    title: "Youtube Clone",
    category: "Video Streaming Platform",
    description: "Built responsive video streaming platform. Improved performance and UI/UX.",
    tags: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Sanskar0603/Youtube_project",
    live: "https://sanskar0603.github.io/Youtube_project/",
  },
  {
    title: "Password Manager",
    category: "Secure Utility",
    description: "Developed a secure and responsive Password Manager using React, Tailwind CSS, MongoDB, and Express. Designed a user-friendly interface enhancing usability and accessibility across devices.",
    tags: ["React.js", "Tailwindcss", "FastAPI", "MongoDB"],
    github: "https://github.com/Sanskar0603",
    live: "https://cheery-zabaione-2ae12e.netlify.app/",
  },
  {
    title: "Desi Style by Priyanshu",
    category: "Full Stack E-Commerce Web Application",
    description: "Designed and developed a complete, production-ready e-commerce web application for an Indian ethnic wear brand from scratch. The platform combines the cultural richness of Banarasi heritage with modern web design principles to deliver a seamless shopping experience for customers and a powerful management system for the store owner.",
    tags: ["React.js", "Firebase", "Netlify"],
    github: "https://github.com/Sanskar0603/desi-style",
    live: "https://desi-style-by-priyanshu.netlify.app/",
  },
  {
    title: "AI-Powered Creative Portfolio",
    category: "Portfolio",
    description: "Built with the power of AI-driven creativity using Google Whisk, Gemini 3 Pro, and Google Antigravity, this portfolio reflects a fusion of modern design and intelligent innovation. From concept to execution, AI tools helped shape a fast, creative, and visually engaging digital experience that showcases my work and ideas.",
    tags: ["Google Whisk", "Netlify", "Gemini 3 Pro", "Google Antigravity"],
    github: "https://github.com/Sanskar0603/portfolio-",
    live: "https://sanskaryadavportfolio.netlify.app/",
  },
];

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 lg:py-32 bg-carbon relative z-10 border-t border-boneWhite/5">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between"
        >
          <div>
            <div className="font-mono text-ember text-sm mb-4 tracking-widest uppercase flex items-center">
              <span className="w-8 h-px bg-ember mr-4"></span>
              Selected Work
            </div>
            <h2 className="text-4xl md:text-6xl font-display font-bold text-boneWhite leading-tight">
              Projects.
            </h2>
          </div>
          <div className="mt-6 md:mt-0">
            <p className="text-boneWhite/50 font-mono text-sm max-w-xs">
              A collection of high-performance architectures and scalable products built for the modern web.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col space-y-12 md:space-y-0">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.15 }}
              className="group relative md:grid md:grid-cols-12 md:items-center border-t border-boneWhite/10 py-12 hover:bg-graphite/10 transition-colors duration-500 -mx-6 px-6 lg:-mx-16 lg:px-16"
            >
              {/* Year */}
              <div className="md:col-span-2 mb-4 md:mb-0">
                <span className="font-mono text-boneWhite/40 text-sm">2026</span>
              </div>
              
              {/* Title & Category */}
              <div className="md:col-span-4 mb-4 md:mb-0">
                <h3 className="text-3xl font-display font-bold text-boneWhite group-hover:text-ember transition-colors duration-300">
                  {project.title}
                </h3>
                <span className="font-mono text-xs text-boneWhite/60 uppercase tracking-wider mt-2 block">
                  {project.category}
                </span>
              </div>
              
              {/* Description */}
              <div className="md:col-span-4 mb-6 md:mb-0 pr-4">
                <p className="text-sm font-body text-boneWhite/70 leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              {/* Tags & Action */}
              <div className="md:col-span-2 flex flex-col md:items-end space-y-4">
                <div className="flex flex-wrap gap-2 md:justify-end">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-mono text-carbon bg-boneWhite/80 px-2 py-1 rounded-sm">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4 mt-4">
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-xs font-mono text-boneWhite/60 hover:text-boneWhite transition-colors duration-300 uppercase tracking-widest">
                      <span>GitHub</span>
                    </a>
                  )}
                  {project.live && (
                    <a href={project.live} target="_blank" rel="noopener noreferrer" className="inline-flex items-center space-x-2 text-xs font-mono text-ember hover:text-amberHighlight transition-colors duration-300 uppercase tracking-widest">
                      <span>Live Demo</span>
                      <span className="transform group-hover:translate-x-1 transition-transform duration-300">↗</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}

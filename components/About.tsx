"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const skills = [
  { category: "Core", items: ["TypeScript", "Python", "Go", "Rust"] },
  { category: "Frontend", items: ["React", "Next.js", "Three.js", "Framer Motion"] },
  { category: "Systems", items: ["Node.js", "Docker", "Kubernetes", "AWS"] },
  { category: "AI/ML", items: ["PyTorch", "OpenAI API", "LangChain", "Vector DBs"] },
];

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 lg:py-32 bg-carbon relative z-10 border-t border-boneWhite/5">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          
          <motion.div 
            className="lg:col-span-5"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="font-mono text-ember text-sm mb-4 tracking-widest uppercase flex items-center">
              <span className="w-8 h-px bg-ember mr-4"></span>
              System Overview
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-boneWhite mb-6 leading-tight">
              Bridging the gap between <span className="text-graphite line-through">complex</span> <span className="text-ember">elegant</span> systems.
            </h2>
            <p className="text-sm font-body text-boneWhite/70 leading-relaxed mb-4">
              I'm Sanskar Yadav, a Full Stack Developer and Computer Science graduate (B.E., CGPA 8.20) based in Bangalore, India, passionate about building real-world web applications that solve meaningful problems.
            </p>
            <p className="text-sm font-body text-boneWhite/70 leading-relaxed mb-4">
              I specialize in React.js, Firebase, Python, and cloud-based deployments, with hands-on experience delivering production-grade projects from concept to launch. I've built and deployed complete full-stack products including an e-commerce platform, a YouTube clone, and a Spotify clone — all live and accessible.
            </p>
            <p className="text-sm font-body text-boneWhite/70 leading-relaxed mb-8">
              My professional background includes experience as a Technical Support Engineer at Vyapar, where I sharpened my problem-solving and product understanding skills. I hold certifications in AWS Cloud Foundations and Cisco CCNAv7, reflecting my commitment to growing across both development and infrastructure domains. I'm currently seeking opportunities as a Backend Developer, DevOps Engineer, or AI Engineer where I can contribute, learn, and build impactful products.
            </p>
          </motion.div>

          <motion.div 
            className="lg:col-span-6 lg:col-start-7"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          >
            <div className="bg-graphite/30 border border-boneWhite/10 p-8 rounded-sm relative overflow-hidden h-full">
              {/* Decorative grid */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" 
                   style={{ backgroundImage: 'linear-gradient(to right, #F2F2EC 1px, transparent 1px), linear-gradient(to bottom, #F2F2EC 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-xl font-display font-bold text-boneWhite mb-8">Technical Stack Matrix</h3>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                  {skills.map((skillGroup, idx) => (
                    <div key={idx} className="flex flex-col space-y-3">
                      <h4 className="text-xs font-mono text-ember uppercase tracking-wider">{skillGroup.category}</h4>
                      <ul className="space-y-2">
                        {skillGroup.items.map((item, i) => (
                          <li key={i} className="text-sm font-body text-boneWhite/80 flex items-center">
                            <span className="w-1.5 h-1.5 bg-boneWhite/20 mr-3 rounded-full"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

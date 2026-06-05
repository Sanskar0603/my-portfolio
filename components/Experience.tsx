"use client";

import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView } from "framer-motion";

const experiences = [
  {
    role: "Technical Support Engineer",
    company: "Vyapar",
    period: "2025 - 2026",
    description: "At Vyapar (a product-based accounting & billing SaaS company), I worked as a Technical Support Engineer where I diagnosed and resolved complex software issues for thousands of small business users across India. I collaborated closely with the product and engineering teams to escalate bugs, document reproducible issues, and contribute to faster release cycles. This role gave me deep insight into how real-world SaaS products are built, tested, and maintained at scale — bridging the gap between end-user needs and technical execution.",
  },
];

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 lg:py-32 bg-carbon relative z-10 border-t border-boneWhite/5">
      <div className="container mx-auto px-6 lg:px-16" ref={ref}>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Header */}
          <motion.div 
            className="lg:col-span-4"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="font-mono text-ember text-sm mb-4 tracking-widest uppercase flex items-center">
              <span className="w-8 h-px bg-ember mr-4"></span>
              Timeline
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold text-boneWhite leading-tight sticky top-32">
              Career <br /> Progression.
            </h2>
          </motion.div>

          {/* Timeline */}
          <div className="lg:col-span-7 lg:col-start-6 relative">
            {/* Vertical Line */}
            <div className="absolute left-0 top-2 bottom-0 w-px bg-boneWhite/10 hidden md:block"></div>

            <div className="space-y-16">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
                  className="relative md:pl-12"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-[-4.5px] top-2 w-2.5 h-2.5 rounded-full bg-ember hidden md:block shadow-[0_0_10px_rgba(243,117,18,0.5)]"></div>
                  
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-2">
                    <h3 className="text-2xl font-display font-bold text-boneWhite">{exp.role}</h3>
                    <span className="font-mono text-xs text-ember bg-ember/10 px-3 py-1 rounded-sm uppercase tracking-wider mt-2 md:mt-0 inline-block w-max">
                      {exp.period}
                    </span>
                  </div>
                  
                  <h4 className="text-sm font-mono text-boneWhite/50 uppercase tracking-widest mb-4">
                    {exp.company}
                  </h4>
                  
                  <p className="text-boneWhite/70 font-body leading-relaxed max-w-xl">
                    {exp.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}

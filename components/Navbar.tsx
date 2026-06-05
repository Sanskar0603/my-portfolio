"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Timeline", href: "#experience" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-carbon/80 backdrop-blur-md border-b border-boneWhite/10 py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="container mx-auto px-6 lg:px-16 flex items-center justify-between">
        <a href="#" className="flex items-center space-x-2 group">
          <div className="w-8 h-8 bg-ember flex items-center justify-center font-display font-bold text-carbon group-hover:bg-amberHighlight transition-colors duration-300">
            SY
          </div>
          <span className="font-mono text-sm tracking-widest text-boneWhite font-bold uppercase hidden sm:block">
            Sanskar Yadav
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="text-sm font-mono text-boneWhite/70 hover:text-ember transition-colors duration-300 relative group"
            >
              <span className="text-ember/50 mr-1 opacity-0 group-hover:opacity-100 transition-opacity">
                //
              </span>
              {link.name}
              <span className="absolute -bottom-2 left-0 w-0 h-px bg-ember group-hover:w-full transition-all duration-300"></span>
            </a>
          ))}
        </nav>

        <a
          href="#contact"
          className="md:hidden text-xs font-mono border border-boneWhite/20 px-4 py-2 text-boneWhite hover:bg-boneWhite hover:text-carbon transition-colors duration-300"
        >
          MENU
        </a>
      </div>
    </motion.header>
  );
}

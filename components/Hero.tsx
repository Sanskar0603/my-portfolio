"use client";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import { Float, Stars } from "@react-three/drei";

const DIALOGUE_LINES = [
  "Hey! I'm Sanskar Yadav",
  "B.Tech Graduate with expertise in Web Development and Artificial Intelligence.",
  "Building innovative websites and AI-driven solutions that enhance user experiences.",
  "I build high-performance software and cross-platform applications.",
  "I engineer custom automation systems to accelerate real-world workflows.",
  "I don't just write code — I build products that work in the real world.",
  "Let's collaborate to build something truly rare."
];

export default function Hero() {
  const [currentLine, setCurrentLine] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    let index = 0;
    setDisplayedText("");
    const fullText = DIALOGUE_LINES[currentLine];
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [currentLine]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLine((prev) => (prev + 1) % DIALOGUE_LINES.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [currentLine]);

  const toggleAudio = () => {
    if (videoRef.current) {
      const newState = !videoRef.current.muted;
      videoRef.current.muted = newState;
      setIsMuted(newState);
      if (!newState) {
        videoRef.current.play().catch(err => console.log("Audio play blocked:", err));
      }
    }
  };

  return (
    <section className="relative w-full min-h-screen bg-carbon flex flex-col justify-between overflow-hidden px-6 lg:px-16 pt-[40vh] md:pt-32 pb-12 z-10">
      {/* FULL-BLEED INTERACTIVE BACKGROUND BACKDROP LAYER */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <video
          ref={videoRef}
          className="object-cover w-full h-full opacity-100"
          autoPlay
          loop
          muted={isMuted}
          playsInline
        >
          {/* Note: You may want to provide a video source here */}
          <source src="/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-carbon/20 via-carbon/50 to-carbon"></div>
      </div>

      <div className="relative z-10 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left section which was partially missed during copy-paste */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          <div className="inline-block">
             <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-boneWhite leading-[1.1] tracking-tight">
              Creative<br /><span className="text-ember">Developer.</span>
            </h1>
          </div>
          <p className="text-lg md:text-xl font-body text-boneWhite/70 max-w-xl leading-relaxed">
            I engineer automation solutions and craft high-performance applications that transform raw data into operational power.
          </p>
          <div className="flex items-center space-x-4 pt-4">
             <a href="#projects" className="px-6 py-3 bg-ember text-carbon font-body font-bold hover:bg-amberHighlight transition-all duration-300">View Projects</a>
             <a href="#contact" className="px-6 py-3 border border-boneWhite/20 text-boneWhite font-body font-medium hover:bg-boneWhite hover:text-carbon transition-all duration-300">Contact Me</a>
          </div>
        </div>

        {/* GLASS SPEECH BUBBLE & AUDIO CONTROLLER */}
        <div className="lg:col-span-5 flex justify-start lg:justify-end items-center relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentLine}
              initial={{ opacity: 0, y: 15, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              className="w-full max-w-sm backdrop-blur-md bg-graphite/40 border border-boneWhite/10 p-5 shadow-2xl relative"
            >
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center space-x-2">
                  <span className={`w-2 h-2 rounded-full ${!isMuted ? 'bg-cyan-400 animate-pulse' : 'bg-ember'}`} />
                  <span className="text-[10px] font-mono uppercase text-boneWhite/40">
                    {!isMuted ? "Live Audio Streaming" : "Audio Track Suspended"}
                  </span>
                </div>
                <button
                  onClick={toggleAudio}
                  className="px-2 py-0.5 border border-ember/30 text-[9px] font-mono rounded bg-ember/10 text-ember hover:bg-ember hover:text-carbon transition-all duration-200 pointer-events-auto uppercase"
                >
                  {isMuted ? "Unmute Voice" : "Mute Track"}
                </button>
              </div>
              <p className="text-sm font-mono text-boneWhite/90 min-h-[48px] leading-relaxed">
                {displayedText}
                <span className="animate-ping ml-0.5 text-ember">|</span>
              </p>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>


    </section>
  );
}

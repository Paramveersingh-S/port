"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github, Layers, ShieldCheck, Cpu, Zap } from "lucide-react";
import { cn } from "@/lib/utils";

const projects = [
  {
    title: "Satellite Vulnerability Mapper",
    subtitle: "Real-time Space Weather Assessment",
    category: "Space Tech / AI",
    description: "A mission-critical predictive dashboard integrating NASA/NOAA data to forecast geomagnetic threats to orbital assets with sub-second risk calculations.",
    tech: ["JavaScript", "CesiumJS", "NASA APIs"],
    icon: <Layers className="w-5 h-5" />,
    color: "accent-blue",
    github: "https://github.com/Paramveersingh-S/Satellite-Vulnerability-Mapper",
  },
  {
    title: "CHRONOS (Research)",
    subtitle: "IEEE Xplore Published Architecture",
    category: "Cybersecurity / Research",
    description: "Novel chaos-driven TRNG architecture for secure neural weight initialization and cryptographic key synthesis. Peer-reviewed and published in IEEE.",
    tech: ["Chaos Theory", "Neural Networks", "Cryptography"],
    icon: <ShieldCheck className="w-5 h-5" />,
    color: "primary",
    link: "https://ieeexplore.ieee.org/document/11448529",
    github: "https://github.com/Paramveersingh-S/Chua-s-circuit-simulation",
  },
  {
    title: "Secure Arduino Bootloader",
    subtitle: "Low-Level Firmware Security",
    category: "Embedded Systems",
    description: "A custom-engineered secure bootloader for AVR architectures, focusing on memory protection and integrity verification during firmware updates.",
    tech: ["C++", "AVR", "Embedded Systems"],
    icon: <Cpu className="w-5 h-5" />,
    color: "secondary",
    github: "https://github.com/Paramveersingh-S/bootloader-for-arduino",
  },
  {
    title: "IoT Air Quality Monitor",
    subtitle: "Smart Environmental Sensing",
    category: "IoT / Embedded",
    description: "Distributed sensing system using MQ-2 sensors and NodeMCU to monitor and broadcast real-time atmospheric safety metrics over custom web interfaces.",
    tech: ["C++", "NodeMCU", "ESP8266", "IoT"],
    icon: <Zap className="w-5 h-5" />,
    color: "accent-purple",
    github: "https://github.com/Paramveersingh-S/IoT-based-Air-Quality-Safety-Monitoring-System",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 bg-graphite-950/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 italic">
              [ Mission Logs ]
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight">
              Engineering <span className="text-primary italic">Milestones</span>.
            </h3>
          </motion.div>
          
          <motion.p
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-foreground/50 max-w-sm"
          >
            A selection of complex systems designed to solve critical problems in security, intelligence, and communication.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
            >
              {/* Image / Visual Container */}
              <div className="lg:col-span-7 relative aspect-video rounded-2xl overflow-hidden border border-white/5 bg-graphite-900 shadow-2xl">
                 <div className={cn(
                   "absolute inset-0 bg-gradient-to-br transition-opacity duration-500 opacity-20 group-hover:opacity-40",
                   project.color === "primary" ? "from-primary/20 to-transparent" : 
                   project.color === "secondary" ? "from-secondary/20 to-transparent" :
                   "from-accent-blue/20 to-transparent"
                 )} />
                 
                 {/* Visual Placeholder */}
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-32 h-32 rounded-full border border-white/5 flex items-center justify-center animate-pulse">
                       {project.icon}
                    </div>
                    {/* Futuristic Grid Overlay */}
                    <div className="absolute inset-0 opacity-10 bg-grid" />
                 </div>
                 
                 {/* Tech Badges on Image */}
                 <div className="absolute bottom-6 left-6 flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/10 text-white/70 rounded">
                        {t}
                      </span>
                    ))}
                 </div>
              </div>

              {/* Content Container */}
              <div className="lg:col-span-5 space-y-6">
                 <div>
                    <div className={cn(
                      "text-xs font-bold uppercase tracking-widest mb-2",
                      project.color === "primary" ? "text-primary" : 
                      project.color === "secondary" ? "text-secondary" :
                      "text-accent-blue"
                    )}>
                      {project.category}
                    </div>
                    <h4 className="text-3xl font-bold font-space-grotesk tracking-tight group-hover:text-primary transition-colors">
                      {project.title}
                    </h4>
                    <p className="text-foreground/40 text-sm mt-1">{project.subtitle}</p>
                 </div>

                 <p className="text-foreground/70 leading-relaxed">
                   {project.description}
                 </p>

                 <div className="flex gap-4 pt-4">
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-lg text-sm font-bold hover:bg-white/5 transition-all"
                      >
                         <Github className="w-4 h-4 text-primary" /> Repository
                      </a>
                    )}
                    {project.link && (
                      <a 
                        href={project.link} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="flex items-center gap-2 px-5 py-2.5 glass-card rounded-lg text-sm font-bold hover:bg-white/5 transition-all"
                      >
                         <ExternalLink className="w-4 h-4" /> IEEE Xplore
                      </a>
                    )}
                 </div>
              </div>

              {/* Decorative Index */}
              <div className="absolute -left-20 top-0 text-[120px] font-black text-white/5 leading-none select-none hidden 2xl:block">
                 0{index + 1}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

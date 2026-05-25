"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const skillCategories = [
  {
    title: "Core Languages",
    skills: ["C", "C++", "Python", "Verilog", "Embedded C"],
    color: "primary",
  },
  {
    title: "Embedded Systems",
    skills: ["FPGA", "RTOS", "Microcontrollers", "PCB Design", "ARM"],
    color: "secondary",
  },
  {
    title: "AI & Data",
    skills: ["PyTorch", "TensorFlow", "OpenCV", "NLP", "NumPy"],
    color: "accent-blue",
  },
  {
    title: "Tools & Protocols",
    skills: ["CAN Bus", "Git", "Linux", "MATLAB", "KiCad"],
    color: "accent-purple",
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-graphite-950/50 relative overflow-hidden">
       {/* Background Glow */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-secondary/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 italic">
            [ Tech Ecosystem ]
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight">
            Advanced <span className="text-primary italic">Tooling</span>.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-all"
            >
              <h4 className="text-xl font-bold font-space-grotesk mb-6 text-white/90 uppercase tracking-widest">
                {category.title}
              </h4>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className={cn(
                      "px-4 py-2 rounded-lg text-sm font-bold border transition-all cursor-default",
                      category.color === "primary" ? "bg-primary/10 border-primary/20 text-primary" :
                      category.color === "secondary" ? "bg-secondary/10 border-secondary/20 text-secondary" :
                      category.color === "accent-blue" ? "bg-accent-blue/10 border-accent-blue/20 text-accent-blue" :
                      "bg-accent-purple/10 border-accent-purple/20 text-accent-purple"
                    )}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating Skill Visualization Placeholder */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="mt-20 p-12 glass rounded-3xl border border-primary/10 text-center relative overflow-hidden"
        >
           <div className="absolute inset-0 bg-grid opacity-10" />
           <h5 className="text-2xl md:text-3xl font-bold font-space-grotesk mb-4 italic">
              Continously Synchronizing with New Technologies.
           </h5>
           <p className="text-foreground/40 max-w-xl mx-auto text-sm">
              Currently exploring: Advanced FPGA architectures, Neuro-symbolic AI, and Quantum-resistant cryptography for embedded devices.
           </p>
           
           {/* Animated Radar Graph Mockup */}
           <div className="mt-8 relative w-48 h-48 mx-auto opacity-40">
              <div className="absolute inset-0 border-2 border-primary/20 rounded-full animate-pulse" />
              <div className="absolute inset-4 border border-primary/10 rounded-full" />
              <div className="absolute inset-8 border border-primary/5 rounded-full" />
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary/50 to-transparent origin-bottom animate-[spin_4s_linear_infinite]" />
           </div>
        </motion.div>
      </div>
    </section>
  );
}

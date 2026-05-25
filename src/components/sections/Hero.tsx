"use client";

import { motion } from "framer-motion";
import { ChevronRight, Github, Linkedin, Mail, ArrowDown } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] z-0 animate-pulse-slow" />
      
      <div className="max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold tracking-widest uppercase mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
            </span>
            NASA Global Nominee // Mission Active
          </div>
          
          <h1 className="text-6xl md:text-8xl font-bold font-space-grotesk tracking-tighter leading-none mb-6">
            PARAMVEER <br />
            <span className="text-primary italic">SINGH</span>
          </h1>
          
          <p className="text-lg md:text-xl text-foreground/60 max-w-xl mb-10 leading-relaxed">
            BE Electronics & Communication Engineering @ CCET Chandigarh. 
            Passionate about <span className="text-foreground font-medium">Deep Learning</span>, 
            <span className="text-foreground font-medium">Quantum Security</span>, and 
            <span className="text-foreground font-medium">Space Intelligence</span>.
          </p>

          <div className="flex flex-wrap gap-4 mb-12 relative z-20">
            <a 
              href="#projects"
              className="px-8 py-4 bg-primary text-background font-bold rounded-lg hover:scale-105 active:scale-95 transition-all flex items-center gap-2 shadow-[0_0_20px_rgba(0,242,255,0.4)]"
            >
              View Mission Logs <ChevronRight className="w-5 h-5" />
            </a>
            <a 
              href="https://drive.google.com/file/d/1bC_DUoLLr20DvtYL84l1UM_GeO5nxesa/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer"
              className="px-8 py-4 border border-white/10 hover:bg-white/5 font-bold rounded-lg transition-all flex items-center gap-2"
            >
              Download Decrypted CV
            </a>
          </div>

          <div className="flex items-center gap-6 relative z-20">
            <a href="https://github.com/Paramveersingh-S" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><Github className="w-6 h-6" /></a>
            <a href="https://www.linkedin.com/in/paramveer-singh-454b54270/" target="_blank" rel="noopener noreferrer" className="text-foreground/40 hover:text-primary transition-colors"><Linkedin className="w-6 h-6" /></a>
            <a href="mailto:lco23586@ccet.ac.in" className="text-foreground/40 hover:text-primary transition-colors"><Mail className="w-6 h-6" /></a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotateY: 30 }}
          animate={{ opacity: 1, scale: 1, rotateY: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative hidden lg:block"
        >
          {/* Futuristic Visual Mockup */}
          <div className="relative aspect-square w-full max-w-md mx-auto">
            <div className="absolute inset-0 border-[2px] border-primary/20 rounded-2xl rotate-3 scale-105 animate-pulse" />
            <div className="absolute inset-0 border-[2px] border-primary/40 rounded-2xl -rotate-3 scale-110" />
            
            <div className="relative w-full h-full glass border border-primary/30 rounded-2xl p-8 overflow-hidden shadow-[0_0_50px_rgba(0,242,255,0.1)]">
              {/* Terminal-like text */}
              <div className="font-mono text-[10px] text-primary/40 mb-4">
                {`> BOOTING_SYSTEM_SEQUENCE...`} <br />
                {`> LOADING_EMBEDDED_MODULES... OK`} <br />
                {`> INITIALIZING_NEURAL_CORE... OK`} <br />
                {`> SCANNING_PERIPHERALS... OK`}
              </div>

              {/* Graphic Elements */}
              <div className="flex items-end gap-1 h-32 mb-8">
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{ height: [20, Math.random() * 100 + 20, 20] }}
                    transition={{ repeat: Infinity, duration: Math.random() * 2 + 1 }}
                    className="flex-1 bg-primary/20 rounded-t-sm"
                  />
                ))}
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-primary/5 border border-primary/10 rounded-lg">
                  <div className="text-[10px] text-primary/60 uppercase tracking-widest mb-1">CPU Load</div>
                  <div className="text-2xl font-bold text-primary">42.8%</div>
                </div>
                <div className="p-4 bg-secondary/5 border border-secondary/10 rounded-lg">
                  <div className="text-[10px] text-secondary/60 uppercase tracking-widest mb-1">AI Logic</div>
                  <div className="text-2xl font-bold text-secondary">ACTIVE</div>
                </div>
              </div>

              {/* Decorative Circle */}
              <div className="absolute -bottom-20 -right-20 w-64 h-64 border-2 border-primary/20 rounded-full flex items-center justify-center">
                 <div className="w-48 h-48 border border-primary/40 rounded-full animate-[spin_10s_linear_infinite]" />
                 <div className="absolute w-2 h-2 bg-primary rounded-full top-0" />
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-foreground/20"
      >
        <ArrowDown className="w-6 h-6" />
      </motion.div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { Cpu, Zap, Shield, Database } from "lucide-react";

const profileData = [
  {
    icon: <Cpu className="w-6 h-6 text-primary" />,
    title: "Embedded Systems",
    description: "Architecting low-level firmware and hardware interfaces for high-performance automation.",
  },
  {
    icon: <Zap className="w-6 h-6 text-secondary" />,
    title: "AI & Machine Learning",
    description: "Implementing intelligent algorithms for signal processing and predictive systems.",
  },
  {
    icon: <Shield className="w-6 h-6 text-accent-blue" />,
    title: "Secure Automotive",
    description: "Designing intrusion detection systems and secure communication protocols for vehicles.",
  },
  {
    icon: <Database className="w-6 h-6 text-accent-purple" />,
    title: "System Thinking",
    description: "Applying holistic engineering approaches to solve complex electronic challenges.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 italic">
            [ System Profile ]
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight max-w-2xl">
            Bridging the gap between <span className="text-primary italic">Silicon</span> and <span className="text-secondary italic">Intelligence</span>.
          </h3>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {profileData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass-card p-8 rounded-2xl group cursor-default"
            >
              <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-primary/50 transition-all duration-300">
                {item.icon}
              </div>
              <h4 className="text-xl font-bold mb-3 font-space-grotesk">{item.title}</h4>
              <p className="text-foreground/50 text-sm leading-relaxed">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
        >
          <div className="space-y-6">
            <p className="text-lg text-foreground/70 leading-relaxed">
              BE student in <span className="text-white font-medium">Electronics & Communication</span> at CCET (Panjab University). 
              I specialize in integrating hardware architectures with <span className="text-white font-medium">Deep Learning</span>. 
              Proud alumnus of <span className="text-white font-medium">CSIO-CSIR</span> with a background in precision mechanical engineering.
            </p>
            <p className="text-lg text-foreground/70 leading-relaxed">
              Recognized as a <span className="text-primary font-bold italic">NASA Global Nominee</span> (Team Zora) and certified in 
              Quantum Cryptography and Remote Sensing. My work focuses on building secure, predictive, and high-entropy systems for the next decade of engineering.
            </p>
            
            <div className="flex gap-4 pt-4">
               <div className="text-center">
                  <div className="text-3xl font-bold text-primary">02+</div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest">Internships</div>
               </div>
               <div className="w-px h-10 bg-white/10 self-center" />
               <div className="text-center">
                  <div className="text-3xl font-bold text-secondary">05+</div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest">Major Projects</div>
               </div>
               <div className="w-px h-10 bg-white/10 self-center" />
               <div className="text-center">
                  <div className="text-3xl font-bold text-accent-blue">ECE</div>
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest">Specialization</div>
               </div>
            </div>
          </div>

          <div className="relative">
             <div className="absolute inset-0 bg-primary/10 blur-[100px] -z-10" />
             <div className="glass border border-white/10 rounded-2xl p-6 overflow-hidden">
                <div className="flex items-center gap-2 mb-6 border-b border-white/5 pb-4">
                   <div className="w-3 h-3 rounded-full bg-red-500/50" />
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50" />
                   <div className="w-3 h-3 rounded-full bg-green-500/50" />
                   <span className="text-[10px] text-foreground/30 font-mono ml-2 uppercase tracking-widest">bio.core_dump</span>
                </div>
                <div className="font-mono text-xs space-y-2 text-foreground/60">
                   <p><span className="text-primary">const</span> engineer = <span className="text-accent-purple">{`{`}</span></p>
                   <p className="pl-4">name: <span className="text-secondary">&quot;Paramveer Singh&quot;</span>,</p>
                   <p className="pl-4">role: <span className="text-secondary">&quot;Systems Architect&quot;</span>,</p>
                   <p className="pl-4">focus: [<span className="text-secondary">&quot;Embedded&quot;</span>, <span className="text-secondary">&quot;AI&quot;</span>, <span className="text-secondary">&quot;Security&quot;</span>],</p>
                   <p className="pl-4">status: <span className="text-secondary">&quot;Innovating&quot;</span>,</p>
                   <p className="pl-4">location: <span className="text-secondary">&quot;Global&quot;</span></p>
                   <p><span className="text-accent-purple">{`}`}</span>;</p>
                   <div className="pt-4 text-primary/40 italic">
                      {`// Scanning system logs for new challenges...`}
                   </div>
                </div>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

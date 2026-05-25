"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    company: "CSIR — Central Scientific Instruments Organisation",
    role: "Software Intern",
    period: "May 2024 — July 2024",
    location: "Chandigarh, India",
    description: [
      "Developed high-performance software modules for precision instrumentation.",
      "Optimized data acquisition pipelines for real-time sensor monitoring.",
      "Collaborated with senior scientists to implement signal processing algorithms.",
    ],
  },
  {
    company: "Yamada Automation",
    role: "Manufacturing Intern",
    period: "June 2023 — August 2023",
    location: "Manesar, India",
    description: [
      "Gained hands-on experience in industrial automation and PLC programming.",
      "Assisted in the maintenance and optimization of manufacturing line controllers.",
      "Analyzed system logs to identify and resolve hardware-software interface issues.",
    ],
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 italic">
            [ Mission Timeline ]
          </h2>
          <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight">
            Professional <span className="text-primary italic">Trajectory</span>.
          </h3>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2 hidden md:block" />
          
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex flex-col md:flex-row items-center gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Connector Node */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2 z-10 hidden md:block shadow-[0_0_10px_rgba(0,242,255,0.8)]" />
                
                <div className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                   <div className="glass-card p-8 rounded-2xl hover:border-primary/40 transition-all">
                      <div className={`flex items-center gap-2 mb-2 text-primary text-sm font-bold ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                         <Calendar className="w-4 h-4" /> {exp.period}
                      </div>
                      <h4 className="text-2xl font-bold font-space-grotesk mb-1">{exp.role}</h4>
                      <p className="text-white/80 font-medium mb-4">{exp.company}</p>
                      
                      <div className={`flex items-center gap-2 text-xs text-foreground/40 mb-6 uppercase tracking-widest font-bold ${index % 2 === 0 ? "md:justify-end" : ""}`}>
                         <MapPin className="w-3 h-3" /> {exp.location}
                      </div>

                      <ul className={`space-y-2 text-sm text-foreground/60 ${index % 2 === 0 ? "md:list-none" : "list-disc list-inside"}`}>
                        {exp.description.map((item, i) => (
                          <li key={i}>{item}</li>
                        ))}
                      </ul>
                   </div>
                </div>

                {/* Spacer for the other half */}
                <div className="hidden md:block md:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

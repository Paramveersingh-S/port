"use client";

import { motion } from "framer-motion";
import { Code2, BarChart3, Trophy, ArrowUpRight } from "lucide-react";

export default function LeetCodeStats() {
  return (
    <section id="leetcode" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-secondary uppercase mb-4 italic">
              [ Algorithmic Prowess ]
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight">
              LeetCode <span className="text-secondary italic">Intelligence</span>.
            </h3>
          </motion.div>
          
          <a 
            href="https://leetcode.com/u/alcatraz12/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-foreground/40 hover:text-secondary transition-colors group text-sm font-bold uppercase tracking-widest"
          >
            View Profile <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Stats Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 glass p-8 rounded-2xl border border-secondary/20 relative group overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
              <Trophy className="w-24 h-24 text-secondary" />
            </div>
            
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-secondary/10 border border-secondary/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-secondary" />
              </div>
              <span className="font-bold font-space-grotesk uppercase tracking-widest text-secondary/60 text-xs">Runtime Metrics</span>
            </div>

            <div className="space-y-6">
              <div>
                <div className="flex justify-between text-xs font-bold uppercase tracking-widest mb-2">
                  <span>Logic Accuracy</span>
                  <span className="text-secondary">94%</span>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "94%" }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="h-full bg-secondary" 
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Rank</div>
                  <div className="text-xl font-bold font-space-grotesk">Global</div>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/5">
                  <div className="text-[10px] text-foreground/40 uppercase tracking-widest mb-1">Status</div>
                  <div className="text-xl font-bold font-space-grotesk text-secondary">Active</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Progress Chart Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="lg:col-span-2 glass p-8 rounded-2xl border border-white/5 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-foreground/40">
                  <BarChart3 className="w-5 h-5" />
                </div>
                <span className="font-bold font-space-grotesk uppercase tracking-widest text-foreground/30 text-xs">Daily Activity Synchronized</span>
              </div>
              <div className="text-[10px] font-mono text-foreground/20">SYNC_ID: ALCATRAZ12</div>
            </div>

            {/* Simulated Contribution Graph */}
            <div className="grid grid-cols-12 md:grid-cols-24 gap-2 mb-8 h-32 items-end">
              {[...Array(24)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ height: 0 }}
                  whileInView={{ height: `${Math.random() * 80 + 20}%` }}
                  transition={{ delay: i * 0.02, duration: 1 }}
                  className="bg-secondary/20 border-t border-secondary/40 rounded-t-sm"
                />
              ))}
            </div>

            <div className="p-6 bg-secondary/5 border border-secondary/10 rounded-xl">
               <p className="text-sm text-foreground/60 italic leading-relaxed">
                 Solving complex algorithmic challenges to maintain peak logic optimization. 
                 Specializing in <span className="text-secondary font-bold underline underline-offset-4 decoration-secondary/30">Dynamic Programming</span> and <span className="text-secondary font-bold underline underline-offset-4 decoration-secondary/30">System Design</span>.
               </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

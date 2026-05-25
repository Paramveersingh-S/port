"use client";

import { Cpu } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center">
              <Cpu className="w-5 h-5 text-primary" />
            </div>
            <span className="text-lg font-bold tracking-tighter font-space-grotesk">
              PARAM<span className="text-primary">.SYS</span>
            </span>
          </div>

          <div className="text-foreground/30 text-xs font-mono tracking-widest uppercase">
            &copy; 2024 Paramveer Singh // Engineering the Future
          </div>

          <div className="flex gap-6">
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="text-[10px] font-bold uppercase tracking-widest text-foreground/40 hover:text-primary transition-colors">Resume</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

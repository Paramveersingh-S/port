"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon } from "lucide-react";

const COMMANDS = {
  help: "Available commands: whoami, skills, projects, experience, contact, clear",
  whoami: "Paramveer Singh - ECE Engineer | Embedded Systems | AI Enthusiast",
  skills: "Embedded C, Python, C++, Verilog, FPGA, RTOS, CAN Bus, PyTorch, PCB Design",
  projects: "CHRONOS (Chaos-TRNG), CAN-IDS (Automotive Security), VedicText (NLP Pipeline)",
  experience: "Internships at CSIR-CSIO and Yamada Automation",
  contact: "Email: contact@paramveer.sys | LinkedIn: linkedin.com/in/paramveer-singh",
};

export default function Terminal() {
  const [history, setHistory] = useState<string[]>(["Welcome to PARAM.SYS [Version 2.0.24]", 'Type "help" to see available commands.']);
  const [input, setInput] = useState("");
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = input.trim().toLowerCase();
    
    if (cmd === "clear") {
      setHistory([]);
    } else if (cmd in COMMANDS) {
      setHistory([...history, `> ${input}`, COMMANDS[cmd as keyof typeof COMMANDS]]);
    } else if (cmd !== "") {
      setHistory([...history, `> ${input}`, `Command not found: ${cmd}. Type "help" for assistance.`]);
    }
    
    setInput("");
  };

  return (
    <section id="terminal" className="py-24 relative">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 italic">
            [ Local Interface ]
          </h2>
          <h3 className="text-3xl font-bold font-space-grotesk tracking-tight">
            Direct <span className="text-primary italic">System Access</span>.
          </h3>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass border border-primary/20 rounded-xl overflow-hidden shadow-[0_0_40px_rgba(0,242,255,0.05)]"
        >
          {/* Terminal Header */}
          <div className="bg-white/5 border-b border-white/10 p-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500/30" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/30" />
              <div className="w-3 h-3 rounded-full bg-green-500/30" />
              <span className="text-[10px] text-foreground/40 font-mono ml-2 uppercase tracking-widest flex items-center gap-1">
                <TerminalIcon className="w-3 h-3" /> terminal — bash — 80x24
              </span>
            </div>
            <div className="text-[10px] text-foreground/20 font-mono">
              TTY001
            </div>
          </div>

          {/* Terminal Body */}
          <div 
            ref={scrollRef}
            className="p-6 h-[400px] overflow-y-auto font-mono text-sm space-y-2 custom-scrollbar"
          >
            {history.map((line, i) => (
              <div key={i} className={line.startsWith(">") ? "text-primary" : "text-foreground/70"}>
                {line}
              </div>
            ))}
            
            <form onSubmit={handleCommand} className="flex items-center gap-2">
              <span className="text-secondary font-bold">$</span>
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                autoFocus
                className="bg-transparent border-none outline-none text-foreground w-full caret-primary"
              />
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

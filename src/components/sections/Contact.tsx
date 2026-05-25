"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, Mail, Linkedin, Github, MessageSquare, CheckCircle2, AlertCircle } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      // NOTE: Replace 'YOUR_ACCESS_KEY_HERE' with the key from web3forms.com
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: JSON.stringify({
          ...data,
          access_key: "YOUR_ACCESS_KEY_HERE", // GET YOUR KEY AT WEB3FORMS.COM
          subject: "New Portfolio Transmission",
          from_name: "Paramveer's Portfolio"
        }),
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      });

      const result = await response.json();

      if (response.ok && result.success) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        console.error("Web3Forms error:", result);
        setStatus("error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      setStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background Decorative Gradient */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[150px] -z-10" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 italic">
              [ Transmission Center ]
            </h2>
            <h3 className="text-4xl md:text-5xl font-bold font-space-grotesk tracking-tight mb-8">
              Initiate <span className="text-primary italic">Contact</span>.
            </h3>
            
            <p className="text-lg text-foreground/60 mb-12 max-w-lg leading-relaxed">
              Have a project in mind or want to discuss the future of intelligent systems? 
              Reach out and let&apos;s build something exceptional together.
            </p>

            <div className="space-y-6">
               <a href="mailto:lco23586@ccet.ac.in" className="flex items-center gap-4 group cursor-pointer">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/50 transition-all">
                     <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                     <div className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold">Secure Email</div>
                     <div className="text-lg font-bold">lco23586@ccet.ac.in</div>
                  </div>
               </a>
               
               <div className="flex gap-4 pt-4 relative z-20">
                  <a href="https://www.linkedin.com/in/paramveer-singh-454b54270/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                     <Linkedin className="w-6 h-6 text-foreground/60" />
                  </a>
                  <a href="https://github.com/Paramveersingh-S" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-white/10 transition-all">
                     <Github className="w-6 h-6 text-foreground/60" />
                  </a>
               </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-10 rounded-3xl border border-white/10 relative"
          >
             <div className="absolute top-0 right-0 p-6 opacity-10">
                <MessageSquare className="w-24 h-24" />
             </div>

             <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                      <label className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold ml-1">Identity</label>
                      <input 
                        required
                        name="name"
                        type="text" 
                        placeholder="Name" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all"
                      />
                   </div>
                   <div className="space-y-2">
                      <label className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold ml-1">Comm Channel</label>
                      <input 
                        required
                        name="email"
                        type="email" 
                        placeholder="Email" 
                        className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all"
                      />
                   </div>
                </div>
                <div className="space-y-2">
                   <label className="text-[10px] text-foreground/40 uppercase tracking-widest font-bold ml-1">Transmission Data</label>
                   <textarea 
                     required
                     name="message"
                     rows={5}
                     placeholder="How can I help you?" 
                     className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-primary/50 transition-all resize-none"
                   />
                </div>
                
                <button 
                  disabled={status === "loading" || status === "success"}
                  type="submit"
                  className="w-full py-4 bg-primary text-background font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] active:scale-[0.98] transition-all shadow-[0_0_20px_rgba(0,242,255,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {status === "loading" ? "Syncing..." : status === "success" ? "Sent" : "Send Transmission"} 
                  {status === "idle" && <Send className="w-4 h-4" />}
                  {status === "success" && <CheckCircle2 className="w-4 h-4" />}
                </button>

                <AnimatePresence>
                  {status === "success" && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-secondary text-center font-bold tracking-wider"
                    >
                      SUCCESS: TRANSMISSION RECEIVED.
                    </motion.p>
                  )}
                  {status === "error" && (
                    <motion.p 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="text-xs text-red-500 text-center font-bold tracking-wider flex items-center justify-center gap-1"
                    >
                      <AlertCircle className="w-3 h-3" /> ERROR: UPLINK FAILED. TRY AGAIN.
                    </motion.p>
                  )}
                </AnimatePresence>
             </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

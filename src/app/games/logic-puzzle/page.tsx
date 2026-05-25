"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Zap, RotateCcw, ChevronLeft, CheckCircle2, AlertTriangle } from "lucide-react";
import Link from "next/link";

type GateType = "AND" | "OR" | "XOR";

interface PuzzleState {
  input1: boolean;
  input2: boolean;
  gate: GateType;
  expected: boolean;
}

const GATES: GateType[] = ["AND", "OR", "XOR"];

export default function LogicPuzzle() {
  const [puzzle, setPuzzle] = useState<PuzzleState | null>(null);
  const [userGate, setUserGate] = useState<GateType>("AND");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [score, setSetScore] = useState(0);

  const generatePuzzle = () => {
    const i1 = Math.random() > 0.5;
    const i2 = Math.random() > 0.5;
    const targetGate = GATES[Math.floor(Math.random() * GATES.length)];
    
    let expected = false;
    if (targetGate === "AND") expected = i1 && i2;
    else if (targetGate === "OR") expected = i1 || i2;
    else if (targetGate === "XOR") expected = i1 !== i2;

    setPuzzle({ input1: i1, input2: i2, gate: targetGate, expected });
    setIsCorrect(null);
  };

  useEffect(() => {
    generatePuzzle();
  }, []);

  const checkLogic = () => {
    if (!puzzle) return;
    
    let result = false;
    if (userGate === "AND") result = puzzle.input1 && puzzle.input2;
    else if (userGate === "OR") result = puzzle.input1 || puzzle.input2;
    else if (userGate === "XOR") result = puzzle.input1 !== puzzle.input2;

    if (result === puzzle.expected) {
      setIsCorrect(true);
      setSetScore(prev => prev + 1);
      setTimeout(generatePuzzle, 1500);
    } else {
      setIsCorrect(false);
      setSetScore(0);
    }
  };

  if (!puzzle) return null;

  return (
    <div className="min-h-screen bg-background pt-32 pb-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[120px] -z-10" />
      
      <div className="max-w-3xl mx-auto">
        <Link href="/" className="inline-flex items-center gap-2 text-foreground/40 hover:text-primary transition-colors mb-12 group text-sm font-bold uppercase tracking-widest">
          <ChevronLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Mission Control
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-sm font-bold tracking-[0.3em] text-primary uppercase mb-4 italic">
            [ Cognitive Evaluation ]
          </h2>
          <h1 className="text-4xl md:text-6xl font-bold font-space-grotesk tracking-tight mb-6">
            The Logic <span className="text-primary italic">Synchronizer</span>.
          </h1>
          <p className="text-foreground/50 max-w-xl mx-auto">
            A real-time circuit challenge. Select the correct logic gate to match the target output based on the provided inputs.
          </p>
        </motion.div>

        <div className="glass border border-white/10 rounded-3xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute top-4 right-8 flex items-center gap-2">
             <div className="text-[10px] text-foreground/30 uppercase font-bold tracking-widest">System Score</div>
             <div className="text-2xl font-bold text-primary font-space-grotesk">{score}</div>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-between gap-12 py-12">
            {/* Inputs */}
            <div className="space-y-8 w-full md:w-auto">
              {[puzzle.input1, puzzle.input2].map((val, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold font-mono border-2 transition-all shadow-lg ${val ? "bg-primary/20 border-primary text-primary shadow-primary/20" : "bg-white/5 border-white/10 text-white/20"}`}>
                    {val ? "1" : "0"}
                  </div>
                  <div className="h-0.5 w-12 bg-gradient-to-r from-white/20 to-transparent" />
                </div>
              ))}
            </div>

            {/* Selector */}
            <div className="relative group">
               <motion.div 
                 animate={isCorrect === true ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : {}}
                 className={`w-32 h-32 rounded-2xl border-2 flex items-center justify-center transition-all duration-300 relative z-10 ${
                   isCorrect === true ? "border-secondary bg-secondary/10 shadow-[0_0_30px_rgba(16,185,129,0.3)]" :
                   isCorrect === false ? "border-red-500 bg-red-500/10" :
                   "border-primary/40 bg-primary/5 hover:border-primary shadow-[0_0_20px_rgba(0,242,255,0.1)]"
                 }`}
               >
                 <span className="text-2xl font-black font-space-grotesk tracking-widest">
                   {userGate}
                 </span>
               </motion.div>
               <div className="absolute -inset-4 bg-primary/5 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity -z-10" />
            </div>

            <div className="flex flex-col items-center gap-4">
               <div className="h-0.5 w-12 bg-gradient-to-l from-white/20 to-transparent" />
               <div className="text-[10px] text-foreground/40 uppercase font-bold tracking-[0.3em] mb-2 text-center">Required Output</div>
               <div className={`w-16 h-16 rounded-2xl flex items-center justify-center font-bold text-2xl font-mono border-2 transition-all ${puzzle.expected ? "bg-primary/20 border-primary text-primary shadow-[0_0_20px_rgba(0,242,255,0.2)]" : "bg-white/5 border-white/10 text-white/20"}`}>
                  {puzzle.expected ? "1" : "0"}
               </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-12">
            {GATES.map((g) => (
              <button
                key={g}
                onClick={() => {
                  setUserGate(g);
                  setIsCorrect(null);
                }}
                className={`py-4 rounded-xl font-bold transition-all border ${
                  userGate === g 
                    ? "bg-primary text-background border-primary shadow-lg shadow-primary/20" 
                    : "bg-white/5 border-white/10 text-foreground/60 hover:bg-white/10"
                }`}
              >
                {g}
              </button>
            ))}
          </div>

          <button
            onClick={checkLogic}
            disabled={isCorrect === true}
            className="w-full py-5 bg-white text-background font-black rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50"
          >
            EXECUTE SYNC <Zap className="w-5 h-5 fill-current" />
          </button>

          <AnimatePresence>
            {isCorrect === true && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center justify-center gap-2 text-secondary font-bold"
              >
                <CheckCircle2 className="w-5 h-5" /> CIRCUIT SYNCHRONIZED. LOADING NEXT TASK...
              </motion.div>
            )}
            {isCorrect === false && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 flex items-center justify-center gap-2 text-red-500 font-bold"
              >
                <AlertTriangle className="w-5 h-5" /> LOGIC ERROR DETECTED. SCORE RESET.
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <div className="mt-12 p-8 glass rounded-3xl border border-white/5 flex items-start gap-4">
           <div className="p-3 bg-primary/10 rounded-xl">
              <Cpu className="w-6 h-6 text-primary" />
           </div>
           <div>
              <h4 className="font-bold mb-2">Gate Intelligence Brief:</h4>
              <ul className="text-sm text-foreground/50 space-y-2">
                 <li><span className="text-white font-bold tracking-widest">AND:</span> Output is 1 only if BOTH inputs are 1.</li>
                 <li><span className="text-white font-bold tracking-widest">OR:</span> Output is 1 if AT LEAST ONE input is 1.</li>
                 <li><span className="text-white font-bold tracking-widest">XOR:</span> Output is 1 only if inputs are DIFFERENT.</li>
              </ul>
           </div>
        </div>
      </div>
    </div>
  );
}

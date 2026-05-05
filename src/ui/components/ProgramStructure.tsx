/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.STRUCTURE.MAIN
DESCRIPTION: Program Structure component for Beast AI Hero Academy

5WH:
WHAT = ProgramStructure component
WHY = Visualise the execution path of the academy
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/ProgramStructure.tsx
WHEN = 2026-05-05
HOW = React + Fragment + Lucide

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { Fragment } from 'react';
import { 
  Search, 
  Users2, 
  Terminal, 
  Cpu, 
  Layers, 
  TrendingUp, 
  Rocket 
} from 'lucide-react';

const ProgramStructure = () => {
  const steps = [
    { title: "Self Discovery", icon: <Search /> },
    { title: "Team Formation", icon: <Users2 /> },
    { title: "AI Bootcamp", icon: <Terminal /> },
    { title: "Build Real Tools", icon: <Cpu /> },
    { title: "MVP Development", icon: <Layers /> },
    { title: "Demo Day", icon: <TrendingUp /> },
    { title: "Startup Launch", icon: <Rocket /> }
  ];

  return (
    <section className="py-32 bg-[#12071f] border-y border-white/5 overflow-x-auto">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
           <h2 className="text-beast-yellow font-sans font-black text-xs uppercase tracking-[0.4em] mb-4">Program Pipeline</h2>
           <h3 className="text-4xl lg:text-6xl font-sans font-black uppercase text-white">The <span className="text-beast-green italic underline">Execution</span> Path</h3>
        </div>
        
        <div className="flex flex-col lg:flex-row justify-between items-center gap-4 min-w-[1000px] lg:min-w-0">
          {steps.map((step, idx) => (
            <Fragment key={idx}>
              <div className="flex flex-col items-center group">
                <div className="w-16 h-16 rounded-2xl bg-[#1a0b2e] border border-white/10 flex items-center justify-center text-beast-green group-hover:scale-110 group-hover:border-beast-green transition-all duration-300 shadow-lg mb-4">
                   {step.icon}
                </div>
                <span className="text-[10px] font-black uppercase tracking-widest text-center text-gray-400 group-hover:text-white transition-colors">{step.title}</span>
              </div>
              {idx < steps.length - 1 && (
                <div className="hidden lg:block w-full h-px bg-gradient-to-r from-beast-green/50 to-beast-accent-purple/50 opacity-20" />
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramStructure;

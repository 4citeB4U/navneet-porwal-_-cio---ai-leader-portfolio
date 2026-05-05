/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.EXPERIENCE.MAIN
DESCRIPTION: Experience Summary component detailing Monk's professional history

5WH:
WHAT = ExperienceSummary component
WHY = Establish professional credibility and authority
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/ExperienceSummary.tsx
WHEN = 2026-05-05
HOW = React + Motion + Lucide

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { motion } from 'motion/react';
import { ChevronRight } from 'lucide-react';

const ExperienceSummary = () => {
  return (
    <section id="experience" className="py-32 bg-[#12071f] border-y border-white/5">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24 items-center">
             <div>
                <h2 className="text-beast-yellow font-sans font-black text-xs uppercase tracking-[0.4em] mb-4">Enterprise Roots</h2>
                <h3 className="text-5xl lg:text-7xl font-sans font-black text-white uppercase italic leading-tight">CIO Level <br /><span className="text-beast-green underline">Execution.</span></h3>
                <div className="w-24 h-2 bg-beast-accent-purple my-10 rounded-full" />
                <p className="text-xl text-gray-400 font-bold leading-relaxed mb-10 italic">
                  "20+ years evolution from the trenches of DevOps to the boardroom. As Program Architect & Lead Mentor, I guide the next generation from foundational AI thinking to launching real companies."
                </p>
                <div className="grid grid-cols-2 gap-8">
                   <div>
                      <div className="text-4xl font-black text-white">2006</div>
                      <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest mt-2 italic underline underline-offset-4 decoration-beast-green/50">Tech Evolution Start</div>
                   </div>
                   <div>
                      <div className="text-4xl font-black text-white">USA/IN</div>
                      <div className="text-[10px] font-black uppercase text-gray-500 tracking-widest mt-2 italic underline underline-offset-4 decoration-beast-accent-purple/50">Global Expansion</div>
                   </div>
                </div>
             </div>

             <div className="space-y-6">
                {[
                  { role: "Program Architect & Lead Mentor", company: "Beast AI Hero Academy", period: "PRESENT" },
                  { role: "CIO & Tech Executive", company: "Global Enterprise Transformation", period: "20+ YEARS" },
                  { role: "Transition Leader", company: "Architecting the India ↔ USA Pipeline", period: "GLOBAL" }
                ].map((job, idx) => (
                  <motion.div 
                    key={idx}
                    whileHover={{ x: 15 }}
                    className="p-8 bg-[#1a0b2e] rounded-[30px] border border-white/5 group hover:border-beast-green transition-all"
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <div className="text-[10px] font-black text-beast-green uppercase tracking-widest mb-2 italic">{job.period}</div>
                        <h4 className="text-3xl font-sans font-black text-white uppercase italic">{job.role}</h4>
                        <p className="text-beast-accent-purple font-bold tracking-widest uppercase text-xs mt-2">{job.company}</p>
                      </div>
                      <div className="text-beast-purple bg-beast-green w-10 h-10 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight />
                      </div>
                    </div>
                  </motion.div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default ExperienceSummary;

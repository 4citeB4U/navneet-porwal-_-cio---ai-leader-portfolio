/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.OUTCOMES.MAIN
DESCRIPTION: Real Outcomes component for Beast AI Hero Academy

5WH:
WHAT = RealOutcomes component
WHY = Showcase the tangible results of the program
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/RealOutcomes.tsx
WHEN = 2026-05-05
HOW = React + Lucide

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { Star, ArrowRight } from 'lucide-react';

const RealOutcomes = () => {
  const outcomes = [
    { title: "4–6 Working AI Tools", desc: "A personal arsenal of functional AI solutions built from scratch." },
    { title: "Deployed Application", desc: "A live, production-ready application accessible to the world." },
    { title: "Professional Portfolio", desc: "Verified proof of work that stands out to global enterprises." },
    { title: "Startup Exposure", desc: "Direct experience in the high-stakes world of AI entrepreneurship." }
  ];

  return (
    <section className="py-32 bg-[#0d0516]">
       <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
             <div>
                <h2 className="text-beast-accent-purple font-sans font-black text-xs uppercase tracking-[0.4em] mb-4">Tangible Value</h2>
                <h3 className="text-5xl lg:text-7xl font-sans font-black uppercase text-white mb-8">What You <br /><span className="text-beast-yellow italic">Actually</span> Leave With</h3>
                <p className="text-xl text-gray-400 font-bold leading-relaxed mb-10">
                   This isn't just another course. It's a career-defining experience where you exit with a complete ecosystem of AI products and startup experience.
                </p>
                <button className="flex items-center gap-4 px-8 py-4 bg-white text-beast-purple font-black text-sm uppercase tracking-widest rounded-full hover:bg-beast-green transition-all group">
                   Apply for Next Cohort
                   <ArrowRight className="group-hover:translate-x-2 transition-transform" />
                </button>
             </div>
             
             <div className="grid sm:grid-cols-2 gap-6">
                {outcomes.map((outcome, idx) => (
                  <div key={idx} className="p-8 bg-[#1a0b2e] border border-white/5 rounded-[30px] hover:border-beast-yellow transition-all">
                     <div className="w-12 h-12 bg-beast-yellow/10 rounded-xl flex items-center justify-center text-beast-yellow mb-6">
                        <Star size={24} />
                     </div>
                     <h4 className="text-xl font-black text-white mb-3 uppercase italic leading-tight">{outcome.title}</h4>
                     <p className="text-sm text-gray-500 font-bold">{outcome.desc}</p>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
};

export default RealOutcomes;

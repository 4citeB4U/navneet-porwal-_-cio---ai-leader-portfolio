/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.FLAGSHIP.MAIN
DESCRIPTION: Flagship Program component for Beast AI Hero Academy

5WH:
WHAT = FlagshipProgram component
WHY = Detail the core value proposition of Beast AI
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/FlagshipProgram.tsx
WHEN = 2026-05-05
HOW = React + Motion + Lucide

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { motion } from 'motion/react';
import { Brain, Cpu, Rocket, CheckCircle2 } from 'lucide-react';

const FlagshipProgram = () => {
  const pillars = [
    {
      title: "Learn",
      icon: <Brain className="text-beast-accent-purple" size={40} />,
      items: ["AI Fundamentals (Azure, Google, Agents)", "Entrepreneurship", "Personal Mastery"],
      color: "border-beast-accent-purple/30 bg-beast-accent-purple/5"
    },
    {
      title: "Build",
      icon: <Cpu className="text-beast-green" size={40} />,
      items: ["AI Personal Assistants", "Smart Schedulers & Mini CRM", "Contract Analyzers", "Multi-Agent Systems"],
      color: "border-beast-green/30 bg-beast-green/5"
    },
    {
      title: "Launch",
      icon: <Rocket className="text-beast-yellow" size={40} />,
      items: ["Team-based Startup Projects", "Demo Day + Shark Tank Pitch", "Launching Real Companies"],
      color: "border-beast-yellow/30 bg-beast-yellow/5"
    }
  ];

  return (
    <section id="flagship" className="py-32 bg-[#0d0516] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <h2 className="text-beast-green font-sans font-black text-xs uppercase tracking-[0.4em] mb-4">The Flagship Program</h2>
          <h3 className="text-5xl lg:text-7xl font-sans font-black uppercase text-white mb-6">Global AI Internship & <br /><span className="text-beast-accent-purple italic underline">Startup Incubator</span></h3>
          <p className="max-w-3xl mx-auto text-xl text-gray-400 font-bold leading-relaxed">
            A one-of-a-kind international program combining AI training, real-world product development, and startup incubation across the United States and India.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {pillars.map((pillar, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className={`p-10 rounded-[40px] border ${pillar.color} backdrop-blur-sm relative overflow-hidden group`}
            >
              <div className="mb-8">{pillar.icon}</div>
              <h4 className="text-4xl font-sans font-black text-white mb-8 uppercase italic">{pillar.title}</h4>
              <ul className="space-y-4">
                {pillar.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300 font-bold">
                    <CheckCircle2 size={18} className="text-beast-green shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlagshipProgram;

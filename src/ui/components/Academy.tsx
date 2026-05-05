/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.ACADEMY.MAIN
DESCRIPTION: Academy Method component for Beast AI Hero Academy

5WH:
WHAT = Academy component
WHY = Explain the tiered educational pipeline
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/Academy.tsx
WHEN = 2026-05-05
HOW = React + Motion + Lucide

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { motion } from 'motion/react';
import { Brain, Terminal, Users, Rocket } from 'lucide-react';

const Academy = () => {
  const tiers = [
    {
      level: "01",
      title: "Explorer",
      subtitle: "AI Awareness",
      desc: "Foundational AI thinking, identifying tools, and understanding primitive logic systems.",
      color: "from-beast-accent-purple/20 to-transparent",
      icon: <Brain className="text-beast-accent-purple" size={32} />
    },
    {
      level: "02",
      title: "Architect",
      subtitle: "Solution Design",
      desc: "Problem-solving through logic, bias, and ethics modeling in enterprise AI.",
      color: "from-beast-green/20 to-transparent",
      icon: <Terminal className="text-beast-green" size={32} />
    },
    {
      level: "03",
      title: "Leader",
      subtitle: "Strategy & Governance",
      desc: "Strategic transformation leadership and creating sustainable AI governance models.",
      color: "from-beast-yellow/20 to-transparent",
      icon: <Users className="text-beast-yellow" size={32} />
    },
    {
      level: "04",
      title: "Engineer",
      subtitle: "Scaling MLOps",
      desc: "Bridging the gap between prototype and enterprise-ready scalable AI deployment.",
      color: "from-beast-accent-purple/20 to-transparent",
      icon: <Rocket className="text-beast-accent-purple" size={32} />
    }
  ];

  return (
    <section id="academy" className="py-32 bg-[#0d0516]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <h2 className="text-beast-green font-sans font-black text-xs uppercase tracking-[0.4em] mb-4">Educational Pipeline</h2>
          <h3 className="text-5xl lg:text-7xl font-sans font-black uppercase text-white">The Academy <span className="text-beast-accent-purple italic underline">Method</span></h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiers.map((tier, idx) => (
            <motion.div
              key={idx}
              whileHover={{ y: -10 }}
              className="group p-10 bg-[#1a0b2e] rounded-[40px] border border-white/5 hover:border-beast-green/30 transition-all relative overflow-hidden"
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${tier.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
              <div className="relative z-10">
                <div className="text-gray-500 font-sans font-black text-[10px] uppercase tracking-widest mb-6">Level {tier.level}</div>
                <div className="mb-6">{tier.icon}</div>
                <h4 className="text-3xl font-sans font-black text-white mb-1 uppercase italic">{tier.title}</h4>
                <p className="text-gray-400 font-sans text-sm mb-6 font-bold uppercase tracking-widest">{tier.subtitle}</p>
                <p className="text-gray-500 text-sm leading-relaxed font-bold">
                  {tier.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Academy;

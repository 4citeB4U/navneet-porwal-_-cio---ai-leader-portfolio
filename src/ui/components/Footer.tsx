/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.FOOTER.MAIN
DESCRIPTION: Footer component with branding, social links, and the Leeway watermark

5WH:
WHAT = Footer component
WHY = Final branding and copyright information
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/Footer.tsx
WHEN = 2026-05-05
HOW = React + Lucide + Watermark

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { Linkedin, Globe } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-20 bg-[#1a0b2e] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-beast-accent-purple rounded-full flex items-center justify-center shadow-2xl">
            <span className="text-white font-black italic text-2xl">B</span>
          </div>
          <div>
            <span className="font-sans font-black text-2xl tracking-tighter uppercase italic block leading-none">BEAST AI</span>
            <span className="text-[10px] font-black uppercase tracking-[0.3em] text-beast-green">Transforming Leaders</span>
          </div>
        </div>

        <div className="text-gray-500 text-[10px] font-black uppercase tracking-widest text-center md:text-left">
          © 2026 Navneet (Monk) Porwal <br /> 
          <span className="text-white italic">CIO | Founder | Mentor</span>
        </div>

        <div className="flex gap-8">
          <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-beast-accent-purple transition-all"><Linkedin size={20} /></a>
          <a href="#" className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center hover:bg-beast-green transition-all text-white"><Globe size={20} /></a>
        </div>
      </div>

      {/* LEEWAY WATERMARK - VERY SUBTLE */}
      <div className="absolute bottom-4 right-8 opacity-[0.03] select-none pointer-events-none">
        <span className="text-[8px] font-sans font-bold uppercase tracking-[0.5em] text-white">By Leeway Innovations</span>
      </div>
    </footer>
  );
};

export default Footer;

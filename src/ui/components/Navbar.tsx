/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.NAVBAR.MAIN
DESCRIPTION: Standard navigation component for the Navneet Porwal portfolio

5WH:
WHAT = Navbar component
WHY = Navigation and branding across the portfolio
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/Navbar.tsx
WHEN = 2026-05-05
HOW = React + Tailwind + Lucide Icons

AGENTS: 
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { useState, useEffect } from 'react';
import { Zap } from 'lucide-react';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${scrolled ? 'bg-beast-purple/90 backdrop-blur-xl py-4 border-b border-white/5' : 'bg-transparent py-8'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-beast-accent-purple rounded-full flex items-center justify-center relative shadow-lg">
             <div className="text-white font-black italic text-xl">B</div>
             <div className="absolute -bottom-1 -right-1 text-beast-green">
                <Zap size={14} fill="currentColor" />
             </div>
          </div>
          <span className="font-sans font-black text-2xl tracking-tighter uppercase italic">BEAST AI</span>
        </div>
        
        <div className="hidden md:flex items-center gap-10">
          <a href="#hero" className="font-black text-[10px] uppercase tracking-widest hover:text-beast-green transition-colors">Home</a>
          <a href="#flagship" className="font-black text-[10px] uppercase tracking-widest hover:text-beast-green transition-colors">Flagship</a>
          <a href="#academy" className="font-black text-[10px] uppercase tracking-widest hover:text-beast-green transition-colors">Academy</a>
          <a href="#experience" className="font-black text-[10px] uppercase tracking-widest hover:text-beast-green transition-colors">Experience</a>
          <button className="px-6 py-2 bg-beast-green text-beast-purple font-black text-[10px] uppercase tracking-widest rounded-full hover:scale-105 transition-all">
            Connect Now
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.HERO.MAIN
DESCRIPTION: Business Card Hero component showcasing Navneet Porwal's primary identity

5WH:
WHAT = BusinessCardHero component
WHY = High-impact first impression for the portfolio
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/BusinessCardHero.tsx
WHEN = 2026-05-05
HOW = React + Motion + Tailwind

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { motion } from 'motion/react';
import { 
  Zap, 
  Users, 
  Globe, 
  Mail, 
  MapPin, 
  GraduationCap, 
  Brain, 
  QrCode 
} from 'lucide-react';
import monkImage from '../../assets/monk.png';

const BusinessCardHero = () => {
  return (
    <section id="hero" className="min-h-screen py-20 lg:py-32 flex items-center justify-center bg-[#0d0516] relative overflow-hidden">
      {/* Background Ambience */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-beast-accent-purple opacity-5 blur-[120px] rounded-full -mr-64" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-beast-green opacity-5 blur-[120px] rounded-full -ml-64" />

      <div className="max-w-6xl w-full px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="business-card-shadow flex flex-col lg:flex-row bg-[#1a0b2e] rounded-[40px] overflow-hidden border border-white/5"
        >
          {/* LEFT SIDE (DARK) */}
          <div className="lg:w-[45%] bg-[#1a0b2e] p-10 lg:p-14 flex flex-col items-center justify-between relative">
             {/* Circuit Decoration */}
             <div className="absolute top-0 left-0 p-8 opacity-20 pointer-events-none w-full h-full">
                <div className="w-full h-px bg-gradient-to-r from-transparent via-beast-green to-transparent mb-8" />
                <div className="w-full h-px bg-gradient-to-r from-transparent via-beast-accent-purple to-transparent opacity-50" />
             </div>

             {/* Branding */}
             <div className="text-center relative z-10">
                <div className="relative mb-8 inline-block">
                  <div className="w-32 h-32 lg:w-40 lg:h-40 bg-[#1a0b2e] rounded-full flex items-center justify-center relative overflow-hidden border-4 border-beast-accent-purple shadow-[0_0_20px_rgba(177,70,255,0.4)]">
                    <img 
                      src={monkImage} 
                      alt="Navneet (Monk) Porwal" 
                      className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-beast-purple/40 to-transparent pointer-events-none" />
                  </div>
                </div>
                <h1 className="text-5xl lg:text-7xl font-sans font-black tracking-tight flex items-center justify-center gap-3">
                  BEAST <span className="text-beast-green">AI</span>
                </h1>
                <p className="text-[10px] lg:text-xs font-sans font-bold uppercase tracking-[0.2em] text-beast-green mt-3 opacity-90">
                  Building Ethical AI Solutions Together
                </p>
             </div>

             {/* Services strip */}
             <div className="grid grid-cols-4 gap-4 w-full mt-12 py-6 border-t border-b border-white/5 relative z-10">
                <div className="text-center flex flex-col items-center group">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:text-beast-accent-purple transition-all">
                      <Brain size={18} />
                   </div>
                   <span className="text-[8px] uppercase font-bold text-gray-400">AI consulting</span>
                </div>
                <div className="text-center flex flex-col items-center group">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:text-beast-green transition-all">
                      <GraduationCap size={18} />
                   </div>
                   <span className="text-[8px] uppercase font-bold text-gray-400">AI training</span>
                </div>
                <div className="text-center flex flex-col items-center group">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:text-beast-yellow transition-all">
                      <Users size={18} />
                   </div>
                   <span className="text-[8px] uppercase font-bold text-gray-400">Mentorship</span>
                </div>
                <div className="text-center flex flex-col items-center group">
                   <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-2 group-hover:text-beast-accent-purple transition-all">
                      <Globe size={18} />
                   </div>
                   <span className="text-[8px] uppercase font-bold text-gray-400">Global Programs</span>
                </div>
             </div>

             {/* Bottom Mission Card */}
             <div className="mt-12 w-full p-2 bg-beast-yellow border border-beast-yellow rounded-lg relative z-10">
                <div className="bg-[#1a0b2e] p-4 rounded-md">
                   <div className="flex justify-center items-center mb-1">
                      <span className="text-beast-yellow text-[9px] font-black uppercase tracking-[0.2em]">EDUCATE. INNOVATE. TRANSFORM.</span>
                   </div>
                   <p className="text-[10px] text-white font-black uppercase leading-tight text-center">
                     Beast AI Hero Academy is a global AI training and startup incubation system where participants build real-world AI tools, work in teams, and launch deployable products.
                   </p>
                </div>
             </div>
          </div>

          {/* RIGHT SIDE (LIGHT) */}
          <div className="lg:w-[55%] bg-white p-10 lg:p-20 flex flex-col justify-between text-[#1a0b2e]">
            {/* Name/Title Header */}
            <div>
              <h2 className="text-4xl lg:text-6xl font-sans font-black uppercase leading-tight tracking-tighter">
                NAVNEET PORWAL <br />
                <span className="text-beast-green">(MONK)</span>
              </h2>
              <div className="w-24 h-1.5 bg-[#1a0b2e] my-8 rounded-full" />
              <p className="text-xl lg:text-2xl font-sans font-black flex items-center gap-3">
                CIO <span className="w-2 h-2 bg-beast-accent-purple rounded-full" /> 
                FOUNDER & AI LEADER
              </p>
              <p className="text-beast-accent-purple font-black text-sm uppercase tracking-widest mt-2">
                BEAST AI | HERO ACADEMY
              </p>
            </div>

            {/* Contact Details */}
            <div className="mt-12 space-y-6">
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-beast-purple rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                     <Users size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase text-gray-500">Professional Identity</div>
                    <div className="text-base font-bold">20+ Years Enterprise Tech Executive</div>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-beast-purple rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                     <Mail size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase text-gray-500">Contact Email</div>
                    <div className="text-base font-bold">contact@beastai.ai</div>
                  </div>
               </div>
               <div className="flex items-center gap-6 group">
                  <div className="w-12 h-12 bg-beast-purple rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                     <Globe size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase text-gray-500">Web Portals</div>
                    <div className="text-base font-bold">www.beastai.ai | pivot2ai.org</div>
                  </div>
               </div>
            </div>

            {/* Bottom: Left Section */}
            <div className="mt-12 lg:mt-0 flex justify-between items-end border-t border-gray-100 pt-10">
               <div className="flex items-center gap-4 group">
                  <div className="w-12 h-12 bg-beast-purple rounded-full flex items-center justify-center text-white shrink-0 group-hover:scale-110 transition-transform">
                     <MapPin size={20} />
                  </div>
                  <div>
                    <div className="text-sm font-black uppercase text-gray-500">Primary Location</div>
                    <div className="text-base font-bold">Brookfield, Wisconsin, USA</div>
                    <div className="text-xs font-bold text-beast-green uppercase">Driving Global Transformation</div>
                  </div>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BusinessCardHero;

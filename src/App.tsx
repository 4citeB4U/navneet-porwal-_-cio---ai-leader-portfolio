import { 
  Zap, 
  Target, 
  Users, 
  Terminal, 
  Cpu, 
  Globe, 
  Briefcase, 
  Star, 
  Award, 
  Shield, 
  ChevronRight,
  Menu,
  X,
  Linkedin,
  Rocket,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  Brain,
  QrCode
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState, useEffect } from 'react';

// --- Components ---

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
                      src="/monk.png" 
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
                     Empowering the next generation of AI leaders.
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

            {/* Bottom: QR Section */}
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

               <div className="flex flex-col items-center">
                  <div className="w-24 h-24 p-2 bg-white border-2 border-beast-accent-purple rounded-2xl">
                     <div className="w-full h-full bg-gray-100 rounded-lg flex items-center justify-center text-beast-purple">
                        <QrCode size={40} />
                     </div>
                  </div>
                  <span className="text-[9px] font-black uppercase tracking-widest mt-2 text-beast-purple uppercase italic">Connect with Navneet</span>
               </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

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

export default function App() {
  return (
    <div className="min-h-screen bg-beast-purple font-sans selection:bg-beast-green selection:text-beast-purple">
      <Navbar />
      <BusinessCardHero />
      
      <Academy />

      {/* Experience Summary */}
      <section id="experience" className="py-32 bg-[#12071f] border-y border-white/5">
         <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-24 items-center">
               <div>
                  <h2 className="text-beast-yellow font-sans font-black text-xs uppercase tracking-[0.4em] mb-4">Enterprise Roots</h2>
                  <h3 className="text-5xl lg:text-7xl font-sans font-black text-white uppercase italic leading-tight">CIO Level <br /><span className="text-beast-green underline">Execution.</span></h3>
                  <div className="w-24 h-2 bg-beast-accent-purple my-10 rounded-full" />
                  <p className="text-xl text-gray-400 font-bold leading-relaxed mb-10 italic">
                    "20+ years evolution from the trenches of DevOps to the boardroom. My mandate is simple: Bridge the gap between legacy reality and AI-powered futures."
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
                    { role: "CIO & Tech Executive", company: "Global Enterprise Transformation", period: "PRESENT" },
                    { role: "Founder", company: "Beast AI Hero Academy", period: "CURRENT" },
                    { role: "Transition Leader", company: "Architecting the India ↔ USA Pipeline", period: "2024+" }
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

      {/* Testimonial Feature */}
      <section className="py-40 bg-[#0d0516] relative overflow-hidden">
         <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <div className="inline-flex gap-2 mb-12">
               {[...Array(5)].map((_, i) => <Star key={i} size={20} fill="#facc15" className="text-beast-yellow" />)}
            </div>
            <h4 className="text-4xl md:text-5xl lg:text-7xl font-sans font-black uppercase italic leading-tight text-white opacity-90">
              "Navneet is a <span className="text-beast-green">Standout Leader</span> who leads with empathy and empowers professionals for <span className="text-beast-accent-purple italic underline">collective growth</span>."
            </h4>
            <div className="mt-16 flex flex-col items-center">
               <div className="w-16 h-16 bg-beast-green rounded-full flex items-center justify-center text-beast-purple mb-4">
                  <Linkedin size={32} />
               </div>
               <div className="font-black text-xs uppercase tracking-[0.5em] text-white">Global Enterprise Circle</div>
               <div className="text-gray-500 font-bold text-[10px] uppercase mt-1 italic">Verified LinkedIn Endorsement</div>
            </div>
         </div>
         {/* Decorative Blur */}
         <div className="absolute top-1/2 left-0 w-96 h-96 bg-beast-accent-purple opacity-5 blur-[100px] -translate-y-1/2" />
         <div className="absolute top-1/2 right-0 w-96 h-96 bg-beast-green opacity-5 blur-[100px] -translate-y-1/2" />
      </section>

      {/* Footer */}
      <footer className="py-20 bg-[#1a0b2e] border-t border-white/5">
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
      </footer>
    </div>
  );
}

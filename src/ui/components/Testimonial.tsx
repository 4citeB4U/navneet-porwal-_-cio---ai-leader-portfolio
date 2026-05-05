/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI.COMPONENTS
TAG: UI.COMPONENTS.TESTIMONIAL.MAIN
DESCRIPTION: Testimonial component showcasing professional endorsements

5WH:
WHAT = Testimonial component
WHY = Provide social proof and professional validation
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/components/Testimonial.tsx
WHEN = 2026-05-05
HOW = React + Lucide

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import { Star, Linkedin } from 'lucide-react';

const Testimonial = () => {
  return (
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
  );
};

export default Testimonial;

/*
LEEWAY HEADER — DO NOT REMOVE

REGION: UI
TAG: UI.APP.MAIN
DESCRIPTION: Main application shell for the Navneet Porwal portfolio

5WH:
WHAT = App component
WHY = Root component assembly
WHO = Leeway Innovations / Navneet Porwal
WHERE = src/ui/App.tsx
WHEN = 2026-05-05
HOW = React + Component Composition

AGENTS:
ASSESS
ALIGN
AUDIT

LICENSE: PROPRIETARY
*/

import Navbar from './components/Navbar';
import BusinessCardHero from './components/BusinessCardHero';
import FlagshipProgram from './components/FlagshipProgram';
import ProgramStructure from './components/ProgramStructure';
import RealOutcomes from './components/RealOutcomes';
import Academy from './components/Academy';
import ExperienceSummary from './components/ExperienceSummary';
import Testimonial from './components/Testimonial';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-beast-purple font-sans selection:bg-beast-green selection:text-beast-purple">
      <Navbar />
      <BusinessCardHero />
      <FlagshipProgram />
      <ProgramStructure />
      <RealOutcomes />
      <Academy />
      <ExperienceSummary />
      <Testimonial />
      <Footer />
    </div>
  );
}

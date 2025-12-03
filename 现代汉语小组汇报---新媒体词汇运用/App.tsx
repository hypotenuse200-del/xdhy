import React from 'react';
import Hero from './components/Hero';
import ContextLab from './components/ContextLab';
import PlatformDeepDive from './components/PlatformDeepDive';
import TheMinefield from './components/TheMinefield';
import SlangMastery from './components/SlangMastery'; // Renamed
import StyleLaboratory from './components/StyleLaboratory'; // Replaced AI Workshop
import TitleClinic from './components/TitleClinic'; // New
import SensoryImmersion from './components/SensoryImmersion'; // New
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
      {/* Sticky Navigation */}
      <nav className="fixed top-0 left-0 w-full z-50 px-4 py-3 pointer-events-none">
        <div className="max-w-fit mx-auto bg-white/80 backdrop-blur-xl border border-white/40 shadow-lg shadow-slate-200/50 rounded-full px-6 py-3 flex items-center gap-6 text-sm font-bold text-slate-600 pointer-events-auto">
          <a href="#hero" className="hover:text-indigo-600 transition-colors">首页</a>
          <a href="#context" className="hover:text-indigo-600 transition-colors">语境</a>
          <a href="#platforms" className="hover:text-indigo-600 transition-colors">平台</a>
          <a href="#title" className="hover:text-indigo-600 transition-colors">标题</a>
          <a href="#quiz" className="hover:text-indigo-600 transition-colors">避坑</a>
          <a href="#sensory" className="hover:text-indigo-600 transition-colors">通感</a>
        </div>
      </nav>

      <div id="hero">
        <Hero />
      </div>

      <div id="context">
        <ContextLab />
      </div>

      <div id="platforms">
        <PlatformDeepDive />
      </div>
      
      <div id="title">
        <TitleClinic />
      </div>

      <div id="sensory">
        <SensoryImmersion />
      </div>

      <div id="quiz">
        <TheMinefield />
      </div>

      <div id="slang">
        <SlangMastery />
      </div>

      <div id="style-lab">
        <StyleLaboratory />
      </div>

      <Footer />
    </div>
  );
}

export default App;
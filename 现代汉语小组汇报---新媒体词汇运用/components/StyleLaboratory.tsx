import React, { useState } from 'react';
import { STYLE_TRANSFORMATIONS } from '../constants';
import { Platform } from '../types';
import { Wand2, PenTool, Hash, Instagram, Video, Tv, MessageCircle, RefreshCw } from 'lucide-react';

const StyleLaboratory: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(STYLE_TRANSFORMATIONS[0].id);
  const [activePlatform, setActivePlatform] = useState<Platform>(Platform.XIAOHONGSHU);
  
  const currentScenario = STYLE_TRANSFORMATIONS.find(s => s.id === activeScenarioId) || STYLE_TRANSFORMATIONS[0];

  const getPlatformIcon = (p: Platform) => {
    switch (p) {
      case Platform.XIAOHONGSHU: return <Instagram className="w-4 h-4" />;
      case Platform.DOUYIN: return <Video className="w-4 h-4" />;
      case Platform.OFFICIAL: return <PenTool className="w-4 h-4" />;
      case Platform.BILIBILI: return <Tv className="w-4 h-4" />;
      case Platform.WECHAT: return <MessageCircle className="w-4 h-4" />;
      default: return <Hash className="w-4 h-4" />;
    }
  };

  const getActiveContent = () => {
    return currentScenario.variations.find(v => v.platform === activePlatform) || currentScenario.variations[0];
  };

  const activeContent = getActiveContent();

  return (
    <section className="py-24 px-4 bg-gradient-to-br from-indigo-950 via-slate-900 to-black text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-indigo-300 text-sm font-bold mb-4 border border-white/10 backdrop-blur-sm">
            <Wand2 className="w-4 h-4" />
            <span>风格重塑实验室</span>
          </div>
          <h2 className="text-4xl font-bold mb-6">不仅仅是换个词，是换一种思维</h2>
          <p className="text-slate-400 max-w-2xl mx-auto text-lg">
            不同的场景，不同的平台，完全不同的表达策略。
          </p>
        </div>

        {/* Scenario Switcher */}
        <div className="flex justify-center mb-8 gap-4">
          {STYLE_TRANSFORMATIONS.map((s) => (
             <button
               key={s.id}
               onClick={() => { setActiveScenarioId(s.id); setActivePlatform(s.variations[0].platform); }}
               className={`px-6 py-2 rounded-full border transition-all ${
                 activeScenarioId === s.id 
                 ? 'bg-indigo-600 border-indigo-500 text-white' 
                 : 'bg-transparent border-slate-700 text-slate-400 hover:border-slate-500'
               }`}
             >
               {s.title}
             </button>
          ))}
        </div>

        {/* Main Interface */}
        <div className="bg-slate-900/50 backdrop-blur-xl border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Top Bar: Original Sentence */}
          <div className="bg-black/30 p-6 text-center border-b border-white/10">
            <p className="text-sm text-slate-400 uppercase tracking-widest mb-2 font-bold">原始素材 (Original)</p>
            <p className="text-xl md:text-2xl text-white font-serif italic">"{currentScenario.original}"</p>
          </div>

          <div className="grid lg:grid-cols-12 min-h-[500px]">
            {/* Sidebar: Platform Selector */}
            <div className="lg:col-span-3 border-r border-white/10 bg-black/20 p-4 flex flex-col gap-2">
              {currentScenario.variations.map((v) => (
                <button
                  key={v.platform}
                  onClick={() => setActivePlatform(v.platform)}
                  className={`w-full text-left px-4 py-4 rounded-xl flex items-center gap-3 transition-all duration-300 ${
                    activePlatform === v.platform
                      ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-900/50'
                      : 'text-slate-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {getPlatformIcon(v.platform)}
                  <span className="font-bold text-sm">
                    {v.platform === Platform.OFFICIAL ? '官方通稿' 
                     : v.platform === Platform.XIAOHONGSHU ? '小红书' 
                     : v.platform === Platform.DOUYIN ? '抖音' 
                     : v.platform === Platform.BILIBILI ? 'Bilibili'
                     : v.platform === Platform.WECHAT ? '公众号' : '其他'}
                  </span>
                </button>
              ))}
            </div>

            {/* Content Area */}
            <div className="lg:col-span-9 p-8 md:p-12 flex flex-col justify-center relative">
               {/* Background Watermark */}
               <div className="absolute right-0 top-0 text-[8rem] font-black text-white/5 pointer-events-none select-none overflow-hidden leading-none z-0">
                 {activePlatform}
               </div>

               <div className="relative z-10 animate-pulse-short">
                 <h3 className="text-sm font-bold text-indigo-400 mb-6 uppercase tracking-wider flex items-center gap-2">
                   <RefreshCw className="w-4 h-4" /> 
                   {activePlatform} 改写结果
                 </h3>
                 
                 <div className="text-2xl md:text-3xl leading-relaxed font-medium mb-12 text-white border-l-4 border-indigo-500 pl-6">
                   {activeContent?.text}
                 </div>

                 {/* Annotations */}
                 <div className="grid md:grid-cols-2 gap-4">
                   {activeContent?.annotations.map((note, i) => (
                     <div key={i} className="bg-white/5 border border-white/10 rounded-lg p-3 text-sm text-slate-300 flex items-start gap-2">
                       <span className="bg-indigo-500/20 text-indigo-300 text-xs font-bold px-2 py-0.5 rounded mt-0.5 shrink-0">POINT {i+1}</span>
                       <span>{note}</span>
                     </div>
                   ))}
                 </div>
               </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeInScale {
          from { opacity: 0; transform: scale(0.98); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-pulse-short {
          animation: fadeInScale 0.3s ease-out;
        }
      `}</style>
    </section>
  );
};

export default StyleLaboratory;
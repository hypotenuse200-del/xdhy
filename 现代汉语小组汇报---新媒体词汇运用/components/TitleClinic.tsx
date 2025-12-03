import React, { useState } from 'react';
import { TITLE_CASES } from '../constants';
import { ArrowRight, Lightbulb, XCircle, CheckCircle2 } from 'lucide-react';

const TitleClinic: React.FC = () => {
  const [activeCase, setActiveCase] = useState(0);

  return (
    <section className="py-20 px-4 bg-slate-900 text-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-bold mb-4 border border-blue-500/30">
            <Lightbulb className="w-4 h-4" />
            <span>流量入口</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">标题诊疗室：拒绝“性冷淡”</h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            标题决定打开率，内容决定留存率。好的新媒体标题不是标题党，而是利用心理学制造“好奇心缺口”。
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Controls */}
          <div className="flex flex-col gap-4">
             {TITLE_CASES.map((item, index) => (
               <button
                 key={item.id}
                 onClick={() => setActiveCase(index)}
                 className={`text-left p-6 rounded-xl border transition-all duration-300 ${
                   activeCase === index 
                     ? 'bg-blue-600 border-blue-500 shadow-lg shadow-blue-900/50 scale-105' 
                     : 'bg-slate-800 border-slate-700 hover:bg-slate-700'
                 }`}
               >
                 <span className="text-xs font-bold uppercase tracking-wider opacity-60 mb-1 block">{item.category}</span>
                 <span className="font-bold text-lg">{item.category} 案例分析</span>
               </button>
             ))}
          </div>

          {/* Analysis Card */}
          <div className="relative">
            <div className="bg-white text-slate-900 rounded-2xl p-8 shadow-2xl transform transition-all duration-500">
               {/* Bad Title */}
               <div className="mb-8 p-4 bg-slate-100 rounded-lg border-l-4 border-slate-400 opacity-70">
                 <div className="flex items-center gap-2 text-slate-500 font-bold text-sm mb-2">
                   <XCircle className="w-4 h-4" /> 原标题（修改前）
                 </div>
                 <h3 className="text-xl font-medium text-slate-600 line-through decoration-slate-400">
                   {TITLE_CASES[activeCase].badTitle}
                 </h3>
               </div>

               {/* Arrow */}
               <div className="absolute left-1/2 top-[35%] transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-lg z-10">
                 <ArrowRight className="w-6 h-6 text-slate-400" />
               </div>

               {/* Good Title */}
               <div className="mb-8 p-6 bg-blue-50 rounded-lg border-l-4 border-blue-600 shadow-sm">
                 <div className="flex items-center gap-2 text-blue-600 font-bold text-sm mb-2">
                   <CheckCircle2 className="w-4 h-4" /> 优化后（爆款预定）
                 </div>
                 <h3 className="text-2xl font-black text-slate-900 leading-tight">
                   {TITLE_CASES[activeCase].goodTitle}
                 </h3>
               </div>

               {/* Formula & Analysis */}
               <div className="space-y-4">
                 <div className="p-4 bg-slate-50 rounded-lg">
                   <span className="block text-xs font-bold text-slate-400 uppercase mb-1">爆款公式</span>
                   <p className="font-mono text-blue-600 font-bold">{TITLE_CASES[activeCase].formula}</p>
                 </div>
                 <div>
                   <span className="block text-xs font-bold text-slate-400 uppercase mb-1">深度解析</span>
                   <p className="text-slate-600 text-sm leading-relaxed">{TITLE_CASES[activeCase].analysis}</p>
                 </div>
               </div>
            </div>
            
            {/* Decor elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TitleClinic;
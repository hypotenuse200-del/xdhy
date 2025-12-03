import React, { useState } from 'react';
import { SLANG_HISTORY } from '../constants';
import { TrendingUp, AlertTriangle, Check, X, ChevronDown, Info } from 'lucide-react';

const SlangMastery: React.FC = () => {
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const toggleExpand = (index: number) => {
    setExpandedId(expandedId === index ? null : index);
  };

  return (
    <section className="py-20 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
           <div className="flex items-center gap-4">
              <div className="p-3 bg-purple-100 rounded-xl text-purple-600 shadow-sm">
                <TrendingUp className="w-8 h-8" />
              </div>
              <div>
                <h2 className="text-3xl font-bold text-slate-900">网络热词研修班</h2>
                <p className="text-slate-500 mt-1">造梗、玩梗、烂梗。点击卡片，学习如何不油腻地使用热词。</p>
              </div>
           </div>
           
           <div className="bg-white px-6 py-4 rounded-xl border border-slate-200 shadow-sm flex flex-col gap-2">
              <div className="flex items-center gap-2 text-sm font-bold text-green-600">
                <Check className="w-4 h-4" /> <span>原则：精准大于跟风</span>
              </div>
              <div className="flex items-center gap-2 text-sm font-bold text-red-500">
                <X className="w-4 h-4" /> <span>原则：官方号慎用缩写</span>
              </div>
           </div>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {SLANG_HISTORY.map((item, index) => {
              const isExpanded = expandedId === index;
              return (
                <div 
                  key={index} 
                  onClick={() => toggleExpand(index)}
                  className={`group bg-white rounded-2xl border border-slate-100 cursor-pointer transition-all duration-300 relative overflow-hidden flex flex-col
                    ${isExpanded ? 'ring-2 ring-purple-500 shadow-xl scale-[1.02] z-10' : 'hover:border-purple-200 hover:shadow-lg'}
                  `}
                >
                  {/* Status Badge */}
                  <div className={`absolute top-0 right-0 px-3 py-1 text-xs font-bold rounded-bl-xl z-20 ${
                    item.lifecycleStage === 'Outdated' ? 'bg-slate-200 text-slate-500' :
                    item.lifecycleStage === 'Peak' ? 'bg-green-100 text-green-700' :
                    'bg-red-100 text-red-600 animate-pulse'
                  }`}>
                    {item.lifecycleStage === 'Outdated' ? '❌ 已过时' : 
                     item.lifecycleStage === 'Peak' ? '✅ 稳定期' : '🔥 爆发期'}
                  </div>

                  {/* Basic Content */}
                  <div className="p-6">
                    <div className="mb-4">
                      <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded mb-2 inline-block">{item.year}</span>
                      <h3 className="text-2xl font-black text-slate-800 tracking-tight">{item.term}</h3>
                      <p className="text-slate-400 text-sm mt-1">{item.meaning}</p>
                    </div>

                    <div className="bg-slate-50 p-3 rounded-lg text-sm text-slate-600 mb-4 italic border border-slate-100">
                      "{item.usage}"
                    </div>

                    <div className="flex items-center justify-between mt-auto pt-2">
                       <span className="text-xs font-bold text-purple-600 flex items-center gap-1">
                         <Info className="w-3 h-3" /> 点击查看用法指南
                       </span>
                       <ChevronDown className={`w-5 h-5 text-slate-300 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                    </div>
                  </div>

                  {/* Expanded Teaching Content */}
                  <div className={`bg-slate-50 border-t border-slate-100 transition-all duration-300 overflow-hidden ${
                    isExpanded ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  }`}>
                    <div className="p-5 space-y-4">
                      {/* Expert Advice */}
                      <div className="flex items-start gap-2 text-xs leading-relaxed text-slate-600 bg-white p-3 rounded-lg border border-slate-200">
                         <AlertTriangle className="w-4 h-4 text-orange-500 shrink-0 mt-0.5" />
                         <span>{item.advice}</span>
                      </div>

                      {/* Do's and Don'ts */}
                      <div className="space-y-2">
                        <div className="flex items-start gap-2 p-2 rounded bg-green-50 text-green-800 text-xs">
                           <Check className="w-4 h-4 shrink-0 mt-0.5" />
                           <div>
                             <span className="font-bold block mb-1">正确用法</span>
                             "{item.goodExample}"
                           </div>
                        </div>
                        <div className="flex items-start gap-2 p-2 rounded bg-red-50 text-red-800 text-xs">
                           <X className="w-4 h-4 shrink-0 mt-0.5" />
                           <div>
                             <span className="font-bold block mb-1">错误用法 (油腻/尴尬)</span>
                             "{item.badExample}"
                           </div>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
};

export default SlangMastery;
import React, { useState } from 'react';
import { CASE_STUDIES } from '../constants';
import { Platform } from '../types';
import { Instagram, Video, Hash, Lightbulb, Tv, MessageCircle } from 'lucide-react';

const PlatformDeepDive: React.FC = () => {
  const [selectedPlatform, setSelectedPlatform] = useState<Platform>(Platform.XIAOHONGSHU);
  
  const currentCase = CASE_STUDIES.find(c => c.platform === selectedPlatform) || CASE_STUDIES[0];

  const getIcon = (p: Platform) => {
    switch (p) {
      case Platform.XIAOHONGSHU: return <Instagram className="w-5 h-5" />;
      case Platform.DOUYIN: return <Video className="w-5 h-5" />;
      case Platform.WEIBO: return <Hash className="w-5 h-5" />;
      case Platform.BILIBILI: return <Tv className="w-5 h-5" />;
      case Platform.WECHAT: return <MessageCircle className="w-5 h-5" />;
      default: return null;
    }
  };

  const getColor = (p: Platform) => {
    switch (p) {
      case Platform.XIAOHONGSHU: return "bg-red-500 hover:bg-red-600";
      case Platform.DOUYIN: return "bg-slate-900 hover:bg-slate-800";
      case Platform.WEIBO: return "bg-yellow-500 hover:bg-yellow-600";
      case Platform.BILIBILI: return "bg-blue-400 hover:bg-blue-500";
      case Platform.WECHAT: return "bg-green-600 hover:bg-green-700";
      default: return "bg-gray-500";
    }
  };

  const getLabel = (p: Platform) => {
    switch(p) {
      case Platform.XIAOHONGSHU: return "种草/审美";
      case Platform.DOUYIN: return "节奏/反转";
      case Platform.WEIBO: return "观点/热点";
      case Platform.BILIBILI: return "硬核/玩梗";
      case Platform.WECHAT: return "深度/私域";
      default: return "";
    }
  };

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-slate-900 mb-4 text-center">多维平台生态：词汇的“变色龙”效应</h2>
        <p className="text-center text-slate-500 mb-12 max-w-2xl mx-auto">不同的平台就是不同的“国家”，有各自的语言风俗。直接复制粘贴是运营大忌。</p>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Navigation */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            {[Platform.XIAOHONGSHU, Platform.DOUYIN, Platform.WEIBO, Platform.BILIBILI, Platform.WECHAT].map((p) => (
              <button
                key={p}
                onClick={() => setSelectedPlatform(p)}
                className={`flex items-center gap-3 px-5 py-4 rounded-xl transition-all duration-300 text-left ${
                  selectedPlatform === p 
                    ? `${getColor(p)} text-white shadow-xl shadow-slate-200 transform translate-x-2` 
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                }`}
              >
                {getIcon(p)}
                <div className="flex-1">
                  <span className="font-bold text-base block">{p === Platform.XIAOHONGSHU ? "小红书" : p === Platform.DOUYIN ? "抖音" : p === Platform.WEIBO ? "微博" : p === Platform.BILIBILI ? "Bilibili" : "公众号"}</span>
                  <span className={`text-xs ${selectedPlatform === p ? 'text-white/80' : 'text-slate-400'}`}>{getLabel(p)}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Content Card */}
          <div className="lg:col-span-9">
            <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 h-full flex flex-col relative overflow-hidden transition-all duration-500">
              {/* Animation wrapper key ensures remount animation */}
              <div key={selectedPlatform} className="relative z-10 animate-fadeIn">
                <div className="mb-8">
                  <h3 className="text-3xl font-black text-slate-800 mb-3">{currentCase.title}</h3>
                  <p className="text-slate-600 text-lg leading-relaxed">{currentCase.description}</p>
                </div>

                {/* Keywords Pills */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentCase.keywords.map((kw, i) => (
                    <span key={i} className="px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-bold text-slate-600 shadow-sm">
                      {kw}
                    </span>
                  ))}
                </div>

                {/* Example Box */}
                <div className="bg-white p-8 rounded-2xl shadow-sm border-l-4 border-indigo-500 mb-8">
                  <div className="text-xs font-bold text-indigo-500 uppercase mb-3 tracking-wider flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-indigo-500"></span>
                    典型话术
                  </div>
                  <p className="text-xl font-medium text-slate-800 italic leading-loose">"{currentCase.example}"</p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  {/* Analysis */}
                  <div className="bg-slate-200/50 p-6 rounded-2xl">
                    <h4 className="font-bold text-slate-900 mb-3">深度解析</h4>
                    <p className="text-slate-700 text-sm leading-relaxed whitespace-pre-line">
                      {currentCase.analysis}
                    </p>
                  </div>
                  
                  {/* Pro Tips */}
                  <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-100">
                    <h4 className="font-bold text-yellow-800 mb-3 flex items-center gap-2">
                      <Lightbulb className="w-4 h-4" /> 避坑与技巧
                    </h4>
                    <ul className="space-y-2">
                      {currentCase.proTips?.map((tip, i) => (
                        <li key={i} className="text-yellow-900/80 text-sm flex items-start gap-2">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-yellow-500 shrink-0"></span>
                          {tip}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default PlatformDeepDive;
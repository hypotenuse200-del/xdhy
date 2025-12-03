import React from 'react';
import { SLANG_HISTORY } from '../constants';
import { TrendingUp } from 'lucide-react';

const SlangTimeline: React.FC = () => {
  return (
    <section className="py-20 px-4 bg-slate-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
           <div className="p-3 bg-purple-100 rounded-xl text-purple-600">
             <TrendingUp className="w-8 h-8" />
           </div>
           <div>
             <h2 className="text-3xl font-bold text-slate-900">网络热词编年史</h2>
             <p className="text-slate-500">词汇的生命周期越来越短，记录是为了更好地创新。</p>
           </div>
        </div>

        <div className="relative">
          {/* Central Line (hidden on mobile, visible on lg) */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-slate-200 hidden lg:block rounded-full"></div>

          <div className="space-y-12 lg:space-y-0">
            {SLANG_HISTORY.map((item, index) => (
              <div key={index} className={`flex flex-col lg:flex-row items-center justify-center lg:justify-between w-full relative group ${index % 2 === 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Content Side */}
                <div className="w-full lg:w-[45%] mb-4 lg:mb-0">
                  <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow relative z-10">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-2xl font-black text-slate-800">{item.term}</h3>
                      <span className="text-xs font-bold px-2 py-1 bg-slate-100 text-slate-500 rounded">{item.year}</span>
                    </div>
                    <p className="text-slate-500 text-sm mb-3">{item.meaning}</p>
                    <div className="text-xs text-purple-600 font-medium bg-purple-50 p-2 rounded">
                      例句：{item.usage}
                    </div>
                  </div>
                </div>

                {/* Dot on Timeline */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center w-8 h-8 rounded-full bg-white border-4 border-purple-200 z-20 group-hover:border-purple-500 transition-colors">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                </div>

                {/* Empty Side for layout balance */}
                <div className="w-full lg:w-[45%] hidden lg:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SlangTimeline;
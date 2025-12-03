import React from 'react';
import { Sparkles, ArrowDown } from 'lucide-react';
import { TEAM_NAME, TEAM_MEMBERS } from '../constants';

const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-slate-50">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 -right-20 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-32 left-20 w-96 h-96 bg-pink-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/80 border border-slate-200 shadow-sm mb-8 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-purple-600" />
          <span className="text-sm font-medium text-slate-600">新媒体编辑必修课</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
          <span className="gradient-text">语感</span> 决定流量<br />
          <span className="text-slate-800">词汇</span> 重塑价值
        </h1>

        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          深入探讨现代汉语在新媒体语境下的变迁与运用。从平台风格到易错词汇，掌握文字背后的传播逻辑。
        </p>

        <div className="flex flex-col items-center gap-4">
          <div className="text-sm font-semibold text-slate-400 tracking-widest uppercase mb-2">
            Presentation By
          </div>
          <div className="text-lg font-bold text-slate-800">
            {TEAM_NAME}
          </div>
          <div className="flex gap-4 text-slate-600 font-medium">
            {TEAM_MEMBERS.map((member, i) => (
              <span key={i} className="px-3 py-1 bg-white rounded-md shadow-sm border border-slate-100">
                {member}
              </span>
            ))}
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce text-slate-400">
          <ArrowDown className="w-6 h-6" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
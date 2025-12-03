import React from 'react';
import { SENSORY_WORDS } from '../constants';
import { Eye, Ear, Hand, Utensils } from 'lucide-react';

const SensoryImmersion: React.FC = () => {
  const getIcon = (sense: string) => {
    switch(sense) {
      case 'Visual': return <Eye className="w-6 h-6" />;
      case 'Taste': return <Utensils className="w-6 h-6" />;
      case 'Sound': return <Ear className="w-6 h-6" />;
      case 'Touch': return <Hand className="w-6 h-6" />;
      default: return null;
    }
  };

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">通感实验室：让文字“活”起来</h2>
          <p className="text-slate-600 max-w-3xl mx-auto">
            新媒体写作拒绝干瘪的形容词。高级的文案能调用读者的感官，让他们看到颜色、听到声音、尝到味道。
            <br />
            <span className="font-bold text-indigo-600">把抽象的感受变成具象的物体。</span>
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SENSORY_WORDS.map((item, idx) => (
            <div key={idx} className="group relative h-80 perspective">
              <div className="absolute inset-0 w-full h-full duration-500 transform style-preserve-3d transition-transform group-hover:rotate-y-180">
                
                {/* Front Side */}
                <div className="absolute inset-0 w-full h-full bg-slate-50 border-2 border-slate-100 rounded-2xl flex flex-col items-center justify-center p-6 shadow-sm backface-hidden">
                  <div className={`p-4 rounded-full mb-6 ${
                    item.sense === 'Visual' ? 'bg-blue-100 text-blue-600' :
                    item.sense === 'Taste' ? 'bg-orange-100 text-orange-600' :
                    item.sense === 'Sound' ? 'bg-purple-100 text-purple-600' :
                    'bg-green-100 text-green-600'
                  }`}>
                    {getIcon(item.sense)}
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">{item.context}</h3>
                  <p className="text-slate-400 text-sm">新手常说...</p>
                  <p className="text-2xl font-bold text-slate-300 mt-2 line-through">{item.basicWord}</p>
                </div>

                {/* Back Side */}
                <div className="absolute inset-0 w-full h-full bg-indigo-600 rounded-2xl flex flex-col items-center justify-center p-6 text-white rotate-y-180 backface-hidden shadow-xl">
                  <span className="text-xs font-bold uppercase tracking-widest opacity-70 mb-4">进阶表达</span>
                  <p className="text-2xl font-bold text-center leading-relaxed mb-6">
                    {item.advancedWord}
                  </p>
                  <div className="w-12 h-1 bg-white/30 rounded-full"></div>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        .rotate-y-180 { transform: rotateY(180deg); }
        .backface-hidden { backface-visibility: hidden; }
        .perspective { perspective: 1000px; }
        .style-preserve-3d { transform-style: preserve-3d; }
      `}</style>
    </section>
  );
};

export default SensoryImmersion;
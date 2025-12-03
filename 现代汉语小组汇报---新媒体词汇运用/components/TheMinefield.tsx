import React, { useState } from 'react';
import { QUIZ_DATA } from '../constants';
import { CheckCircle, XCircle, AlertTriangle } from 'lucide-react';

const TheMinefield: React.FC = () => {
  const [revealed, setRevealed] = useState<Record<number, boolean>>({});

  const handleReveal = (id: number) => {
    setRevealed(prev => ({ ...prev, [id]: true }));
  };

  return (
    <section className="py-20 px-4 bg-slate-900 text-slate-100">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-sm font-bold mb-4 border border-yellow-500/30">
            <AlertTriangle className="w-4 h-4" />
            <span>避坑指南</span>
          </div>
          <h2 className="text-4xl font-bold mb-4">词汇“雷区”：你用对了吗？</h2>
          <p className="text-slate-400">新媒体追求速度，但不能牺牲准确度。这些看似熟悉的词，可能是你文案中的“硬伤”。</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {QUIZ_DATA.map((q) => (
            <div key={q.id} className="bg-slate-800 rounded-xl p-6 border border-slate-700 hover:border-slate-600 transition-colors flex flex-col">
              <div className="flex items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">“{q.word}”</h3>
                  <p className="text-slate-500 font-mono text-xs">Case #{q.id}</p>
                </div>
                {revealed[q.id] && (
                  <div className={`flex items-center gap-2 font-bold px-3 py-1 text-sm rounded-lg ${q.isCorrect ? 'bg-green-900/50 text-green-400' : 'bg-red-900/50 text-red-400'}`}>
                    {q.isCorrect ? <CheckCircle className="w-4 h-4" /> : <XCircle className="w-4 h-4" />}
                    {q.isCorrect ? "正确" : "错误"}
                  </div>
                )}
              </div>

              <div className="bg-slate-900/50 p-4 rounded-lg mb-4 border border-slate-700/50 flex-grow">
                <p className="text-slate-300 text-sm leading-relaxed">"{q.sentence}"</p>
              </div>

              {!revealed[q.id] ? (
                <div className="flex gap-3 mt-auto">
                  <button 
                    onClick={() => handleReveal(q.id)}
                    className="flex-1 py-2 bg-slate-700 hover:bg-green-600 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    正确
                  </button>
                  <button 
                    onClick={() => handleReveal(q.id)}
                    className="flex-1 py-2 bg-slate-700 hover:bg-red-600 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    错误
                  </button>
                </div>
              ) : (
                <div className={`overflow-hidden transition-all duration-500 ${revealed[q.id] ? 'opacity-100 mt-2' : 'opacity-0'}`}>
                  <div className="p-3 bg-indigo-900/20 border border-indigo-500/30 rounded-lg text-indigo-200 text-xs leading-relaxed">
                    <span className="font-bold text-indigo-400">解析：</span> {q.explanation}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheMinefield;
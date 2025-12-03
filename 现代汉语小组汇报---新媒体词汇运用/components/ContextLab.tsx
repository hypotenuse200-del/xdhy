import React, { useState } from 'react';
import { MessageSquareQuote, GraduationCap, Smartphone } from 'lucide-react';

const ContextLab: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'academic' | 'news' | 'social'>('academic');

  const content = {
    academic: {
      text: "该产品的用户体验优化策略应基于详细的数据分析，旨在提升用户留存率与活跃度，通过界面交互的迭代实现功能触达的最大化。",
      label: "学术/报告语体",
      icon: <GraduationCap className="w-5 h-5" />,
      color: "bg-blue-50 text-blue-700 border-blue-200"
    },
    news: {
      text: "据悉，某公司近日推出全新升级版应用，致力于通过优化操作流程改善用户体验。数据显示，新版本上线后用户活跃度显著提升。",
      label: "新闻/资讯语体",
      icon: <MessageSquareQuote className="w-5 h-5" />,
      color: "bg-slate-50 text-slate-700 border-slate-200"
    },
    social: {
      text: "宝子们！这次更新真的太好用了吧😭！界面变超顺滑，以前找不到的功能现在一目了然，用起来简直不要太爽！谁懂啊！一定要冲！✨",
      label: "新媒体/种草语体",
      icon: <Smartphone className="w-5 h-5" />,
      color: "bg-pink-50 text-pink-700 border-pink-200"
    }
  };

  return (
    <section className="py-20 px-4 max-w-5xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-slate-900 mb-4">语境实验室：同一个意思，不同的面孔</h2>
        <p className="text-slate-600">新媒体编辑的核心能力之一：<span className="font-bold text-purple-600">语体转换</span>。根据受众和平台调整词汇的温度。</p>
      </div>

      <div className="glass-panel rounded-2xl p-2 shadow-xl">
        <div className="grid grid-cols-3 gap-2 mb-8 bg-slate-100/50 p-2 rounded-xl">
          {(Object.keys(content) as Array<keyof typeof content>).map((key) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={`flex items-center justify-center gap-2 py-3 rounded-lg font-medium transition-all duration-300 ${
                activeTab === key 
                  ? 'bg-white shadow-md text-slate-900 scale-105' 
                  : 'text-slate-500 hover:text-slate-700'
              }`}
            >
              {content[key].icon}
              <span className="hidden sm:inline">{content[key].label}</span>
            </button>
          ))}
        </div>

        <div className="relative min-h-[200px] flex items-center justify-center p-8 md:p-12">
           <div className={`w-full text-lg md:text-2xl leading-relaxed font-medium transition-all duration-500 ${
             activeTab === 'social' ? 'text-left' : 'text-justify'
           }`}>
             <span className="text-4xl text-slate-300 absolute top-4 left-4">“</span>
             {content[activeTab].text}
             <span className="text-4xl text-slate-300 absolute bottom-4 right-4">”</span>
           </div>
        </div>
        
        <div className={`mx-4 mb-4 p-4 rounded-lg border ${content[activeTab].color} text-sm flex items-start gap-3`}>
            <div className="mt-1 font-bold">💡 分析：</div>
            <div>
                {activeTab === 'academic' && "使用大量抽象名词（策略、迭代、触达），客观、冷静、逻辑严密。适用于行业报告。"}
                {activeTab === 'news' && "使用客观陈述句（据悉、致力于），信息密度高，去情绪化。适用于通稿。"}
                {activeTab === 'social' && "使用感叹号、Emoji、第二人称（宝子们）、网络流行语（冲、谁懂），情绪价值极高。适用于小红书/朋友圈。"}
            </div>
        </div>
      </div>
    </section>
  );
};

export default ContextLab;
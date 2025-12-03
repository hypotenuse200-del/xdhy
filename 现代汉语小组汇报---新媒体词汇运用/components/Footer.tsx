import React from 'react';
import { TEAM_NAME, TEAM_MEMBERS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h3 className="text-white font-bold text-lg mb-2">现代汉语小组汇报</h3>
        <p className="mb-6">专注于新媒体语境下的语言演变与规范应用</p>
        
        <div className="flex flex-col items-center justify-center gap-2 text-sm">
          <span className="font-medium text-slate-300">{TEAM_NAME}</span>
          <div className="flex gap-4">
             {TEAM_MEMBERS.map((m, i) => (
               <span key={i} className="hover:text-white transition-colors">{m}</span>
             ))}
          </div>
        </div>
        
        <div className="mt-8 text-xs text-slate-600">
          © {new Date().getFullYear()} Modern Chinese Presentation. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
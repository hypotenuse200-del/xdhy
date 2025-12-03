export enum Platform {
  XIAOHONGSHU = 'Xiaohongshu',
  DOUYIN = 'Douyin',
  WEIBO = 'Weibo',
  BILIBILI = 'Bilibili',
  WECHAT = 'WeChat',
  OFFICIAL = 'Official'
}

export interface QuizQuestion {
  id: number;
  word: string;
  sentence: string;
  isCorrect: boolean;
  explanation: string;
  options: { label: string; value: boolean }[];
}

export interface CaseStudy {
  id: string;
  platform: Platform;
  title: string;
  description: string;
  keywords: string[];
  example: string;
  analysis: string;
  proTips: string[];
}

export interface SlangTerm {
  year: string;
  term: string;
  meaning: string;
  usage: string;
  lifecycleStage: 'Rising' | 'Peak' | 'Outdated';
  advice: string;
  goodExample: string; // New: Teaches correct context
  badExample: string;  // New: Teaches how to avoid "cringe"
}

export interface TitleCase {
  id: number;
  category: string;
  badTitle: string;
  goodTitle: string;
  formula: string;
  analysis: string;
}

export interface SensoryWord {
  sense: 'Taste' | 'Sound' | 'Visual' | 'Touch';
  basicWord: string;
  advancedWord: string;
  context: string;
}

export interface StyleTransformation {
  id: string;
  title: string; // Scenario name
  original: string;
  variations: {
    platform: Platform;
    text: string;
    annotations: string[];
  }[];
}
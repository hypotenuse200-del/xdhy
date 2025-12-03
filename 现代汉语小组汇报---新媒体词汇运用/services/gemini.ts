import { GoogleGenAI } from "@google/genai";
import { Platform } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const refineCopy = async (originalText: string, platform: Platform): Promise<string> => {
  if (!process.env.API_KEY) {
    return "Error: API Key is missing. Please create a .env file with REACT_APP_GEMINI_API_KEY.";
  }

  const prompt = `
    Role: You are a senior New Media Editor and Chinese Language Expert.
    Task: Rewrite the following text to fit the specific style of the platform: ${platform}.
    
    Original Text: "${originalText}"

    Guidelines for ${platform}:
    ${platform === Platform.XIAOHONGSHU ? "- Use many emojis.\n- Focus on emotional value, 'vibes', and 'sharing with friends'.\n- Use phrases like '家人们', '绝绝子', '真的爱了'.\n- Layout should be airy." : ""}
    ${platform === Platform.DOUYIN ? "- Short, punchy sentences.\n- Create a hook at the start (e.g., 'Stop scrolling!').\n- Focus on keeping retention.\n- Slightly sensational tone." : ""}
    ${platform === Platform.WEIBO ? "- Use hashtags (#Topic#).\n- Objective but opinionated tone.\n- Use 'eating melon' (吃瓜) culture slang if appropriate.\n- Suitable for public discussion." : ""}
    ${platform === Platform.OFFICIAL ? "- Professional, formal, academic.\n- No slang.\n- Correct grammar and idioms.\n- Objective and informative." : ""}

    Output: Only the rewritten Chinese text.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });
    return response.text || "生成失败，请重试。";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "AI 服务暂时不可用，请稍后再试。";
  }
};
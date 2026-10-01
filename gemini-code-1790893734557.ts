// types/bioforce.ts

export type ProfileId = 'demon-slayer' | 'one-piece' | 'mha' | 'dr-stone' | 'marvel' | 'harry-potter';

export interface RankInfo {
  level: number;
  rank: string;
  character: string;
  requiredXp: number;
  modelPath: string;
}

export interface ProfileConfig {
  id: ProfileId;
  name: string;
  icon: string;
  ranks: RankInfo[];
}

export interface Question {
  id: string;
  week: 1 | 2;
  topicId: string;
  source: "textbook";
  question: string;
  options: string[];
  correctAnswer: string;
  explanation: string;
  difficulty: "easy" | "medium" | "hard";
}

export interface Topic {
  id: string;
  title: string;
  modelType: 'tissue' | 'cell' | 'water' | 'element' | 'protein' | 'fertilizer';
  questions: Question[]; // Дәл 20 сұрақ
}

export type Section = "modules" | "character" | "mistakes" | "monthly";
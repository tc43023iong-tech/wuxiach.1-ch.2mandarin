
export enum GameSection {
  INTRO = 'INTRO',
  PART_ONE = 'PART_ONE', // 漢字森林
  PART_TWO = 'PART_TWO', // 拼音田野
  PART_THREE = 'PART_THREE', // 規則與翻譯
  SUMMARY = 'SUMMARY'
}

export interface Question {
  id: number;
  type: 'identification' | 'completion' | 'rule';
  target: string; // 題目核心
  options: string[];
  answer: string;
  displayWord?: string; // 顯示用的文字
}

export interface GameState {
  currentSection: GameSection;
  currentQuestionIndex: number;
  score: number;
  answers: boolean[];
}

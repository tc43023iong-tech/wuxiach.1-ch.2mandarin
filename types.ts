
export enum GameSection {
  INTRO = 'INTRO',
  PART_ONE = 'PART_ONE', // Identification (Matching Final to Word)
  PART_TWO = 'PART_TWO', // Completion (Filling in the Final)
  SUMMARY = 'SUMMARY'
}

export interface Question {
  id: number;
  type: 'identification' | 'completion';
  target: string; // The final (e.g., "ua")
  options: string[];
  answer: string;
  displayWord?: string; // For part 2, e.g. "花 (hu__)"
}

export interface GameState {
  currentSection: GameSection;
  currentQuestionIndex: number;
  score: number;
  answers: boolean[];
}

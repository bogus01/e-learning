export type View = 'home' | 'mcq' | 'flashcard' | 'challenge' | 'progress' | 'prime-factorization' | 'geography-mcq' | 'geography-flashcard';

export interface MCQ {
  question: string;
  options: string[];
  reponse: string;
}

export interface Flashcard {
  question: string;
  reponse: string;
}

export interface ProgressData {
  totalAnswered: number;
  totalCorrect: number;
  challengeHistory: {
    score: number;
    total: number;
    date: string;
  }[];
}
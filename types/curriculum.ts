// Types pour la structure du curriculum par matière et niveau

export type Subject =
  | 'mathematics'
  | 'french'
  | 'geography-history'
  | 'english'
  | 'spanish'
  | 'svt'
  | 'physique-chimie'
  | 'technologie'
  | 'arts-plastiques'
  | 'musique'
  | 'eps'
  | 'emc';

export type MathLevel = '6e' | '5e' | '4e';
export type Grade = '6e' | '5e' | '4e' | '3e';

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon?: string;
}

export interface MathChapter extends Chapter {
  level: MathLevel;
  mcqCount: number;
  flashcardCount: number;
}

export interface GeoLesson extends Chapter {
  category: 'geography' | 'history';
  grade: '6e' | '5e' | '4e' | '3e';
  mcqCount: number;
  flashcardCount: number;
}

export interface SubjectConfig {
  id: Subject;
  name: string;
  icon: string;
  description: string;
  color: string;
}

export interface LevelConfig {
  id: MathLevel;
  name: string;
  description: string;
  chapters: MathChapter[];
}

export interface GeoLessonConfig {
  category: 'geography' | 'history';
  grade: '6e' | '5e' | '4e' | '3e';
  lessons: GeoLesson[];
}


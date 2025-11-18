// Types pour la structure du curriculum par matière et niveau

export type Subject =
  | 'mathematics'
  | 'french'
  | 'geography-history'
  | 'english'
  | 'spanish'
  | 'svt'
  | 'physique-chimie'
  | 'technologie';

export type MathLevel = '6e' | '5e' | '4e';
export type Grade = '6e' | '5e' | '4e' | '3e';

// Type pour définir quelles matières ont un assistant IA
export type SubjectWithAI = 'mathematics' | 'svt' | 'physique-chimie';

// Type d'activité disponible pour un sous-chapitre
export type ActivityType = 'lesson' | 'mcq' | 'flashcard' | 'exercise';

// Sous-chapitre / Compétence
export interface SubChapter {
  id: string;
  title: string;
  description: string;
  icon?: string;
  // Activités disponibles pour ce sous-chapitre
  activities: ActivityType[];
  // Contenu de la leçon (markdown ou HTML)
  lessonContent?: string;
  // Nombre de questions pour les quiz générés par IA
  aiQuizQuestionCount?: number;
  // Nombre de flashcards générées par IA
  aiFlashcardCount?: number;
  // Quiz statiques (non générés par IA)
  staticMCQs?: any[];
  // Flashcards statiques (non générées par IA)
  staticFlashcards?: any[];
  // Nombre de MCQ statiques
  mcqCount?: number;
  // Nombre de flashcards statiques
  flashcardCount?: number;
}

export interface Chapter {
  id: string;
  title: string;
  description: string;
  icon?: string;
  // Sous-chapitres optionnels (si non défini, le chapitre est une feuille)
  subChapters?: SubChapter[];
}

export interface MathChapter extends Chapter {
  level: MathLevel;
  mcqCount: number;
  flashcardCount: number;
  // Les chapitres de maths peuvent avoir des sous-chapitres
  subChapters?: SubChapter[];
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
  // Indique si cette matière a un assistant IA
  hasAIAssistant?: boolean;
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


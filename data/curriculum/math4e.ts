import type { MathChapter } from '../../types/curriculum';

// Programme de Mathématiques - Quatrième (4e)
export const math4eChapters: MathChapter[] = [
  // NOMBRES ET CALCULS
  {
    id: '4e-nombres-relatifs',
    level: '4e',
    title: 'Nombres relatifs',
    description: 'Multiplication et division de nombres relatifs',
    icon: '✖️➗',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-fractions',
    level: '4e',
    title: 'Fractions',
    description: 'Multiplication et division de fractions',
    icon: '🍰',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-puissances',
    level: '4e',
    title: 'Puissances',
    description: 'Notation puissance, règles de calcul',
    icon: '²',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-calcul-litteral',
    level: '4e',
    title: 'Calcul littéral',
    description: 'Développement, factorisation, identités remarquables',
    icon: '🔤',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-equations',
    level: '4e',
    title: 'Équations',
    description: 'Résolution d\'équations du premier degré',
    icon: '⚖️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-proportionnalite',
    level: '4e',
    title: 'Proportionnalité',
    description: 'Pourcentages, vitesse moyenne, échelles',
    icon: '📈',
    mcqCount: 0,
    flashcardCount: 0
  },

  // GÉOMÉTRIE
  {
    id: '4e-theoreme-pythagore',
    level: '4e',
    title: 'Théorème de Pythagore',
    description: 'Théorème de Pythagore et sa réciproque',
    icon: '📐',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-theoreme-thales',
    level: '4e',
    title: 'Théorème de Thalès',
    description: 'Théorème de Thalès et sa réciproque',
    icon: '📏',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-translation-rotation',
    level: '4e',
    title: 'Translation et rotation',
    description: 'Transformations du plan',
    icon: '🔄',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-cosinus',
    level: '4e',
    title: 'Cosinus',
    description: 'Cosinus d\'un angle aigu',
    icon: '📐',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-pyramides-cones',
    level: '4e',
    title: 'Pyramides et cônes',
    description: 'Volume de pyramides et cônes',
    icon: '🔺',
    mcqCount: 0,
    flashcardCount: 0
  },

  // ORGANISATION ET GESTION DE DONNÉES
  {
    id: '4e-statistiques',
    level: '4e',
    title: 'Statistiques',
    description: 'Moyenne, médiane, étendue',
    icon: '📊',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '4e-probabilites',
    level: '4e',
    title: 'Probabilités',
    description: 'Introduction aux probabilités',
    icon: '🎲',
    mcqCount: 0,
    flashcardCount: 0
  }
];

export const math4eConfig = {
  level: '4e' as const,
  name: 'Quatrième',
  description: 'Programme de mathématiques de 4ème',
  chapters: math4eChapters
};


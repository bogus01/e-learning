import type { MathChapter } from '../../types/curriculum';

// Programme de Mathématiques - Sixième (6e)
export const math6eChapters: MathChapter[] = [
  // NOMBRES ET CALCULS
  {
    id: '6e-nombres-entiers',
    level: '6e',
    title: 'Nombres entiers',
    description: 'Écriture, comparaison et opérations sur les nombres entiers',
    icon: '🔢',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-nombres-decimaux',
    level: '6e',
    title: 'Nombres décimaux',
    description: 'Écriture décimale, comparaison et opérations',
    icon: '📊',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-fractions',
    level: '6e',
    title: 'Fractions',
    description: 'Notion de fraction, fractions égales et opérations simples',
    icon: '🍰',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-diviseurs-multiples',
    level: '6e',
    title: 'Diviseurs et multiples',
    description: 'Critères de divisibilité, nombres premiers',
    icon: '✖️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-proportionnalite',
    level: '6e',
    title: 'Proportionnalité',
    description: 'Tableaux de proportionnalité, pourcentages simples',
    icon: '📈',
    mcqCount: 0,
    flashcardCount: 0
  },

  // GÉOMÉTRIE
  {
    id: '6e-figures-planes',
    level: '6e',
    title: 'Figures planes',
    description: 'Triangles, quadrilatères, cercles',
    icon: '📐',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-perimetres-aires',
    level: '6e',
    title: 'Périmètres et aires',
    description: 'Calcul de périmètres et d\'aires de figures simples',
    icon: '📏',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-solides',
    level: '6e',
    title: 'Solides',
    description: 'Pavé droit, cube, cylindre',
    icon: '🧊',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-symetrie-axiale',
    level: '6e',
    title: 'Symétrie axiale',
    description: 'Axes de symétrie, construction de symétriques',
    icon: '🪞',
    mcqCount: 0,
    flashcardCount: 0
  },

  // GRANDEURS ET MESURES
  {
    id: '6e-longueurs-masses',
    level: '6e',
    title: 'Longueurs et masses',
    description: 'Unités de mesure et conversions',
    icon: '⚖️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-durees',
    level: '6e',
    title: 'Durées',
    description: 'Calculs sur les durées, conversions',
    icon: '⏱️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '6e-angles',
    level: '6e',
    title: 'Angles',
    description: 'Mesure d\'angles, angles particuliers',
    icon: '📐',
    mcqCount: 0,
    flashcardCount: 0
  }
];

export const math6eConfig = {
  level: '6e' as const,
  name: 'Sixième',
  description: 'Programme de mathématiques de 6ème',
  chapters: math6eChapters
};


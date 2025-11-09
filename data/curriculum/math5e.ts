import type { MathChapter } from '../../types/curriculum';

// Programme de Mathématiques - Cinquième (5e)
export const math5eChapters: MathChapter[] = [
  // NOMBRES ET CALCULS
  {
    id: '5e-nombres-relatifs',
    level: '5e',
    title: 'Nombres relatifs',
    description: 'Introduction aux nombres négatifs, comparaison',
    icon: '➕➖',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-operations-relatifs',
    level: '5e',
    title: 'Opérations sur les relatifs',
    description: 'Addition et soustraction de nombres relatifs',
    icon: '🔢',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-fractions',
    level: '5e',
    title: 'Fractions',
    description: 'Addition, soustraction de fractions',
    icon: '🍰',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-nombres-decimaux',
    level: '5e',
    title: 'Nombres décimaux',
    description: 'Multiplication et division de décimaux',
    icon: '📊',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-proportionnalite',
    level: '5e',
    title: 'Proportionnalité',
    description: 'Pourcentages, échelles, vitesse',
    icon: '📈',
    mcqCount: 0,
    flashcardCount: 0
  },

  // GÉOMÉTRIE
  {
    id: '5e-triangles',
    level: '5e',
    title: 'Triangles',
    description: 'Inégalité triangulaire, construction',
    icon: '🔺',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-parallelogramme',
    level: '5e',
    title: 'Parallélogramme',
    description: 'Propriétés et construction',
    icon: '▱',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-symetrie-centrale',
    level: '5e',
    title: 'Symétrie centrale',
    description: 'Centre de symétrie, construction de symétriques',
    icon: '🔄',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-angles',
    level: '5e',
    title: 'Angles',
    description: 'Angles adjacents, complémentaires, supplémentaires',
    icon: '📐',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-prismes-cylindres',
    level: '5e',
    title: 'Prismes et cylindres',
    description: 'Volume et aire de prismes et cylindres',
    icon: '🧊',
    mcqCount: 0,
    flashcardCount: 0
  },

  // GRANDEURS ET MESURES
  {
    id: '5e-aires-perimetres',
    level: '5e',
    title: 'Aires et périmètres',
    description: 'Calculs d\'aires et périmètres de figures composées',
    icon: '📏',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: '5e-volumes',
    level: '5e',
    title: 'Volumes',
    description: 'Calcul de volumes, conversions',
    icon: '📦',
    mcqCount: 0,
    flashcardCount: 0
  }
];

export const math5eConfig = {
  level: '5e' as const,
  name: 'Cinquième',
  description: 'Programme de mathématiques de 5ème',
  chapters: math5eChapters
};


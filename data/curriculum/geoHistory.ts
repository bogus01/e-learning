import type { GeoLesson } from '../../types/curriculum';

// GÉOGRAPHIE - 6ème
export const geo6eLessons: GeoLesson[] = [
  {
    id: 'geo-6e-habiter-metropole',
    category: 'geography',
    grade: '6e',
    title: 'Habiter une métropole',
    description: 'Les métropoles et leurs habitants',
    icon: '🏙️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'geo-6e-habiter-ville',
    category: 'geography',
    grade: '6e',
    title: 'Habiter un espace de faible densité',
    description: 'Espaces ruraux et de faible densité',
    icon: '🌾',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'geo-6e-habiter-littoraux',
    category: 'geography',
    grade: '6e',
    title: 'Habiter les littoraux',
    description: 'Littoraux industrialo-portuaires et touristiques',
    icon: '🏖️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'geo-6e-monde-habite',
    category: 'geography',
    grade: '6e',
    title: 'Le monde habité',
    description: 'Répartition de la population mondiale',
    icon: '🌍',
    mcqCount: 0,
    flashcardCount: 0
  }
];

// GÉOGRAPHIE - 5ème
export const geo5eLessons: GeoLesson[] = [
  {
    id: 'geo-5e-population-mondiale',
    category: 'geography',
    grade: '5e',
    title: 'La croissance démographique',
    description: 'Évolution de la population mondiale',
    icon: '👥',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'geo-5e-repartition-population',
    category: 'geography',
    grade: '5e',
    title: 'Répartition de la population',
    description: 'Inégalités de la répartition des hommes sur Terre',
    icon: '🗺️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'geo-5e-richesse-pauvrete',
    category: 'geography',
    grade: '5e',
    title: 'Richesse et pauvreté',
    description: 'Les inégalités de développement (IDH)',
    icon: '💰',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'geo-5e-ressources-alimentaires',
    category: 'geography',
    grade: '5e',
    title: 'Ressources alimentaires',
    description: 'Nourrir les hommes',
    icon: '🌾',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'geo-5e-ressources-energetiques',
    category: 'geography',
    grade: '5e',
    title: 'Ressources énergétiques',
    description: 'L\'énergie et ses enjeux',
    icon: '⚡',
    mcqCount: 0,
    flashcardCount: 0
  }
];

// HISTOIRE - 6ème
export const hist6eLessons: GeoLesson[] = [
  {
    id: 'hist-6e-prehistoire',
    category: 'history',
    grade: '6e',
    title: 'La Préhistoire',
    description: 'Les débuts de l\'humanité',
    icon: '🦴',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'hist-6e-antiquite-orient',
    category: 'history',
    grade: '6e',
    title: 'L\'Orient ancien',
    description: 'Premières civilisations',
    icon: '🏛️',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'hist-6e-grece',
    category: 'history',
    grade: '6e',
    title: 'La Grèce antique',
    description: 'Cités grecques et démocratie',
    icon: '🏺',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'hist-6e-rome',
    category: 'history',
    grade: '6e',
    title: 'Rome antique',
    description: 'De la République à l\'Empire',
    icon: '🏛️',
    mcqCount: 0,
    flashcardCount: 0
  }
];

// HISTOIRE - 5ème
export const hist5eLessons: GeoLesson[] = [
  {
    id: 'hist-5e-moyen-age',
    category: 'history',
    grade: '5e',
    title: 'Le Moyen Âge',
    description: 'Chrétienté et Islam',
    icon: '🏰',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'hist-5e-renaissance',
    category: 'history',
    grade: '5e',
    title: 'La Renaissance',
    description: 'Humanisme et grandes découvertes',
    icon: '🎨',
    mcqCount: 0,
    flashcardCount: 0
  },
  {
    id: 'hist-5e-monarchie-absolue',
    category: 'history',
    grade: '5e',
    title: 'La monarchie absolue',
    description: 'Louis XIV et Versailles',
    icon: '👑',
    mcqCount: 0,
    flashcardCount: 0
  }
];

export const geoHistoryConfig = {
  geography: {
    '6e': geo6eLessons,
    '5e': geo5eLessons
  },
  history: {
    '6e': hist6eLessons,
    '5e': hist5eLessons
  }
};


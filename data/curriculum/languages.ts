import type { Chapter } from '../../types/curriculum';

// ANGLAIS - 6ème
export const english6eChapters: Chapter[] = [
  {
    id: 'en-6e-se-presenter',
    title: 'Se présenter',
    description: 'Nom, âge, nationalité, famille',
    icon: '👋'
  },
  {
    id: 'en-6e-vie-quotidienne',
    title: 'La vie quotidienne',
    description: 'Routine, activités, loisirs',
    icon: '🏃'
  },
  {
    id: 'en-6e-ecole',
    title: 'L\'école',
    description: 'Matières, emploi du temps, fournitures',
    icon: '🎒'
  },
  {
    id: 'en-6e-maison',
    title: 'La maison',
    description: 'Pièces, meubles, description',
    icon: '🏠'
  },
  {
    id: 'en-6e-nourriture',
    title: 'La nourriture',
    description: 'Aliments, repas, goûts',
    icon: '🍔'
  },
  {
    id: 'en-6e-temps',
    title: 'Le temps',
    description: 'Heure, jours, mois, saisons',
    icon: '⏰'
  }
];

// ANGLAIS - 5ème
export const english5eChapters: Chapter[] = [
  {
    id: 'en-5e-loisirs',
    title: 'Loisirs et sports',
    description: 'Activités, sports, hobbies',
    icon: '⚽'
  },
  {
    id: 'en-5e-voyages',
    title: 'Voyages et découvertes',
    description: 'Pays, cultures, voyages',
    icon: '✈️'
  },
  {
    id: 'en-5e-environnement',
    title: 'L\'environnement',
    description: 'Nature, animaux, écologie',
    icon: '🌍'
  },
  {
    id: 'en-5e-sante',
    title: 'La santé',
    description: 'Corps humain, maladies, bien-être',
    icon: '🏥'
  },
  {
    id: 'en-5e-technologie',
    title: 'Technologie et médias',
    description: 'Internet, réseaux sociaux, communication',
    icon: '📱'
  }
];

// ANGLAIS - 4ème
export const english4eChapters: Chapter[] = [
  {
    id: 'en-4e-mode-vie',
    title: 'Modes de vie',
    description: 'Habitudes, traditions, cultures',
    icon: '🌏'
  },
  {
    id: 'en-4e-histoire',
    title: 'Histoire et patrimoine',
    description: 'Événements historiques, monuments',
    icon: '🏛️'
  },
  {
    id: 'en-4e-arts',
    title: 'Arts et culture',
    description: 'Musique, cinéma, littérature',
    icon: '🎨'
  },
  {
    id: 'en-4e-citoyennete',
    title: 'Citoyenneté',
    description: 'Droits, devoirs, engagement',
    icon: '🗳️'
  },
  {
    id: 'en-4e-metiers',
    title: 'Métiers et orientation',
    description: 'Professions, projets d\'avenir',
    icon: '💼'
  }
];

// ESPAGNOL - 5ème (LV2)
export const spanish5eChapters: Chapter[] = [
  {
    id: 'es-5e-se-presenter',
    title: 'Se présenter',
    description: 'Identité, famille, description physique',
    icon: '👋'
  },
  {
    id: 'es-5e-vie-quotidienne',
    title: 'La vie quotidienne',
    description: 'Routine, activités, loisirs',
    icon: '🏃'
  },
  {
    id: 'es-5e-ecole',
    title: 'L\'école',
    description: 'Matières, horaires, vie scolaire',
    icon: '🎒'
  },
  {
    id: 'es-5e-ville',
    title: 'La ville',
    description: 'Lieux, directions, transports',
    icon: '🏙️'
  }
];

// ESPAGNOL - 4ème (LV2)
export const spanish4eChapters: Chapter[] = [
  {
    id: 'es-4e-loisirs',
    title: 'Loisirs et culture',
    description: 'Sports, musique, cinéma',
    icon: '🎭'
  },
  {
    id: 'es-4e-voyages',
    title: 'Voyages et tourisme',
    description: 'Pays hispanophones, vacances',
    icon: '✈️'
  },
  {
    id: 'es-4e-traditions',
    title: 'Fêtes et traditions',
    description: 'Célébrations, coutumes',
    icon: '🎉'
  },
  {
    id: 'es-4e-environnement',
    title: 'Environnement',
    description: 'Nature, écologie, animaux',
    icon: '🌿'
  }
];

export const languagesConfig = {
  english: {
    '6e': english6eChapters,
    '5e': english5eChapters,
    '4e': english4eChapters
  },
  spanish: {
    '5e': spanish5eChapters,
    '4e': spanish4eChapters
  }
};


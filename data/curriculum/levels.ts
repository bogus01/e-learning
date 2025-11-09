import type { Chapter, Grade } from '../../types/curriculum';
import { math6eChapters } from './math6e';
import { math5eChapters } from './math5e';
import { math4eChapters } from './math4e';
import { french6eChapters, french5eChapters, french4eChapters } from './french';
import { geoHistory6e, geoHistory5e } from './geoHistory';
import { english6eChapters, english5eChapters, english4eChapters, spanish5eChapters, spanish4eChapters } from './languages';
import { sciencesConfig } from './sciences';

// Interface pour une matière avec ses chapitres
export interface SubjectWithChapters {
  id: string;
  name: string;
  icon: string;
  description: string;
  color: string;
  chapters: Chapter[];
}

// Interface pour un niveau scolaire
export interface GradeLevel {
  id: Grade;
  name: string;
  description: string;
  subjects: SubjectWithChapters[];
}

// 6ème
export const grade6e: GradeLevel = {
  id: '6e',
  name: 'Sixième',
  description: 'Première année du cycle 3 (cycle de consolidation)',
  subjects: [
    {
      id: 'mathematics',
      name: 'Mathématiques',
      icon: '🔢',
      description: 'Nombres, calculs, géométrie et problèmes',
      color: 'from-blue-500 to-indigo-600',
      chapters: math6eChapters
    },
    {
      id: 'french',
      name: 'Français',
      icon: '📚',
      description: 'Grammaire, conjugaison, littérature et expression',
      color: 'from-purple-500 to-pink-600',
      chapters: french6eChapters
    },
    {
      id: 'geography',
      name: 'Géographie',
      icon: '🌍',
      description: 'Découvrir le monde et ses territoires',
      color: 'from-green-500 to-teal-600',
      chapters: geoHistory6e.geography
    },
    {
      id: 'history',
      name: 'Histoire',
      icon: '📜',
      description: 'De la Préhistoire à l\'Antiquité',
      color: 'from-amber-500 to-orange-600',
      chapters: geoHistory6e.history
    },
    {
      id: 'english',
      name: 'Anglais',
      icon: '🇬🇧',
      description: 'Langue vivante 1 - Communication et culture',
      color: 'from-red-500 to-rose-600',
      chapters: english6eChapters
    },
    {
      id: 'svt',
      name: 'SVT',
      icon: '🌿',
      description: 'Sciences de la Vie et de la Terre',
      color: 'from-emerald-500 to-green-600',
      chapters: sciencesConfig.svt['6e']
    },
    {
      id: 'physique-chimie',
      name: 'Physique-Chimie',
      icon: '⚗️',
      description: 'Matière, énergie et transformations',
      color: 'from-cyan-500 to-blue-600',
      chapters: sciencesConfig.physique['6e']
    },
    {
      id: 'technologie',
      name: 'Technologie',
      icon: '🔧',
      description: 'Objets techniques, programmation et innovation',
      color: 'from-slate-500 to-gray-600',
      chapters: sciencesConfig.technologie['6e']
    }
  ]
};

// 5ème
export const grade5e: GradeLevel = {
  id: '5e',
  name: 'Cinquième',
  description: 'Première année du cycle 4 (cycle des approfondissements)',
  subjects: [
    {
      id: 'mathematics',
      name: 'Mathématiques',
      icon: '🔢',
      description: 'Nombres, calculs, géométrie et problèmes',
      color: 'from-blue-500 to-indigo-600',
      chapters: math5eChapters
    },
    {
      id: 'french',
      name: 'Français',
      icon: '📚',
      description: 'Grammaire, conjugaison, littérature et expression',
      color: 'from-purple-500 to-pink-600',
      chapters: french5eChapters
    },
    {
      id: 'geography',
      name: 'Géographie',
      icon: '🌍',
      description: 'Population mondiale et développement',
      color: 'from-green-500 to-teal-600',
      chapters: geoHistory5e.geography
    },
    {
      id: 'history',
      name: 'Histoire',
      icon: '📜',
      description: 'Du Moyen Âge à la Monarchie absolue',
      color: 'from-amber-500 to-orange-600',
      chapters: geoHistory5e.history
    },
    {
      id: 'english',
      name: 'Anglais',
      icon: '🇬🇧',
      description: 'Langue vivante 1 - Communication et culture',
      color: 'from-red-500 to-rose-600',
      chapters: english5eChapters
    },
    {
      id: 'spanish',
      name: 'Espagnol',
      icon: '🇪🇸',
      description: 'Langue vivante 2 - Initiation',
      color: 'from-yellow-500 to-orange-600',
      chapters: spanish5eChapters
    },
    {
      id: 'svt',
      name: 'SVT',
      icon: '🌿',
      description: 'Sciences de la Vie et de la Terre',
      color: 'from-emerald-500 to-green-600',
      chapters: sciencesConfig.svt['5e']
    },
    {
      id: 'physique-chimie',
      name: 'Physique-Chimie',
      icon: '⚗️',
      description: 'Matière, énergie et transformations',
      color: 'from-cyan-500 to-blue-600',
      chapters: sciencesConfig.physique['5e']
    },
    {
      id: 'technologie',
      name: 'Technologie',
      icon: '🔧',
      description: 'Objets techniques, programmation et innovation',
      color: 'from-slate-500 to-gray-600',
      chapters: sciencesConfig.technologie['5e']
    }
  ]
};

// 4ème
export const grade4e: GradeLevel = {
  id: '4e',
  name: 'Quatrième',
  description: 'Deuxième année du cycle 4 (cycle des approfondissements)',
  subjects: [
    {
      id: 'mathematics',
      name: 'Mathématiques',
      icon: '🔢',
      description: 'Nombres, calculs, géométrie et problèmes',
      color: 'from-blue-500 to-indigo-600',
      chapters: math4eChapters
    },
    {
      id: 'french',
      name: 'Français',
      icon: '📚',
      description: 'Grammaire, conjugaison, littérature et expression',
      color: 'from-purple-500 to-pink-600',
      chapters: french4eChapters
    },
    {
      id: 'english',
      name: 'Anglais',
      icon: '🇬🇧',
      description: 'Langue vivante 1 - Communication et culture',
      color: 'from-red-500 to-rose-600',
      chapters: english4eChapters
    },
    {
      id: 'spanish',
      name: 'Espagnol',
      icon: '🇪🇸',
      description: 'Langue vivante 2',
      color: 'from-yellow-500 to-orange-600',
      chapters: spanish4eChapters
    },
    {
      id: 'svt',
      name: 'SVT',
      icon: '🌿',
      description: 'Sciences de la Vie et de la Terre',
      color: 'from-emerald-500 to-green-600',
      chapters: sciencesConfig.svt['4e']
    },
    {
      id: 'physique-chimie',
      name: 'Physique-Chimie',
      icon: '⚗️',
      description: 'Matière, énergie et transformations',
      color: 'from-cyan-500 to-blue-600',
      chapters: sciencesConfig.physique['4e']
    },
    {
      id: 'technologie',
      name: 'Technologie',
      icon: '🔧',
      description: 'Objets techniques, programmation et innovation',
      color: 'from-slate-500 to-gray-600',
      chapters: sciencesConfig.technologie['4e']
    }
  ]
};

// Export de tous les niveaux
export const allGrades: GradeLevel[] = [grade6e, grade5e, grade4e];

// Fonction utilitaire pour obtenir un niveau par son ID
export const getGradeById = (gradeId: Grade): GradeLevel | undefined => {
  return allGrades.find(grade => grade.id === gradeId);
};

// Fonction pour calculer les statistiques globales
export const getGlobalStats = () => {
  let totalChapters = 0;
  let totalSubjects = 0;
  
  allGrades.forEach(grade => {
    totalSubjects += grade.subjects.length;
    grade.subjects.forEach(subject => {
      totalChapters += subject.chapters.length;
    });
  });
  
  return {
    totalGrades: allGrades.length,
    totalSubjects: totalSubjects / allGrades.length, // Moyenne par niveau
    totalChapters,
    grades: allGrades.map(grade => ({
      id: grade.id,
      name: grade.name,
      subjectCount: grade.subjects.length,
      chapterCount: grade.subjects.reduce((sum, subject) => sum + subject.chapters.length, 0)
    }))
  };
};


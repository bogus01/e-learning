import { useState } from 'react';
import type { SubjectWithChapters } from '../data/curriculum/levels';

interface SubjectGridProps {
  gradeName: string;
  subjects: SubjectWithChapters[];
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
}

type ViewMode = 'grid' | 'list';

export default function SubjectGrid({ gradeName, subjects, onSelectSubject, onBack }: SubjectGridProps) {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            <span>←</span>
            <span>Retour à l'accueil</span>
          </button>

          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
                {gradeName}
              </h1>
              <p className="text-lg text-gray-600 dark:text-gray-400">
                Sélectionnez une matière pour accéder aux chapitres
              </p>
            </div>

            {/* Toggle vue grille/liste */}
            <div className="flex items-center space-x-2 bg-white dark:bg-gray-800 rounded-lg p-1 shadow-md">
              <button
                onClick={() => setViewMode('grid')}
                className={`px-4 py-2 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">⊞</span>
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`px-4 py-2 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-blue-600 text-white shadow-md'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                <span className="text-xl">☰</span>
              </button>
            </div>
          </div>
        </div>

        {/* Vue Grille */}
        {viewMode === 'grid' && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => onSelectSubject(subject.id)}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-gray-800 p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left"
              >
                {/* Badge nombre de chapitres */}
                <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                  {subject.chapters.length} chapitre{subject.chapters.length > 1 ? 's' : ''}
                </div>

                {/* Icône */}
                <div className="text-4xl mb-3">{subject.icon}</div>

                {/* Titre */}
                <h3 className="text-xl font-bold mb-2 text-gray-800 dark:text-white pr-20">
                  {subject.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-2">
                  {subject.description}
                </p>

                {/* Badge de couleur (optionnel) */}
                <div className={`inline-block bg-gradient-to-r ${subject.color} px-3 py-1 rounded-full text-white text-xs font-semibold mb-2`}>
                  Disponible
                </div>

                {/* Flèche */}
                <div className="absolute bottom-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  →
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Vue Liste */}
        {viewMode === 'list' && (
          <div className="space-y-3">
            {subjects.map((subject) => (
              <button
                key={subject.id}
                onClick={() => onSelectSubject(subject.id)}
                className="group w-full bg-white dark:bg-gray-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Icône */}
                  <div className="text-3xl flex-shrink-0">{subject.icon}</div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-gray-800 dark:text-white mb-1">
                      {subject.name}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 truncate">
                      {subject.description}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <span className="bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-xs font-semibold">
                      {subject.chapters.length} chapitre{subject.chapters.length > 1 ? 's' : ''}
                    </span>
                    <span className={`bg-gradient-to-r ${subject.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                      Disponible
                    </span>
                  </div>

                  {/* Flèche */}
                  <div className="text-2xl opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0">
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

        {/* Message si aucune matière */}
        {subjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Aucune matière disponible pour ce niveau
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


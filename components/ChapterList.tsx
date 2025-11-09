import React from 'react';
import type { MathChapter, MathLevel } from '../types/curriculum';

interface ChapterListProps {
  level: MathLevel;
  chapters: MathChapter[];
  onSelectChapter: (chapterId: string) => void;
  onBack: () => void;
}

export const ChapterList: React.FC<ChapterListProps> = ({ level, chapters, onSelectChapter, onBack }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-2xl">←</span>
          <span className="text-lg font-medium">Retour aux niveaux</span>
        </button>

        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-6 py-2 rounded-full text-lg font-semibold mb-4">
            Classe de {level.toUpperCase()}
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Chapitres de Mathématiques
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {chapters.length} chapitres disponibles
          </p>
        </div>

        {/* Liste des chapitres */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.id}
              onClick={() => onSelectChapter(chapter.id)}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left"
            >
              {/* Numéro du chapitre */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                {index + 1}
              </div>

              {/* Icône */}
              <div className="text-4xl mb-3">{chapter.icon}</div>

              {/* Titre */}
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white pr-12">
                {chapter.title}
              </h3>

              {/* Description */}
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {chapter.description}
              </p>

              {/* Badges */}
              <div className="flex gap-2 flex-wrap">
                {chapter.mcqCount > 0 && (
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {chapter.mcqCount} QCM
                  </span>
                )}
                {chapter.flashcardCount > 0 && (
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {chapter.flashcardCount} Cartes
                  </span>
                )}
                {chapter.mcqCount === 0 && chapter.flashcardCount === 0 && (
                  <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full text-xs font-semibold">
                    Bientôt disponible
                  </span>
                )}
              </div>

              {/* Flèche (seulement si contenu disponible) */}
              {(chapter.mcqCount > 0 || chapter.flashcardCount > 0) && (
                <div className="absolute bottom-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  →
                </div>
              )}
            </button>
          ))}
        </div>

        {/* Message informatif */}
        <div className="mt-12 bg-amber-50 dark:bg-amber-900/20 rounded-xl p-6 border-l-4 border-amber-500">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🚧</span>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                Contenu en cours de développement
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Les quiz et exercices pour chaque chapitre seront ajoutés progressivement.
                Revenez bientôt pour découvrir de nouveaux contenus !
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


import React, { useState, useMemo } from 'react';
import type { Chapter } from '../types/curriculum';

interface ChapterListProps {
  title: string;
  subtitle?: string;
  chapters: Chapter[];
  onSelectChapter: (chapterId: string) => void;
  onBack: () => void;
}

type ViewMode = 'grid' | 'list';

export const ChapterList: React.FC<ChapterListProps> = ({ title, subtitle, chapters, onSelectChapter, onBack }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [searchQuery, setSearchQuery] = useState('');

  // Filtrer les chapitres selon la recherche
  const filteredChapters = useMemo(() => {
    if (!searchQuery.trim()) return chapters;

    const query = searchQuery.toLowerCase();
    return chapters.filter(chapter =>
      chapter.title.toLowerCase().includes(query) ||
      chapter.description.toLowerCase().includes(query)
    );
  }, [chapters, searchQuery]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Bouton retour */}
        <button
          onClick={onBack}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          <span className="text-2xl">←</span>
          <span className="text-lg font-medium">Retour aux matières</span>
        </button>

        {/* En-tête */}
        <div className="text-center mb-8">
          {subtitle && (
            <div className="inline-block bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-6 py-2 rounded-full text-lg font-semibold mb-4">
              {subtitle}
            </div>
          )}
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {filteredChapters.length} chapitre{filteredChapters.length > 1 ? 's' : ''} {searchQuery && `trouvé${filteredChapters.length > 1 ? 's' : ''}`}
          </p>
        </div>

        {/* Barre de recherche et toggle vue */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          {/* Barre de recherche */}
          <div className="relative flex-1 w-full sm:max-w-md">
            <input
              type="text"
              placeholder="Rechercher un chapitre..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 pl-12 rounded-xl border-2 border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-800 text-slate-800 dark:text-white placeholder-slate-400 focus:border-blue-500 focus:outline-none transition-colors"
            />
            <span className="absolute left-4 top-1/2 -translate-y-1/2 text-xl">🔍</span>
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 dark:hover:text-slate-300"
              >
                ✕
              </button>
            )}
          </div>

          {/* Toggle vue grille/liste */}
          <div className="flex gap-2 bg-white dark:bg-slate-800 rounded-xl p-1 shadow-md">
            <button
              onClick={() => setViewMode('grid')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'grid'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>⊞</span>
                <span className="hidden sm:inline">Cartes</span>
              </span>
            </button>
            <button
              onClick={() => setViewMode('list')}
              className={`px-4 py-2 rounded-lg font-medium transition-all ${
                viewMode === 'list'
                  ? 'bg-blue-500 text-white shadow-md'
                  : 'text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>☰</span>
                <span className="hidden sm:inline">Liste</span>
              </span>
            </button>
          </div>
        </div>

        {/* Message si aucun résultat */}
        {filteredChapters.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-300 mb-2">
              Aucun chapitre trouvé
            </h3>
            <p className="text-slate-500 dark:text-slate-400">
              Essayez avec d'autres mots-clés
            </p>
          </div>
        )}

        {/* Vue Grille (Cartes) */}
        {viewMode === 'grid' && filteredChapters.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredChapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left"
              >
                {/* Numéro du chapitre */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                  {chapters.indexOf(chapter) + 1}
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
        )}

        {/* Vue Liste */}
        {viewMode === 'list' && filteredChapters.length > 0 && (
          <div className="space-y-3">
            {filteredChapters.map((chapter, index) => (
              <button
                key={chapter.id}
                onClick={() => onSelectChapter(chapter.id)}
                className="group w-full bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] text-left"
              >
                <div className="flex items-center gap-4">
                  {/* Numéro */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-300 font-bold">
                    {chapters.indexOf(chapter) + 1}
                  </div>

                  {/* Icône */}
                  <div className="text-3xl flex-shrink-0">{chapter.icon}</div>

                  {/* Contenu */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-bold text-slate-800 dark:text-white mb-1">
                      {chapter.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-300 text-sm truncate">
                      {chapter.description}
                    </p>
                  </div>

                  {/* Badges */}
                  <div className="flex gap-2 flex-shrink-0">
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
                      <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full text-xs font-semibold whitespace-nowrap">
                        Bientôt
                      </span>
                    )}
                  </div>

                  {/* Flèche */}
                  <div className="text-2xl text-slate-400 group-hover:text-blue-500 group-hover:translate-x-1 transition-all flex-shrink-0">
                    →
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}

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


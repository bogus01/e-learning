import React from 'react';
import type { SubChapter } from '../types/curriculum';
import { BookOpen, Brain, Zap, FileText } from 'lucide-react';

interface SubChapterListProps {
  chapterTitle: string;
  subChapters: SubChapter[];
  onSelectSubChapter: (subChapterId: string) => void;
  onBack: () => void;
}

export const SubChapterList: React.FC<SubChapterListProps> = ({
  chapterTitle,
  subChapters,
  onSelectSubChapter,
  onBack
}) => {
  const getActivityIcon = (activity: string) => {
    switch (activity) {
      case 'lesson':
        return <BookOpen className="w-4 h-4" />;
      case 'mcq':
        return <Brain className="w-4 h-4" />;
      case 'flashcard':
        return <Zap className="w-4 h-4" />;
      case 'exercise':
        return <FileText className="w-4 h-4" />;
      default:
        return null;
    }
  };

  const getActivityLabel = (activity: string) => {
    switch (activity) {
      case 'lesson':
        return 'Leçon';
      case 'mcq':
        return 'Quiz';
      case 'flashcard':
        return 'Flashcards';
      case 'exercise':
        return 'Exercices';
      default:
        return activity;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux chapitres
          </button>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <h1 className="text-4xl font-bold text-slate-900 dark:text-white mb-3">
              {chapterTitle}
            </h1>
            <p className="text-slate-600 dark:text-slate-300">
              Choisis une compétence pour commencer à apprendre
            </p>
          </div>
        </div>

        {/* Liste des sous-chapitres */}
        <div className="space-y-4">
          {subChapters.map((subChapter, index) => (
            <div
              key={subChapter.id}
              className="bg-white dark:bg-slate-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden group"
            >
              <button
                onClick={() => onSelectSubChapter(subChapter.id)}
                className="w-full p-6 text-left"
              >
                <div className="flex items-start gap-4">
                  {/* Numéro */}
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 text-white flex items-center justify-center font-bold text-lg shadow-lg">
                    {index + 1}
                  </div>

                  {/* Contenu */}
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      {subChapter.icon && (
                        <span className="text-2xl">{subChapter.icon}</span>
                      )}
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {subChapter.title}
                      </h3>
                    </div>

                    <p className="text-slate-600 dark:text-slate-300 mb-4">
                      {subChapter.description}
                    </p>

                    {/* Activités disponibles */}
                    <div className="flex flex-wrap gap-2">
                      {subChapter.activities.map((activity) => (
                        <div
                          key={activity}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium"
                        >
                          {getActivityIcon(activity)}
                          <span>{getActivityLabel(activity)}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Flèche */}
                  <div className="flex-shrink-0 text-slate-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          ))}
        </div>

        {/* Info */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-500 text-white flex items-center justify-center">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-1">
                Parcours d'apprentissage recommandé
              </h4>
              <p className="text-blue-700 dark:text-blue-300 text-sm">
                Pour chaque compétence, nous te recommandons de suivre cet ordre :
                <br />
                1️⃣ Lire la <strong>Leçon</strong> pour comprendre
                <br />
                2️⃣ Faire le <strong>Quiz</strong> pour vérifier ta compréhension
                <br />
                3️⃣ Réviser avec les <strong>Flashcards</strong> pour mémoriser
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


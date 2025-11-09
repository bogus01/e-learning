import React, { useState } from 'react';
import type { GeoLesson } from '../types/curriculum';
import { geoHistoryConfig } from '../data/curriculum/geoHistory';

interface GeoHistorySelectorProps {
  onSelectLesson: (lessonId: string) => void;
  onBack: () => void;
}

type Category = 'geography' | 'history';
type Grade = '6e' | '5e';

export const GeoHistorySelector: React.FC<GeoHistorySelectorProps> = ({ onSelectLesson, onBack }) => {
  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);
  const [selectedGrade, setSelectedGrade] = useState<Grade | null>(null);

  // Si aucune catégorie sélectionnée, afficher le choix Géo/Histoire
  if (!selectedCategory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-slate-900 dark:to-slate-800 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Bouton retour */}
          <button
            onClick={onBack}
            className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <span className="text-2xl">←</span>
            <span className="text-lg font-medium">Retour aux matières</span>
          </button>

          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">🌍</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              Géographie & Histoire
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Choisissez votre discipline
            </p>
          </div>

          {/* Choix Géo/Histoire */}
          <div className="grid md:grid-cols-2 gap-8">
            <button
              onClick={() => setSelectedCategory('geography')}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">🗺️</div>
                <h2 className="text-3xl font-bold mb-3 text-slate-800 dark:text-white">
                  Géographie
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                  Découvrir le monde et ses territoires
                </p>
              </div>
              <div className="absolute bottom-6 right-6 text-3xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                →
              </div>
            </button>

            <button
              onClick={() => setSelectedCategory('history')}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-amber-500 to-orange-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-6xl mb-4">📜</div>
                <h2 className="text-3xl font-bold mb-3 text-slate-800 dark:text-white">
                  Histoire
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                  Voyager à travers les époques
                </p>
              </div>
              <div className="absolute bottom-6 right-6 text-3xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                →
              </div>
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Si catégorie sélectionnée mais pas de niveau, afficher le choix du niveau
  if (!selectedGrade) {
    const categoryName = selectedCategory === 'geography' ? 'Géographie' : 'Histoire';
    const categoryIcon = selectedCategory === 'geography' ? '🗺️' : '📜';
    const grades: Grade[] = ['6e', '5e'];

    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-slate-900 dark:to-slate-800 p-6">
        <div className="max-w-6xl mx-auto">
          {/* Bouton retour */}
          <button
            onClick={() => setSelectedCategory(null)}
            className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
          >
            <span className="text-2xl">←</span>
            <span className="text-lg font-medium">Retour aux disciplines</span>
          </button>

          {/* En-tête */}
          <div className="text-center mb-12">
            <div className="text-6xl mb-4">{categoryIcon}</div>
            <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
              {categoryName}
            </h1>
            <p className="text-xl text-slate-600 dark:text-slate-300">
              Choisissez votre niveau
            </p>
          </div>

          {/* Choix du niveau */}
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {grades.map((grade) => {
              const lessons = geoHistoryConfig[selectedCategory][grade];
              return (
                <button
                  key={grade}
                  onClick={() => setSelectedGrade(grade)}
                  className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-teal-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-3 py-1 rounded-full text-sm font-semibold">
                    {lessons.length} leçons
                  </div>
                  <div className="relative z-10">
                    <div className="text-5xl font-bold mb-3 text-green-600 dark:text-green-400">
                      {grade.toUpperCase()}
                    </div>
                    <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">
                      Classe de {grade}
                    </h2>
                  </div>
                  <div className="absolute bottom-6 right-6 text-3xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                    →
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // Afficher les leçons du niveau sélectionné
  const lessons = geoHistoryConfig[selectedCategory][selectedGrade];
  const categoryName = selectedCategory === 'geography' ? 'Géographie' : 'Histoire';
  const categoryIcon = selectedCategory === 'geography' ? '🗺️' : '📜';

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-teal-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* Bouton retour */}
        <button
          onClick={() => setSelectedGrade(null)}
          className="mb-8 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-green-600 dark:hover:text-green-400 transition-colors"
        >
          <span className="text-2xl">←</span>
          <span className="text-lg font-medium">Retour aux niveaux</span>
        </button>

        {/* En-tête */}
        <div className="text-center mb-12">
          <div className="inline-block bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-300 px-6 py-2 rounded-full text-lg font-semibold mb-4">
            {categoryName} - Classe de {selectedGrade.toUpperCase()}
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">
            Leçons {categoryIcon}
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            {lessons.length} leçons disponibles
          </p>
        </div>

        {/* Liste des leçons */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {lessons.map((lesson, index) => (
            <button
              key={lesson.id}
              onClick={() => onSelectLesson(lesson.id)}
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-slate-800 p-6 shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left"
            >
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-600 dark:text-green-300 font-bold">
                {index + 1}
              </div>
              <div className="text-4xl mb-3">{lesson.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white pr-12">
                {lesson.title}
              </h3>
              <p className="text-slate-600 dark:text-slate-300 text-sm mb-4">
                {lesson.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {lesson.mcqCount > 0 && (
                  <span className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {lesson.mcqCount} QCM
                  </span>
                )}
                {lesson.flashcardCount > 0 && (
                  <span className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300 px-3 py-1 rounded-full text-xs font-semibold">
                    {lesson.flashcardCount} Cartes
                  </span>
                )}
                {lesson.mcqCount === 0 && lesson.flashcardCount === 0 && (
                  <span className="bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-400 px-3 py-1 rounded-full text-xs font-semibold">
                    Bientôt disponible
                  </span>
                )}
              </div>
              {(lesson.mcqCount > 0 || lesson.flashcardCount > 0) && (
                <div className="absolute bottom-4 right-4 text-2xl opacity-0 group-hover:opacity-100 transform translate-x-2 group-hover:translate-x-0 transition-all duration-300">
                  →
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};


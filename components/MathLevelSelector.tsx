import React from 'react';
import type { MathLevel } from '../types/curriculum';
import { math6eConfig } from '../data/curriculum/math6e';
import { math5eConfig } from '../data/curriculum/math5e';
import { math4eConfig } from '../data/curriculum/math4e';

interface MathLevelSelectorProps {
  onSelectLevel: (level: MathLevel) => void;
  onBack: () => void;
}

const levels = [math6eConfig, math5eConfig, math4eConfig];

export const MathLevelSelector: React.FC<MathLevelSelectorProps> = ({ onSelectLevel, onBack }) => {
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
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">🔢</div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Mathématiques
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Choisissez votre niveau
          </p>
        </div>

        {/* Grille des niveaux */}
        <div className="grid md:grid-cols-3 gap-6">
          {levels.map((levelConfig) => (
            <button
              key={levelConfig.level}
              onClick={() => onSelectLevel(levelConfig.level)}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient de fond */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500 to-indigo-600 opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              
              {/* Badge niveau */}
              <div className="absolute top-4 right-4 bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-300 px-3 py-1 rounded-full text-sm font-semibold">
                {levelConfig.chapters.length} chapitres
              </div>

              {/* Contenu */}
              <div className="relative z-10">
                <div className="text-5xl font-bold mb-3 text-blue-600 dark:text-blue-400">
                  {levelConfig.level.toUpperCase()}
                </div>
                <h2 className="text-2xl font-bold mb-3 text-slate-800 dark:text-white">
                  {levelConfig.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-300">
                  {levelConfig.description}
                </p>
              </div>

              {/* Flèche */}
              <div className="absolute bottom-6 right-6 text-3xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                →
              </div>
            </button>
          ))}
        </div>

        {/* Info */}
        <div className="mt-12 bg-blue-50 dark:bg-slate-800 rounded-xl p-6 border-l-4 border-blue-500">
          <div className="flex items-start gap-3">
            <span className="text-2xl">ℹ️</span>
            <div>
              <h3 className="font-semibold text-slate-800 dark:text-white mb-2">
                Programme complet du collège
              </h3>
              <p className="text-slate-600 dark:text-slate-300">
                Chaque niveau contient tous les chapitres du programme officiel de mathématiques.
                Les quiz et exercices seront ajoutés progressivement.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


import React from 'react';
import type { Subject } from '../types/curriculum';
import { subjects } from '../data/curriculum/subjects';

interface SubjectSelectorProps {
  onSelectSubject: (subject: Subject) => void;
}

export const SubjectSelector: React.FC<SubjectSelectorProps> = ({ onSelectSubject }) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800 p-6">
      <div className="max-w-6xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            📚 E-Learning Collège
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Choisissez votre matière pour commencer
          </p>
        </div>

        {/* Grille des matières */}
        <div className="grid md:grid-cols-2 gap-8">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className="group relative overflow-hidden rounded-2xl bg-white dark:bg-slate-800 p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Gradient de fond */}
              <div className={`absolute inset-0 bg-gradient-to-br ${subject.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
              
              {/* Contenu */}
              <div className="relative z-10">
                <div className="text-6xl mb-4">{subject.icon}</div>
                <h2 className="text-3xl font-bold mb-3 text-slate-800 dark:text-white">
                  {subject.name}
                </h2>
                <p className="text-slate-600 dark:text-slate-300 text-lg">
                  {subject.description}
                </p>
              </div>

              {/* Flèche */}
              <div className="absolute bottom-6 right-6 text-3xl opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                →
              </div>
            </button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-slate-500 dark:text-slate-400">
          <p className="text-sm">
            Programme conforme au Bulletin Officiel de l'Éducation Nationale
          </p>
        </div>
      </div>
    </div>
  );
};


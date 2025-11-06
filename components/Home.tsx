import React from 'react';
import type { View } from '../types';
import { QuizIcon } from './icons/QuizIcon';
import { FlashcardIcon } from './icons/FlashcardIcon';
import { ChallengeIcon } from './icons/ChallengeIcon';
import { ProgressIcon } from './icons/ProgressIcon';
import { FactorTreeIcon } from './icons/FactorTreeIcon';
import { GlobeIcon } from './icons/GlobeIcon';

interface HomeProps {
  onNavigate: (view: View) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  return (
    <div className="text-center w-full max-w-6xl">
      <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-800 dark:text-white mb-4">Bienvenue !</h2>
      <p className="text-lg text-slate-600 dark:text-slate-300 mb-8">Choisissez votre matière et votre mode d'entraînement.</p>

      {/* Section Mathématiques */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 text-left">📐 Mathématiques</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <HomeCard
          icon={<QuizIcon className="w-12 h-12 mb-4 text-blue-500" />}
          title="Quiz à Choix Multiples"
          description="Testez vos connaissances avec des questions variées."
          onClick={() => onNavigate('mcq')}
        />
        <HomeCard
          icon={<FlashcardIcon className="w-12 h-12 mb-4 text-green-500" />}
          title="Cartes Mémoire"
          description="Révisez les concepts clés avec des cartes interactives."
          onClick={() => onNavigate('flashcard')}
        />
        <HomeCard
          icon={<FactorTreeIcon className="w-12 h-12 mb-4 text-purple-500" />}
          title="Facteurs Premiers"
          description="Décomposez des nombres en produits de facteurs."
          onClick={() => onNavigate('prime-factorization')}
        />
        <HomeCard
          icon={<ChallengeIcon className="w-12 h-12 mb-4 text-red-500" />}
          title="Défi Chronométré"
          description="Répondez à un maximum de questions en un temps limité."
          onClick={() => onNavigate('challenge')}
        />
        <HomeCard
          icon={<ProgressIcon className="w-12 h-12 mb-4 text-yellow-500" />}
          title="Voir ma Progression"
          description="Suivez vos résultats et visualisez vos progrès."
          onClick={() => onNavigate('progress')}
        />
        </div>
      </div>

      {/* Section Géographie et Histoire */}
      <div className="mb-8">
        <h3 className="text-2xl font-bold text-slate-700 dark:text-slate-200 mb-4 text-left">🌍 Géographie et Histoire</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <HomeCard
            icon={<GlobeIcon className="w-12 h-12 mb-4 text-teal-500" />}
            title="Quiz Géographie"
            description="Testez vos connaissances sur la population mondiale, l'IDH et la démographie."
            onClick={() => onNavigate('geography-mcq')}
          />
          <HomeCard
            icon={<GlobeIcon className="w-12 h-12 mb-4 text-cyan-500" />}
            title="Cartes Géographie"
            description="Révisez les concepts de géographie et d'histoire avec des cartes interactives."
            onClick={() => onNavigate('geography-flashcard')}
          />
        </div>
      </div>
    </div>
  );
};

interface HomeCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    onClick: () => void;
}

const HomeCard: React.FC<HomeCardProps> = ({ icon, title, description, onClick }) => (
    <div onClick={onClick} className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-8 flex flex-col items-center justify-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300">
        {icon}
        <h3 className="text-2xl font-bold mb-2 text-slate-800 dark:text-white">{title}</h3>
        <p className="text-slate-600 dark:text-slate-400">{description}</p>
    </div>
);


export default Home;
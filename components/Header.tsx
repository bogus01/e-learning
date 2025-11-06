
import React from 'react';
import type { View } from '../types';
import { MathIcon } from './icons/MathIcon';

interface HeaderProps {
  onNavigate: (view: View) => void;
}

const Header: React.FC<HeaderProps> = ({ onNavigate }) => {
  return (
    <header className="bg-white dark:bg-slate-800 shadow-md">
      <nav className="container mx-auto px-4 sm:px-6 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('home')}>
          <MathIcon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
          <h1 className="text-xl font-bold text-slate-800 dark:text-white">Maître des Multiples</h1>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-4">
          <button onClick={() => onNavigate('mcq')} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Quiz</button>
          <button onClick={() => onNavigate('flashcard')} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Cartes</button>
          <button onClick={() => onNavigate('challenge')} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Défi</button>
          <button onClick={() => onNavigate('progress')} className="text-sm sm:text-base text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Progrès</button>
        </div>
      </nav>
    </header>
  );
};

export default Header;

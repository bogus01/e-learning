import React, { useState, useEffect } from 'react';
import { geographyFlashcards } from '../data/geographyData';
import type { GeographyFlashcard as FlashcardType } from '../data/geographyData';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';

interface GeographyFlashcardProps {
  onBack: () => void;
}

const GeographyFlashcard: React.FC<GeographyFlashcardProps> = ({ onBack }) => {
  const [cards, setCards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    // Mélanger les cartes au chargement
    const shuffled = [...geographyFlashcards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
  }, []);

  const filteredCards = selectedCategory === 'all' 
    ? cards 
    : cards.filter(card => card.category === selectedCategory);

  const handleReveal = () => {
    setAnimationClass('animate-flip');
    setIsFlipped(true);
  };

  const handleNext = () => {
    if (currentIndex < filteredCards.length - 1) {
      if (isFlipped) {
        setAnimationClass('animate-unflip');
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setIsFlipped(false);
          setAnimationClass('');
        }, 300);
      } else {
        setCurrentIndex(prev => prev + 1);
      }
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      if (isFlipped) {
        setAnimationClass('animate-unflip');
        setTimeout(() => {
          setCurrentIndex(prev => prev - 1);
          setIsFlipped(false);
          setAnimationClass('');
        }, 300);
      } else {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setIsFlipped(false);
    setAnimationClass('');
  };

  if (filteredCards.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg mb-4">Aucune carte disponible pour cette catégorie.</p>
        <button onClick={onBack} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
          Retour
        </button>
      </div>
    );
  }

  const currentCard = filteredCards[currentIndex];

  const getCategoryLabel = (cat: string) => {
    const labels: Record<string, string> = {
      'all': 'Toutes',
      'population': 'Population mondiale',
      'repartition': 'Répartition',
      'idh': 'IDH',
      'natalite': 'Natalité/Mortalité'
    };
    return labels[cat] || cat;
  };

  return (
    <div className="w-full max-w-xl flex flex-col items-center">
      <div className="w-full flex justify-between items-center mb-4">
        <button onClick={onBack} className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2"/>
          Retour
        </button>
        <p className="text-sm text-slate-500 dark:text-slate-400">Carte {currentIndex + 1} / {filteredCards.length}</p>
      </div>

      {/* Filtre par catégorie */}
      <div className="w-full mb-4">
        <label className="block text-sm font-medium mb-2 text-slate-700 dark:text-slate-300">Catégorie :</label>
        <select 
          value={selectedCategory}
          onChange={(e) => handleCategoryChange(e.target.value)}
          className="w-full p-2 border border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-800 text-slate-800 dark:text-slate-200"
        >
          <option value="all">Toutes les catégories</option>
          <option value="population">Population mondiale</option>
          <option value="repartition">Répartition des hommes</option>
          <option value="idh">IDH</option>
          <option value="natalite">Natalité et Mortalité</option>
        </select>
      </div>

      {/* Badge de catégorie */}
      <div className="mb-2">
        <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
          {getCategoryLabel(currentCard.category)}
        </span>
      </div>

      <div className="w-full h-80 [perspective:1000px]">
        <div
          className={`relative w-full h-full [transform-style:preserve-3d] ${animationClass}`}
        >
          {/* Face avant (Question) */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-gradient-to-br from-teal-500 to-teal-600 text-white rounded-lg shadow-xl flex items-center justify-center p-6 text-center">
            <p className="text-2xl font-semibold">{currentCard.question}</p>
          </div>
          {/* Face arrière (Réponse) */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-white dark:bg-slate-800 rounded-lg shadow-xl flex items-center justify-center p-6 text-center" style={{ transform: 'rotateY(180deg)' }}>
            <p className="text-xl font-semibold text-slate-800 dark:text-slate-100">{currentCard.reponse}</p>
          </div>
        </div>
      </div>

      <div className="mt-6 w-full min-h-[90px] flex flex-col justify-center">
        {!isFlipped ? (
          <div className="text-center">
            <p className="mb-4 text-slate-500 dark:text-slate-400">Essayez de deviner la réponse, puis cliquez pour la révéler.</p>
            <button
              onClick={handleReveal}
              className="w-full sm:w-auto bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors"
            >
              Révéler la réponse
            </button>
          </div>
        ) : (
          <div className="flex justify-between w-full">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="px-6 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg disabled:opacity-50 transition-colors">
              Précédent
            </button>
            <button onClick={handleNext} disabled={currentIndex === filteredCards.length - 1} className="px-8 py-3 bg-teal-600 text-white rounded-lg disabled:opacity-50 transition-colors">
              Suivant
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeographyFlashcard;


import React, { useState, useEffect, useCallback } from 'react';
import { generateFlashcards, generateExplanation } from '../services/geminiService';
import type { Flashcard as FlashcardType } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { Spinner } from './Spinner';
import { LightbulbIcon } from './icons/LightbulbIcon';
import HintModal from './HintModal';

interface FlashcardProps {
  onBack: () => void;
}

const Flashcard: React.FC<FlashcardProps> = ({ onBack }) => {
  const [cards, setCards] = useState<FlashcardType[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [animationClass, setAnimationClass] = useState('');
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [hintText, setHintText] = useState('');
  const [isHintLoading, setIsHintLoading] = useState(false);

  const fetchCards = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newCards = await generateFlashcards(15);
      setCards(newCards);
      setCurrentIndex(0);
      setIsFlipped(false);
      setAnimationClass('');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchCards();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleReveal = () => {
    setAnimationClass('animate-flip');
    setIsFlipped(true);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      if (isFlipped) {
        setAnimationClass('animate-unflip');
        setTimeout(() => {
          setCurrentIndex(prev => prev + 1);
          setIsFlipped(false);
          setAnimationClass('');
        }, 300); // Moitié de la durée de l'animation
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
        }, 300); // Moitié de la durée de l'animation
      } else {
        setCurrentIndex(prev => prev - 1);
      }
    }
  };

  const handleHint = async () => {
    if (!cards[currentIndex]) return;
    setIsHintOpen(true);
    setIsHintLoading(true);
    setHintText('');
    try {
        const explanation = await generateExplanation(cards[currentIndex].question);
        setHintText(explanation);
    } catch (e) {
        setHintText("Désolé, une erreur est survenue lors de la génération de l'explication.");
    } finally {
        setIsHintLoading(false);
    }
  };


  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <Spinner />
        <p className="mt-4 text-lg">Préparation des cartes mémoire...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button onClick={fetchCards} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Réessayer</button>
      </div>
    );
  }

  if (cards.length === 0) return null;

  const currentCard = cards[currentIndex];

  return (
    <div className="w-full max-w-xl flex flex-col items-center">
       <div className="w-full flex justify-between items-center mb-4">
        <button onClick={onBack} className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2"/>
          Retour
        </button>
        <div className="flex items-center space-x-4">
          <p className="text-sm text-slate-500 dark:text-slate-400">Carte {currentIndex + 1} / {cards.length}</p>
          <button 
            onClick={handleHint} 
            className="p-1 rounded-full hover:bg-yellow-100 dark:hover:bg-slate-700 transition-colors" 
            aria-label="Obtenir une explication"
          >
            <LightbulbIcon className="w-5 h-5 text-yellow-400" />
          </button>
        </div>
      </div>
      <div className="w-full h-80 [perspective:1000px]">
        <div
          className={`relative w-full h-full [transform-style:preserve-3d] ${animationClass}`}
        >
          {/* Face avant (Question) */}
          <div className="absolute w-full h-full [backface-visibility:hidden] bg-blue-600 text-white rounded-lg shadow-xl flex items-center justify-center p-6 text-center">
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
              className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Révéler la réponse
            </button>
          </div>
        ) : (
          <div className="flex justify-between w-full">
            <button onClick={handlePrev} disabled={currentIndex === 0} className="px-6 py-2 bg-slate-200 dark:bg-slate-700 rounded-lg disabled:opacity-50 transition-colors">
              Précédent
            </button>
            <button onClick={handleNext} disabled={currentIndex === cards.length - 1} className="px-8 py-3 bg-blue-600 text-white rounded-lg disabled:opacity-50 transition-colors">
              Suivant
            </button>
          </div>
        )}
      </div>
       <HintModal
        isOpen={isHintOpen}
        onClose={() => setIsHintOpen(false)}
        isLoading={isHintLoading}
        explanation={hintText}
      />
    </div>
  );
};

export default Flashcard;
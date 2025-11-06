import React, { useState, useEffect } from 'react';
import { geographyMCQs } from '../data/geographyData';
import type { GeographyMCQ } from '../data/geographyData';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { CheckIcon } from './icons/CheckIcon';
import { XIcon } from './icons/XIcon';

interface GeographyMultipleChoiceProps {
  onBack: () => void;
}

const GeographyMultipleChoice: React.FC<GeographyMultipleChoiceProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<GeographyMCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  useEffect(() => {
    startQuiz();
  }, [selectedCategory]);

  const startQuiz = () => {
    // Filtrer par catégorie si nécessaire
    const filtered = selectedCategory === 'all' 
      ? geographyMCQs 
      : geographyMCQs.filter(q => q.category === selectedCategory);
    
    // Mélanger et prendre 10 questions
    const shuffled = [...filtered].sort(() => Math.random() - 0.5).slice(0, Math.min(10, filtered.length));
    setQuestions(shuffled);
    setIsFinished(false);
    setCurrentIndex(0);
    setScore(0);
    setSelectedAnswer(null);
    setIsCorrect(null);
  };

  const handleAnswer = (answer: string) => {
    if (selectedAnswer) return;

    setSelectedAnswer(answer);
    const correct = answer === questions[currentIndex].reponse;
    setIsCorrect(correct);
    if (correct) {
      setScore(prev => prev + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedAnswer(null);
      setIsCorrect(null);
    } else {
      setIsFinished(true);
    }
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  if (questions.length === 0) {
    return (
      <div className="text-center">
        <p className="text-lg mb-4">Aucune question disponible pour cette catégorie.</p>
        <button onClick={onBack} className="bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
          Retour
        </button>
      </div>
    );
  }

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-4">Quiz Terminé !</h2>
        <p className="text-xl mb-2">Votre score : <span className="font-bold text-teal-500">{score} / {questions.length}</span></p>
        <p className="text-lg mb-6 text-slate-600 dark:text-slate-400">{percentage}% de réussite</p>
        
        {percentage >= 80 && <p className="text-green-600 dark:text-green-400 mb-4">🎉 Excellent travail !</p>}
        {percentage >= 60 && percentage < 80 && <p className="text-blue-600 dark:text-blue-400 mb-4">👍 Bon travail !</p>}
        {percentage < 60 && <p className="text-orange-600 dark:text-orange-400 mb-4">💪 Continue à réviser !</p>}
        
        <div className="flex justify-center space-x-4">
          <button onClick={startQuiz} className="bg-teal-600 text-white px-6 py-2 rounded-lg hover:bg-teal-700 transition-colors">Nouveau Quiz</button>
          <button onClick={onBack} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">Retour</button>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const getButtonClass = (option: string) => {
    if (!selectedAnswer) {
      return 'bg-white dark:bg-slate-700 hover:bg-slate-100 dark:hover:bg-slate-600';
    }
    if (option === currentQuestion.reponse) {
      return 'bg-green-500 text-white';
    }
    if (option === selectedAnswer) {
      return 'bg-red-500 text-white';
    }
    return 'bg-white dark:bg-slate-700 opacity-60 cursor-not-allowed';
  };

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
    <div className="w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-teal-600 dark:hover:text-teal-400 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2"/>
          Retour
        </button>
        <div className="text-lg font-bold">Score: {score}</div>
      </div>

      {/* Filtre par catégorie - affiché seulement avant de commencer */}
      {currentIndex === 0 && !selectedAnswer && (
        <div className="mb-4 bg-white dark:bg-slate-800 p-4 rounded-lg">
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
      )}

      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl">
        <div className="mb-6">
          <div className="flex justify-between items-center mb-2">
            <p className="text-slate-500 dark:text-slate-400">Question {currentIndex + 1} / {questions.length}</p>
            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-teal-100 text-teal-800 dark:bg-teal-900 dark:text-teal-200">
              {getCategoryLabel(currentQuestion.category)}
            </span>
          </div>
          <p className="text-xl sm:text-2xl font-medium mt-2">{currentQuestion.question}</p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              disabled={!!selectedAnswer}
              className={`p-4 rounded-lg text-left transition-all duration-300 text-base font-semibold shadow-sm ${getButtonClass(option)}`}
            >
              {option}
            </button>
          ))}
        </div>

        {selectedAnswer && (
          <div className="mt-6 text-center">
            {isCorrect ? (
              <div className="flex items-center justify-center text-green-600 dark:text-green-400">
                <CheckIcon className="w-6 h-6 mr-2" />
                <p className="text-lg font-semibold">Bonne réponse !</p>
              </div>
            ) : (
              <div className="flex items-center justify-center text-red-600 dark:text-red-400">
                <XIcon className="w-6 h-6 mr-2" />
                <p className="text-lg font-semibold">Incorrect. La bonne réponse est : {currentQuestion.reponse}</p>
              </div>
            )}
            <button
              onClick={handleNext}
              className="mt-4 bg-teal-600 text-white px-8 py-3 rounded-lg hover:bg-teal-700 transition-colors w-full sm:w-auto"
            >
              {currentIndex < questions.length - 1 ? 'Question suivante' : 'Voir les résultats'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default GeographyMultipleChoice;


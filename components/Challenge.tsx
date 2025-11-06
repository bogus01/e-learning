import React, { useState, useEffect, useCallback, useRef } from 'react';
import { generateMCQs, generateExplanation } from '../services/geminiService';
import type { MCQ, ProgressData } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { Spinner } from './Spinner';
import { LightbulbIcon } from './icons/LightbulbIcon';
import HintModal from './HintModal';

const CHALLENGE_DURATION = 120; // 2 minutes in seconds
const QUESTION_COUNT = 15;

interface ChallengeProps {
  onBack: () => void;
}

const Challenge: React.FC<ChallengeProps> = ({ onBack }) => {
  const [questions, setQuestions] = useState<MCQ[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(CHALLENGE_DURATION);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [hintText, setHintText] = useState('');
  const [isHintLoading, setIsHintLoading] = useState(false);
  
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const endChallenge = useCallback(() => {
    setIsActive(false);
    setIsFinished(true);
    if (timerRef.current) clearInterval(timerRef.current);

    try {
        const existingData = localStorage.getItem('math_progress');
        const progress: ProgressData = existingData ? JSON.parse(existingData) : { totalAnswered: 0, totalCorrect: 0, challengeHistory: [] };
        
        progress.challengeHistory.push({
            score: score,
            total: currentIndex,
            date: new Date().toISOString()
        });

        localStorage.setItem('math_progress', JSON.stringify(progress));
    } catch (e) {
        console.error("Failed to save challenge progress", e);
    }
  }, [score, currentIndex]);


  useEffect(() => {
    if (isActive && timeLeft > 0) {
      timerRef.current = setInterval(() => {
        setTimeLeft(prev => prev - 1);
      }, 1000);
    } else if (timeLeft === 0 && isActive) {
      endChallenge();
    }
    return () => {
      if(timerRef.current) clearInterval(timerRef.current);
    };
  }, [isActive, timeLeft, endChallenge]);

  const fetchQuestions = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const newQuestions = await generateMCQs(QUESTION_COUNT);
      setQuestions(newQuestions);
      setCurrentIndex(0);
      setScore(0);
      setTimeLeft(CHALLENGE_DURATION);
      setIsFinished(false);
      setIsActive(false);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Une erreur est survenue.');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchQuestions();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const startChallenge = () => {
    setIsActive(true);
  }

  const handleAnswer = (answer: string) => {
    if (!isActive || isFinished) return;
    if (answer === questions[currentIndex].reponse) {
      setScore(prev => prev + 1);
    }
    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
    } else {
      endChallenge();
    }
  };

  const handleHint = async () => {
    if (!questions[currentIndex]) return;
    setIsHintOpen(true);
    setIsHintLoading(true);
    setHintText('');
    try {
        const explanation = await generateExplanation(questions[currentIndex].question);
        setHintText(explanation);
    } catch (e) {
        setHintText("Désolé, une erreur est survenue lors de la génération de l'explication.");
    } finally {
        setIsHintLoading(false);
    }
  };
  
  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center text-center">
        <Spinner />
        <p className="mt-4 text-lg">Préparation du défi...</p>
      </div>
    );
  }
  
  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button onClick={fetchQuestions} className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">Réessayer</button>
      </div>
    );
  }

  if (!isActive && !isFinished) {
    return (
        <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl w-full max-w-lg">
            <h2 className="text-3xl font-bold mb-4">Défi Chronométré</h2>
            <p className="text-lg mb-2">Vous aurez {CHALLENGE_DURATION / 60} minutes pour répondre à {QUESTION_COUNT} questions.</p>
            <p className="text-lg mb-6">Le temps commence dès que vous cliquez sur "Commencer".</p>
            <div className="flex justify-center space-x-4">
                <button onClick={startChallenge} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">Commencer</button>
                <button onClick={onBack} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">Retour</button>
            </div>
        </div>
    );
  }

  if (isFinished) {
    return (
      <div className="text-center bg-white dark:bg-slate-800 p-8 rounded-lg shadow-xl w-full max-w-lg">
        <h2 className="text-3xl font-bold mb-4">Défi Terminé !</h2>
        <p className="text-xl mb-2">Vous avez répondu à {currentIndex} questions.</p>
        <p className="text-xl mb-6">Votre score : <span className="font-bold text-blue-500">{score} / {currentIndex}</span></p>
        <div className="flex justify-center space-x-4">
          <button onClick={fetchQuestions} className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">Nouveau Défi</button>
          <button onClick={onBack} className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-300 transition-colors dark:bg-slate-700 dark:text-white dark:hover:bg-slate-600">Retour</button>
        </div>
      </div>
    );
  }

  if (questions.length === 0) return null;
  const currentQuestion = questions[currentIndex];

  return (
    <div className="w-full max-w-3xl">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2"/>
          Retour
        </button>
        <div className="text-lg font-bold text-red-500">{formatTime(timeLeft)}</div>
      </div>
      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-6">
            <div>
                <p className="text-slate-500 dark:text-slate-400">Question {currentIndex + 1} / {questions.length}</p>
                <p className="text-xl sm:text-2xl font-medium mt-2">{currentQuestion.question}</p>
            </div>
            <button 
                onClick={handleHint} 
                className="p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-slate-700 transition-colors flex-shrink-0 ml-4" 
                aria-label="Obtenir une explication"
            >
                <LightbulbIcon className="w-6 h-6 text-yellow-400" />
            </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleAnswer(option)}
              className="p-4 rounded-lg text-left transition-colors duration-200 text-base font-semibold shadow-sm bg-white dark:bg-slate-700 hover:bg-blue-100 dark:hover:bg-blue-900 border-2 border-transparent focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            >
              {option}
            </button>
          ))}
        </div>
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

export default Challenge;
import React, { useState, useEffect, useCallback, FormEvent } from 'react';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import { LightbulbIcon } from './icons/LightbulbIcon';
import HintModal from './HintModal';
import { generateExplanation } from '../services/geminiService';
import { LifebuoyIcon } from './icons/LifebuoyIcon';

// Helper functions
const isPrime = (num: number): boolean => {
  if (num <= 1) return false;
  for (let i = 2; i * i <= num; i++) {
    if (num % i === 0) return false;
  }
  return true;
};

const getRandomComposite = (min: number, max: number): number => {
  let num;
  do {
    num = Math.floor(Math.random() * (max - min + 1)) + min;
  } while (isPrime(num));
  return num;
};

const findSmallestPrimeFactor = (num: number): number => {
    if (num <= 1) return 1;
    if (num % 2 === 0) return 2;
    for (let i = 3; i * i <= num; i += 2) {
        if (num % i === 0) return i;
    }
    return num; // It's a prime
};

const getPrimeFactorization = (num: number): number[] => {
    const factors: number[] = [];
    let tempNum = num;
    while (tempNum > 1) {
        const factor = findSmallestPrimeFactor(tempNum);
        factors.push(factor);
        tempNum /= factor;
    }
    return factors;
};


interface PrimeFactorizationProps {
  onBack: () => void;
}

const PrimeFactorization: React.FC<PrimeFactorizationProps> = ({ onBack }) => {
  const [originalNumber, setOriginalNumber] = useState(0);
  const [currentNumber, setCurrentNumber] = useState(0);
  const [factors, setFactors] = useState<number[]>([]);
  const [decompositionSteps, setDecompositionSteps] = useState<number[]>([]);
  const [userInput, setUserInput] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isFinished, setIsFinished] = useState(false);
  const [showHelpOptions, setShowHelpOptions] = useState(false);

  // Hint feature state
  const [isHintOpen, setIsHintOpen] = useState(false);
  const [hintText, setHintText] = useState('');
  const [isHintLoading, setIsHintLoading] = useState(false);

  const startNewProblem = useCallback(() => {
    const newNum = getRandomComposite(50, 300);
    setOriginalNumber(newNum);
    setCurrentNumber(newNum);
    setDecompositionSteps([newNum]);
    setFactors([]);
    setUserInput('');
    setError(null);
    setIsFinished(false);
    setShowHelpOptions(false);
  }, []);

  useEffect(() => {
    startNewProblem();
  }, [startNewProblem]);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (isFinished) return;
    setError(null);
    const num = parseInt(userInput, 10);

    if (isNaN(num)) {
      setError("Veuillez entrer un nombre valide.");
      return;
    }

    if (!isPrime(num)) {
      setError(`${num} n'est pas un nombre premier.`);
      return;
    }

    if (currentNumber % num !== 0) {
      setError(`${num} n'est pas un diviseur de ${currentNumber}.`);
      return;
    }

    const newCurrentNumber = currentNumber / num;
    setFactors(prev => [...prev, num]);
    setDecompositionSteps(prev => [...prev, newCurrentNumber]);
    setCurrentNumber(newCurrentNumber);
    setUserInput('');

    if (newCurrentNumber === 1) {
      setIsFinished(true);
    }
  };
  
  const questionForHint = `Comment décomposer le nombre ${currentNumber} en facteurs premiers ? Donne-moi une piste pour trouver le prochain facteur premier.`;
  
  const handleHint = async () => {
    setIsHintOpen(true);
    setIsHintLoading(true);
    setHintText('');
    try {
        const explanation = await generateExplanation(questionForHint);
        setHintText(explanation);
    } catch (e) {
        setHintText("Désolé, une erreur est survenue lors de la génération de l'indice.");
    } finally {
        setIsHintLoading(false);
    }
  };

  const handleRevealNextStep = () => {
    if (isFinished || currentNumber <= 1) return;

    const nextFactor = findSmallestPrimeFactor(currentNumber);
    const newCurrentNumber = currentNumber / nextFactor;

    setFactors(prev => [...prev, nextFactor]);
    setDecompositionSteps(prev => [...prev, newCurrentNumber]);
    setCurrentNumber(newCurrentNumber);
    setUserInput('');
    setShowHelpOptions(false);

    if (newCurrentNumber === 1) {
      setIsFinished(true);
    }
  };

  const handleRevealAll = () => {
    if (isFinished || currentNumber <= 1) return;

    const remainingFactors = getPrimeFactorization(currentNumber);
    let tempNum = currentNumber;
    const newSteps: number[] = [];
    
    for (const factor of remainingFactors) {
        tempNum /= factor;
        newSteps.push(tempNum);
    }

    setFactors(prev => [...prev, ...remainingFactors]);
    setDecompositionSteps(prev => [...prev, ...newSteps]);
    setCurrentNumber(1);
    setIsFinished(true);
    setShowHelpOptions(false);
  };

  const finalFactorization = factors.sort((a, b) => a - b).join(' x ');

  return (
    <div className="w-full max-w-md">
      <div className="flex justify-between items-center mb-4">
        <button onClick={onBack} className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2"/>
          Retour
        </button>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 sm:p-8 rounded-lg shadow-xl">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Décomposition</h2>
          <button 
            onClick={handleHint} 
            className="p-2 rounded-full hover:bg-yellow-100 dark:hover:bg-slate-700 transition-colors" 
            aria-label="Obtenir une explication"
          >
            <LightbulbIcon className="w-6 h-6 text-yellow-400" />
          </button>
        </div>

        <div className="relative p-4 bg-slate-50 dark:bg-slate-700/50 rounded-lg min-h-[250px] mb-6 font-mono text-3xl">
          <div className="absolute top-4 bottom-4 left-1/2 w-0.5 bg-slate-300 dark:bg-slate-600"></div>
          <div className="grid grid-cols-2">
            {/* Left Column */}
            <div className="pr-6 text-right">
              {decompositionSteps.map((step, index) => (
                <p key={`step-${index}`} className="mb-2 h-10 flex items-center justify-end">{step}</p>
              ))}
            </div>
            {/* Right Column */}
            <div className="pl-6 text-left">
              {factors.map((factor, index) => (
                <p key={`factor-${index}`} className="mb-2 h-10 flex items-center justify-start text-blue-600 dark:text-blue-400 font-bold">{factor}</p>
              ))}
            </div>
          </div>
        </div>
        
        {isFinished ? (
          <div className="text-center">
            <h3 className="text-xl font-bold text-green-500 mb-3">Bravo !</h3>
            <p className="text-lg mb-4">Décomposition complète :</p>
            <p className="text-xl font-mono p-3 bg-slate-100 dark:bg-slate-700 rounded-lg">{originalNumber} = {finalFactorization}</p>
            <button onClick={startNewProblem} className="mt-6 bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors w-full">
              Nouveau Problème
            </button>
          </div>
        ) : (
          <div>
            <form onSubmit={handleSubmit}>
              <label htmlFor="factor-input" className="block text-lg font-medium mb-2 text-center">Entrez le plus petit facteur premier de {currentNumber} :</label>
              <div className="flex space-x-2">
                <input 
                  id="factor-input"
                  type="number"
                  value={userInput}
                  onChange={(e) => setUserInput(e.target.value)}
                  className="flex-grow p-3 border-2 text-lg text-center border-slate-300 dark:border-slate-600 rounded-lg bg-white dark:bg-slate-900 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
                  placeholder="?"
                  autoFocus
                />
                <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-semibold">Valider</button>
              </div>
            </form>
            
            <div className="mt-6">
                {showHelpOptions ? (
                  <div className="p-4 bg-slate-100 dark:bg-slate-700/50 rounded-lg">
                    <h4 className="text-center font-semibold mb-3">Besoin d'un coup de main ?</h4>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <button
                            onClick={handleRevealNextStep}
                            className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors text-sm"
                        >
                            Révéler le prochain facteur
                        </button>
                        <button
                            onClick={handleRevealAll}
                            className="flex-1 bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors text-sm"
                        >
                            Résoudre tout l'exercice
                        </button>
                    </div>
                    <div className="text-center mt-4">
                        <button 
                            onClick={() => setShowHelpOptions(false)}
                            className="text-sm text-slate-500 dark:text-slate-400 hover:underline"
                        >
                            Annuler
                        </button>
                    </div>
                  </div>
                ) : (
                  <div className="text-center">
                    <button
                        type="button"
                        onClick={() => setShowHelpOptions(true)}
                        className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-base font-medium rounded-lg text-yellow-800 bg-yellow-300 hover:bg-yellow-400 dark:text-yellow-900 dark:bg-yellow-400 dark:hover:bg-yellow-500 transition-colors shadow-sm"
                    >
                        <LifebuoyIcon className="w-5 h-5 mr-3" />
                        Je suis coincé(e)...
                    </button>
                  </div>
                )}
            </div>

            {error && <p className="mt-3 text-red-500 text-center font-semibold">{error}</p>}
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

export default PrimeFactorization;
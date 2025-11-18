import { useState, useEffect } from 'react';
import { generateQuiz, type QuizQuestion } from '../lib/openai';
import { getCachedQuiz, cacheQuiz, invalidateQuizCache } from '../lib/cache';

interface QuizViewProps {
  subjectName: string;
  chapterTitle: string;
  subChapter: {
    id: string;
    title: string;
    aiQuizQuestionCount?: number;
    staticMCQs?: any[];
  };
  onBack: () => void;
}

export default function QuizView({ 
  subjectName, 
  chapterTitle, 
  subChapter, 
  onBack 
}: QuizViewProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les questions au montage
  useEffect(() => {
    loadQuiz();
  }, []);

  const loadQuiz = async (forceRegenerate = false) => {
    try {
      setLoading(true);
      setError(null);

      // Si des quiz statiques sont disponibles, les utiliser
      if (subChapter.staticMCQs && subChapter.staticMCQs.length > 0) {
        console.log('📚 Quiz statiques chargés');
        const staticQuiz = subChapter.staticMCQs.map((mcq: any) => ({
          question: mcq.question,
          options: mcq.options,
          correctAnswer: mcq.options.indexOf(mcq.reponse),
          explanation: `La bonne réponse est : ${mcq.reponse}`
        }));
        setQuestions(staticQuiz);
        setLoading(false);
        return;
      }

      // Essayer de récupérer depuis le cache d'abord
      if (!forceRegenerate) {
        const cachedQuiz = getCachedQuiz(subjectName, chapterTitle, subChapter.title);
        if (cachedQuiz && cachedQuiz.length > 0) {
          console.log('📦 Quiz chargé depuis le cache');
          setQuestions(cachedQuiz);
          setLoading(false);
          return;
        }
      }

      // Si pas de cache ou régénération forcée, générer avec l'IA
      console.log('🤖 Génération d\'un nouveau quiz avec l\'IA...');
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('Clé API OpenAI non configurée. Consultez docs/OPENAI_SETUP.md');
      }

      const quiz = await generateQuiz(
        subjectName,
        chapterTitle,
        subChapter.title,
        subChapter.aiQuizQuestionCount || 10,
        apiKey
      );

      // Mettre en cache le quiz généré
      cacheQuiz(subjectName, chapterTitle, subChapter.title, quiz);

      setQuestions(quiz);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors du chargement du quiz');
    } finally {
      setLoading(false);
    }
  };

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return; // Empêcher de changer après validation
    setSelectedAnswer(answerIndex);
  };

  const handleValidate = () => {
    if (selectedAnswer === null) return;

    const currentQuestion = questions[currentQuestionIndex];
    if (selectedAnswer === currentQuestion.correctAnswer) {
      setScore(score + 1);
    }
    setShowExplanation(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
  };

  const handleRegenerate = () => {
    // Invalider le cache et régénérer
    invalidateQuizCache(subjectName, chapterTitle, subChapter.title);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    loadQuiz(true); // Force la régénération
  };

  // État de chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin text-6xl mb-4">🧠</div>
          <p className="text-xl text-slate-700 dark:text-slate-300 mb-2">
            Génération du quiz avec l'IA...
          </p>
          <p className="text-sm text-slate-500 dark:text-slate-400">
            Cela peut prendre quelques secondes
          </p>
        </div>
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg max-w-md">
          <div className="text-6xl mb-4 text-center">❌</div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Erreur
          </h2>
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-center">
            {error}
          </p>
          <div className="flex gap-4">
            <button
              onClick={() => loadQuiz()}
              className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Réessayer
            </button>
            <button
              onClick={onBack}
              className="flex-1 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const isQuizFinished = currentQuestionIndex === questions.length - 1 && showExplanation;

  // Écran de résultats
  if (isQuizFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg max-w-md w-full">
          <div className="text-6xl mb-4 text-center">
            {percentage >= 80 ? '🎉' : percentage >= 60 ? '👍' : '💪'}
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 text-center">
            Quiz terminé !
          </h2>
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-xl p-6 mb-6">
            <p className="text-5xl font-bold text-center mb-2">
              {score}/{questions.length}
            </p>
            <p className="text-center text-lg">
              {percentage}% de réussite
            </p>
          </div>
          <p className="text-slate-600 dark:text-slate-300 mb-6 text-center">
            {percentage >= 80 
              ? 'Excellent travail ! Tu maîtrises bien ce chapitre. 🌟' 
              : percentage >= 60 
              ? 'Bon travail ! Continue à t\'entraîner. 📚' 
              : 'Continue tes efforts ! Relis la leçon et réessaie. 💪'}
          </p>
          <div className="space-y-3">
            <div className="flex gap-4">
              <button
                onClick={handleRestart}
                className="flex-1 bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                🔄 Recommencer
              </button>
              <button
                onClick={handleRegenerate}
                className="flex-1 bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                ✨ Nouvelles questions
              </button>
            </div>
            <button
              onClick={onBack}
              className="w-full bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-900 dark:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
            >
              ← Retour
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Affichage de la question
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6">
      <style>{`
        .fraction {
          display: inline-flex;
          flex-direction: column;
          vertical-align: middle;
          text-align: center;
          margin: 0 0.2em;
        }
        .fraction .numerator {
          border-bottom: 1px solid currentColor;
          padding: 0 0.3em 0.1em;
        }
        .fraction .denominator {
          padding: 0.1em 0.3em 0;
        }
        .math-content sup {
          font-size: 0.7em;
          vertical-align: super;
        }
        .math-content sub {
          font-size: 0.7em;
          vertical-align: sub;
        }
      `}</style>
      <div className="max-w-3xl mx-auto">
        {/* En-tête */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4 flex items-center gap-2 transition-colors"
          >
            ← Retour
          </button>
          <div className="flex justify-between items-center mb-2">
            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
              🧠 Quiz : {subChapter.title}
            </h1>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">
              {currentQuestionIndex + 1}/{questions.length}
            </span>
          </div>
          <div className="bg-slate-200 dark:bg-slate-700 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentQuestionIndex + 1) / questions.length) * 100}%` }}
            />
          </div>
        </div>

        {/* Question */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-6">
          <div
            className="text-xl font-semibold text-slate-900 dark:text-white mb-6 math-content"
            dangerouslySetInnerHTML={{ __html: currentQuestion.question }}
          />

          {/* Réponses */}
          <div className="space-y-3">
            {currentQuestion.options.map((option, index) => {
              const isSelected = selectedAnswer === index;
              const isCorrect = index === currentQuestion.correctAnswer;
              const showResult = showExplanation;

              let className = "w-full text-left p-4 rounded-xl border-2 transition-all font-medium ";
              
              if (showResult) {
                if (isCorrect) {
                  className += "border-green-500 bg-green-50 dark:bg-green-900/20 text-green-900 dark:text-green-100";
                } else if (isSelected) {
                  className += "border-red-500 bg-red-50 dark:bg-red-900/20 text-red-900 dark:text-red-100";
                } else {
                  className += "border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-400";
                }
              } else {
                className += isSelected
                  ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20 text-blue-900 dark:text-blue-100"
                  : "border-slate-200 dark:border-slate-700 hover:border-blue-300 dark:hover:border-blue-600 text-slate-900 dark:text-white";
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={className}
                >
                  <div className="flex items-center justify-between">
                    <span className="math-content" dangerouslySetInnerHTML={{ __html: option }} />
                    {showResult && isCorrect && <span className="text-2xl">✓</span>}
                    {showResult && isSelected && !isCorrect && <span className="text-2xl">✗</span>}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Explication */}
          {showExplanation && (
            <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-900/20 rounded-xl border-2 border-blue-200 dark:border-blue-800">
              <p className="text-sm font-semibold text-blue-900 dark:text-blue-300 mb-2 flex items-center gap-2">
                <span className="text-lg">💡</span> Explication
              </p>
              <div
                className="text-slate-700 dark:text-slate-300 math-content"
                dangerouslySetInnerHTML={{ __html: currentQuestion.explanation }}
              />
            </div>
          )}
        </div>

        {/* Boutons d'action */}
        <div className="flex gap-4">
          {!showExplanation ? (
            <button
              onClick={handleValidate}
              disabled={selectedAnswer === null}
              className="flex-1 bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-700 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              Valider ma réponse
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="flex-1 bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-xl font-semibold transition-colors shadow-lg hover:shadow-xl"
            >
              {currentQuestionIndex < questions.length - 1 ? 'Question suivante →' : 'Voir les résultats 🎯'}
            </button>
          )}
        </div>

        {/* Score actuel */}
        <div className="mt-4 text-center">
          <span className="text-slate-600 dark:text-slate-400">
            Score actuel : 
          </span>
          <span className="ml-2 font-bold text-slate-900 dark:text-white">
            {score}/{currentQuestionIndex + (showExplanation ? 1 : 0)}
          </span>
        </div>
      </div>
    </div>
  );
}


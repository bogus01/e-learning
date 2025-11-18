import React, { useState, useEffect } from 'react';
import type { SubChapter } from '../types/curriculum';
import { FileText, CheckCircle, XCircle, ArrowRight, RefreshCw } from 'lucide-react';
import { generateExercises, type Exercise } from '../lib/openai';
import { getCachedExercises, cacheExercises } from '../lib/cache';

interface ExerciseViewProps {
  subjectName: string;
  chapterTitle: string;
  subChapter: SubChapter;
  onBack: () => void;
}

export const ExerciseView: React.FC<ExerciseViewProps> = ({
  subjectName,
  chapterTitle,
  subChapter,
  onBack
}) => {
  const [exercises, setExercises] = useState<Exercise[]>([]);
  const [currentExerciseIndex, setCurrentExerciseIndex] = useState(0);
  const [userAnswer, setUserAnswer] = useState('');
  const [showSolution, setShowSolution] = useState(false);
  const [completedExercises, setCompletedExercises] = useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadExercises();
  }, []);

  const loadExercises = async (forceRegenerate = false) => {
    try {
      setLoading(true);
      setError(null);

      // Essayer de récupérer depuis le cache d'abord
      if (!forceRegenerate) {
        const cachedExercises = getCachedExercises(subjectName, chapterTitle, subChapter.title);
        if (cachedExercises && cachedExercises.length > 0) {
          console.log('📦 Exercices chargés depuis le cache');
          setExercises(cachedExercises);
          setLoading(false);
          return;
        }
      }

      // Si pas de cache ou régénération forcée, générer avec l'IA
      console.log('🤖 Génération de nouveaux exercices avec l\'IA...');
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('Clé API OpenAI non configurée. Consultez docs/OPENAI_SETUP.md');
      }

      const generatedExercises = await generateExercises(
        subjectName,
        chapterTitle,
        subChapter.title,
        subChapter.aiQuizQuestionCount || 5, // Nombre d'exercices
        apiKey
      );

      // Mettre en cache les exercices générés
      cacheExercises(subjectName, chapterTitle, subChapter.title, generatedExercises);

      setExercises(generatedExercises);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors du chargement des exercices');
    } finally {
      setLoading(false);
    }
  };

  const handleCheckAnswer = () => {
    setShowSolution(true);
    setCompletedExercises(prev => new Set(prev).add(currentExerciseIndex));
  };

  const handleNextExercise = () => {
    if (currentExerciseIndex < exercises.length - 1) {
      setCurrentExerciseIndex(currentExerciseIndex + 1);
      setUserAnswer('');
      setShowSolution(false);
    }
  };

  const handlePreviousExercise = () => {
    if (currentExerciseIndex > 0) {
      setCurrentExerciseIndex(currentExerciseIndex - 1);
      setUserAnswer('');
      setShowSolution(false);
    }
  };

  const handleRegenerate = async () => {
    setCurrentExerciseIndex(0);
    setUserAnswer('');
    setShowSolution(false);
    setCompletedExercises(new Set());
    await loadExercises(true);
  };

  // Affichage du chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-xl text-slate-700 dark:text-slate-300">Génération des exercices...</p>
          <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">Cela peut prendre quelques secondes</p>
        </div>
      </div>
    );
  }

  // Affichage de l'erreur
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6">
        <div className="max-w-2xl mx-auto">
          <button
            onClick={onBack}
            className="text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white mb-4 flex items-center gap-2 transition-colors"
          >
            ← Retour
          </button>
          <div className="bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl p-6">
            <h2 className="text-xl font-bold text-red-800 dark:text-red-200 mb-2">Erreur</h2>
            <p className="text-red-700 dark:text-red-300">{error}</p>
            <button
              onClick={() => loadExercises(true)}
              className="mt-4 bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
            >
              Réessayer
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (exercises.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
        <div className="text-center">
          <FileText className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
          <p className="text-xl text-slate-700 dark:text-slate-300">Aucun exercice disponible</p>
        </div>
      </div>
    );
  }

  const currentExercise = exercises[currentExerciseIndex];
  const progress = Math.round((completedExercises.size / exercises.length) * 100);

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
              ✏️ Exercices : {subChapter.title}
            </h1>
            <span className="text-slate-600 dark:text-slate-400 font-semibold">
              {currentExerciseIndex + 1}/{exercises.length}
            </span>
          </div>

          {/* Barre de progression */}
          <div className="w-full bg-slate-200 dark:bg-slate-700 rounded-full h-2 mb-4">
            <div
              className="bg-green-500 h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-slate-600 dark:text-slate-400">
            {completedExercises.size} exercice{completedExercises.size > 1 ? 's' : ''} complété{completedExercises.size > 1 ? 's' : ''}
          </p>
        </div>

        {/* Exercice */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-6">
          <div className="mb-6">
            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-4">
              Exercice {currentExerciseIndex + 1}
            </h2>
            <div className="prose dark:prose-invert max-w-none math-content">
              <div
                className="text-lg text-slate-700 dark:text-slate-300"
                dangerouslySetInnerHTML={{ __html: currentExercise.question }}
              />
            </div>
          </div>

          {/* Zone de réponse */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">
              Ta réponse :
            </label>
            <textarea
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              disabled={showSolution}
              className="w-full px-4 py-3 border-2 border-slate-300 dark:border-slate-600 rounded-xl focus:border-blue-500 focus:outline-none dark:bg-slate-700 dark:text-white resize-none"
              rows={4}
              placeholder="Écris ta réponse ici..."
            />
          </div>

          {/* Bouton vérifier */}
          {!showSolution && (
            <button
              onClick={handleCheckAnswer}
              disabled={!userAnswer.trim()}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-slate-300 disabled:cursor-not-allowed text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <CheckCircle className="w-5 h-5" />
              Vérifier ma réponse
            </button>
          )}

          {/* Solution */}
          {showSolution && (
            <div className="mt-6 p-6 bg-green-50 dark:bg-green-900/20 border-2 border-green-200 dark:border-green-800 rounded-xl">
              <h3 className="text-lg font-bold text-green-800 dark:text-green-200 mb-3 flex items-center gap-2">
                <CheckCircle className="w-6 h-6" />
                Solution
              </h3>
              <div className="prose dark:prose-invert max-w-none math-content">
                <div
                  className="text-green-700 dark:text-green-300"
                  dangerouslySetInnerHTML={{ __html: currentExercise.solution }}
                />
              </div>
              {currentExercise.explanation && (
                <div className="mt-4 pt-4 border-t border-green-200 dark:border-green-800">
                  <h4 className="font-semibold text-green-800 dark:text-green-200 mb-2">
                    Explication :
                  </h4>
                  <div
                    className="text-green-700 dark:text-green-300 math-content"
                    dangerouslySetInnerHTML={{ __html: currentExercise.explanation }}
                  />
                </div>
              )}
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex gap-4">
          <button
            onClick={handlePreviousExercise}
            disabled={currentExerciseIndex === 0}
            className="flex-1 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-100 disabled:cursor-not-allowed text-slate-700 dark:bg-slate-700 dark:hover:bg-slate-600 dark:text-white px-6 py-3 rounded-xl font-semibold transition-colors"
          >
            ← Précédent
          </button>
          
          {currentExerciseIndex < exercises.length - 1 ? (
            <button
              onClick={handleNextExercise}
              className="flex-1 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              Suivant
              <ArrowRight className="w-5 h-5" />
            </button>
          ) : (
            <button
              onClick={handleRegenerate}
              className="flex-1 bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-xl font-semibold transition-colors flex items-center justify-center gap-2"
            >
              <RefreshCw className="w-5 h-5" />
              Nouveaux exercices
            </button>
          )}
        </div>

        {/* Message de fin */}
        {completedExercises.size === exercises.length && (
          <div className="mt-6 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl p-6 text-white text-center">
            <h3 className="text-2xl font-bold mb-2">🎉 Bravo !</h3>
            <p className="text-green-100">
              Tu as complété tous les exercices ! Continue comme ça ! 💪
            </p>
          </div>
        )}
      </div>
    </div>
  );
};


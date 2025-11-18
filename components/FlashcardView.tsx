import { useState, useEffect } from 'react';
import { generateFlashcards, type FlashCard } from '../lib/openai';
import { getCachedFlashcards, cacheFlashcards, invalidateFlashcardCache } from '../lib/cache';

interface FlashcardViewProps {
  subjectName: string;
  chapterTitle: string;
  subChapter: {
    id: string;
    title: string;
    aiFlashcardCount?: number;
    staticFlashcards?: any[];
  };
  onBack: () => void;
}

export default function FlashcardView({ 
  subjectName, 
  chapterTitle, 
  subChapter, 
  onBack 
}: FlashcardViewProps) {
  const [flashcards, setFlashcards] = useState<FlashCard[]>([]);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Charger les flashcards au montage
  useEffect(() => {
    loadFlashcards();
  }, []);

  const loadFlashcards = async (forceRegenerate = false) => {
    try {
      setLoading(true);
      setError(null);

      // Si des flashcards statiques sont disponibles, les utiliser
      if (subChapter.staticFlashcards && subChapter.staticFlashcards.length > 0) {
        console.log('📚 Flashcards statiques chargées');
        const staticCards = subChapter.staticFlashcards.map((card: any) => ({
          question: card.question,
          answer: card.reponse
        }));
        setFlashcards(staticCards);
        setLoading(false);
        return;
      }

      // Essayer de récupérer depuis le cache d'abord
      if (!forceRegenerate) {
        const cachedCards = getCachedFlashcards(subjectName, chapterTitle, subChapter.title);
        if (cachedCards && cachedCards.length > 0) {
          console.log('📦 Flashcards chargées depuis le cache');
          setFlashcards(cachedCards);
          setLoading(false);
          return;
        }
      }

      // Si pas de cache ou régénération forcée, générer avec l'IA
      console.log('🤖 Génération de nouvelles flashcards avec l\'IA...');
      const apiKey = import.meta.env.VITE_OPENAI_API_KEY;
      if (!apiKey) {
        throw new Error('Clé API OpenAI non configurée. Consultez docs/OPENAI_SETUP.md');
      }

      const cards = await generateFlashcards(
        subjectName,
        chapterTitle,
        subChapter.title,
        subChapter.aiFlashcardCount || 10,
        apiKey
      );

      // Mettre en cache les flashcards générées
      cacheFlashcards(subjectName, chapterTitle, subChapter.title, cards);

      setFlashcards(cards);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Erreur lors du chargement des flashcards');
    } finally {
      setLoading(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setIsFlipped(false);
    }
  };

  const handleRestart = () => {
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const handleRegenerate = () => {
    // Invalider le cache et régénérer
    invalidateFlashcardCache(subjectName, chapterTitle, subChapter.title);
    setCurrentCardIndex(0);
    setIsFlipped(false);
    loadFlashcards(true); // Force la régénération
  };

  // État de chargement
  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 dark:border-indigo-400 mb-4"></div>
          <p className="text-lg text-gray-700 dark:text-gray-300">Génération des flashcards avec l'IA...</p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">Cela peut prendre quelques secondes</p>
        </div>
      </div>
    );
  }

  // État d'erreur
  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full">
          <div className="text-center">
            <div className="text-6xl mb-4">❌</div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Erreur</h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">{error}</p>
            <div className="flex gap-4">
              <button
                onClick={() => loadFlashcards()}
                className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Réessayer
              </button>
              <button
                onClick={onBack}
                className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-3 px-6 rounded-lg transition-colors"
              >
                Retour
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Pas de flashcards
  if (flashcards.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-8 max-w-md w-full text-center">
          <div className="text-6xl mb-4">🎴</div>
          <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Aucune flashcard</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6">Impossible de générer des flashcards pour ce sujet.</p>
          <button
            onClick={onBack}
            className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            Retour
          </button>
        </div>
      </div>
    );
  }

  const currentCard = flashcards[currentCardIndex];
  const isLastCard = currentCardIndex === flashcards.length - 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
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
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="mb-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-gray-800 dark:hover:text-white transition-colors mb-4"
          >
            <span>←</span>
            <span>Retour</span>
          </button>

          <div className="flex items-center justify-between">
            <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
              🎴 Flashcards : {subChapter.title}
            </h1>
            <div className="text-lg font-semibold text-indigo-600 dark:text-indigo-400">
              {currentCardIndex + 1}/{flashcards.length}
            </div>
          </div>
        </div>

        {/* Carte */}
        <div className="mb-8">
          <div
            className="relative w-full h-96 cursor-pointer perspective-1000"
            onClick={handleFlip}
          >
            <div
              className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
                isFlipped ? 'rotate-y-180' : ''
              }`}
            >
              {/* Recto */}
              <div className="absolute w-full h-full backface-hidden">
                <div className="w-full h-full bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center border-4 border-indigo-200 dark:border-indigo-900">
                  <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400 mb-4">
                    QUESTION
                  </div>
                  <div
                    className="text-2xl text-center text-gray-800 dark:text-white font-medium math-content"
                    dangerouslySetInnerHTML={{ __html: currentCard.question }}
                  />
                  <div className="mt-8 text-sm text-gray-500 dark:text-gray-400">
                    Cliquez pour voir la réponse
                  </div>
                </div>
              </div>

              {/* Verso */}
              <div className="absolute w-full h-full backface-hidden rotate-y-180">
                <div className="w-full h-full bg-gradient-to-br from-indigo-500 to-purple-600 dark:from-indigo-700 dark:to-purple-800 rounded-2xl shadow-2xl p-8 flex flex-col items-center justify-center border-4 border-indigo-300 dark:border-indigo-900">
                  <div className="text-sm font-semibold text-white mb-4">
                    RÉPONSE
                  </div>
                  <div
                    className="text-2xl text-center text-white font-medium math-content"
                    dangerouslySetInnerHTML={{ __html: currentCard.answer }}
                  />
                  <div className="mt-8 text-sm text-indigo-100">
                    Cliquez pour retourner
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={handlePrevious}
            disabled={currentCardIndex === 0}
            className="flex-1 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            ← Précédent
          </button>
          
          <button
            onClick={handleNext}
            disabled={isLastCard}
            className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Suivant →
          </button>
        </div>

        {/* Actions */}
        <div className="flex gap-4">
          <button
            onClick={handleRestart}
            className="flex-1 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            🔄 Recommencer
          </button>
          
          <button
            onClick={handleRegenerate}
            className="flex-1 bg-purple-500 hover:bg-purple-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
          >
            ✨ Nouvelles cartes
          </button>
        </div>

        {/* Astuce */}
        <div className="mt-8 bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded">
          <div className="flex items-start gap-3">
            <div className="text-2xl">💡</div>
            <div>
              <h4 className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                Astuce d'apprentissage
              </h4>
              <p className="text-sm text-blue-800 dark:text-blue-200">
                Pour bien mémoriser, essaie de répondre mentalement avant de retourner la carte. 
                Répète les cartes plusieurs fois jusqu'à ce que tu les maîtrises parfaitement !
              </p>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        
        .transform-style-3d {
          transform-style: preserve-3d;
        }
        
        .backface-hidden {
          backface-visibility: hidden;
        }
        
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  );
}


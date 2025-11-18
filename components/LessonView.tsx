import React from 'react';
import type { SubChapter } from '../types/curriculum';
import { BookOpen, Brain, Zap, ArrowRight, FileText } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface LessonViewProps {
  subChapter: SubChapter;
  chapterTitle: string;
  onStartQuiz?: () => void;
  onStartFlashcards?: () => void;
  onStartExercises?: () => void;
  onBack: () => void;
}

export const LessonView: React.FC<LessonViewProps> = ({
  subChapter,
  chapterTitle,
  onStartQuiz,
  onStartFlashcards,
  onStartExercises,
  onBack
}) => {
  // Fonction pour extraire le texte des children React (récursif)
  const extractText = (children: any): string => {
    if (typeof children === 'string') {
      return children;
    }
    if (Array.isArray(children)) {
      return children.map(extractText).join('');
    }
    if (children?.props?.children) {
      return extractText(children.props.children);
    }
    return '';
  };

  // Fonction pour convertir les puissances Unicode en HTML
  const convertMathNotation = (text: string): string => {
    // Convertir les puissances Unicode en <sup>
    const superscriptMap: { [key: string]: string } = {
      '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4',
      '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9',
      'ⁿ': 'n', 'ᵐ': 'm', '⁺': '+', '⁻': '-', 'ˣ': 'x'
    };

    let result = text;
    for (const [unicode, normal] of Object.entries(superscriptMap)) {
      result = result.replace(new RegExp(unicode, 'g'), `<sup>${normal}</sup>`);
    }

    return result;
  };

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
        .lesson-table {
          width: 100%;
          border-collapse: collapse;
          margin: 1.5rem 0;
          background: white;
          box-shadow: 0 1px 3px rgba(0,0,0,0.1);
          border-radius: 0.5rem;
          overflow: hidden;
        }
        .dark .lesson-table {
          background: rgb(30, 41, 59);
        }
        .lesson-table th {
          background: linear-gradient(to right, rgb(59, 130, 246), rgb(99, 102, 241));
          color: white;
          font-weight: 600;
          padding: 1rem;
          text-align: left;
          border-bottom: 2px solid rgb(37, 99, 235);
        }
        .lesson-table td {
          padding: 0.875rem 1rem;
          border-bottom: 1px solid rgb(226, 232, 240);
        }
        .dark .lesson-table td {
          border-bottom: 1px solid rgb(51, 65, 85);
        }
        .lesson-table tr:last-child td {
          border-bottom: none;
        }
        .lesson-table tr:hover {
          background: rgb(248, 250, 252);
        }
        .dark .lesson-table tr:hover {
          background: rgb(51, 65, 85);
        }
      `}</style>
      <div className="max-w-4xl mx-auto">
        {/* En-tête */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="mb-4 flex items-center gap-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Retour aux compétences
          </button>

          <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg">
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-8 h-8 text-blue-600" />
              <div>
                <p className="text-sm text-slate-600 dark:text-slate-400">{chapterTitle}</p>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">
                  {subChapter.icon} {subChapter.title}
                </h1>
              </div>
            </div>
            <p className="text-slate-600 dark:text-slate-300">
              {subChapter.description}
            </p>
          </div>
        </div>

        {/* Contenu de la leçon */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-lg mb-8 prose prose-slate dark:prose-invert max-w-none math-content">
          {subChapter.lessonContent ? (
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                h1: ({ children }) => (
                  <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-4 mt-8 first:mt-0">
                    {children}
                  </h1>
                ),
                h2: ({ children }) => (
                  <h2 className="text-2xl font-bold text-slate-800 dark:text-slate-100 mb-3 mt-6">
                    {children}
                  </h2>
                ),
                h3: ({ children }) => (
                  <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-200 mb-2 mt-4">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-slate-700 dark:text-slate-300 mb-4 leading-relaxed">
                    {children}
                  </p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside mb-4 space-y-2 text-slate-700 dark:text-slate-300">
                    {children}
                  </ul>
                ),
                li: ({ children }) => (
                  <li className="ml-4">
                    {children}
                  </li>
                ),
                strong: ({ children }) => (
                  <strong className="font-bold text-blue-600 dark:text-blue-400">
                    {children}
                  </strong>
                ),
                code: ({ children }) => (
                  <code className="bg-slate-100 dark:bg-slate-700 px-2 py-1 rounded text-sm font-mono">
                    {children}
                  </code>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-blue-500 pl-4 italic my-4 text-slate-600 dark:text-slate-400">
                    {children}
                  </blockquote>
                ),
                table: ({ children }) => (
                  <table className="lesson-table">
                    {children}
                  </table>
                ),
                thead: ({ children }) => (
                  <thead>{children}</thead>
                ),
                tbody: ({ children }) => (
                  <tbody>{children}</tbody>
                ),
                tr: ({ children }) => (
                  <tr>{children}</tr>
                ),
                th: ({ children }) => {
                  const textContent = extractText(children);
                  const htmlContent = convertMathNotation(textContent);

                  return (
                    <th dangerouslySetInnerHTML={{ __html: htmlContent }} />
                  );
                },
                td: ({ children }) => {
                  const textContent = extractText(children);
                  const htmlContent = convertMathNotation(textContent);

                  return (
                    <td
                      className="text-slate-700 dark:text-slate-300"
                      dangerouslySetInnerHTML={{ __html: htmlContent }}
                    />
                  );
                }
              }}
            >
              {subChapter.lessonContent}
            </ReactMarkdown>
          ) : (
            <div className="text-center py-12">
              <BookOpen className="w-16 h-16 text-slate-300 dark:text-slate-600 mx-auto mb-4" />
              <p className="text-slate-500 dark:text-slate-400">
                Le contenu de cette leçon sera bientôt disponible.
              </p>
            </div>
          )}
        </div>

        {/* Actions suivantes */}
        <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl p-8 shadow-lg text-white">
          <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <ArrowRight className="w-6 h-6" />
            Prêt à tester tes connaissances ?
          </h3>
          <p className="mb-6 text-blue-100">
            Maintenant que tu as lu la leçon, vérifie ta compréhension avec nos activités interactives !
          </p>

          <div className="grid md:grid-cols-2 gap-4">
            {subChapter.activities.includes('mcq') && onStartQuiz && (
              <button
                onClick={onStartQuiz}
                className="bg-white text-blue-600 hover:bg-blue-50 rounded-xl p-6 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Brain className="w-6 h-6 text-blue-600" />
                  </div>
                  <h4 className="text-xl font-bold">Quiz</h4>
                </div>
                <p className="text-sm text-slate-600">
                  Teste ta compréhension avec des questions interactives
                </p>
              </button>
            )}

            {subChapter.activities.includes('flashcard') && onStartFlashcards && (
              <button
                onClick={onStartFlashcards}
                className="bg-white text-indigo-600 hover:bg-indigo-50 rounded-xl p-6 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-indigo-100 flex items-center justify-center group-hover:bg-indigo-200 transition-colors">
                    <Zap className="w-6 h-6 text-indigo-600" />
                  </div>
                  <h4 className="text-xl font-bold">Flashcards</h4>
                </div>
                <p className="text-sm text-slate-600">
                  Mémorise les concepts clés avec des cartes mémoire
                </p>
              </button>
            )}

            {subChapter.activities.includes('exercise') && onStartExercises && (
              <button
                onClick={onStartExercises}
                className="bg-white text-green-600 hover:bg-green-50 rounded-xl p-6 transition-all duration-300 hover:scale-105 shadow-lg group"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <FileText className="w-6 h-6 text-green-600" />
                  </div>
                  <h4 className="text-xl font-bold">Exercices</h4>
                </div>
                <p className="text-sm text-slate-600">
                  Entraîne-toi avec des exercices d'application
                </p>
              </button>
            )}
          </div>
        </div>

        {/* Astuce */}
        <div className="mt-6 bg-yellow-50 dark:bg-yellow-900/20 rounded-xl p-6 border border-yellow-200 dark:border-yellow-800">
          <div className="flex items-start gap-3">
            <div className="flex-shrink-0 text-2xl">💡</div>
            <div>
              <h4 className="font-semibold text-yellow-900 dark:text-yellow-100 mb-1">
                Astuce d'apprentissage
              </h4>
              <p className="text-yellow-800 dark:text-yellow-200 text-sm">
                N'hésite pas à relire la leçon plusieurs fois. La répétition est la clé de la mémorisation !
                Si tu as des questions, utilise l'assistant IA en bas à droite de ton écran.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};


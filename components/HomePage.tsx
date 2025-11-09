import { allGrades, getGlobalStats } from '../data/curriculum/levels';
import type { Grade } from '../types/curriculum';

interface HomePageProps {
  onSelectGrade: (grade: Grade) => void;
}

export default function HomePage({ onSelectGrade }: HomePageProps) {
  const stats = getGlobalStats();

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-6">
            <div className="flex items-center justify-center space-x-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl shadow-lg">
              <span className="text-4xl">🎓</span>
              <h1 className="text-4xl md:text-5xl font-bold">E-Learning Collège</h1>
            </div>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 mb-4 font-medium">
            Tout ce dont vous avez besoin pour la réussite de votre année académique
          </p>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            Une plateforme d'apprentissage complète avec des leçons interactives, des quiz et une assistance IA pour vous accompagner dans votre parcours scolaire.
          </p>
        </div>

        {/* Statistiques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl mb-3">📚</div>
            <div className="text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">
              {stats.totalChapters}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Leçons disponibles
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl mb-3">🎯</div>
            <div className="text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">
              {stats.totalGrades}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Niveaux scolaires
            </div>
          </div>

          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 text-center transform hover:scale-105 transition-transform">
            <div className="text-5xl mb-3">📖</div>
            <div className="text-4xl font-bold text-green-600 dark:text-green-400 mb-2">
              {Math.round(stats.totalSubjects)}
            </div>
            <div className="text-gray-600 dark:text-gray-400 font-medium">
              Matières par niveau
            </div>
          </div>
        </div>

        {/* Fonctionnalités */}
        <div className="mb-16 max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            🚀 Fonctionnalités de la plateforme
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-700">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🤖</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    IA Intégrée
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Assistance intelligente pour vos devoirs et questions grâce à l'intelligence artificielle Gemini
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl p-6 border-2 border-purple-200 dark:border-purple-700">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">✅</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Quiz Interactifs
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Testez vos connaissances avec des quiz adaptés à chaque chapitre
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl p-6 border-2 border-green-200 dark:border-green-700">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">🎴</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Flashcards
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Mémorisez efficacement avec des cartes de révision interactives
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-700">
              <div className="flex items-start space-x-4">
                <div className="text-4xl">📊</div>
                <div>
                  <h3 className="text-xl font-bold text-gray-800 dark:text-white mb-2">
                    Suivi de Progression
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    Suivez vos progrès et identifiez vos points forts et axes d'amélioration
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Sélection de la classe */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-10 text-gray-800 dark:text-white">
            🎒 Choisissez votre classe
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {allGrades.map((grade) => {
              const gradeStats = stats.grades.find(g => g.id === grade.id);
              
              return (
                <button
                  key={grade.id}
                  onClick={() => onSelectGrade(grade.id)}
                  className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-8 text-center transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-500"
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform">
                    {grade.id === '6e' ? '📘' : grade.id === '5e' ? '📗' : '📙'}
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
                    {grade.name}
                  </h3>
                  
                  <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                    {grade.description}
                  </p>
                  
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center justify-center space-x-2 text-blue-600 dark:text-blue-400">
                      <span>📚</span>
                      <span className="font-semibold">{gradeStats?.subjectCount} matières</span>
                    </div>
                    <div className="flex items-center justify-center space-x-2 text-purple-600 dark:text-purple-400">
                      <span>📖</span>
                      <span className="font-semibold">{gradeStats?.chapterCount} chapitres</span>
                    </div>
                  </div>
                  
                  <div className="mt-6 inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Commencer</span>
                    <span>→</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Footer */}
        <div className="mt-16 text-center text-gray-600 dark:text-gray-400">
          <p className="text-sm">
            💡 Plateforme conçue pour accompagner les élèves du collège dans leur réussite scolaire
          </p>
        </div>
      </div>
    </div>
  );
}


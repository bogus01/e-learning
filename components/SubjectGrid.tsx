import type { SubjectWithChapters } from '../data/curriculum/levels';

interface SubjectGridProps {
  gradeName: string;
  subjects: SubjectWithChapters[];
  onSelectSubject: (subjectId: string) => void;
  onBack: () => void;
}

export default function SubjectGrid({ gradeName, subjects, onSelectSubject, onBack }: SubjectGridProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900">
      <div className="container mx-auto px-4 py-8">
        {/* Header avec bouton retour */}
        <div className="mb-8">
          <button
            onClick={onBack}
            className="inline-flex items-center space-x-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors mb-4"
          >
            <span>←</span>
            <span>Retour à l'accueil</span>
          </button>
          
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-2">
            {gradeName}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Sélectionnez une matière pour accéder aux chapitres
          </p>
        </div>

        {/* Grille des matières */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {subjects.map((subject) => (
            <button
              key={subject.id}
              onClick={() => onSelectSubject(subject.id)}
              className="group bg-white dark:bg-gray-800 rounded-2xl shadow-lg hover:shadow-2xl p-6 text-left transform hover:scale-105 transition-all duration-300 border-2 border-transparent hover:border-blue-500"
            >
              {/* En-tête avec icône et gradient */}
              <div className={`bg-gradient-to-r ${subject.color} rounded-xl p-4 mb-4`}>
                <div className="flex items-center justify-between">
                  <span className="text-5xl">{subject.icon}</span>
                  <div className="bg-white/20 backdrop-blur-sm rounded-lg px-3 py-1">
                    <span className="text-white font-semibold text-sm">
                      {subject.chapters.length} chapitres
                    </span>
                  </div>
                </div>
              </div>

              {/* Contenu */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {subject.name}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                  {subject.description}
                </p>

                {/* Statistiques */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-700">
                  <div className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    <span>📖</span>
                    <span>{subject.chapters.length} leçons</span>
                  </div>
                  
                  <div className="inline-flex items-center space-x-2 text-blue-600 dark:text-blue-400 font-semibold group-hover:translate-x-2 transition-transform">
                    <span>Voir</span>
                    <span>→</span>
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Message si aucune matière */}
        {subjects.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">📚</div>
            <p className="text-xl text-gray-600 dark:text-gray-400">
              Aucune matière disponible pour ce niveau
            </p>
          </div>
        )}
      </div>
    </div>
  );
}


import React, { useState, useEffect } from 'react';
import HomePage from './components/HomePage';
import SubjectGrid from './components/SubjectGrid';
import { ChapterList } from './components/ChapterList';
import { SubChapterList } from './components/SubChapterList';
import { LessonView } from './components/LessonView';
import QuizView from './components/QuizView';
import GeographyMultipleChoice from './components/GeographyMultipleChoice';
import FlashcardView from './components/FlashcardView';
import GeographyFlashcard from './components/GeographyFlashcard';
import { ExerciseView } from './components/ExerciseView';
import { AIAssistant } from './components/AIAssistant';
import type { Grade, Chapter, SubChapter } from './types/curriculum';
import { getGradeById } from './data/curriculum/levels';
import { subjects } from './data/curriculum/subjects';

type AppView =
  | { type: 'home' }
  | { type: 'grade-subjects'; gradeId: Grade }
  | { type: 'subject-chapters'; gradeId: Grade; subjectId: string }
  | { type: 'subchapter-list'; gradeId: Grade; subjectId: string; chapterId: string }
  | { type: 'lesson'; gradeId: Grade; subjectId: string; chapterId: string; subChapterId: string }
  | { type: 'quiz'; gradeId: Grade; subjectId: string; chapterId: string; subChapterId: string }
  | { type: 'flashcard'; gradeId: Grade; subjectId: string; chapterId: string; subChapterId: string }
  | { type: 'exercise'; gradeId: Grade; subjectId: string; chapterId: string; subChapterId: string };

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>({ type: 'home' });

  // Scroll to top whenever the view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const handleSelectGrade = (gradeId: Grade) => {
    setCurrentView({ type: 'grade-subjects', gradeId });
  };

  const handleSelectSubject = (gradeId: Grade, subjectId: string) => {
    setCurrentView({ type: 'subject-chapters', gradeId, subjectId });
  };

  const handleSelectChapter = (gradeId: Grade, subjectId: string, chapterId: string, chapter: Chapter) => {
    console.log('handleSelectChapter appelé:', { chapterId, hasSubChapters: !!chapter.subChapters, subChaptersLength: chapter.subChapters?.length });

    // Si le chapitre a des sous-chapitres, afficher la liste des sous-chapitres
    if (chapter.subChapters && chapter.subChapters.length > 0) {
      console.log('Navigation vers subchapter-list');
      setCurrentView({ type: 'subchapter-list', gradeId, subjectId, chapterId });
    } else {
      // Sinon, aller directement aux activités (à implémenter)
      console.log('Chapitre sans sous-chapitres:', chapterId);
      // TODO: Implémenter la navigation vers les quiz/flashcards du chapitre
    }
  };

  const handleSelectSubChapter = (
    gradeId: Grade,
    subjectId: string,
    chapterId: string,
    subChapterId: string
  ) => {
    // Par défaut, afficher la leçon
    setCurrentView({ type: 'lesson', gradeId, subjectId, chapterId, subChapterId });
  };

  const renderContent = () => {
    switch (currentView.type) {
      case 'home':
        return <HomePage onSelectGrade={handleSelectGrade} />;

      case 'grade-subjects': {
        const grade = getGradeById(currentView.gradeId);
        if (!grade) return <HomePage onSelectGrade={handleSelectGrade} />;

        return (
          <SubjectGrid
            gradeName={grade.name}
            subjects={grade.subjects}
            onSelectSubject={(subjectId) => handleSelectSubject(currentView.gradeId, subjectId)}
            onBack={() => setCurrentView({ type: 'home' })}
          />
        );
      }

      case 'subject-chapters': {
        const grade = getGradeById(currentView.gradeId);
        if (!grade) return <HomePage onSelectGrade={handleSelectGrade} />;

        const subject = grade.subjects.find(s => s.id === currentView.subjectId);
        if (!subject) {
          return (
            <SubjectGrid
              gradeName={grade.name}
              subjects={grade.subjects}
              onSelectSubject={(subjectId) => handleSelectSubject(currentView.gradeId, subjectId)}
              onBack={() => setCurrentView({ type: 'home' })}
            />
          );
        }

        return (
          <>
            <ChapterList
              title={subject.name}
              subtitle={grade.name}
              chapters={subject.chapters}
              onSelectChapter={(chapterId) => {
                const chapter = subject.chapters.find(c => c.id === chapterId);
                if (chapter) {
                  handleSelectChapter(currentView.gradeId, currentView.subjectId, chapterId, chapter);
                }
              }}
              onBack={() => setCurrentView({ type: 'grade-subjects', gradeId: currentView.gradeId })}
            />
            {subject.hasAIAssistant && (
              <AIAssistant
                subjectName={subject.name}
                subjectId={subject.id}
              />
            )}
          </>
        );
      }

      case 'subchapter-list': {
        const grade = getGradeById(currentView.gradeId);
        if (!grade) return <HomePage onSelectGrade={handleSelectGrade} />;

        const subject = grade.subjects.find(s => s.id === currentView.subjectId);
        const chapter = subject?.chapters.find(c => c.id === currentView.chapterId);

        if (!subject || !chapter || !chapter.subChapters) {
          return <HomePage onSelectGrade={handleSelectGrade} />;
        }

        return (
          <>
            <SubChapterList
              chapterTitle={chapter.title}
              subChapters={chapter.subChapters}
              onSelectSubChapter={(subChapterId) =>
                handleSelectSubChapter(
                  currentView.gradeId,
                  currentView.subjectId,
                  currentView.chapterId,
                  subChapterId
                )
              }
              onBack={() =>
                setCurrentView({
                  type: 'subject-chapters',
                  gradeId: currentView.gradeId,
                  subjectId: currentView.subjectId
                })
              }
            />
            {subject.hasAIAssistant && (
              <AIAssistant
                subjectName={subject.name}
                subjectId={subject.id}
                chapterTitle={chapter.title}
              />
            )}
          </>
        );
      }

      case 'lesson': {
        const grade = getGradeById(currentView.gradeId);
        if (!grade) return <HomePage onSelectGrade={handleSelectGrade} />;

        const subject = grade.subjects.find(s => s.id === currentView.subjectId);
        const chapter = subject?.chapters.find(c => c.id === currentView.chapterId);
        const subChapter = chapter?.subChapters?.find(sc => sc.id === currentView.subChapterId);

        if (!subject || !chapter || !subChapter) {
          return <HomePage onSelectGrade={handleSelectGrade} />;
        }

        return (
          <>
            <LessonView
              subChapter={subChapter}
              chapterTitle={chapter.title}
              onStartQuiz={
                subChapter.activities.includes('mcq')
                  ? () =>
                      setCurrentView({
                        type: 'quiz',
                        gradeId: currentView.gradeId,
                        subjectId: currentView.subjectId,
                        chapterId: currentView.chapterId,
                        subChapterId: currentView.subChapterId
                      })
                  : undefined
              }
              onStartFlashcards={
                subChapter.activities.includes('flashcard')
                  ? () =>
                      setCurrentView({
                        type: 'flashcard',
                        gradeId: currentView.gradeId,
                        subjectId: currentView.subjectId,
                        chapterId: currentView.chapterId,
                        subChapterId: currentView.subChapterId
                      })
                  : undefined
              }
              onStartExercises={
                subChapter.activities.includes('exercise')
                  ? () =>
                      setCurrentView({
                        type: 'exercise',
                        gradeId: currentView.gradeId,
                        subjectId: currentView.subjectId,
                        chapterId: currentView.chapterId,
                        subChapterId: currentView.subChapterId
                      })
                  : undefined
              }
              onBack={() =>
                setCurrentView({
                  type: 'subchapter-list',
                  gradeId: currentView.gradeId,
                  subjectId: currentView.subjectId,
                  chapterId: currentView.chapterId
                })
              }
            />
            {subject.hasAIAssistant && (
              <AIAssistant
                subjectName={subject.name}
                subjectId={subject.id}
                chapterTitle={chapter.title}
                subChapterTitle={subChapter.title}
              />
            )}
          </>
        );
      }

      case 'quiz': {
        const grade = getGradeById(currentView.gradeId);
        if (!grade) return <HomePage onSelectGrade={handleSelectGrade} />;

        const subject = grade.subjects.find(s => s.id === currentView.subjectId);
        const chapter = subject?.chapters.find(c => c.id === currentView.chapterId);
        const subChapter = chapter?.subChapters?.find(sc => sc.id === currentView.subChapterId);

        if (!subject || !chapter || !subChapter) {
          return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-slate-700 dark:text-slate-300">Erreur : Contenu introuvable</p>
              </div>
            </div>
          );
        }

        // Trouver les métadonnées du subject pour hasAIAssistant
        const subjectConfig = subjects.find(s => s.id === currentView.subjectId);

        // Utiliser GeographyMultipleChoice pour la géographie, QuizView pour les autres
        const isGeography = currentView.subjectId === 'geography';

        // Déterminer la catégorie de quiz selon le sous-chapitre
        let quizCategory = 'migrations';
        if (isGeography && subChapter.id) {
          // Mapper les IDs de sous-chapitres aux catégories de quiz
          const categoryMap: { [key: string]: string } = {
            'geo-4e-migrations-definitions': 'migrations-definitions',
            'geo-4e-migrations-travail': 'migrations-travail',
            'geo-4e-migrations-fuir': 'migrations-fuir',
            'geo-4e-migrations-inegalites': 'migrations-inegalites',
            'geo-4e-migrations-effets': 'migrations-effets',
            'geo-4e-migrations-recapitulatif': 'migrations-recapitulatif',
            'geo-4e-migrations-monde-migrants': 'migrations-monde-migrants'
          };
          quizCategory = categoryMap[subChapter.id] || 'migrations';
        }

        return (
          <>
            {isGeography ? (
              <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
                <GeographyMultipleChoice
                  category={quizCategory}
                  onBack={() => setCurrentView({
                    type: 'lesson',
                    gradeId: currentView.gradeId,
                    subjectId: currentView.subjectId,
                    chapterId: currentView.chapterId,
                    subChapterId: currentView.subChapterId
                  })}
                />
              </div>
            ) : (
              <QuizView
                subjectName={subject.name}
                chapterTitle={chapter.title}
                subChapter={subChapter}
                onBack={() => setCurrentView({
                  type: 'lesson',
                  gradeId: currentView.gradeId,
                  subjectId: currentView.subjectId,
                  chapterId: currentView.chapterId,
                  subChapterId: currentView.subChapterId
                })}
              />
            )}
            {subjectConfig?.hasAIAssistant && (
              <AIAssistant
                subjectName={subject.name}
                subjectId={currentView.subjectId}
                chapterTitle={chapter.title}
                subChapterTitle={subChapter.title}
              />
            )}
          </>
        );
      }

      case 'flashcard': {
        const grade = getGradeById(currentView.gradeId);
        if (!grade) return <HomePage onSelectGrade={handleSelectGrade} />;

        const subject = grade.subjects.find(s => s.id === currentView.subjectId);
        const chapter = subject?.chapters.find(c => c.id === currentView.chapterId);
        const subChapter = chapter?.subChapters?.find(sc => sc.id === currentView.subChapterId);

        if (!subject || !chapter || !subChapter) {
          return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-slate-700 dark:text-slate-300">Erreur : Contenu introuvable</p>
              </div>
            </div>
          );
        }

        // Trouver les métadonnées du subject pour hasAIAssistant
        const subjectConfig = subjects.find(s => s.id === currentView.subjectId);

        // Utiliser GeographyFlashcard pour la géographie, FlashcardView pour les autres
        const isGeography = currentView.subjectId === 'geography';

        // Déterminer la catégorie de flashcards selon le sous-chapitre
        let flashcardCategory = 'migrations';
        if (isGeography && subChapter.id) {
          // Mapper les IDs de sous-chapitres aux catégories de flashcards
          const categoryMap: { [key: string]: string } = {
            'geo-4e-migrations-definitions': 'migrations-definitions',
            'geo-4e-migrations-travail': 'migrations-travail',
            'geo-4e-migrations-fuir': 'migrations-fuir',
            'geo-4e-migrations-inegalites': 'migrations-inegalites',
            'geo-4e-migrations-effets': 'migrations-effets',
            'geo-4e-migrations-recapitulatif': 'migrations-recapitulatif',
            'geo-4e-migrations-monde-migrants': 'migrations-monde-migrants'
          };
          flashcardCategory = categoryMap[subChapter.id] || 'migrations';
        }

        return (
          <>
            {isGeography ? (
              <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
                <GeographyFlashcard
                  category={flashcardCategory}
                  onBack={() => setCurrentView({
                    type: 'lesson',
                    gradeId: currentView.gradeId,
                    subjectId: currentView.subjectId,
                    chapterId: currentView.chapterId,
                    subChapterId: currentView.subChapterId
                  })}
                />
              </div>
            ) : (
              <FlashcardView
                subjectName={subject.name}
                chapterTitle={chapter.title}
                subChapter={subChapter}
                onBack={() => setCurrentView({
                  type: 'lesson',
                  gradeId: currentView.gradeId,
                  subjectId: currentView.subjectId,
                  chapterId: currentView.chapterId,
                  subChapterId: currentView.subChapterId
                })}
              />
            )}
            {subjectConfig?.hasAIAssistant && (
              <AIAssistant
                subjectName={subject.name}
                subjectId={currentView.subjectId}
                chapterTitle={chapter.title}
                subChapterTitle={subChapter.title}
              />
            )}
          </>
        );
      }

      case 'exercise': {
        const grade = getGradeById(currentView.gradeId);
        if (!grade) return <HomePage onSelectGrade={handleSelectGrade} />;

        const subject = grade.subjects.find(s => s.id === currentView.subjectId);
        const chapter = subject?.chapters.find(c => c.id === currentView.chapterId);
        const subChapter = chapter?.subChapters?.find(sc => sc.id === currentView.subChapterId);

        if (!subject || !chapter || !subChapter) {
          return (
            <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 dark:from-slate-900 dark:to-slate-800 p-6 flex items-center justify-center">
              <div className="text-center">
                <p className="text-xl text-slate-700 dark:text-slate-300">Erreur : Contenu introuvable</p>
              </div>
            </div>
          );
        }

        // Trouver les métadonnées du subject pour hasAIAssistant
        const subjectConfig = subjects.find(s => s.id === currentView.subjectId);

        return (
          <>
            <ExerciseView
              subjectName={subject.name}
              chapterTitle={chapter.title}
              subChapter={subChapter}
              onBack={() => setCurrentView({
                type: 'lesson',
                gradeId: currentView.gradeId,
                subjectId: currentView.subjectId,
                chapterId: currentView.chapterId,
                subChapterId: currentView.subChapterId
              })}
            />
            {subjectConfig?.hasAIAssistant && (
              <AIAssistant
                subjectName={subject.name}
                subjectId={currentView.subjectId}
                chapterTitle={chapter.title}
                subChapterTitle={subChapter.title}
              />
            )}
          </>
        );
      }

      default:
        return <HomePage onSelectGrade={handleSelectGrade} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
};

export default App;
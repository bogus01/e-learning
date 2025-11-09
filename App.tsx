import React, { useState } from 'react';
import HomePage from './components/HomePage';
import SubjectGrid from './components/SubjectGrid';
import { ChapterList } from './components/ChapterList';
import type { Grade } from './types/curriculum';
import { getGradeById } from './data/curriculum/levels';

type AppView =
  | { type: 'home' }
  | { type: 'grade-subjects'; gradeId: Grade }
  | { type: 'subject-chapters'; gradeId: Grade; subjectId: string };

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>({ type: 'home' });

  const handleSelectGrade = (gradeId: Grade) => {
    setCurrentView({ type: 'grade-subjects', gradeId });
  };

  const handleSelectSubject = (gradeId: Grade, subjectId: string) => {
    setCurrentView({ type: 'subject-chapters', gradeId, subjectId });
  };

  const handleSelectChapter = (chapterId: string) => {
    console.log('Chapitre sélectionné:', chapterId);
    // TODO: Implémenter la navigation vers les quiz/flashcards du chapitre
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
          <ChapterList
            level={`${subject.name} - ${grade.name}`}
            chapters={subject.chapters}
            onSelectChapter={handleSelectChapter}
            onBack={() => setCurrentView({ type: 'grade-subjects', gradeId: currentView.gradeId })}
          />
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
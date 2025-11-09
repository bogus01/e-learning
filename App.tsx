import React, { useState } from 'react';
import { SubjectSelector } from './components/SubjectSelector';
import { MathLevelSelector } from './components/MathLevelSelector';
import { ChapterList } from './components/ChapterList';
import { GeoHistorySelector } from './components/GeoHistorySelector';
import type { Subject, MathLevel } from './types/curriculum';
import { math6eConfig } from './data/curriculum/math6e';
import { math5eConfig } from './data/curriculum/math5e';
import { math4eConfig } from './data/curriculum/math4e';

type AppView =
  | { type: 'subject-selection' }
  | { type: 'math-level-selection' }
  | { type: 'math-chapter-list'; level: MathLevel }
  | { type: 'geo-history-selection' };

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<AppView>({ type: 'subject-selection' });

  const handleSelectSubject = (subject: Subject) => {
    if (subject === 'mathematics') {
      setCurrentView({ type: 'math-level-selection' });
    } else {
      setCurrentView({ type: 'geo-history-selection' });
    }
  };

  const handleSelectMathLevel = (level: MathLevel) => {
    setCurrentView({ type: 'math-chapter-list', level });
  };

  const handleSelectChapter = (chapterId: string) => {
    console.log('Chapitre sélectionné:', chapterId);
    // TODO: Implémenter la navigation vers les quiz/flashcards du chapitre
  };

  const handleSelectLesson = (lessonId: string) => {
    console.log('Leçon sélectionnée:', lessonId);
    // TODO: Implémenter la navigation vers les quiz/flashcards de la leçon
  };

  const renderContent = () => {
    switch (currentView.type) {
      case 'subject-selection':
        return <SubjectSelector onSelectSubject={handleSelectSubject} />;

      case 'math-level-selection':
        return (
          <MathLevelSelector
            onSelectLevel={handleSelectMathLevel}
            onBack={() => setCurrentView({ type: 'subject-selection' })}
          />
        );

      case 'math-chapter-list': {
        const levelConfig =
          currentView.level === '6e' ? math6eConfig :
          currentView.level === '5e' ? math5eConfig :
          math4eConfig;

        return (
          <ChapterList
            level={currentView.level}
            chapters={levelConfig.chapters}
            onSelectChapter={handleSelectChapter}
            onBack={() => setCurrentView({ type: 'math-level-selection' })}
          />
        );
      }

      case 'geo-history-selection':
        return (
          <GeoHistorySelector
            onSelectLesson={handleSelectLesson}
            onBack={() => setCurrentView({ type: 'subject-selection' })}
          />
        );

      default:
        return <SubjectSelector onSelectSubject={handleSelectSubject} />;
    }
  };

  return (
    <div className="min-h-screen">
      {renderContent()}
    </div>
  );
};

export default App;
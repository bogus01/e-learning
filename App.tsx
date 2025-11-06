import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import MultipleChoice from './components/MultipleChoice';
import Flashcard from './components/Flashcard';
import Challenge from './components/Challenge';
import Progress from './components/Progress';
import PrimeFactorization from './components/PrimeFactorization';
import GeographyMultipleChoice from './components/GeographyMultipleChoice';
import GeographyFlashcard from './components/GeographyFlashcard';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('home');

  const navigate = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'mcq':
        return <MultipleChoice onBack={() => navigate('home')} />;
      case 'flashcard':
        return <Flashcard onBack={() => navigate('home')} />;
      case 'challenge':
        return <Challenge onBack={() => navigate('home')} />;
      case 'prime-factorization':
        return <PrimeFactorization onBack={() => navigate('home')} />;
      case 'progress':
        return <Progress onBack={() => navigate('home')} />;
      case 'geography-mcq':
        return <GeographyMultipleChoice onBack={() => navigate('home')} />;
      case 'geography-flashcard':
        return <GeographyFlashcard onBack={() => navigate('home')} />;
      case 'home':
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header onNavigate={navigate} />
      <main className="flex-grow container mx-auto p-4 sm:p-6 md:p-8 flex flex-col items-center justify-center">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
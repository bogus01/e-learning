
import React, { useState, useEffect } from 'react';
import type { ProgressData } from '../types';
import { ArrowLeftIcon } from './icons/ArrowLeftIcon';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

interface ProgressProps {
  onBack: () => void;
}

const Progress: React.FC<ProgressProps> = ({ onBack }) => {
  const [progress, setProgress] = useState<ProgressData | null>(null);

  useEffect(() => {
    try {
      const savedProgress = localStorage.getItem('math_progress');
      if (savedProgress) {
        setProgress(JSON.parse(savedProgress));
      } else {
        setProgress({ totalAnswered: 0, totalCorrect: 0, challengeHistory: [] });
      }
    } catch (error) {
      console.error("Erreur lors de la lecture de la progression:", error);
      setProgress({ totalAnswered: 0, totalCorrect: 0, challengeHistory: [] });
    }
  }, []);

  const resetProgress = () => {
    if (window.confirm("Êtes-vous sûr de vouloir réinitialiser toute votre progression ? Cette action est irréversible.")) {
      localStorage.removeItem('math_progress');
      setProgress({ totalAnswered: 0, totalCorrect: 0, challengeHistory: [] });
    }
  };

  if (!progress) {
    return <div>Chargement de la progression...</div>;
  }
  
  const accuracy = progress.totalAnswered > 0 ? (progress.totalCorrect / progress.totalAnswered) * 100 : 0;

  const chartData = progress.challengeHistory.slice(-10).map((challenge, index) => ({
      name: `Défi ${index + 1}`,
      score: challenge.score,
      total: challenge.total,
  }));

  return (
    <div className="w-full max-w-4xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold">Ma Progression</h2>
        <button onClick={onBack} className="flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
          <ArrowLeftIcon className="w-4 h-4 mr-2"/>
          Retour
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 text-center">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Précision Globale</h3>
            <p className="text-4xl font-bold mt-2 text-blue-500">{accuracy.toFixed(1)}%</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Bonnes Réponses</h3>
            <p className="text-4xl font-bold mt-2 text-green-500">{progress.totalCorrect}</p>
        </div>
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold text-slate-500 dark:text-slate-400">Total Répondu</h3>
            <p className="text-4xl font-bold mt-2 text-slate-600 dark:text-slate-300">{progress.totalAnswered}</p>
        </div>
      </div>

      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold mb-4">Historique des Défis</h3>
        {progress.challengeHistory.length > 0 ? (
          <div style={{ width: '100%', height: 300 }}>
            <ResponsiveContainer>
              <BarChart data={chartData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip contentStyle={{ backgroundColor: '#1e293b', border: 'none', color: '#cbd5e1' }}/>
                <Legend />
                <Bar dataKey="score" fill="#3b82f6" name="Score" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        ) : (
          <p className="text-slate-500 dark:text-slate-400 text-center py-8">Aucun défi terminé pour le moment.</p>
        )}
      </div>

      <div className="mt-8 text-center">
        <button 
          onClick={resetProgress}
          className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition-colors"
        >
          Réinitialiser la progression
        </button>
      </div>
    </div>
  );
};

export default Progress;

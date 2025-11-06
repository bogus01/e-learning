import React from 'react';
import { Spinner } from './Spinner';
import { XIcon } from './icons/XIcon';

interface HintModalProps {
  isOpen: boolean;
  onClose: () => void;
  isLoading: boolean;
  explanation: string;
}

const HintModal: React.FC<HintModalProps> = ({ isOpen, onClose, isLoading, explanation }) => {
  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4"
      onClick={onClose}
    >
      <div 
        className="bg-white dark:bg-slate-800 rounded-lg shadow-xl w-full max-w-lg p-6 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button 
          onClick={onClose} 
          className="absolute top-3 right-3 text-slate-500 hover:text-slate-800 dark:hover:text-slate-200 transition-colors"
          aria-label="Fermer"
        >
          <XIcon className="w-6 h-6" />
        </button>
        <h3 className="text-xl font-bold mb-4">Explication</h3>
        {isLoading ? (
          <div className="flex flex-col items-center justify-center min-h-[150px]">
            <Spinner />
            <p className="mt-4 text-slate-600 dark:text-slate-300">Génération de l'explication...</p>
          </div>
        ) : (
          <div className="text-slate-700 dark:text-slate-200 whitespace-pre-wrap max-h-[60vh] overflow-y-auto">
            {explanation}
          </div>
        )}
      </div>
    </div>
  );
};

export default HintModal;
import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { callOpenAI } from '../lib/openai';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: Date;
}

interface AIAssistantProps {
  subjectName: string;
  subjectId: string;
  chapterTitle?: string;
  subChapterTitle?: string;
}

export const AIAssistant: React.FC<AIAssistantProps> = ({
  subjectName,
  subjectId,
  chapterTitle,
  subChapterTitle
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Auto-scroll vers le bas quand de nouveaux messages arrivent
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus sur l'input quand le chat s'ouvre
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  // Message de bienvenue initial
  useEffect(() => {
    if (messages.length === 0) {
      const welcomeMessage: Message = {
        id: 'welcome',
        role: 'assistant',
        content: `Bonjour ! Je suis ton assistant en ${subjectName}. ${
          chapterTitle ? `Nous travaillons sur le chapitre "${chapterTitle}".` : ''
        } Comment puis-je t'aider aujourd'hui ?`,
        timestamp: new Date()
      };
      setMessages([welcomeMessage]);
    }
  }, [subjectName, chapterTitle]);

  const handleSendMessage = async () => {
    if (!inputValue.trim() || isLoading) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: inputValue.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsLoading(true);

    try {
      // En développement : appel direct à OpenAI
      // En production : appel au backend Vercel
      const isDev = import.meta.env.DEV;

      let assistantContent: string;

      if (isDev) {
        // Mode développement : appel direct à OpenAI
        const apiKey = import.meta.env.VITE_OPENAI_API_KEY;

        if (!apiKey) {
          throw new Error('Clé API OpenAI non configurée. Ajoute VITE_OPENAI_API_KEY dans .env');
        }

        // Construire le prompt système
        const systemPrompt = `Tu es un assistant pédagogique bienveillant pour des élèves de collège français.
Tu aides en ${subjectName}${chapterTitle ? `, chapitre "${chapterTitle}"` : ''}${subChapterTitle ? `, sous-chapitre "${subChapterTitle}"` : ''}.

Règles importantes :
- Utilise un langage simple et encourageant
- Ne donne JAMAIS les réponses directement aux exercices
- Guide l'élève pour qu'il trouve lui-même
- Donne des exemples concrets
- Utilise des émojis pour rendre l'échange plus sympathique
- Reste dans le contexte du chapitre étudié`;

        const openAIMessages = [
          { role: 'system' as const, content: systemPrompt },
          ...messages.filter(m => m.id !== 'welcome').map(m => ({
            role: m.role as 'user' | 'assistant',
            content: m.content
          })),
          { role: 'user' as const, content: userMessage.content }
        ];

        assistantContent = await callOpenAI(openAIMessages, apiKey, 'gpt-4o-mini', 0.7);
      } else {
        // Mode production : appel au backend Vercel
        const response = await fetch('/api/ai-assistant', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            messages: [...messages, userMessage].map(m => ({
              role: m.role,
              content: m.content
            })),
            subject: subjectName,
            chapter: chapterTitle,
            subChapter: subChapterTitle
          })
        });

        if (!response.ok) {
          const errorData = await response.json().catch(() => ({}));
          console.error('Erreur API:', errorData);

          // Messages d'erreur personnalisés selon le code
          let errorText = 'Désolé, je rencontre un problème technique. Peux-tu réessayer ?';

          if (response.status === 429) {
            errorText = 'Trop de messages envoyés. Attends quelques secondes avant de réessayer. ⏱️';
          } else if (response.status === 500) {
            errorText = 'Le service rencontre des difficultés. Réessaye dans un instant. 🔧';
          }

          throw new Error(errorText);
        }

        const data = await response.json();
        assistantContent = data.message;
      }

      const assistantMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: assistantContent,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Erreur:', error);
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        role: 'assistant',
        content: error instanceof Error ? error.message : 'Désolé, je rencontre un problème technique. Peux-tu réessayer ?',
        timestamp: new Date()
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Bouton flottant */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 w-14 h-14 bg-gradient-to-r from-blue-500 to-indigo-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group hover:scale-110 z-50"
          aria-label="Ouvrir l'assistant IA"
        >
          <MessageCircle className="w-6 h-6" />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse"></span>
        </button>
      )}

      {/* Fenêtre de chat */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 w-96 h-[600px] bg-white dark:bg-slate-800 rounded-2xl shadow-2xl flex flex-col z-50 border border-slate-200 dark:border-slate-700">
          {/* En-tête */}
          <div className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <MessageCircle className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-semibold">Assistant {subjectName}</h3>
                <p className="text-xs text-white/80">En ligne</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-white/20 p-2 rounded-lg transition-colors"
              aria-label="Fermer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-2 ${
                    message.role === 'user'
                      ? 'bg-blue-500 text-white rounded-br-sm'
                      : 'bg-slate-100 dark:bg-slate-700 text-slate-900 dark:text-white rounded-bl-sm'
                  }`}
                >
                  <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                  <p className={`text-xs mt-1 ${
                    message.role === 'user' ? 'text-blue-100' : 'text-slate-500 dark:text-slate-400'
                  }`}>
                    {message.timestamp.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-slate-100 dark:bg-slate-700 rounded-2xl rounded-bl-sm px-4 py-3">
                  <Loader2 className="w-5 h-5 animate-spin text-blue-500" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Zone de saisie */}
          <div className="p-4 border-t border-slate-200 dark:border-slate-700">
            <div className="flex gap-2">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Pose ta question..."
                className="flex-1 px-4 py-2 rounded-xl border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                disabled={isLoading}
              />
              <button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isLoading}
                className="bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300 dark:disabled:bg-slate-600 text-white p-2 rounded-xl transition-colors disabled:cursor-not-allowed"
                aria-label="Envoyer"
              >
                <Send className="w-5 h-5" />
              </button>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2 text-center">
              Propulsé par GPT-4o-mini
            </p>
          </div>
        </div>
      )}
    </>
  );
};


import { GoogleGenAI, Type } from "@google/genai";
import type { MCQ, Flashcard } from '../types';

// Initialisation lazy de l'API - seulement quand nécessaire
let ai: GoogleGenAI | null = null;

const getAI = () => {
  if (!ai) {
    const apiKey = process.env.API_KEY || import.meta.env.VITE_GEMINI_API_KEY;
    if (!apiKey) {
      throw new Error("Clé API Gemini non configurée. Le module mathématiques nécessite une clé API.");
    }
    ai = new GoogleGenAI({ apiKey });
  }
  return ai;
};

const mcqSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: { type: Type.STRING },
      options: {
        type: Type.ARRAY,
        items: { type: Type.STRING },
      },
      reponse: { type: Type.STRING },
    },
    required: ["question", "options", "reponse"],
  },
};

const flashcardSchema = {
  type: Type.ARRAY,
  items: {
    type: Type.OBJECT,
    properties: {
      question: { type: Type.STRING },
      reponse: { type: Type.STRING },
    },
    required: ["question", "reponse"],
  },
};

const createMCQPrompt = (count: number) => `
Génère ${count} questions uniques à choix multiples (QCM) pour des élèves de niveau collège (11-14 ans) sur le thème des diviseurs, des multiples, des nombres premiers et des nombres composés.
Chaque question doit avoir exactement quatre options de réponse, dont une seule est correcte. Les options doivent être plausibles pour tester la compréhension.
La sortie doit être un objet JSON valide qui respecte le schéma fourni.
`;

const createFlashcardPrompt = (count: number) => `
Génère ${count} "cartes mémoire" (flashcards) uniques pour des élèves de niveau collège (11-14 ans) sur le thème des diviseurs, des multiples, des nombres premiers et des nombres composés.
Chaque carte doit avoir une question (recto) et une réponse concise (verso).
La sortie doit être un objet JSON valide qui respecte le schéma fourni.
`;

export const generateMCQs = async (count: number = 10): Promise<MCQ[]> => {
  try {
    const aiInstance = getAI();
    const response = await aiInstance.models.generateContent({
      model: "gemini-2.5-flash",
      contents: createMCQPrompt(count),
      config: {
        responseMimeType: "application/json",
        responseSchema: mcqSchema,
      },
    });
    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Erreur lors de la génération des QCM :", error);
    throw new Error("Impossible de générer les questions. Veuillez réessayer.");
  }
};

export const generateFlashcards = async (count: number = 10): Promise<Flashcard[]> => {
  try {
    const aiInstance = getAI();
    const response = await aiInstance.models.generateContent({
      model: "gemini-2.5-flash",
      contents: createFlashcardPrompt(count),
      config: {
        responseMimeType: "application/json",
        responseSchema: flashcardSchema,
      },
    });
    const jsonText = response.text.trim();
    return JSON.parse(jsonText);
  } catch (error) {
    console.error("Erreur lors de la génération des cartes mémoire :", error);
    throw new Error("Impossible de générer les cartes. Veuillez réessayer.");
  }
};

export const generateExplanation = async (question: string): Promise<string> => {
  try {
    const aiInstance = getAI();
    const response = await aiInstance.models.generateContent({
      model: "gemini-2.5-flash",
      contents: `Explique le concept mathématique derrière la question suivante de manière simple et concise pour un élève de collège (11-14 ans). N'utilise pas de jargon complexe. La question est : "${question}"`,
    });
    return response.text;
  } catch (error) {
    console.error("Erreur lors de la génération de l'explication :", error);
    throw new Error("Impossible de générer l'explication. Veuillez réessayer.");
  }
};
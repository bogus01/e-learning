export interface Physique4eAirMCQ {
  question: string;
  options: string[];
  reponse: string;
  category: string;
}

export interface Physique4eAirFlashcard {
  question: string;
  reponse: string;
  category: string;
}

// Questions à choix multiples sur l'air (Physique-Chimie 4ème)
export const physique4eAirMCQs: Physique4eAirMCQ[] = [
  // Composition de l'air
  {
    question: "Quel est le pourcentage de diazote (N₂) dans l'air ?",
    options: ["21%", "50%", "78%", "1%"],
    reponse: "78%",
    category: "composition"
  },
  {
    question: "Quel est le pourcentage de dioxygène (O₂) dans l'air ?",
    options: ["78%", "21%", "50%", "10%"],
    reponse: "21%",
    category: "composition"
  },
  {
    question: "Quelle est la formule chimique du diazote ?",
    options: ["N", "N₂", "NO₂", "NH₃"],
    reponse: "N₂",
    category: "composition"
  },
  {
    question: "Quelle est la formule chimique du dioxygène ?",
    options: ["O", "O₂", "O₃", "CO₂"],
    reponse: "O₂",
    category: "composition"
  },
  {
    question: "L'air est :",
    options: ["Un corps pur simple", "Un corps pur composé", "Un mélange de gaz", "Un atome"],
    reponse: "Un mélange de gaz",
    category: "composition"
  },
  {
    question: "Quel gaz est indispensable à la respiration ?",
    options: ["Le diazote", "Le dioxygène", "L'argon", "Le dioxyde de carbone"],
    reponse: "Le dioxygène",
    category: "composition"
  },
  {
    question: "Combien d'atomes contient la molécule de dioxygène (O₂) ?",
    options: ["1 atome", "2 atomes", "3 atomes", "4 atomes"],
    reponse: "2 atomes",
    category: "composition"
  },
  {
    question: "La molécule d'eau H₂O contient :",
    options: [
      "2 atomes d'hydrogène et 1 atome d'oxygène",
      "1 atome d'hydrogène et 2 atomes d'oxygène",
      "3 atomes d'hydrogène",
      "2 atomes d'oxygène seulement"
    ],
    reponse: "2 atomes d'hydrogène et 1 atome d'oxygène",
    category: "composition"
  },
  {
    question: "Le dioxygène O₂ est :",
    options: ["Un mélange", "Un corps pur simple", "Un corps pur composé", "Une molécule composée"],
    reponse: "Un corps pur simple",
    category: "composition"
  },
  {
    question: "L'eau H₂O est :",
    options: ["Un mélange", "Un corps pur simple", "Un corps pur composé", "Un atome"],
    reponse: "Un corps pur composé",
    category: "composition"
  },

  // Propriétés de l'air
  {
    question: "L'air possède-t-il une masse ?",
    options: ["Oui", "Non", "Seulement quand il est chaud", "Seulement quand il est comprimé"],
    reponse: "Oui",
    category: "proprietes"
  },
  {
    question: "Quelle est approximativement la masse volumique de l'air à 20°C ?",
    options: ["0,13 g/L", "1,3 g/L", "13 g/L", "130 g/L"],
    reponse: "1,3 g/L",
    category: "proprietes"
  },
  {
    question: "Que signifie 'l'air est compressible' ?",
    options: [
      "On peut réduire son volume en augmentant la pression",
      "On peut augmenter son volume",
      "L'air a une masse",
      "L'air occupe un espace"
    ],
    reponse: "On peut réduire son volume en augmentant la pression",
    category: "proprietes"
  },
  {
    question: "Quand on comprime l'air dans une seringue :",
    options: [
      "Le volume augmente et la pression diminue",
      "Le volume diminue et la pression augmente",
      "Le volume et la pression augmentent",
      "Le volume et la pression diminuent"
    ],
    reponse: "Le volume diminue et la pression augmente",
    category: "proprietes"
  },
  {
    question: "Quand on tire sur le piston d'une seringue (expansion) :",
    options: [
      "Le volume augmente et la pression diminue",
      "Le volume diminue et la pression augmente",
      "Le volume et la pression augmentent",
      "Le volume et la pression diminuent"
    ],
    reponse: "Le volume augmente et la pression diminue",
    category: "proprietes"
  },

  // Pression atmosphérique
  {
    question: "Avec quel instrument mesure-t-on la pression ?",
    options: ["Un thermomètre", "Un manomètre", "Une balance", "Une règle"],
    reponse: "Un manomètre",
    category: "pression"
  },
  {
    question: "Quelle est l'unité de mesure de la pression ?",
    options: ["Le mètre (m)", "Le kilogramme (kg)", "Le pascal (Pa)", "Le litre (L)"],
    reponse: "Le pascal (Pa)",
    category: "pression"
  },
  {
    question: "1 bar équivaut à :",
    options: ["1 000 Pa", "10 000 Pa", "100 000 Pa", "1 000 000 Pa"],
    reponse: "100 000 Pa",
    category: "pression"
  },
  {
    question: "La pression atmosphérique au niveau de la mer est environ :",
    options: ["1 bar", "10 bars", "100 bars", "0,1 bar"],
    reponse: "1 bar",
    category: "pression"
  },
  {
    question: "Que se passe-t-il avec la pression quand on monte en altitude ?",
    options: [
      "Elle augmente",
      "Elle diminue",
      "Elle reste constante",
      "Elle double"
    ],
    reponse: "Elle diminue",
    category: "pression"
  },

  // Modèle moléculaire
  {
    question: "Qu'est-ce qu'une molécule ?",
    options: [
      "Un assemblage d'atomes liés entre eux",
      "Un seul atome",
      "Un mélange de gaz",
      "Une particule de lumière"
    ],
    reponse: "Un assemblage d'atomes liés entre eux",
    category: "molecules"
  },
  {
    question: "Qu'est-ce qu'un atome ?",
    options: [
      "La plus petite partie d'un élément chimique",
      "Un assemblage de molécules",
      "Un gaz",
      "Une particule d'air"
    ],
    reponse: "La plus petite partie d'un élément chimique",
    category: "molecules"
  },
  {
    question: "Comment s'explique la pression à l'échelle microscopique ?",
    options: [
      "Par les chocs des molécules sur les parois",
      "Par la masse de l'air",
      "Par la température",
      "Par le volume"
    ],
    reponse: "Par les chocs des molécules sur les parois",
    category: "molecules"
  },
  {
    question: "Que se passe-t-il quand on chauffe un gaz ?",
    options: [
      "Les molécules se déplacent plus vite",
      "Les molécules se déplacent plus lentement",
      "Les molécules s'arrêtent",
      "Les molécules disparaissent"
    ],
    reponse: "Les molécules se déplacent plus vite",
    category: "molecules"
  },
  {
    question: "Qu'est-ce que la diffusion des gaz ?",
    options: [
      "Le mélange spontané de deux gaz",
      "La compression d'un gaz",
      "L'expansion d'un gaz",
      "Le refroidissement d'un gaz"
    ],
    reponse: "Le mélange spontané de deux gaz",
    category: "molecules"
  }
];

// Flashcards sur l'air (Physique-Chimie 4ème)
export const physique4eAirFlashcards: Physique4eAirFlashcard[] = [
  // Composition de l'air
  {
    question: "Qu'est-ce que l'air ?",
    reponse: "L'air est un MÉLANGE de gaz, principalement composé de diazote (78%), dioxygène (21%) et autres gaz (1%).",
    category: "composition"
  },
  {
    question: "Quelle est la formule chimique du diazote ?",
    reponse: "N₂ (2 atomes d'azote)",
    category: "composition"
  },
  {
    question: "Quelle est la formule chimique du dioxygène ?",
    reponse: "O₂ (2 atomes d'oxygène)",
    category: "composition"
  },
  {
    question: "Qu'est-ce qu'une molécule ?",
    reponse: "Une molécule est un assemblage d'atomes liés entre eux.",
    category: "composition"
  },
  {
    question: "Qu'est-ce qu'un atome ?",
    reponse: "Un atome est la plus petite partie d'un élément chimique qui peut exister.",
    category: "composition"
  },
  {
    question: "Quelle est la différence entre un mélange et un corps pur ?",
    reponse: "Un MÉLANGE est constitué de plusieurs substances mélangées (ex: air). Un CORPS PUR est constitué d'une seule substance (ex: O₂, H₂O).",
    category: "composition"
  },
  {
    question: "Quelle est la différence entre corps pur simple et corps pur composé ?",
    reponse: "Un CORPS PUR SIMPLE contient un seul type d'atomes (ex: O₂, N₂). Un CORPS PUR COMPOSÉ contient plusieurs types d'atomes (ex: H₂O, CO₂).",
    category: "composition"
  },

  // Propriétés de l'air
  {
    question: "L'air possède-t-il une masse ?",
    reponse: "OUI ! Un ballon gonflé est plus lourd qu'un ballon dégonflé, donc l'air possède une masse (environ 1,3 g/L).",
    category: "proprietes"
  },
  {
    question: "Comment prouver expérimentalement que l'air a une masse ?",
    reponse: "En pesant un ballon dégonflé, puis en le pesant gonflé. La différence de masse prouve que l'air a une masse.",
    category: "proprietes"
  },
  {
    question: "Que signifie 'l'air est compressible' ?",
    reponse: "On peut réduire le volume de l'air en augmentant la pression (exemple : seringue comprimée).",
    category: "proprietes"
  },
  {
    question: "Que signifie 'l'air est expansible' ?",
    reponse: "L'air peut augmenter de volume quand la pression diminue (exemple : seringue tirée).",
    category: "proprietes"
  },

  // Pression atmosphérique
  {
    question: "Qu'est-ce que la pression ?",
    reponse: "La pression est l'action exercée par un gaz sur la surface qui l'entoure.",
    category: "pression"
  },
  {
    question: "Avec quel instrument mesure-t-on la pression ?",
    reponse: "Avec un MANOMÈTRE",
    category: "pression"
  },
  {
    question: "Quelles sont les unités de mesure de la pression ?",
    reponse: "Le pascal (Pa) ou le bar. Conversion : 1 bar = 100 000 Pa",
    category: "pression"
  },
  {
    question: "Quelle est la pression atmosphérique au niveau de la mer ?",
    reponse: "Patm = 101 325 Pa = 1,013 bar ≈ 1 bar",
    category: "pression"
  },

  // Modèle moléculaire
  {
    question: "Comment s'explique la pression à l'échelle microscopique ?",
    reponse: "Par les chocs des molécules de gaz qui rebondissent sur les parois de l'enceinte.",
    category: "molecules"
  },
  {
    question: "Que se passe-t-il quand on comprime un gaz au niveau moléculaire ?",
    reponse: "Les molécules sont plus proches les unes des autres, il y a plus de chocs par unité de surface, donc la pression augmente.",
    category: "molecules"
  },
  {
    question: "Qu'est-ce que la diffusion des gaz ?",
    reponse: "La diffusion est le mélange spontané de deux gaz grâce au mouvement désordonné des molécules.",
    category: "molecules"
  }
];


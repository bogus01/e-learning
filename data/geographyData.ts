export interface GeographyMCQ {
  question: string;
  options: string[];
  reponse: string;
  category: string;
}

export interface GeographyFlashcard {
  question: string;
  reponse: string;
  category: string;
}

// Questions à choix multiples sur la géographie et l'histoire
export const geographyMCQs: GeographyMCQ[] = [
  // Développement de la population mondiale
  {
    question: "Quelle était approximativement la population mondiale en 1800 ?",
    options: ["500 millions", "1 milliard", "2 milliards", "3 milliards"],
    reponse: "1 milliard",
    category: "population"
  },
  {
    question: "Quelle est approximativement la population mondiale actuelle (2024) ?",
    options: ["6 milliards", "7 milliards", "8 milliards", "9 milliards"],
    reponse: "8 milliards",
    category: "population"
  },
  {
    question: "Quel continent connaît la croissance démographique la plus rapide ?",
    options: ["Asie", "Europe", "Afrique", "Amérique du Sud"],
    reponse: "Afrique",
    category: "population"
  },
  {
    question: "Qu'est-ce que la transition démographique ?",
    options: [
      "Le passage d'un régime de forte natalité et mortalité à un régime de faible natalité et mortalité",
      "Le déplacement des populations vers les villes",
      "L'augmentation de l'espérance de vie",
      "La diminution du taux de fécondité"
    ],
    reponse: "Le passage d'un régime de forte natalité et mortalité à un régime de faible natalité et mortalité",
    category: "population"
  },
  {
    question: "Quel pays est le plus peuplé du monde en 2024 ?",
    options: ["Chine", "Inde", "États-Unis", "Indonésie"],
    reponse: "Inde",
    category: "population"
  },
  
  // Inégalité de répartition
  {
    question: "Quelle est la densité de population moyenne mondiale (habitants/km²) ?",
    options: ["20 hab/km²", "40 hab/km²", "60 hab/km²", "80 hab/km²"],
    reponse: "60 hab/km²",
    category: "repartition"
  },
  {
    question: "Quel type de région est généralement le moins peuplé ?",
    options: ["Les déserts chauds", "Les plaines fertiles", "Les côtes maritimes", "Les vallées fluviales"],
    reponse: "Les déserts chauds",
    category: "repartition"
  },
  {
    question: "Quel pourcentage de la population mondiale vit en Asie ?",
    options: ["40%", "50%", "60%", "70%"],
    reponse: "60%",
    category: "repartition"
  },
  {
    question: "Qu'est-ce qu'un foyer de peuplement ?",
    options: [
      "Une région où la densité de population est très élevée",
      "Une ville de plus d'un million d'habitants",
      "Un pays en développement",
      "Une zone rurale agricole"
    ],
    reponse: "Une région où la densité de population est très élevée",
    category: "repartition"
  },
  {
    question: "Quel est le principal foyer de peuplement en Europe ?",
    options: ["La région méditerranéenne", "L'Europe de l'Est", "La dorsale européenne", "Les pays scandinaves"],
    reponse: "La dorsale européenne",
    category: "repartition"
  },
  
  // IDH (Indice de Développement Humain)
  {
    question: "Que signifie IDH ?",
    options: [
      "Indice de Développement Humain",
      "Indicateur de Développement Harmonieux",
      "Indice de Densité Habitante",
      "Indicateur de Diversité Humaine"
    ],
    reponse: "Indice de Développement Humain",
    category: "idh"
  },
  {
    question: "Quels sont les trois critères principaux de l'IDH ?",
    options: [
      "Santé, éducation, niveau de vie",
      "Population, richesse, territoire",
      "Agriculture, industrie, services",
      "Natalité, mortalité, migration"
    ],
    reponse: "Santé, éducation, niveau de vie",
    category: "idh"
  },
  {
    question: "Quelle valeur d'IDH indique un développement humain très élevé ?",
    options: ["IDH > 0,8", "IDH > 0,6", "IDH > 0,5", "IDH > 0,9"],
    reponse: "IDH > 0,8",
    category: "idh"
  },
  {
    question: "Quel continent a généralement l'IDH le plus faible ?",
    options: ["Afrique", "Asie", "Amérique du Sud", "Océanie"],
    reponse: "Afrique",
    category: "idh"
  },
  {
    question: "Quel pays a régulièrement l'IDH le plus élevé au monde ?",
    options: ["Norvège", "États-Unis", "Japon", "Allemagne"],
    reponse: "Norvège",
    category: "idh"
  },
  
  // Taux de natalité et mortalité infantile
  {
    question: "Qu'est-ce que le taux de natalité ?",
    options: [
      "Le nombre de naissances pour 1000 habitants par an",
      "Le nombre de bébés nés dans un pays",
      "Le pourcentage de femmes enceintes",
      "L'âge moyen des mères"
    ],
    reponse: "Le nombre de naissances pour 1000 habitants par an",
    category: "natalite"
  },
  {
    question: "Qu'est-ce que la mortalité infantile ?",
    options: [
      "Le nombre de décès d'enfants de moins d'un an pour 1000 naissances vivantes",
      "Le nombre total de décès d'enfants",
      "Le pourcentage d'enfants malades",
      "L'espérance de vie des enfants"
    ],
    reponse: "Le nombre de décès d'enfants de moins d'un an pour 1000 naissances vivantes",
    category: "natalite"
  },
  {
    question: "Dans quel type de pays le taux de natalité est-il généralement le plus élevé ?",
    options: [
      "Les pays en développement",
      "Les pays développés",
      "Les pays européens",
      "Les pays industrialisés"
    ],
    reponse: "Les pays en développement",
    category: "natalite"
  },
  {
    question: "Quel facteur contribue à réduire la mortalité infantile ?",
    options: [
      "L'accès aux soins de santé et à la vaccination",
      "L'augmentation de la population",
      "L'urbanisation rapide",
      "La croissance économique seule"
    ],
    reponse: "L'accès aux soins de santé et à la vaccination",
    category: "natalite"
  },
  {
    question: "Quelle est la tendance générale du taux de natalité dans les pays développés ?",
    options: ["En baisse", "En hausse", "Stable", "Variable"],
    reponse: "En baisse",
    category: "natalite"
  },
  
  // Questions mixtes
  {
    question: "Quel phénomène explique la concentration de population dans les villes ?",
    options: ["L'exode rural", "La transition démographique", "Le vieillissement", "L'émigration"],
    reponse: "L'exode rural",
    category: "repartition"
  },
  {
    question: "Quelle région du monde a la plus forte densité de population ?",
    options: ["Asie de l'Est et du Sud", "Europe occidentale", "Amérique du Nord", "Afrique centrale"],
    reponse: "Asie de l'Est et du Sud",
    category: "repartition"
  },
  {
    question: "Qu'est-ce que l'espérance de vie ?",
    options: [
      "L'âge moyen qu'une personne peut espérer atteindre",
      "L'âge de la retraite",
      "L'âge maximum atteint dans un pays",
      "La durée moyenne de vie des animaux"
    ],
    reponse: "L'âge moyen qu'une personne peut espérer atteindre",
    category: "idh"
  },
  {
    question: "Quel est l'impact d'un IDH élevé sur la qualité de vie ?",
    options: [
      "Meilleure santé, éducation et niveau de vie",
      "Plus de population",
      "Plus de territoire",
      "Plus d'industries"
    ],
    reponse: "Meilleure santé, éducation et niveau de vie",
    category: "idh"
  },
  {
    question: "Quelle est la principale cause de la croissance démographique mondiale actuelle ?",
    options: [
      "La baisse de la mortalité",
      "L'augmentation de la natalité",
      "Les migrations",
      "L'urbanisation"
    ],
    reponse: "La baisse de la mortalité",
    category: "population"
  },

  // Questions supplémentaires - Population mondiale
  {
    question: "Combien de temps a-t-il fallu pour que la population mondiale passe de 1 à 2 milliards d'habitants ?",
    options: ["50 ans", "100 ans", "130 ans", "200 ans"],
    reponse: "130 ans",
    category: "population"
  },
  {
    question: "Quel est le principal facteur qui a permis l'explosion démographique du 20ème siècle ?",
    options: [
      "Les progrès de la médecine et de l'hygiène",
      "L'augmentation des naissances",
      "Les guerres mondiales",
      "L'industrialisation"
    ],
    reponse: "Les progrès de la médecine et de l'hygiène",
    category: "population"
  },
  {
    question: "Quelle est la tendance démographique actuelle en Europe ?",
    options: [
      "Vieillissement de la population",
      "Rajeunissement de la population",
      "Forte croissance démographique",
      "Stabilité parfaite"
    ],
    reponse: "Vieillissement de la population",
    category: "population"
  },
  {
    question: "Qu'est-ce que le taux de fécondité ?",
    options: [
      "Le nombre moyen d'enfants par femme",
      "Le nombre de naissances par an",
      "Le pourcentage de femmes enceintes",
      "L'âge moyen des mères"
    ],
    reponse: "Le nombre moyen d'enfants par femme",
    category: "population"
  },

  // Questions supplémentaires - Répartition
  {
    question: "Quelle est la densité de population de la France (environ) ?",
    options: ["50 hab/km²", "100 hab/km²", "120 hab/km²", "200 hab/km²"],
    reponse: "120 hab/km²",
    category: "repartition"
  },
  {
    question: "Pourquoi les côtes maritimes sont-elles souvent très peuplées ?",
    options: [
      "Climat doux, commerce maritime et ressources",
      "Présence de montagnes",
      "Absence de pollution",
      "Terres agricoles fertiles uniquement"
    ],
    reponse: "Climat doux, commerce maritime et ressources",
    category: "repartition"
  },
  {
    question: "Quel type de climat favorise généralement une forte densité de population ?",
    options: [
      "Climat tempéré et tropical humide",
      "Climat désertique",
      "Climat polaire",
      "Climat de montagne"
    ],
    reponse: "Climat tempéré et tropical humide",
    category: "repartition"
  },
  {
    question: "Qu'est-ce qu'un désert humain ?",
    options: [
      "Une région très peu peuplée en raison de contraintes naturelles",
      "Un désert avec beaucoup d'eau",
      "Une ville abandonnée",
      "Une forêt tropicale"
    ],
    reponse: "Une région très peu peuplée en raison de contraintes naturelles",
    category: "repartition"
  },
  {
    question: "Quel pourcentage de la population mondiale vit dans l'hémisphère Nord ?",
    options: ["50%", "70%", "90%", "30%"],
    reponse: "90%",
    category: "repartition"
  },

  // Questions supplémentaires - IDH
  {
    question: "Quel indicateur mesure le niveau d'éducation dans l'IDH ?",
    options: [
      "Le taux de scolarisation et la durée moyenne de scolarité",
      "Le nombre d'écoles",
      "Le budget de l'éducation",
      "Le nombre d'enseignants"
    ],
    reponse: "Le taux de scolarisation et la durée moyenne de scolarité",
    category: "idh"
  },
  {
    question: "Que signifie PIB dans le calcul de l'IDH ?",
    options: [
      "Produit Intérieur Brut",
      "Production Industrielle Brute",
      "Pouvoir d'Investissement Bancaire",
      "Programme International de Développement"
    ],
    reponse: "Produit Intérieur Brut",
    category: "idh"
  },
  {
    question: "Un pays avec un IDH de 0,65 est considéré comme ayant un développement :",
    options: ["Moyen", "Très élevé", "Faible", "Élevé"],
    reponse: "Moyen",
    category: "idh"
  },
  {
    question: "Quel continent a la plus grande disparité d'IDH entre ses pays ?",
    options: ["Afrique", "Europe", "Asie", "Amérique"],
    reponse: "Afrique",
    category: "idh"
  },
  {
    question: "Pourquoi l'espérance de vie est-elle un indicateur important de développement ?",
    options: [
      "Elle reflète la qualité du système de santé et les conditions de vie",
      "Elle indique le nombre d'habitants",
      "Elle mesure la richesse du pays",
      "Elle montre le niveau d'éducation"
    ],
    reponse: "Elle reflète la qualité du système de santé et les conditions de vie",
    category: "idh"
  },

  // Questions supplémentaires - Natalité et Mortalité
  {
    question: "Qu'est-ce que le taux de mortalité ?",
    options: [
      "Le nombre de décès pour 1000 habitants par an",
      "Le nombre total de décès dans un pays",
      "Le pourcentage de personnes âgées",
      "L'espérance de vie moyenne"
    ],
    reponse: "Le nombre de décès pour 1000 habitants par an",
    category: "natalite"
  },
  {
    question: "Dans quel type de pays la mortalité infantile est-elle la plus faible ?",
    options: [
      "Les pays développés",
      "Les pays en développement",
      "Les pays les plus peuplés",
      "Les pays tropicaux"
    ],
    reponse: "Les pays développés",
    category: "natalite"
  },
  {
    question: "Quel graphique permet de visualiser la structure par âge d'une population ?",
    options: [
      "La pyramide des âges",
      "Le diagramme circulaire",
      "L'histogramme simple",
      "La courbe de croissance"
    ],
    reponse: "La pyramide des âges",
    category: "natalite"
  },
  {
    question: "Que représente une pyramide des âges avec une base large ?",
    options: [
      "Une population jeune avec forte natalité",
      "Une population vieillissante",
      "Une population stable",
      "Une population en déclin"
    ],
    reponse: "Une population jeune avec forte natalité",
    category: "natalite"
  },
  {
    question: "Quel est l'impact de la vaccination sur la mortalité infantile ?",
    options: [
      "Elle la réduit considérablement",
      "Elle l'augmente",
      "Elle n'a aucun effet",
      "Elle la stabilise"
    ],
    reponse: "Elle la réduit considérablement",
    category: "natalite"
  },
  {
    question: "Qu'est-ce que l'exode rural ?",
    options: [
      "Le départ des populations des campagnes vers les villes",
      "Le retour à la campagne",
      "L'émigration vers d'autres pays",
      "La croissance des villages"
    ],
    reponse: "Le départ des populations des campagnes vers les villes",
    category: "repartition"
  }
];

// Cartes mémoire (flashcards) sur la géographie
export const geographyFlashcards: GeographyFlashcard[] = [
  {
    question: "Qu'est-ce que la transition démographique ?",
    reponse: "C'est le passage d'un régime démographique traditionnel (forte natalité et forte mortalité) à un régime moderne (faible natalité et faible mortalité).",
    category: "population"
  },
  {
    question: "Quelles sont les 4 phases de la transition démographique ?",
    reponse: "Phase 1: Forte natalité et mortalité. Phase 2: Mortalité baisse, natalité reste élevée. Phase 3: Natalité commence à baisser. Phase 4: Faible natalité et mortalité.",
    category: "population"
  },
  {
    question: "Qu'est-ce qu'un foyer de peuplement ?",
    reponse: "C'est une région du monde où la densité de population est très élevée, comme l'Asie de l'Est, l'Asie du Sud et l'Europe occidentale.",
    category: "repartition"
  },
  {
    question: "Pourquoi certaines régions sont-elles peu peuplées ?",
    reponse: "À cause de contraintes naturelles : déserts (chauds ou froids), montagnes élevées, forêts denses, climats extrêmes.",
    category: "repartition"
  },
  {
    question: "Qu'est-ce que l'IDH ?",
    reponse: "L'Indice de Développement Humain mesure le niveau de développement d'un pays selon 3 critères : santé (espérance de vie), éducation (scolarisation) et niveau de vie (PIB/habitant).",
    category: "idh"
  },
  {
    question: "Comment interpréter l'IDH ?",
    reponse: "L'IDH varie de 0 à 1. IDH > 0,8 = développement très élevé. IDH entre 0,55 et 0,8 = développement moyen. IDH < 0,55 = développement faible.",
    category: "idh"
  },
  {
    question: "Qu'est-ce que le taux de natalité ?",
    reponse: "C'est le nombre de naissances vivantes pour 1000 habitants au cours d'une année.",
    category: "natalite"
  },
  {
    question: "Qu'est-ce que le taux de mortalité infantile ?",
    reponse: "C'est le nombre de décès d'enfants de moins d'un an pour 1000 naissances vivantes. C'est un indicateur clé du niveau de développement.",
    category: "natalite"
  },
  {
    question: "Pourquoi la mortalité infantile est-elle élevée dans certains pays ?",
    reponse: "Manque d'accès aux soins de santé, malnutrition, maladies infectieuses, manque d'eau potable et d'hygiène.",
    category: "natalite"
  },
  {
    question: "Quelle est la population mondiale actuelle ?",
    reponse: "Environ 8 milliards d'habitants en 2024. Elle a doublé depuis 1974.",
    category: "population"
  },
  {
    question: "Où se concentre la majorité de la population mondiale ?",
    reponse: "60% de la population mondiale vit en Asie, principalement en Chine et en Inde.",
    category: "repartition"
  },
  {
    question: "Qu'est-ce que la densité de population ?",
    reponse: "C'est le nombre d'habitants par km². Elle permet de mesurer la concentration humaine dans un espace donné.",
    category: "repartition"
  },
  {
    question: "Quels sont les pays avec l'IDH le plus élevé ?",
    reponse: "Les pays scandinaves (Norvège, Suède, Danemark), la Suisse, l'Australie et certains pays européens.",
    category: "idh"
  },
  {
    question: "Quels sont les pays avec l'IDH le plus faible ?",
    reponse: "Principalement des pays d'Afrique subsaharienne comme le Niger, le Tchad, la République centrafricaine.",
    category: "idh"
  },
  {
    question: "Qu'est-ce que l'accroissement naturel ?",
    reponse: "C'est la différence entre le taux de natalité et le taux de mortalité. Il mesure la croissance démographique d'un pays.",
    category: "population"
  },

  // Flashcards supplémentaires
  {
    question: "Qu'est-ce que le taux de fécondité ?",
    reponse: "C'est le nombre moyen d'enfants par femme. Un taux de 2,1 enfants par femme assure le renouvellement de la population.",
    category: "population"
  },
  {
    question: "Pourquoi la population mondiale a-t-elle explosé au 20ème siècle ?",
    reponse: "Grâce aux progrès de la médecine (vaccins, antibiotiques), à l'amélioration de l'hygiène et de l'alimentation, la mortalité a fortement baissé.",
    category: "population"
  },
  {
    question: "Qu'est-ce qu'une pyramide des âges ?",
    reponse: "C'est un graphique qui représente la répartition de la population par âge et par sexe. Elle permet de visualiser la structure démographique d'un pays.",
    category: "natalite"
  },
  {
    question: "Comment reconnaître un pays développé sur une pyramide des âges ?",
    reponse: "La pyramide a une forme de cylindre ou de champignon : base étroite (faible natalité) et sommet large (population âgée).",
    category: "natalite"
  },
  {
    question: "Comment reconnaître un pays en développement sur une pyramide des âges ?",
    reponse: "La pyramide a une base très large (forte natalité) et un sommet étroit (faible espérance de vie).",
    category: "natalite"
  },
  {
    question: "Quels sont les trois grands foyers de peuplement mondiaux ?",
    reponse: "L'Asie de l'Est (Chine, Japon, Corée), l'Asie du Sud (Inde, Bangladesh, Pakistan) et l'Europe occidentale.",
    category: "repartition"
  },
  {
    question: "Pourquoi certaines régions sont-elles des déserts humains ?",
    reponse: "À cause de contraintes naturelles : climats extrêmes (déserts chauds ou froids), relief difficile (hautes montagnes), manque d'eau.",
    category: "repartition"
  },
  {
    question: "Qu'est-ce que l'urbanisation ?",
    reponse: "C'est l'augmentation de la population vivant en ville. Aujourd'hui, plus de 50% de la population mondiale vit en ville.",
    category: "repartition"
  },
  {
    question: "Pourquoi l'IDH est-il plus pertinent que le PIB seul ?",
    reponse: "Parce qu'il prend en compte la santé et l'éducation en plus de la richesse. Un pays peut être riche mais avoir un faible niveau d'éducation ou de santé.",
    category: "idh"
  },
  {
    question: "Quels facteurs peuvent améliorer l'IDH d'un pays ?",
    reponse: "Investir dans l'éducation (écoles, formation), améliorer le système de santé (hôpitaux, vaccins), développer l'économie et réduire les inégalités.",
    category: "idh"
  }
];


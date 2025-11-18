import type { SubChapter } from '../../../types/curriculum';

// Sous-chapitres pour le chapitre "Théorème de Pythagore" en 4ème
export const pythagoreSubChapters: SubChapter[] = [
  {
    id: '4e-pythagore-triangle-rectangle',
    title: 'Le triangle rectangle',
    description: 'Vocabulaire et propriétés du triangle rectangle',
    icon: '📐',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# Le triangle rectangle

## Définition

Un **triangle rectangle** est un triangle qui possède un **angle droit** (90°).

## Vocabulaire

Dans un triangle rectangle, on distingue trois côtés :

### L'hypoténuse
- C'est le **côté le plus long** du triangle rectangle
- C'est le côté **opposé à l'angle droit**
- On la note souvent **c** ou **h**

### Les côtés de l'angle droit
- Ce sont les deux côtés qui forment l'angle droit
- On les appelle aussi les **cathètes**
- On les note souvent **a** et **b**

## Schéma

\`\`\`
        C
        |\\
        | \\
      a |  \\ c (hypoténuse)
        |   \\
        |____\\
        A  b  B
\`\`\`

Dans ce triangle ABC rectangle en A :
- L'angle droit est en A (angle BAC = 90°)
- L'hypoténuse est [BC] (côté c)
- Les côtés de l'angle droit sont [AB] (côté b) et [AC] (côté a)

## Propriétés importantes

### Propriété 1
Dans un triangle rectangle, **l'hypoténuse est toujours le côté le plus long**.

### Propriété 2
La somme des angles d'un triangle est toujours 180°.
Dans un triangle rectangle : **angle droit (90°) + deux autres angles = 180°**

Donc : **les deux autres angles sont complémentaires** (leur somme = 90°)

## Exemples

### Exemple 1
Triangle ABC rectangle en B :
- Angle droit : angle ABC = 90°
- Hypoténuse : [AC]
- Côtés de l'angle droit : [AB] et [BC]

### Exemple 2
Triangle DEF rectangle en E :
- Angle droit : angle DEF = 90°
- Hypoténuse : [DF]
- Côtés de l'angle droit : [DE] et [EF]

## À retenir

✅ Triangle rectangle = triangle avec un angle droit (90°)
✅ Hypoténuse = côté le plus long, opposé à l'angle droit
✅ Cathètes = les deux côtés qui forment l'angle droit
✅ Les deux angles aigus sont complémentaires
    `,
    aiQuizQuestionCount: 8
  },
  {
    id: '4e-pythagore-theoreme',
    title: 'Le théorème de Pythagore',
    description: 'Énoncé et calcul de longueurs',
    icon: '📏',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Le théorème de Pythagore

## Énoncé du théorème

**Si un triangle est rectangle, alors le carré de l'hypoténuse est égal à la somme des carrés des deux autres côtés.**

### Formulation mathématique

Dans un triangle ABC rectangle en A :

**BC² = AB² + AC²**

ou avec les notations a, b, c :

**c² = a² + b²**

où c est l'hypoténuse et a, b sont les côtés de l'angle droit.

## Schéma explicatif

\`\`\`
        C
        |\\
        | \\
      b |  \\ a (hypoténuse)
        |   \\
        |____\\
        A  c  B

Triangle ABC rectangle en A
a² = b² + c²
\`\`\`

## Applications du théorème

### 1. Calculer l'hypoténuse

**Exemple :** Triangle ABC rectangle en A avec AB = 3 cm et AC = 4 cm.
Calculer BC.

**Solution :**
- BC² = AB² + AC²
- BC² = 3² + 4²
- BC² = 9 + 16
- BC² = 25
- BC = √25 = 5 cm

### 2. Calculer un côté de l'angle droit

**Exemple :** Triangle DEF rectangle en E avec DF = 13 cm et DE = 5 cm.
Calculer EF.

**Solution :**
- DF² = DE² + EF²
- 13² = 5² + EF²
- 169 = 25 + EF²
- EF² = 169 - 25
- EF² = 144
- EF = √144 = 12 cm

## Méthode générale

### Pour calculer l'hypoténuse :
1. Identifier l'hypoténuse (côté opposé à l'angle droit)
2. Appliquer : hypoténuse² = côté1² + côté2²
3. Calculer la racine carrée

### Pour calculer un côté de l'angle droit :
1. Identifier l'hypoténuse
2. Appliquer : hypoténuse² = côté connu² + côté cherché²
3. Isoler : côté cherché² = hypoténuse² - côté connu²
4. Calculer la racine carrée

## Exemples détaillés

### Exemple 1 : Calculer l'hypoténuse
Triangle rectangle avec côtés 6 cm et 8 cm.

- hypoténuse² = 6² + 8²
- hypoténuse² = 36 + 64 = 100
- hypoténuse = √100 = 10 cm

### Exemple 2 : Calculer un côté
Triangle rectangle avec hypoténuse 15 cm et un côté 9 cm.

- 15² = 9² + côté²
- 225 = 81 + côté²
- côté² = 225 - 81 = 144
- côté = √144 = 12 cm

### Exemple 3 : Problème pratique
Une échelle de 5 m est posée contre un mur. Le pied de l'échelle est à 3 m du mur.
À quelle hauteur l'échelle touche-t-elle le mur ?

**Solution :**
- On a un triangle rectangle
- Hypoténuse (échelle) = 5 m
- Base = 3 m
- Hauteur = ?

5² = 3² + hauteur²
25 = 9 + hauteur²
hauteur² = 16
hauteur = 4 m

L'échelle touche le mur à 4 m de hauteur.

## Triplets pythagoriciens

Certains triangles rectangles ont des côtés de longueurs entières. On les appelle **triplets pythagoriciens**.

Exemples courants :
- (3, 4, 5) : 3² + 4² = 9 + 16 = 25 = 5²
- (5, 12, 13) : 5² + 12² = 25 + 144 = 169 = 13²
- (8, 15, 17) : 8² + 15² = 64 + 225 = 289 = 17²
- (7, 24, 25) : 7² + 24² = 49 + 576 = 625 = 25²

## À retenir

✅ Dans un triangle rectangle : hypoténuse² = côté1² + côté2²
✅ Pour trouver l'hypoténuse : on additionne les carrés
✅ Pour trouver un côté : on soustrait les carrés
✅ Ne pas oublier la racine carrée à la fin !
    `,
    aiQuizQuestionCount: 12
  },
  {
    id: '4e-pythagore-reciproque',
    title: 'La réciproque du théorème',
    description: 'Démontrer qu\'un triangle est rectangle',
    icon: '🔄',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# La réciproque du théorème de Pythagore

## Énoncé de la réciproque

**Si dans un triangle, le carré du plus grand côté est égal à la somme des carrés des deux autres côtés, alors ce triangle est rectangle.**

### Formulation mathématique

Dans un triangle ABC, si le plus grand côté est [BC] et si :

**BC² = AB² + AC²**

Alors le triangle ABC est rectangle en A (l'angle droit est opposé au plus grand côté).

## Différence entre théorème et réciproque

### Théorème de Pythagore
- **On sait** que le triangle est rectangle
- **On calcule** une longueur

### Réciproque de Pythagore
- **On sait** les trois longueurs
- **On démontre** que le triangle est rectangle (ou pas)

## Méthode pour utiliser la réciproque

### Étape 1 : Identifier le plus grand côté
C'est celui qui sera l'hypoténuse si le triangle est rectangle.

### Étape 2 : Calculer les carrés
- Carré du plus grand côté
- Somme des carrés des deux autres côtés

### Étape 3 : Comparer
- Si égalité → triangle rectangle
- Si inégalité → triangle non rectangle

### Étape 4 : Conclure
Préciser où se trouve l'angle droit (opposé au plus grand côté).

## Exemples détaillés

### Exemple 1 : Triangle rectangle
Triangle ABC avec AB = 6 cm, AC = 8 cm, BC = 10 cm.
Le triangle est-il rectangle ?

**Solution :**

**Étape 1 :** Plus grand côté = BC = 10 cm

**Étape 2 :** Calculs
- BC² = 10² = 100
- AB² + AC² = 6² + 8² = 36 + 64 = 100

**Étape 3 :** Comparaison
BC² = AB² + AC² (100 = 100) ✓

**Étape 4 :** Conclusion
D'après la réciproque du théorème de Pythagore, le triangle ABC est rectangle en A.

### Exemple 2 : Triangle non rectangle
Triangle DEF avec DE = 5 cm, EF = 7 cm, DF = 9 cm.
Le triangle est-il rectangle ?

**Solution :**

**Étape 1 :** Plus grand côté = DF = 9 cm

**Étape 2 :** Calculs
- DF² = 9² = 81
- DE² + EF² = 5² + 7² = 25 + 49 = 74

**Étape 3 :** Comparaison
DF² ≠ DE² + EF² (81 ≠ 74) ✗

**Étape 4 :** Conclusion
Le triangle DEF n'est pas rectangle.

### Exemple 3 : Vérification avec triplet pythagoricien
Triangle avec côtés 5 cm, 12 cm et 13 cm.

**Solution :**
- Plus grand côté : 13 cm
- 13² = 169
- 5² + 12² = 25 + 144 = 169
- 169 = 169 ✓

Le triangle est rectangle (angle droit opposé au côté de 13 cm).

## Cas particuliers

### Si le carré du plus grand côté est PLUS GRAND
**c² > a² + b²**

Le triangle est **obtusangle** (il a un angle obtus, c'est-à-dire > 90°).

Exemple : Triangle avec côtés 3, 4, 6
- 6² = 36
- 3² + 4² = 9 + 16 = 25
- 36 > 25 → triangle obtusangle

### Si le carré du plus grand côté est PLUS PETIT
**c² < a² + b²**

Le triangle est **acutangle** (tous ses angles sont aigus, c'est-à-dire < 90°).

Exemple : Triangle avec côtés 3, 4, 4
- 4² = 16
- 3² + 4² = 9 + 16 = 25
- 16 < 25 → triangle acutangle

## Applications pratiques

### Vérifier l'équerrage d'un meuble
Un menuisier veut vérifier qu'un cadre rectangulaire est bien d'équerre.
- Largeur : 60 cm
- Hauteur : 80 cm
- Diagonale mesurée : 100 cm

Vérification :
- 100² = 10 000
- 60² + 80² = 3 600 + 6 400 = 10 000
- 10 000 = 10 000 ✓

Le cadre est bien d'équerre !

## À retenir

✅ Réciproque : on démontre qu'un triangle EST rectangle
✅ Toujours identifier le plus grand côté d'abord
✅ Si c² = a² + b² → triangle rectangle
✅ Si c² ≠ a² + b² → triangle non rectangle
✅ L'angle droit est opposé au plus grand côté
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '4e-pythagore-problemes',
    title: 'Problèmes et applications',
    description: 'Résoudre des problèmes concrets',
    icon: '🎯',
    activities: ['exercise', 'mcq'],
    lessonContent: `
# Problèmes avec le théorème de Pythagore

## Problème 1 : L'échelle

Une échelle de 6,5 m est appuyée contre un mur vertical. Le pied de l'échelle est à 2,5 m du mur.

**Question :** À quelle hauteur du sol l'échelle touche-t-elle le mur ?

**Solution :**
- Triangle rectangle formé par : le mur, le sol, l'échelle
- Hypoténuse (échelle) = 6,5 m
- Base (distance au mur) = 2,5 m
- Hauteur = ?

Calcul :
- 6,5² = 2,5² + hauteur²
- 42,25 = 6,25 + hauteur²
- hauteur² = 42,25 - 6,25 = 36
- hauteur = √36 = 6 m

**Réponse :** L'échelle touche le mur à 6 m de hauteur.

## Problème 2 : Le terrain de football

Un terrain de football rectangulaire mesure 100 m de long et 64 m de large.

**Question :** Quelle est la longueur de la diagonale du terrain ?

**Solution :**
- Triangle rectangle formé par : longueur, largeur, diagonale
- Côtés de l'angle droit : 100 m et 64 m
- Hypoténuse (diagonale) = ?

Calcul :
- diagonale² = 100² + 64²
- diagonale² = 10 000 + 4 096 = 14 096
- diagonale = √14 096 ≈ 118,7 m

**Réponse :** La diagonale mesure environ 118,7 m.

## Problème 3 : La télévision

On mesure la diagonale d'un écran de télévision pour indiquer sa taille.
Un écran mesure 60 cm de large et 45 cm de haut.

**Question :** Quelle est la taille de l'écran (diagonale) en cm ?

**Solution :**
- diagonale² = 60² + 45²
- diagonale² = 3 600 + 2 025 = 5 625
- diagonale = √5 625 = 75 cm

**Réponse :** C'est un écran de 75 cm (environ 30 pouces).

## Problème 4 : Le cerf-volant

Un cerf-volant est retenu par une ficelle de 50 m. Le cerf-volant se trouve à 30 m au-dessus du sol.

**Question :** À quelle distance horizontale du point d'attache se trouve le cerf-volant ?

**Solution :**
- Hypoténuse (ficelle) = 50 m
- Hauteur = 30 m
- Distance horizontale = ?

Calcul :
- 50² = 30² + distance²
- 2 500 = 900 + distance²
- distance² = 2 500 - 900 = 1 600
- distance = √1 600 = 40 m

**Réponse :** Le cerf-volant est à 40 m horizontalement.

## Problème 5 : Le raccourci

Marie peut aller de sa maison à l'école en suivant deux rues perpendiculaires :
- 400 m vers le nord
- 300 m vers l'est

**Question :** Quelle distance parcourrait-elle si elle prenait le raccourci en ligne droite ?

**Solution :**
- Triangle rectangle : 400 m et 300 m
- Raccourci (hypoténuse) = ?

Calcul :
- raccourci² = 400² + 300²
- raccourci² = 160 000 + 90 000 = 250 000
- raccourci = √250 000 = 500 m

**Réponse :** Le raccourci fait 500 m. Elle économise 200 m (800 - 500).

## Problème 6 : Vérification d'angle droit

Un maçon construit un mur. Pour vérifier qu'il est perpendiculaire au sol, il mesure :
- 3 m sur le sol depuis le mur
- 4 m sur le mur depuis le sol
- La distance entre ces deux points : 5 m

**Question :** Le mur est-il bien perpendiculaire au sol ?

**Solution :**
Utilisons la réciproque de Pythagore :
- Plus grand côté : 5 m
- 5² = 25
- 3² + 4² = 9 + 16 = 25
- 25 = 25 ✓

**Réponse :** Oui, le mur est perpendiculaire au sol (angle droit).

## Problème 7 : Le parc

Un parc rectangulaire mesure 120 m sur 90 m. On veut installer un câble en diagonale pour des décorations.

**Questions :**
a) Quelle longueur de câble faut-il prévoir ?
b) Si on installe les deux diagonales, quelle longueur totale ?

**Solution :**
a) diagonale² = 120² + 90²
   diagonale² = 14 400 + 8 100 = 22 500
   diagonale = √22 500 = 150 m

b) Deux diagonales : 150 × 2 = 300 m

**Réponse :** a) 150 m  b) 300 m au total

## À retenir

✅ Bien identifier le triangle rectangle dans le problème
✅ Repérer l'hypoténuse (côté le plus long)
✅ Choisir la bonne formule selon ce qu'on cherche
✅ Ne pas oublier les unités dans la réponse
    `,
    aiQuizQuestionCount: 15
  }
];


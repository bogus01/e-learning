import type { SubChapter } from '../../../types/curriculum';

// Sous-chapitres pour le chapitre "Nombres relatifs" en 4ème
export const nombresRelatifsSubChapters: SubChapter[] = [
  {
    id: '4e-nombres-relatifs-rappels',
    title: 'Rappels et vocabulaire',
    description: 'Nombres positifs, négatifs, opposés et valeur absolue',
    icon: '📝',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Rappels sur les nombres relatifs

## 1. Qu'est-ce qu'un nombre relatif ?

Un **nombre relatif** est un nombre qui peut être :
- **Positif** : supérieur à zéro (exemple : +5, +12,3)
- **Négatif** : inférieur à zéro (exemple : -3, -7,5)
- **Nul** : égal à zéro (0)

### Représentation sur une droite graduée

\`\`\`
    -5    -4    -3    -2    -1     0    +1    +2    +3    +4    +5
    ├─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┼─────┤
    ←─────────────────────────────────────────────────────────────→
    Nombres négatifs          Zéro          Nombres positifs
\`\`\`

---

## 2. Vocabulaire important

### Signe d'un nombre
- Le **signe** indique si le nombre est positif (+) ou négatif (-)
- Exemples : 
  - Le signe de +7 est **positif**
  - Le signe de -3 est **négatif**
  - Le nombre 0 n'a pas de signe

### Opposé d'un nombre
L'**opposé** d'un nombre est le nombre qui a :
- La même **distance à zéro**
- Un **signe contraire**

**Exemples :**
- L'opposé de +5 est -5
- L'opposé de -3 est +3
- L'opposé de 0 est 0

### Notation
L'opposé de a se note **-a** ou **opp(a)**

---

## 3. Valeur absolue

La **valeur absolue** d'un nombre est sa distance à zéro sur la droite graduée.

**Notation :** |a| se lit "valeur absolue de a"

**Propriétés :**
- La valeur absolue est toujours **positive ou nulle**
- |a| = a si a est positif
- |a| = -a si a est négatif
- |0| = 0

### Exemples
- |+7| = 7
- |-5| = 5
- |0| = 0
- |-12,3| = 12,3

---

## 4. Comparaison de nombres relatifs

### Règle 1 : Nombres de signes différents
Un nombre **positif** est toujours **plus grand** qu'un nombre **négatif**.

Exemple : +2 > -5

### Règle 2 : Nombres positifs
Entre deux nombres positifs, le plus grand est celui qui a la plus grande valeur absolue.

Exemple : +8 > +3

### Règle 3 : Nombres négatifs
Entre deux nombres négatifs, le plus grand est celui qui a la plus petite valeur absolue.

Exemple : -2 > -7 (car |-2| < |-7|)

---

## 5. Applications pratiques

### Températures
- +15°C : 15 degrés au-dessus de zéro
- -5°C : 5 degrés en-dessous de zéro

### Altitude
- +850 m : 850 mètres au-dessus du niveau de la mer
- -50 m : 50 mètres en-dessous du niveau de la mer

### Compte bancaire
- +200 € : crédit de 200 euros
- -50 € : débit de 50 euros

---

## À retenir

✅ Nombre relatif = nombre positif, négatif ou nul
✅ Opposé de a = -a (même distance à zéro, signe contraire)
✅ Valeur absolue |a| = distance à zéro (toujours ≥ 0)
✅ Positif > Négatif
✅ Entre négatifs : le plus proche de zéro est le plus grand
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '4e-nombres-relatifs-multiplication',
    title: 'Multiplication de nombres relatifs',
    description: 'Règle des signes et calculs',
    icon: '✖️',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Multiplication de nombres relatifs

## 1. Règle des signes

### Produit de deux nombres de même signe
Le produit de deux nombres de **même signe** est **positif**.

**Formules :**
- **(+) × (+) = (+)**
- **(−) × (−) = (+)**

### Produit de deux nombres de signes différents
Le produit de deux nombres de **signes différents** est **négatif**.

**Formules :**
- **(+) × (−) = (−)**
- **(−) × (+) = (−)**

---

## 2. Tableau récapitulatif

| Premier nombre | Deuxième nombre | Résultat |
|----------------|-----------------|----------|
| Positif (+)    | Positif (+)     | Positif (+) |
| Positif (+)    | Négatif (−)     | Négatif (−) |
| Négatif (−)    | Positif (+)     | Négatif (−) |
| Négatif (−)    | Négatif (−)     | Positif (+) |

**Moyen mnémotechnique :**
- Signes **identiques** → résultat **positif** ✅
- Signes **différents** → résultat **négatif** ❌

---

## 3. Exemples détaillés

### Exemple 1 : Même signe positif
(+5) × (+3) = +15

**Explication :** Deux nombres positifs → résultat positif

### Exemple 2 : Même signe négatif
(−4) × (−6) = +24

**Explication :** Deux nombres négatifs → résultat positif

### Exemple 3 : Signes différents (+ et −)
(+7) × (−2) = −14

**Explication :** Un positif et un négatif → résultat négatif

### Exemple 4 : Signes différents (− et +)
(−8) × (+3) = −24

**Explication :** Un négatif et un positif → résultat négatif

---

## 4. Produit de plusieurs nombres

### Méthode
Pour calculer le produit de plusieurs nombres relatifs :
1. Calculer le produit des **valeurs absolues**
2. Déterminer le **signe** du résultat

### Règle du signe
- **Nombre pair** de facteurs négatifs → résultat **positif**
- **Nombre impair** de facteurs négatifs → résultat **négatif**

### Exemples

**Exemple 1 :** (−2) × (+3) × (−4)
- Valeurs absolues : 2 × 3 × 4 = 24
- Nombre de facteurs négatifs : 2 (pair)
- Résultat : **+24**

**Exemple 2 :** (−1) × (−2) × (−3)
- Valeurs absolues : 1 × 2 × 3 = 6
- Nombre de facteurs négatifs : 3 (impair)
- Résultat : **−6**

**Exemple 3 :** (+5) × (−2) × (+3) × (−1)
- Valeurs absolues : 5 × 2 × 3 × 1 = 30
- Nombre de facteurs négatifs : 2 (pair)
- Résultat : **+30**

---

## 5. Propriétés de la multiplication

### Commutativité
a × b = b × a

Exemple : (−3) × (+5) = (+5) × (−3) = −15

### Associativité
(a × b) × c = a × (b × c)

Exemple : [(−2) × (+3)] × (−4) = (−2) × [(+3) × (−4)]

### Élément neutre
a × 1 = a

Exemple : (−7) × 1 = −7

### Multiplication par zéro
a × 0 = 0

Exemple : (−15) × 0 = 0

---

## 6. Applications

### Exemple 1 : Température
La température baisse de 3°C par heure pendant 4 heures.
Variation totale = (−3) × 4 = −12°C

### Exemple 2 : Compte bancaire
Un prélèvement de 25 € est effectué 3 fois.
Variation = (−25) × 3 = −75 €

### Exemple 3 : Profondeur
Un sous-marin descend de 50 m par minute pendant 6 minutes.
Variation d'altitude = (−50) × 6 = −300 m

---

## À retenir

✅ Même signe → résultat **positif**
✅ Signes différents → résultat **négatif**
✅ Nombre pair de facteurs négatifs → résultat **positif**
✅ Nombre impair de facteurs négatifs → résultat **négatif**
✅ Tout nombre multiplié par 0 donne 0
    `,
    aiQuizQuestionCount: 12
  },
  {
    id: '4e-nombres-relatifs-division',
    title: 'Division de nombres relatifs',
    description: 'Règle des signes pour la division',
    icon: '➗',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Division de nombres relatifs

## 1. Règle des signes

La règle des signes pour la **division** est la **même** que pour la multiplication.

### Division de deux nombres de même signe
Le quotient de deux nombres de **même signe** est **positif**.

**Formules :**
- **(+) ÷ (+) = (+)**
- **(−) ÷ (−) = (+)**

### Division de deux nombres de signes différents
Le quotient de deux nombres de **signes différents** est **négatif**.

**Formules :**
- **(+) ÷ (−) = (−)**
- **(−) ÷ (+) = (−)**

---

## 2. Tableau récapitulatif

| Dividende | Diviseur | Quotient |
|-----------|----------|----------|
| Positif (+) | Positif (+) | Positif (+) |
| Positif (+) | Négatif (−) | Négatif (−) |
| Négatif (−) | Positif (+) | Négatif (−) |
| Négatif (−) | Négatif (−) | Positif (+) |

**Moyen mnémotechnique :**
- Signes **identiques** → résultat **positif** ✅
- Signes **différents** → résultat **négatif** ❌

---

## 3. Exemples détaillés

### Exemple 1 : Même signe positif
(+12) ÷ (+3) = +4

**Explication :** Deux nombres positifs → résultat positif

### Exemple 2 : Même signe négatif
(−20) ÷ (−5) = +4

**Explication :** Deux nombres négatifs → résultat positif

### Exemple 3 : Signes différents (+ et −)
(+18) ÷ (−6) = −3

**Explication :** Un positif et un négatif → résultat négatif

### Exemple 4 : Signes différents (− et +)
(−24) ÷ (+8) = −3

**Explication :** Un négatif et un positif → résultat négatif

---

## 4. Lien avec la multiplication

### Propriété fondamentale
La division est l'**opération inverse** de la multiplication.

Si **a ÷ b = c**, alors **a = b × c**

### Exemples de vérification

**Exemple 1 :** (−12) ÷ (+3) = −4
Vérification : (+3) × (−4) = −12 ✓

**Exemple 2 :** (+20) ÷ (−5) = −4
Vérification : (−5) × (−4) = +20 ✓

**Exemple 3 :** (−18) ÷ (−6) = +3
Vérification : (−6) × (+3) = −18 ✓

---

## 5. Inverse d'un nombre

### Définition
L'**inverse** d'un nombre a (non nul) est le nombre qui, multiplié par a, donne 1.

**Notation :** L'inverse de a se note 1/a ou a⁻¹

### Propriété
Diviser par un nombre revient à multiplier par son inverse.

**a ÷ b = a × (1/b)**

### Exemples

**Exemple 1 :** (+8) ÷ (+2) = (+8) × (1/2) = +4

**Exemple 2 :** (−15) ÷ (+3) = (−15) × (1/3) = −5

**Exemple 3 :** (+12) ÷ (−4) = (+12) × (−1/4) = −3

---

## 6. Division par zéro

⚠️ **ATTENTION** : La division par zéro est **impossible** !

On ne peut **jamais** diviser par zéro.

**Exemples interdits :**
- 5 ÷ 0 → impossible
- (−3) ÷ 0 → impossible
- 0 ÷ 0 → impossible

**Par contre :** 0 ÷ a = 0 (si a ≠ 0)

---

## 7. Applications pratiques

### Exemple 1 : Partage de dettes
Une dette de 120 € est partagée entre 4 personnes.
Chacun doit : (−120) ÷ 4 = −30 €

### Exemple 2 : Variation moyenne
La température a baissé de 15°C en 3 heures.
Variation moyenne par heure : (−15) ÷ 3 = −5°C/h

### Exemple 3 : Vitesse moyenne
Un sous-marin descend de 240 m en 8 minutes.
Vitesse moyenne : (−240) ÷ 8 = −30 m/min

---

## 8. Calculs avec fractions

### Diviser par une fraction
Diviser par une fraction revient à multiplier par son inverse.

**a ÷ (b/c) = a × (c/b)**

### Exemples

**Exemple 1 :** (+6) ÷ (2/3) = (+6) × (3/2) = +9

**Exemple 2 :** (−8) ÷ (4/5) = (−8) × (5/4) = −10

**Exemple 3 :** (+15) ÷ (−3/2) = (+15) × (−2/3) = −10

---

## À retenir

✅ Même signe → quotient **positif**
✅ Signes différents → quotient **négatif**
✅ Division = opération inverse de la multiplication
✅ Diviser par a = multiplier par 1/a
✅ **Division par zéro impossible !**
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '4e-nombres-relatifs-operations-combinees',
    title: 'Opérations combinées',
    description: 'Enchaînements de calculs avec nombres relatifs',
    icon: '🧮',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Opérations combinées avec nombres relatifs

## 1. Rappel des priorités opératoires

### Ordre de priorité (PEMDAS)
1. **P**arenthèses
2. **E**xposants (puissances)
3. **M**ultiplication et **D**ivision (de gauche à droite)
4. **A**ddition et **S**oustraction (de gauche à droite)

### Règle importante
Les multiplications et divisions sont **prioritaires** sur les additions et soustractions.

---

## 2. Calculs sans parenthèses

### Méthode
1. Effectuer d'abord les **multiplications et divisions** (de gauche à droite)
2. Puis effectuer les **additions et soustractions** (de gauche à droite)

### Exemples

**Exemple 1 :** −5 + 3 × (−2)
- Étape 1 : 3 × (−2) = −6
- Étape 2 : −5 + (−6) = −5 − 6 = −11
- **Résultat : −11**

**Exemple 2 :** 8 − 12 ÷ (−3)
- Étape 1 : 12 ÷ (−3) = −4
- Étape 2 : 8 − (−4) = 8 + 4 = 12
- **Résultat : 12**

**Exemple 3 :** −7 × 2 + 5 × (−3)
- Étape 1 : −7 × 2 = −14
- Étape 2 : 5 × (−3) = −15
- Étape 3 : −14 + (−15) = −14 − 15 = −29
- **Résultat : −29**

---

## 3. Calculs avec parenthèses

### Méthode
1. Calculer d'abord ce qui est **entre parenthèses**
2. Puis appliquer les règles de priorité

### Exemples

**Exemple 1 :** (−5 + 3) × (−2)
- Étape 1 : −5 + 3 = −2
- Étape 2 : (−2) × (−2) = +4
- **Résultat : 4**

**Exemple 2 :** (8 − 12) ÷ (−3 + 1)
- Étape 1 : 8 − 12 = −4
- Étape 2 : −3 + 1 = −2
- Étape 3 : (−4) ÷ (−2) = +2
- **Résultat : 2**

**Exemple 3 :** −3 × (4 − 7) + 2
- Étape 1 : 4 − 7 = −3
- Étape 2 : −3 × (−3) = +9
- Étape 3 : 9 + 2 = 11
- **Résultat : 11**

---

## 4. Parenthèses imbriquées

### Méthode
Calculer de l'**intérieur vers l'extérieur** (des parenthèses les plus internes aux plus externes).

### Exemple détaillé
Calculer : 5 − [3 − (−2 + 7)]

**Étape 1 :** Calculer (−2 + 7)
- (−2 + 7) = 5

**Étape 2 :** Remplacer dans l'expression
- 5 − [3 − 5]

**Étape 3 :** Calculer [3 − 5]
- [3 − 5] = −2

**Étape 4 :** Calculer 5 − (−2)
- 5 − (−2) = 5 + 2 = 7

**Résultat : 7**

---

## 5. Distributivité

### Propriété
a × (b + c) = a × b + a × c
a × (b − c) = a × b − a × c

### Exemples

**Exemple 1 :** −3 × (5 + 2)
- Méthode 1 : −3 × 7 = −21
- Méthode 2 : −3 × 5 + (−3) × 2 = −15 + (−6) = −21

**Exemple 2 :** 4 × (−7 − 3)
- Méthode 1 : 4 × (−10) = −40
- Méthode 2 : 4 × (−7) + 4 × (−3) = −28 + (−12) = −40

**Exemple 3 :** −2 × (8 − 5)
- Méthode 1 : −2 × 3 = −6
- Méthode 2 : −2 × 8 − (−2) × 5 = −16 − (−10) = −16 + 10 = −6

---

## 6. Carrés de nombres relatifs

### Propriété importante
Le carré d'un nombre est toujours **positif ou nul**.

**(−a)² = a²**

### Attention à la notation !
- **(−3)²** = (−3) × (−3) = **+9**
- **−3²** = −(3 × 3) = **−9**

### Exemples

**Exemple 1 :** (−5)² = (−5) × (−5) = 25

**Exemple 2 :** (−2)² + 3 = 4 + 3 = 7

**Exemple 3 :** −(−4)² = −16

**Exemple 4 :** (−1)² − (−3)² = 1 − 9 = −8

---

## 7. Exercices types

### Exercice 1
Calculer : −8 + 5 × (−2) − 3

**Solution :**
- Étape 1 : 5 × (−2) = −10
- Étape 2 : −8 + (−10) − 3 = −8 − 10 − 3 = −21

### Exercice 2
Calculer : (−6 + 2) × (−3) + 4

**Solution :**
- Étape 1 : −6 + 2 = −4
- Étape 2 : (−4) × (−3) = +12
- Étape 3 : 12 + 4 = 16

### Exercice 3
Calculer : 15 ÷ (−3) − 2 × (−4)

**Solution :**
- Étape 1 : 15 ÷ (−3) = −5
- Étape 2 : 2 × (−4) = −8
- Étape 3 : −5 − (−8) = −5 + 8 = 3

### Exercice 4
Calculer : (−2)² × 3 − 5

**Solution :**
- Étape 1 : (−2)² = 4
- Étape 2 : 4 × 3 = 12
- Étape 3 : 12 − 5 = 7

---

## 8. Astuces et pièges à éviter

### ⚠️ Piège 1 : Signe devant une parenthèse
−(−5) = +5 (le signe − inverse le signe de ce qui suit)

### ⚠️ Piège 2 : Carré d'un nombre négatif
(−3)² ≠ −3²
- (−3)² = 9
- −3² = −9

### ⚠️ Piège 3 : Multiplication implicite
−2(3 + 5) signifie −2 × (3 + 5)

### ✅ Astuce : Vérification
Toujours vérifier le signe du résultat en comptant les facteurs négatifs.

---

## À retenir

✅ Priorités : Parenthèses → Puissances → × et ÷ → + et −
✅ Calculer les parenthèses de l'intérieur vers l'extérieur
✅ (−a)² est toujours positif
✅ Attention à la différence entre (−a)² et −a²
✅ Distributivité : a(b + c) = ab + ac
    `,
    aiQuizQuestionCount: 15
  }
];


import type { SubChapter } from '../../../types/curriculum';

// Sous-chapitres pour le chapitre "Puissances" en 4ème
export const puissancesSubChapters: SubChapter[] = [
  {
    id: '4e-puissances-definition',
    title: 'Définition et notation',
    description: 'Comprendre la notation puissance',
    icon: '📝',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Définition et notation des puissances

## Qu'est-ce qu'une puissance ?

Une **puissance** est une façon d'écrire une multiplication répétée du même nombre.

### Notation

Pour un nombre **a** et un entier positif **n** :

**aⁿ = a × a × a × ... × a** (n fois)

- **a** s'appelle la **base**
- **n** s'appelle l'**exposant**
- **aⁿ** se lit "a puissance n" ou "a exposant n"

## Exemples

### Exemple 1 : Puissances de 2
- 2¹ = 2
- 2² = 2 × 2 = 4
- 2³ = 2 × 2 × 2 = 8
- 2⁴ = 2 × 2 × 2 × 2 = 16
- 2⁵ = 2 × 2 × 2 × 2 × 2 = 32

### Exemple 2 : Puissances de 10
- 10¹ = 10
- 10² = 10 × 10 = 100
- 10³ = 10 × 10 × 10 = 1 000
- 10⁴ = 10 × 10 × 10 × 10 = 10 000

### Exemple 3 : Autres bases
- 3² = 3 × 3 = 9
- 5³ = 5 × 5 × 5 = 125
- 7² = 7 × 7 = 49

## Cas particuliers

### Exposant 1
Pour tout nombre a : **a¹ = a**

Exemples :
- 5¹ = 5
- 100¹ = 100

### Exposant 0
Pour tout nombre a non nul : **a⁰ = 1**

Exemples :
- 2⁰ = 1
- 10⁰ = 1
- 999⁰ = 1

⚠️ **Attention** : 0⁰ n'est pas défini !

## Puissances négatives

Pour tout nombre a non nul et tout entier n :

**a⁻ⁿ = 1/aⁿ**

Exemples :
- 2⁻¹ = 1/2¹ = 1/2 = 0,5
- 10⁻² = 1/10² = 1/100 = 0,01
- 5⁻³ = 1/5³ = 1/125 = 0,008

## À retenir

✅ aⁿ = a × a × ... × a (n fois)
✅ a¹ = a
✅ a⁰ = 1 (si a ≠ 0)
✅ a⁻ⁿ = 1/aⁿ
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '4e-puissances-regles-calcul',
    title: 'Règles de calcul',
    description: 'Produit, quotient et puissance de puissance',
    icon: '🧮',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Règles de calcul avec les puissances

## 1. Produit de puissances de même base

Pour multiplier deux puissances de **même base**, on **additionne les exposants** :

**aᵐ × aⁿ = aᵐ⁺ⁿ**

### Exemples
- 2³ × 2⁵ = 2³⁺⁵ = 2⁸ = 256
- 10² × 10⁴ = 10²⁺⁴ = 10⁶ = 1 000 000
- 5⁴ × 5⁻² = 5⁴⁺⁽⁻²⁾ = 5² = 25

### Démonstration
2³ × 2⁵ = (2 × 2 × 2) × (2 × 2 × 2 × 2 × 2) = 2⁸

## 2. Quotient de puissances de même base

Pour diviser deux puissances de **même base**, on **soustrait les exposants** :

**aᵐ ÷ aⁿ = aᵐ⁻ⁿ**

### Exemples
- 2⁷ ÷ 2³ = 2⁷⁻³ = 2⁴ = 16
- 10⁵ ÷ 10² = 10⁵⁻² = 10³ = 1 000
- 3⁶ ÷ 3⁶ = 3⁶⁻⁶ = 3⁰ = 1

### Démonstration
2⁷ ÷ 2³ = (2×2×2×2×2×2×2) ÷ (2×2×2) = 2×2×2×2 = 2⁴

## 3. Puissance d'une puissance

Pour élever une puissance à une autre puissance, on **multiplie les exposants** :

**(aᵐ)ⁿ = aᵐˣⁿ**

### Exemples
- (2³)² = 2³ˣ² = 2⁶ = 64
- (10²)⁴ = 10²ˣ⁴ = 10⁸ = 100 000 000
- (5²)³ = 5²ˣ³ = 5⁶ = 15 625

### Démonstration
(2³)² = 2³ × 2³ = (2×2×2) × (2×2×2) = 2⁶

## 4. Puissance d'un produit

La puissance d'un produit est égale au produit des puissances :

**(a × b)ⁿ = aⁿ × bⁿ**

### Exemples
- (2 × 3)² = 2² × 3² = 4 × 9 = 36
- (5 × 10)³ = 5³ × 10³ = 125 × 1000 = 125 000

## 5. Puissance d'un quotient

La puissance d'un quotient est égale au quotient des puissances :

**(a/b)ⁿ = aⁿ/bⁿ**

### Exemples
- (3/2)² = 3²/2² = 9/4 = 2,25
- (10/5)³ = 10³/5³ = 1000/125 = 8

## Tableau récapitulatif

| Règle | Formule | Exemple |
|-------|---------|---------|
| Produit | aᵐ × aⁿ = aᵐ⁺ⁿ | 2³ × 2⁵ = 2⁸ |
| Quotient | aᵐ ÷ aⁿ = aᵐ⁻ⁿ | 2⁷ ÷ 2³ = 2⁴ |
| Puissance de puissance | (aᵐ)ⁿ = aᵐˣⁿ | (2³)² = 2⁶ |
| Puissance de produit | (a×b)ⁿ = aⁿ×bⁿ | (2×3)² = 4×9 |
| Puissance de quotient | (a/b)ⁿ = aⁿ/bⁿ | (3/2)² = 9/4 |

## À retenir

✅ Même base + multiplication → on **additionne** les exposants
✅ Même base + division → on **soustrait** les exposants
✅ Puissance de puissance → on **multiplie** les exposants
    `,
    aiQuizQuestionCount: 12
  },
  {
    id: '4e-puissances-10',
    title: 'Puissances de 10',
    description: 'Notation scientifique et ordres de grandeur',
    icon: '🔟',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Puissances de 10

## Les puissances de 10 positives

Les puissances de 10 permettent d'écrire facilement les grands nombres.

### Tableau des puissances de 10

| Puissance | Valeur | Nom |
|-----------|--------|-----|
| 10⁰ | 1 | un |
| 10¹ | 10 | dix |
| 10² | 100 | cent |
| 10³ | 1 000 | mille |
| 10⁴ | 10 000 | dix mille |
| 10⁵ | 100 000 | cent mille |
| 10⁶ | 1 000 000 | million |
| 10⁹ | 1 000 000 000 | milliard |
| 10¹² | 1 000 000 000 000 | billion |

### Règle pratique
**10ⁿ = 1 suivi de n zéros**

Exemples :
- 10³ = 1 000 (1 suivi de 3 zéros)
- 10⁶ = 1 000 000 (1 suivi de 6 zéros)

## Les puissances de 10 négatives

Les puissances de 10 négatives permettent d'écrire les petits nombres.

### Tableau des puissances de 10 négatives

| Puissance | Valeur | Nom |
|-----------|--------|-----|
| 10⁻¹ | 0,1 | dixième |
| 10⁻² | 0,01 | centième |
| 10⁻³ | 0,001 | millième |
| 10⁻⁴ | 0,000 1 | dix-millième |
| 10⁻⁵ | 0,000 01 | cent-millième |
| 10⁻⁶ | 0,000 001 | millionième |
| 10⁻⁹ | 0,000 000 001 | milliardième |

### Règle pratique
**10⁻ⁿ = 0, suivi de (n-1) zéros puis 1**

Exemples :
- 10⁻³ = 0,001 (0, puis 2 zéros puis 1)
- 10⁻⁶ = 0,000 001 (0, puis 5 zéros puis 1)

## Notation scientifique

La **notation scientifique** permet d'écrire n'importe quel nombre sous la forme :

**a × 10ⁿ**

où :
- **1 ≤ a < 10** (a a un seul chiffre avant la virgule)
- **n** est un entier relatif

### Exemples de grands nombres

- 3 000 = 3 × 10³
- 45 000 = 4,5 × 10⁴
- 123 000 000 = 1,23 × 10⁸
- Vitesse de la lumière : 300 000 000 m/s = 3 × 10⁸ m/s
- Distance Terre-Soleil : 150 000 000 km = 1,5 × 10⁸ km

### Exemples de petits nombres

- 0,05 = 5 × 10⁻²
- 0,000 7 = 7 × 10⁻⁴
- 0,000 000 12 = 1,2 × 10⁻⁷
- Taille d'un atome : 0,000 000 000 1 m = 1 × 10⁻¹⁰ m
- Masse d'un électron : 0,000 000 000 000 000 000 000 000 000 000 911 kg = 9,11 × 10⁻³¹ kg

## Calculs avec les puissances de 10

### Multiplication
(a × 10ᵐ) × (b × 10ⁿ) = (a × b) × 10ᵐ⁺ⁿ

Exemple :
(2 × 10³) × (3 × 10⁵) = (2 × 3) × 10³⁺⁵ = 6 × 10⁸

### Division
(a × 10ᵐ) ÷ (b × 10ⁿ) = (a ÷ b) × 10ᵐ⁻ⁿ

Exemple :
(8 × 10⁷) ÷ (2 × 10³) = (8 ÷ 2) × 10⁷⁻³ = 4 × 10⁴

## Applications pratiques

### Ordres de grandeur

Les puissances de 10 permettent de comparer rapidement des grandeurs :

- Taille d'une bactérie : 10⁻⁶ m
- Taille d'un cheveu : 10⁻⁴ m
- Taille d'un humain : 10⁰ m (1 m)
- Hauteur de l'Everest : 10⁴ m
- Rayon de la Terre : 10⁷ m

## À retenir

✅ 10ⁿ = 1 suivi de n zéros
✅ 10⁻ⁿ = 1/10ⁿ
✅ Notation scientifique : a × 10ⁿ avec 1 ≤ a < 10
✅ Pour multiplier : on additionne les exposants
✅ Pour diviser : on soustrait les exposants
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '4e-puissances-exercices',
    title: 'Exercices d\'application',
    description: 'Mettre en pratique les règles des puissances',
    icon: '✏️',
    activities: ['exercise', 'mcq'],
    lessonContent: `
# Exercices sur les puissances

## Exercice 1 : Calculs simples

Calculer les puissances suivantes :

1. 2⁴ = ?
2. 3³ = ?
3. 5² = ?
4. 10⁵ = ?
5. 2⁰ = ?
6. 7¹ = ?

## Exercice 2 : Puissances négatives

Calculer :

1. 2⁻³ = ?
2. 10⁻² = ?
3. 5⁻¹ = ?
4. 3⁻² = ?

## Exercice 3 : Produits de puissances

Simplifier les expressions suivantes :

1. 2³ × 2⁵ = ?
2. 10² × 10⁴ = ?
3. 5⁴ × 5⁻² = ?
4. 3⁶ × 3⁰ = ?

## Exercice 4 : Quotients de puissances

Simplifier :

1. 2⁸ ÷ 2³ = ?
2. 10⁷ ÷ 10² = ?
3. 5⁹ ÷ 5⁴ = ?
4. 3⁵ ÷ 3⁵ = ?

## Exercice 5 : Puissance de puissance

Calculer :

1. (2²)³ = ?
2. (10³)² = ?
3. (5²)⁴ = ?

## Exercice 6 : Notation scientifique

Écrire en notation scientifique :

1. 4 500 = ?
2. 0,000 32 = ?
3. 125 000 000 = ?
4. 0,000 000 007 = ?

## Exercice 7 : Problèmes

**Problème 1 :** La distance entre la Terre et la Lune est d'environ 384 000 km. Écrire cette distance en notation scientifique.

**Problème 2 :** Un ordinateur effectue 2³⁰ opérations par seconde. Combien d'opérations effectue-t-il en 2⁵ secondes ?

**Problème 3 :** La masse d'un atome d'hydrogène est environ 1,67 × 10⁻²⁷ kg. Quelle est la masse de 10⁶ atomes d'hydrogène ?
    `,
    aiQuizQuestionCount: 15
  }
];


import type { SubChapter } from '../../../types/curriculum';

// Sous-chapitres pour le chapitre "Calcul Numérique" en 6ème
// Inspiré de la structure de Math-Coaching
export const calculNumeriqueSubChapters: SubChapter[] = [
  {
    id: '6e-calcul-vocabulaire',
    title: 'Vocabulaire',
    description: 'Comprendre les termes mathématiques de base',
    icon: '📖',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# Vocabulaire du Calcul Numérique

## Les opérations de base

### Addition
- **Somme** : Le résultat d'une addition
- **Termes** : Les nombres que l'on additionne
- Exemple : Dans 5 + 3 = 8, les termes sont 5 et 3, et la somme est 8

### Soustraction
- **Différence** : Le résultat d'une soustraction
- **Termes** : Le nombre de départ et le nombre à soustraire
- Exemple : Dans 10 - 4 = 6, la différence est 6

### Multiplication
- **Produit** : Le résultat d'une multiplication
- **Facteurs** : Les nombres que l'on multiplie
- Exemple : Dans 4 × 5 = 20, les facteurs sont 4 et 5, et le produit est 20

### Division
- **Quotient** : Le résultat d'une division
- **Dividende** : Le nombre à diviser
- **Diviseur** : Le nombre par lequel on divise
- Exemple : Dans 15 ÷ 3 = 5, le dividende est 15, le diviseur est 3, et le quotient est 5
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '6e-calcul-priorites',
    title: 'Règles de priorité (PEMDAS)',
    description: 'Ordre de priorité des opérations',
    icon: '🎯',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# Ordre de Priorité des Opérations

## La règle PEMDAS

Pour calculer une expression avec plusieurs opérations, il faut respecter cet ordre :

1. **P**arenthèses : On calcule d'abord ce qui est entre parenthèses
2. **E**xposants : Puis les puissances (on verra ça plus tard)
3. **M**ultiplication et **D**ivision : De gauche à droite
4. **A**ddition et **S**oustraction : De gauche à droite

## Exemples

### Exemple 1
Calculer : 5 + 3 × 2

❌ Faux : (5 + 3) × 2 = 8 × 2 = 16
✅ Correct : 5 + (3 × 2) = 5 + 6 = 11

On fait d'abord la multiplication !

### Exemple 2
Calculer : (8 - 2) × 3 + 4

1. Parenthèses : (8 - 2) = 6
2. Multiplication : 6 × 3 = 18
3. Addition : 18 + 4 = 22

Résultat : 22
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '6e-calcul-addition',
    title: 'Addition',
    description: 'Techniques d\'addition rapide',
    icon: '➕',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# Techniques d'Addition

## Technique 1 : La Décomposition

On décompose les nombres pour faciliter le calcul.

**Exemple :** 47 + 28
- 47 + 28 = 47 + 20 + 8
- = 67 + 8
- = 75

## Technique 2 : La Compensation

On arrondit un nombre, puis on compense.

**Exemple :** 47 + 28
- 47 + 28 = 47 + 30 - 2
- = 77 - 2
- = 75

## Astuce : Chercher les compléments à 10

**Exemple :** 7 + 8 + 3
- On voit que 7 + 3 = 10
- Donc : 7 + 8 + 3 = 10 + 8 = 18
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '6e-calcul-soustraction',
    title: 'Soustraction',
    description: 'Techniques de soustraction rapide',
    icon: '➖',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# Techniques de Soustraction

## Technique 1 : La Décomposition

**Exemple :** 75 - 28
- 75 - 28 = 75 - 20 - 8
- = 55 - 8
- = 47

## Technique 2 : La Compensation

On arrondit le nombre à soustraire.

**Exemple :** 75 - 28
- 75 - 28 = 75 - 30 + 2
- = 45 + 2
- = 47

## Technique 3 : Compter à partir du plus petit

**Exemple :** 75 - 28 = ?
- De 28 à 30 : +2
- De 30 à 70 : +40
- De 70 à 75 : +5
- Total : 2 + 40 + 5 = 47
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '6e-calcul-multiplication',
    title: 'Multiplication',
    description: 'Tables et techniques de multiplication',
    icon: '✖️',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# Techniques de Multiplication

## Les Tables de Multiplication

Il est essentiel de connaître les tables de 1 à 10 par cœur !

## Technique 1 : La Décomposition

**Exemple :** 15 × 6
- 15 × 6 = (10 + 5) × 6
- = 10 × 6 + 5 × 6
- = 60 + 30
- = 90

## Technique 2 : Multiplication Progressive

**Exemple :** 12 × 8
- 12 × 8 = 12 × 2 × 2 × 2
- = 24 × 2 × 2
- = 48 × 2
- = 96

## Astuce : Multiplier par 5

Pour multiplier par 5, on peut multiplier par 10 et diviser par 2.

**Exemple :** 24 × 5
- 24 × 5 = (24 × 10) ÷ 2
- = 240 ÷ 2
- = 120
    `,
    aiQuizQuestionCount: 10
  },
  {
    id: '6e-calcul-division',
    title: 'Division',
    description: 'Critères de divisibilité et techniques de division',
    icon: '➗',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# La Division

## Critères de Divisibilité

### Divisible par 2
Un nombre est divisible par 2 s'il se termine par 0, 2, 4, 6 ou 8.
Exemple : 24, 56, 100

### Divisible par 3
Un nombre est divisible par 3 si la somme de ses chiffres est divisible par 3.
Exemple : 123 → 1 + 2 + 3 = 6 (divisible par 3) ✓

### Divisible par 5
Un nombre est divisible par 5 s'il se termine par 0 ou 5.
Exemple : 25, 60, 135

### Divisible par 9
Un nombre est divisible par 9 si la somme de ses chiffres est divisible par 9.
Exemple : 729 → 7 + 2 + 9 = 18 (divisible par 9) ✓

### Divisible par 10
Un nombre est divisible par 10 s'il se termine par 0.
Exemple : 50, 120, 1000

## Division Euclidienne

Dans une division euclidienne :
- **Dividende** = **Diviseur** × **Quotient** + **Reste**

**Exemple :** 17 ÷ 5
- 17 = 5 × 3 + 2
- Quotient : 3
- Reste : 2
    `,
    aiQuizQuestionCount: 10
  }
];


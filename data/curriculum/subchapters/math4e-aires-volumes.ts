import type { SubChapter } from '../../../types/curriculum';

// Sous-chapitres pour le chapitre "Aires et Volumes" en 4ème
export const airesVolumesSubChapters: SubChapter[] = [
  {
    id: '4e-aires-figures-planes',
    title: 'Aires des figures planes',
    description: 'Formules d\'aires : carré, rectangle, triangle, disque',
    icon: '📐',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Aires des figures planes

## 1. Le carré

### Schéma
\`\`\`
    ┌─────┐
    │     │ c
    │     │
    └─────┘
      c
\`\`\`

### Formule
**Aire = côté × côté = c²**

### Exemple
Carré de côté 5 cm :
- Aire = 5² = 25 cm²

---

## 2. Le rectangle

### Schéma
\`\`\`
    ┌─────────┐
    │         │ l (largeur)
    └─────────┘
        L (longueur)
\`\`\`

### Formule
**Aire = Longueur × largeur = L × l**

### Exemple
Rectangle de 8 cm sur 5 cm :
- Aire = 8 × 5 = 40 cm²

---

## 3. Le triangle

### Schéma
\`\`\`
      /\\
     /  \\  h (hauteur)
    /____\\
       b (base)
\`\`\`

### Formule
**Aire = (base × hauteur) ÷ 2 = (b × h) ÷ 2**

⚠️ **Important :** La hauteur doit être **perpendiculaire** à la base !

### Exemples

**Exemple 1 :** Triangle de base 6 cm et hauteur 4 cm
- Aire = (6 × 4) ÷ 2 = 24 ÷ 2 = 12 cm²

**Exemple 2 :** Triangle rectangle de côtés 3 cm et 4 cm
- Les deux côtés de l'angle droit peuvent servir de base et hauteur
- Aire = (3 × 4) ÷ 2 = 6 cm²

---

## 4. Le parallélogramme

### Schéma
\`\`\`
     ┌────────┐
    /        /  h (hauteur)
   /________/
       b (base)
\`\`\`

### Formule
**Aire = base × hauteur = b × h**

⚠️ **Attention :** On ne multiplie PAS les deux côtés ! Il faut la hauteur perpendiculaire.

### Exemple
Parallélogramme de base 7 cm et hauteur 5 cm :
- Aire = 7 × 5 = 35 cm²

---

## 5. Le losange

### Schéma
\`\`\`
      /\\
     /  \\
    <    >  D (grande diagonale)
     \\  /
      \\/
      d (petite diagonale)
\`\`\`

### Formule
**Aire = (grande diagonale × petite diagonale) ÷ 2 = (D × d) ÷ 2**

### Exemple
Losange avec diagonales 10 cm et 6 cm :
- Aire = (10 × 6) ÷ 2 = 60 ÷ 2 = 30 cm²

---

## 6. Le trapèze

### Schéma
\`\`\`
     ┌────┐  b (petite base)
    /      \\  h (hauteur)
   /________\\
        B (grande base)
\`\`\`

### Formule
**Aire = [(grande base + petite base) × hauteur] ÷ 2 = [(B + b) × h] ÷ 2**

### Exemple
Trapèze avec bases 8 cm et 5 cm, hauteur 4 cm :
- Aire = [(8 + 5) × 4] ÷ 2 = (13 × 4) ÷ 2 = 52 ÷ 2 = 26 cm²

---

## 7. Le disque (cercle)

### Schéma
\`\`\`
      ___
    /     \\
   |   •   |  r (rayon)
    \\_____/
\`\`\`

### Formule
**Aire = π × rayon² = π × r²**

avec π ≈ 3,14 ou π ≈ 3,1416

### Exemples

**Exemple 1 :** Disque de rayon 3 cm
- Aire = π × 3² = π × 9 ≈ 28,27 cm²

**Exemple 2 :** Disque de diamètre 10 cm (donc rayon 5 cm)
- Aire = π × 5² = π × 25 ≈ 78,54 cm²

---

## Tableau récapitulatif

| Figure | Formule | Exemple (résultat) |
|--------|---------|-------------------|
| Carré | c² | c=5 → 25 cm² |
| Rectangle | L × l | 8×5 → 40 cm² |
| Triangle | (b × h) ÷ 2 | (6×4)÷2 → 12 cm² |
| Parallélogramme | b × h | 7×5 → 35 cm² |
| Losange | (D × d) ÷ 2 | (10×6)÷2 → 30 cm² |
| Trapèze | [(B+b) × h] ÷ 2 | [(8+5)×4]÷2 → 26 cm² |
| Disque | π × r² | r=3 → 28,27 cm² |

## Unités d'aire

- mm² (millimètre carré)
- cm² (centimètre carré)
- dm² (décimètre carré)
- m² (mètre carré)
- km² (kilomètre carré)

### Conversions
- 1 cm² = 100 mm²
- 1 dm² = 100 cm²
- 1 m² = 100 dm² = 10 000 cm²
- 1 km² = 1 000 000 m²

## À retenir

✅ Carré : c²
✅ Rectangle : L × l
✅ Triangle : (b × h) ÷ 2
✅ Disque : π × r²
✅ Toujours utiliser la hauteur perpendiculaire !
✅ Penser aux unités (cm², m², etc.)
    `,
    aiQuizQuestionCount: 12
  },
  {
    id: '4e-volumes-solides',
    title: 'Volumes des solides',
    description: 'Formules de volumes : cube, pavé, cylindre, pyramide, cône',
    icon: '📦',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Volumes des solides

## 1. Le cube

### Représentation 3D
\`\`\`
      ┌─────┐
     /│    /│
    ┌─────┐ │  c (arête)
    │ │   │ │
    │ └───│─┘
    └─────┘
\`\`\`

### Formule
**Volume = arête³ = c³**

### Exemple
Cube d'arête 4 cm :
- Volume = 4³ = 64 cm³

---

## 2. Le pavé droit (parallélépipède rectangle)

### Représentation 3D
\`\`\`
      ┌─────────┐
     /│        /│
    ┌─────────┐ │  h (hauteur)
    │ │       │ │
    │ └───────│─┘
    └─────────┘
      L × l (base)
\`\`\`

### Formule
**Volume = Longueur × largeur × hauteur = L × l × h**

### Exemple
Pavé de dimensions 6 cm × 4 cm × 3 cm :
- Volume = 6 × 4 × 3 = 72 cm³

---

## 3. Le prisme droit

### Représentation
\`\`\`
      ┌─────┐
     /│    /│
    / │   / │  h (hauteur)
   ┌─────┐  │
   │  └──│──┘
   └─────┘
    Base
\`\`\`

### Formule
**Volume = Aire de la base × hauteur = A_base × h**

### Exemple
Prisme à base triangulaire :
- Base : triangle de 5 cm de base et 4 cm de hauteur
- Hauteur du prisme : 10 cm
- Aire de la base = (5 × 4) ÷ 2 = 10 cm²
- Volume = 10 × 10 = 100 cm³

---

## 4. Le cylindre

### Représentation
\`\`\`
      ___
     /   \\
    |     |
    |     |  h (hauteur)
    |     |
     \\___/
       r (rayon)
\`\`\`

### Formule
**Volume = π × rayon² × hauteur = π × r² × h**

### Exemples

**Exemple 1 :** Cylindre de rayon 3 cm et hauteur 5 cm
- Volume = π × 3² × 5 = π × 9 × 5 = 45π ≈ 141,37 cm³

**Exemple 2 :** Canette de soda (rayon 3 cm, hauteur 12 cm)
- Volume = π × 3² × 12 = 108π ≈ 339,29 cm³

---

## 5. La pyramide

### Représentation
\`\`\`
       /\\
      /  \\
     /    \\  h (hauteur)
    /      \\
   /________\\
      Base
\`\`\`

### Formule
**Volume = (Aire de la base × hauteur) ÷ 3 = (A_base × h) ÷ 3**

### Exemples

**Exemple 1 :** Pyramide à base carrée (côté 6 cm, hauteur 9 cm)
- Aire de la base = 6² = 36 cm²
- Volume = (36 × 9) ÷ 3 = 324 ÷ 3 = 108 cm³

**Exemple 2 :** Pyramide de Khéops (base 230 m, hauteur 146 m)
- Aire de la base = 230² = 52 900 m²
- Volume = (52 900 × 146) ÷ 3 ≈ 2 575 067 m³

---

## 6. Le cône

### Représentation
\`\`\`
       /\\
      /  \\
     /    \\  h (hauteur)
    /      \\
   /________\\
       r (rayon)
\`\`\`

### Formule
**Volume = (π × rayon² × hauteur) ÷ 3 = (π × r² × h) ÷ 3**

### Exemples

**Exemple 1 :** Cône de rayon 4 cm et hauteur 6 cm
- Volume = (π × 4² × 6) ÷ 3 = (π × 16 × 6) ÷ 3 = 96π ÷ 3 = 32π ≈ 100,53 cm³

**Exemple 2 :** Cornet de glace (rayon 3 cm, hauteur 10 cm)
- Volume = (π × 3² × 10) ÷ 3 = 90π ÷ 3 = 30π ≈ 94,25 cm³

---

## 7. La boule (sphère)

### Représentation
\`\`\`
      ___
    /     \\
   |   •   |  r (rayon)
    \\_____/
\`\`\`

### Formule
**Volume = (4 × π × rayon³) ÷ 3 = (4πr³) ÷ 3**

### Exemples

**Exemple 1 :** Boule de rayon 3 cm
- Volume = (4 × π × 3³) ÷ 3 = (4 × π × 27) ÷ 3 = 108π ÷ 3 = 36π ≈ 113,10 cm³

**Exemple 2 :** Ballon de football (rayon 11 cm)
- Volume = (4 × π × 11³) ÷ 3 ≈ 5 575,28 cm³

---

## Tableau récapitulatif

| Solide | Formule | Exemple |
|--------|---------|---------|
| Cube | c³ | c=4 → 64 cm³ |
| Pavé | L × l × h | 6×4×3 → 72 cm³ |
| Prisme | A_base × h | 10×10 → 100 cm³ |
| Cylindre | π × r² × h | π×3²×5 → 141,37 cm³ |
| Pyramide | (A_base × h) ÷ 3 | (36×9)÷3 → 108 cm³ |
| Cône | (π × r² × h) ÷ 3 | (π×4²×6)÷3 → 100,53 cm³ |
| Boule | (4πr³) ÷ 3 | (4π×3³)÷3 → 113,10 cm³ |

## Relation entre solides

### Cylindre et Cône
**Volume du cône = Volume du cylindre ÷ 3**

Pour même rayon et même hauteur :
- Cylindre : π × r² × h
- Cône : (π × r² × h) ÷ 3

### Prisme et Pyramide
**Volume de la pyramide = Volume du prisme ÷ 3**

Pour même base et même hauteur :
- Prisme : A_base × h
- Pyramide : (A_base × h) ÷ 3

## Unités de volume

- mm³ (millimètre cube)
- cm³ (centimètre cube)
- dm³ (décimètre cube) = 1 litre
- m³ (mètre cube)

### Conversions
- 1 cm³ = 1 000 mm³
- 1 dm³ = 1 000 cm³ = 1 litre
- 1 m³ = 1 000 dm³ = 1 000 litres
- 1 m³ = 1 000 000 cm³

## À retenir

✅ Cube : c³
✅ Pavé : L × l × h
✅ Cylindre : π × r² × h
✅ Pyramide et cône : on divise par 3
✅ 1 dm³ = 1 litre
✅ Penser aux unités (cm³, m³, litres)
    `,
    aiQuizQuestionCount: 15
  },
  {
    id: '4e-aires-volumes-exercices',
    title: 'Exercices pratiques',
    description: 'Problèmes d\'application sur les aires et volumes',
    icon: '✏️',
    activities: ['exercise', 'mcq'],
    lessonContent: `
# Exercices sur les aires et volumes

## Exercices sur les aires

### Exercice 1 : Figures simples
Calculer l'aire des figures suivantes :

1. Un carré de côté 7 cm
2. Un rectangle de 12 cm sur 5 cm
3. Un triangle de base 8 cm et hauteur 6 cm
4. Un disque de rayon 4 cm (π ≈ 3,14)

### Exercice 2 : Figures composées
Un terrain a la forme d'un rectangle de 20 m sur 15 m avec un demi-disque de rayon 7,5 m à une extrémité.

**Questions :**
a) Calculer l'aire du rectangle
b) Calculer l'aire du demi-disque
c) Calculer l'aire totale du terrain

### Exercice 3 : Le jardin
Marie veut semer de la pelouse dans son jardin rectangulaire de 8 m sur 6 m.
Un sac de graines couvre 10 m² et coûte 15 €.

**Questions :**
a) Quelle est l'aire du jardin ?
b) Combien de sacs doit-elle acheter ?
c) Quel sera le coût total ?

### Exercice 4 : La piscine
Une piscine circulaire a un diamètre de 5 m.

**Questions :**
a) Quel est son rayon ?
b) Calculer l'aire de la surface de l'eau
c) On veut installer une bâche qui dépasse de 50 cm tout autour. Quel rayon aura la bâche ?
d) Quelle sera l'aire de la bâche ?

---

## Exercices sur les volumes

### Exercice 5 : Solides simples
Calculer le volume des solides suivants :

1. Un cube d'arête 5 cm
2. Un pavé de dimensions 8 cm × 6 cm × 4 cm
3. Un cylindre de rayon 3 cm et hauteur 10 cm
4. Une pyramide à base carrée (côté 6 cm, hauteur 8 cm)

### Exercice 6 : L'aquarium
Un aquarium a la forme d'un pavé droit de dimensions :
- Longueur : 80 cm
- Largeur : 40 cm
- Hauteur : 50 cm

**Questions :**
a) Calculer le volume de l'aquarium en cm³
b) Convertir ce volume en litres (1 dm³ = 1 L)
c) On remplit l'aquarium aux 3/4. Combien de litres d'eau contient-il ?

### Exercice 7 : Les boîtes de conserve
Une boîte de conserve cylindrique a :
- Rayon : 4 cm
- Hauteur : 12 cm

**Questions :**
a) Calculer le volume de la boîte
b) Convertir en litres
c) Combien de boîtes peut-on remplir avec 10 litres de soupe ?

### Exercice 8 : La pyramide
La pyramide du Louvre à Paris a :
- Base carrée de côté 35 m
- Hauteur : 21,6 m

**Questions :**
a) Calculer l'aire de la base
b) Calculer le volume de la pyramide
c) Comparer avec un cube de 20 m d'arête

### Exercice 9 : Le silo à grains
Un silo à grains a la forme d'un cylindre surmonté d'un cône :
- Rayon : 3 m
- Hauteur du cylindre : 8 m
- Hauteur du cône : 2 m

**Questions :**
a) Calculer le volume du cylindre
b) Calculer le volume du cône
c) Calculer le volume total du silo
d) Sachant qu'1 m³ de blé pèse 800 kg, quelle masse de blé peut contenir le silo ?

### Exercice 10 : Comparaison
On compare deux récipients :
- Récipient A : cube d'arête 10 cm
- Récipient B : cylindre de rayon 5 cm et hauteur 13 cm

**Questions :**
a) Calculer le volume de A
b) Calculer le volume de B
c) Lequel contient le plus ?
d) Quelle est la différence de volume ?

---

## Problèmes de synthèse

### Problème 1 : La peinture
On veut peindre les murs d'une pièce rectangulaire :
- Longueur : 5 m
- Largeur : 4 m
- Hauteur : 2,5 m
- La pièce a une porte (2 m × 0,8 m) et une fenêtre (1,5 m × 1,2 m)

**Questions :**
a) Calculer l'aire totale des 4 murs
b) Soustraire l'aire de la porte et de la fenêtre
c) Un pot de peinture couvre 10 m². Combien de pots faut-il ?

### Problème 2 : Le réservoir
Un réservoir d'eau a la forme d'un cylindre de rayon 1,5 m et hauteur 3 m.

**Questions :**
a) Calculer le volume en m³
b) Convertir en litres
c) Le réservoir se remplit à raison de 50 L par minute. Combien de temps faut-il pour le remplir ?
d) L'eau coûte 0,004 € par litre. Quel est le coût pour remplir le réservoir ?

### Problème 3 : Les emballages
Une entreprise fabrique des boîtes cubiques de 20 cm d'arête et des boîtes cylindriques de rayon 10 cm et hauteur 25 cm.

**Questions :**
a) Volume de la boîte cubique ?
b) Volume de la boîte cylindrique ?
c) Laquelle est la plus économique en matériau pour un même volume ?
d) Combien de boîtes cubiques faut-il pour égaler le volume de 10 boîtes cylindriques ?

---

## Défis

### Défi 1
Un terrain rectangulaire de 30 m sur 20 m contient :
- Une maison rectangulaire de 12 m sur 8 m
- Une piscine circulaire de rayon 3 m
- Le reste est du gazon

Quelle est l'aire de gazon ?

### Défi 2
On veut fabriquer une boîte sans couvercle en forme de pavé :
- Base : 15 cm × 10 cm
- Volume souhaité : 900 cm³

Quelle doit être la hauteur de la boîte ?

### Défi 3
Un verre conique a un rayon de 4 cm et une hauteur de 12 cm.
On le remplit d'eau jusqu'à la moitié de sa hauteur.

Quel volume d'eau contient-il ?
(Attention : ce n'est pas la moitié du volume total !)
    `,
    aiQuizQuestionCount: 20
  }
];


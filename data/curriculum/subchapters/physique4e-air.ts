import type { SubChapter } from '../../../types/curriculum';
import { physique4eAirMCQs, physique4eAirFlashcards } from '../../physique4eAirData';

// Sous-chapitres pour le chapitre "L'air qui nous entoure" en 4ème
export const airSubChapters: SubChapter[] = [
  {
    id: '4e-air-composition',
    title: 'Composition de l\'air',
    description: 'Les gaz qui composent l\'air',
    icon: '🌬️',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Composition de l'air

## 1. L'air : un mélange de gaz

L'air qui nous entoure n'est pas un corps pur, mais un **mélange de plusieurs gaz**.

### Schéma : Composition de l'air
\`\`\`
    ┌─────────────────────────────┐
    │                             │
    │   DIAZOTE (N₂)              │
    │   78%                       │
    │   ███████████████████       │
    │                             │
    │   DIOXYGÈNE (O₂)            │
    │   21%                       │
    │   █████                     │
    │                             │
    │   AUTRES GAZ                │
    │   1% (Argon, CO₂, etc.)     │
    │   █                         │
    │                             │
    └─────────────────────────────┘
\`\`\`

## 2. Les principaux constituants

### Le diazote (N₂)
- **Proportion** : 78% de l'air
- **Formule chimique** : N₂ (molécule composée de 2 atomes d'azote)
- **Propriétés** : Gaz inerte, incolore, inodore
- **Rôle** : Dilue le dioxygène, évite les combustions trop rapides

### Le dioxygène (O₂)
- **Proportion** : 21% de l'air
- **Formule chimique** : O₂ (molécule composée de 2 atomes d'oxygène)
- **Propriétés** : Gaz comburant, incolore, inodore
- **Rôle** : Indispensable à la respiration et aux combustions

### Les autres gaz (1%)
- **Argon (Ar)** : 0,9%
- **Dioxyde de carbone (CO₂)** : 0,04%
- **Vapeur d'eau (H₂O)** : variable
- **Gaz rares** : néon, hélium, krypton, xénon

## 3. Représentation moléculaire

### Molécule de diazote (N₂)
\`\`\`
    N ≡ N
    
    (liaison triple)
\`\`\`

### Molécule de dioxygène (O₂)
\`\`\`
    O = O
    
    (liaison double)
\`\`\`

### Molécule de dioxyde de carbone (CO₂)
\`\`\`
    O = C = O
    
    (deux liaisons doubles)
\`\`\`

## 4. Expérience : Mise en évidence du dioxygène

### Protocole
1. Prendre une bougie allumée
2. La placer dans un bocal fermé
3. Observer ce qui se passe

### Observation
La bougie s'éteint après quelques secondes.

### Interprétation
- La combustion consomme le dioxygène
- Quand il n'y a plus assez de dioxygène, la combustion s'arrête
- Cela prouve que l'air contient du dioxygène

## 5. Tableau récapitulatif

| Gaz | Formule | Proportion | Propriété principale |
|-----|---------|------------|---------------------|
| Diazote | N₂ | 78% | Gaz inerte |
| Dioxygène | O₂ | 21% | Comburant (respiration) |
| Argon | Ar | 0,9% | Gaz rare |
| Dioxyde de carbone | CO₂ | 0,04% | Produit de combustion |

## 6. À retenir

✅ L'air est un **mélange de gaz**
✅ Principaux constituants : **diazote (78%)** et **dioxygène (21%)**
✅ Le dioxygène est **indispensable à la vie** et aux combustions
✅ Le diazote **dilue** le dioxygène
✅ L'air contient aussi de la **vapeur d'eau** et du **CO₂**

## 7. Vocabulaire

- **Diazote** : Gaz majoritaire dans l'air (N₂)
- **Dioxygène** : Gaz nécessaire à la respiration (O₂)
- **Comburant** : Substance qui permet la combustion
- **Gaz inerte** : Gaz qui ne réagit pas facilement
- **Mélange** : Association de plusieurs substances

## 8. Applications

### Dans la vie quotidienne
- **Respiration** : Nous inspirons du dioxygène
- **Combustions** : Le feu a besoin de dioxygène
- **Photosynthèse** : Les plantes utilisent le CO₂

### Dans l'industrie
- **Soudure** : Utilisation de diazote
- **Médecine** : Oxygène pur pour les malades
- **Alimentation** : Azote pour conserver les aliments
`,
    aiQuizQuestionCount: 12
  },

  {
    id: '4e-air-proprietes',
    title: 'Propriétés de l\'air',
    description: 'Masse, volume, compressibilité',
    icon: '⚖️',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Propriétés de l'air

## 1. L'air a une masse

### Expérience : Pesée d'un ballon
\`\`\`
    Ballon dégonflé        Ballon gonflé
    
    ┌─────┐                ┌─────────┐
    │  O  │                │    O    │
    └─────┘                └─────────┘
      ↓                        ↓
    ⚖️ 50 g                 ⚖️ 52 g
\`\`\`

### Conclusion
Le ballon gonflé est **plus lourd** que le ballon dégonflé.
➡️ **L'air a une masse !**

### Masse volumique de l'air
- **Valeur** : environ 1,3 g/L (à 20°C)
- **Comparaison** : 1000 fois moins dense que l'eau
- **Formule** : ρ = m/V (masse volumique = masse ÷ volume)

### Exemple
Un ballon de 2 litres contient :
- Masse d'air = 1,3 × 2 = 2,6 g

## 2. L'air occupe un volume

### Expérience : Le verre retourné
\`\`\`
    Étape 1 : Verre vide retourné
    
         ┌───┐
         │AIR│
         └───┘
           ↓
    ═══════════════
       Eau
    
    Étape 2 : On enfonce le verre
    
         ┌───┐
         │AIR│  ← L'air reste dans le verre
         └───┘
    ═══════════════
       Eau
\`\`\`

### Observation
L'eau ne peut pas entrer dans le verre car **l'air occupe l'espace**.

### Conclusion
L'air **occupe un volume** et empêche l'eau d'entrer.

## 3. L'air est compressible

### Expérience : La seringue
\`\`\`
    Seringue avec air
    
    ┌─────────────┐
    │ AIR         │→ Piston
    └─────────────┘
    
    On pousse le piston
    
    ┌──────┐
    │ AIR  │→→ Piston poussé
    └──────┘
    
    L'air est comprimé !
\`\`\`

### Observation
- On peut **réduire le volume** de l'air en poussant le piston
- L'air **résiste** de plus en plus

### Conclusion
L'air est **compressible** : on peut diminuer son volume en le comprimant.

## 4. L'air est expansible

### Définition
L'air peut **augmenter de volume** quand on le libère.

### Exemple
- Un ballon de baudruche gonflé : l'air comprimé se détend
- Une bouteille de plongée : l'air comprimé sort avec force

## 5. L'air est élastique

### Définition
Quand on arrête de comprimer l'air, il **reprend son volume initial**.

### Expérience
\`\`\`
    Seringue bouchée
    
    1. Volume initial : 20 mL
    2. On comprime : 10 mL
    3. On relâche : 20 mL (retour au volume initial)
\`\`\`

## 6. Tableau récapitulatif

| Propriété | Définition | Exemple |
|-----------|------------|---------|
| **Masse** | L'air a une masse | Ballon gonflé plus lourd |
| **Volume** | L'air occupe de l'espace | Verre retourné dans l'eau |
| **Compressibilité** | On peut réduire son volume | Pompe à vélo |
| **Expansibilité** | Il peut augmenter de volume | Ballon qui se gonfle |
| **Élasticité** | Il reprend sa forme | Seringue qui revient |

## 7. Applications pratiques

### Pompe à vélo
- On **comprime** l'air dans la pompe
- L'air comprimé entre dans le pneu
- Le pneu se gonfle

### Matelas pneumatique
- On souffle de l'air dedans
- L'air **occupe le volume** du matelas
- Le matelas devient ferme

### Amortisseurs
- L'air comprimé **absorbe les chocs**
- Grâce à son **élasticité**

### Plongée sous-marine
- Bouteille contient de l'air **comprimé**
- Permet de respirer sous l'eau

## 8. À retenir

✅ L'air a une **masse** (environ 1,3 g/L)
✅ L'air **occupe un volume**
✅ L'air est **compressible** (on peut réduire son volume)
✅ L'air est **expansible** (il peut augmenter de volume)
✅ L'air est **élastique** (il reprend sa forme)

## 9. Formules importantes

### Masse volumique
**ρ = m/V**
- ρ (rho) = masse volumique (g/L)
- m = masse (g)
- V = volume (L)

### Exemple de calcul
Quelle est la masse de 5 L d'air ?
- m = ρ × V = 1,3 × 5 = 6,5 g
`,
    aiQuizQuestionCount: 15
  },

  {
    id: '4e-air-pression',
    title: 'Pression atmosphérique',
    description: 'Définition, mesure, variations',
    icon: '🌡️',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Pression atmosphérique

## 1. Qu'est-ce que la pression atmosphérique ?

### Définition
La **pression atmosphérique** est la force exercée par l'air sur une surface.

### Origine
L'air a une masse et est attiré par la gravité terrestre.
➡️ L'air exerce une **pression** sur tout ce qui se trouve à la surface de la Terre.

### Schéma : Colonne d'air
\`\`\`
    Espace
      ↑
    ──────────  Limite de l'atmosphère
      │
      │  Colonne d'air
      │  (plusieurs km)
      │
      ↓
    ═══════  Surface terrestre
      ↓
    Pression exercée
\`\`\`

## 2. Mesure de la pression

### Unités de mesure
- **Pascal (Pa)** : unité internationale
- **Hectopascal (hPa)** : 1 hPa = 100 Pa
- **Bar** : 1 bar = 1000 hPa = 100 000 Pa
- **Atmosphère (atm)** : 1 atm = 1013 hPa

### Pression atmosphérique normale
**P₀ = 1013 hPa = 1,013 bar ≈ 1 atm**

Au niveau de la mer, à 15°C

### Instruments de mesure

#### Le baromètre
\`\`\`
    Baromètre à mercure
    
    ┌─────┐
    │ Vide│
    ├─────┤
    │  Hg │ 76 cm
    │  Hg │
    │  Hg │
    └──┬──┘
       │
    ═══╧═══
     Mercure
\`\`\`

**Principe** : La pression atmosphérique maintient une colonne de mercure de 76 cm.

#### Le baromètre anéroïde
\`\`\`
    ┌─────────────┐
    │   1013 hPa  │
    │      ↑      │
    │    ←●→      │ Aiguille
    │             │
    └─────────────┘
\`\`\`

**Principe** : Une capsule métallique se déforme selon la pression.

## 3. Variations de la pression

### Avec l'altitude
\`\`\`
    Altitude (m)    Pression (hPa)
    
    3000 ──────     700
    
    2000 ──────     800
    
    1000 ──────     900
    
    0    ──────     1013 (niveau mer)
\`\`\`

**Règle** : La pression **diminue** quand l'altitude **augmente**.

**Explication** : Il y a moins d'air au-dessus de nous.

### Exemple de calcul
- Au niveau de la mer : 1013 hPa
- À 1000 m d'altitude : environ 900 hPa
- À 3000 m d'altitude : environ 700 hPa

### Avec la météo

#### Anticyclone (haute pression)
- Pression > 1013 hPa
- Beau temps
- Air descendant

#### Dépression (basse pression)
- Pression < 1013 hPa
- Mauvais temps
- Air ascendant

\`\`\`
    ANTICYCLONE          DÉPRESSION
    
    ☀️ Beau temps        ☁️ Mauvais temps
    
    P > 1013 hPa        P < 1013 hPa
    
         ↓                   ↑
       Air                 Air
    descendant          ascendant
\`\`\`

## 4. Expérience : La canette écrasée

### Protocole
1. Mettre un peu d'eau dans une canette
2. Chauffer jusqu'à ébullition
3. Retourner rapidement dans l'eau froide

### Observation
La canette **s'écrase** brutalement !

### Explication
1. La vapeur d'eau chasse l'air de la canette
2. En refroidissant, la vapeur se condense
3. Il se crée un **vide partiel** dans la canette
4. La pression extérieure **écrase** la canette

\`\`\`
    Avant              Après
    
    ┌────┐            ┌─┐
    │    │            │ │ Écrasée !
    │    │            └─┘
    └────┘
    
    P int = P ext     P int < P ext
\`\`\`

## 5. Applications

### Dans la vie quotidienne
- **Ventouse** : Adhère grâce à la différence de pression
- **Pipette** : Aspire le liquide par dépression
- **Paille** : On crée une dépression en aspirant

### En altitude
- **Avion** : Cabine pressurisée
- **Montagne** : Difficulté à respirer
- **Oreilles qui se bouchent** : Différence de pression

### En météorologie
- **Prévisions** : Anticyclone = beau temps
- **Tempêtes** : Fortes dépressions
- **Vent** : Déplacement d'air des hautes vers les basses pressions

## 6. Formules et calculs

### Pression
**P = F/S**
- P = pression (Pa)
- F = force (N)
- S = surface (m²)

### Exemple
Une force de 100 N sur 1 m² :
- P = 100/1 = 100 Pa

### Conversion d'unités
- 1 bar = 100 000 Pa
- 1 hPa = 100 Pa
- 1 atm = 1013 hPa

## 7. À retenir

✅ La pression atmosphérique est la **force exercée par l'air**
✅ Valeur normale : **1013 hPa** au niveau de la mer
✅ La pression **diminue avec l'altitude**
✅ Haute pression (anticyclone) = **beau temps**
✅ Basse pression (dépression) = **mauvais temps**
✅ Instruments de mesure : **baromètre**

## 8. Tableau récapitulatif

| Situation | Pression | Conséquence |
|-----------|----------|-------------|
| Niveau de la mer | 1013 hPa | Pression normale |
| En altitude | < 1013 hPa | Difficulté à respirer |
| Anticyclone | > 1013 hPa | Beau temps |
| Dépression | < 1013 hPa | Mauvais temps |
`,
    aiQuizQuestionCount: 18
  },

  {
    id: '4e-air-molecules',
    title: 'Modèle moléculaire de l\'air',
    description: 'Molécules et agitation thermique',
    icon: '⚛️',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Modèle moléculaire de l'air

## 1. L'air est constitué de molécules

### Définition
Une **molécule** est un assemblage d'atomes liés entre eux.

### Les molécules de l'air
\`\`\`
    Diazote (N₂)        Dioxygène (O₂)

    N ≡ N               O = O


    Dioxyde de carbone (CO₂)

    O = C = O
\`\`\`

### Taille des molécules
- **Très petites** : environ 0,0000001 mm
- **Invisibles** à l'œil nu
- **Très nombreuses** : des milliards de milliards dans 1 cm³

## 2. Agitation des molécules

### Mouvement permanent
Les molécules d'air sont en **mouvement permanent** et **désordonné**.

\`\`\`
    Molécules en mouvement

    ┌─────────────────────┐
    │  •→    ←•    ↗•    │
    │    ↘•   •↑   •←    │
    │  •↓    →•    ↖•    │
    │    •↗   ←•   •↘    │
    └─────────────────────┘

    Les flèches montrent les directions
\`\`\`

### Caractéristiques du mouvement
- **Rapide** : environ 500 m/s à température ambiante
- **Désordonné** : dans toutes les directions
- **Permanent** : ne s'arrête jamais

### Chocs entre molécules
Les molécules se **heurtent** constamment :
- Entre elles
- Contre les parois

## 3. Influence de la température

### Température et vitesse
\`\`\`
    Température basse       Température élevée

    ┌──────────┐           ┌──────────┐
    │ •  •  •  │           │ •→ ←• ↗• │
    │  •  •  • │           │ ↘• •↑ •← │
    │ •  •  •  │           │ •↓ →• ↖• │
    └──────────┘           └──────────┘

    Mouvement lent         Mouvement rapide
\`\`\`

**Règle** : Plus la température est **élevée**, plus les molécules se déplacent **vite**.

### Conséquences
- **Chauffage** : Les molécules s'agitent plus ➡️ Le volume augmente
- **Refroidissement** : Les molécules ralentissent ➡️ Le volume diminue

## 4. Pression et modèle moléculaire

### Origine de la pression
La pression est due aux **chocs des molécules** contre les parois.

\`\`\`
    Paroi du récipient

    │ ←• •→ •← │
    │ •→ ←• •↗ │
    │ ←• •↓ →• │

    Chocs = Pression
\`\`\`

### Plus de molécules = Plus de pression
\`\`\`
    Peu de molécules       Beaucoup de molécules

    ┌──────────┐           ┌──────────┐
    │ •    •   │           │ •• •• •• │
    │    •     │           │ •• •• •• │
    │ •    •   │           │ •• •• •• │
    └──────────┘           └──────────┘

    Basse pression         Haute pression
\`\`\`

## 5. Compression et modèle moléculaire

### Que se passe-t-il quand on comprime l'air ?

\`\`\`
    Avant compression      Après compression

    ┌──────────┐           ┌─────┐
    │ •  •  •  │           │ • • │
    │  •  •  • │    ➡️     │ • • │
    │ •  •  •  │           │ • • │
    └──────────┘           └─────┘

    Volume grand           Volume petit
    Molécules espacées     Molécules rapprochées
\`\`\`

### Explication
- Le **volume diminue**
- Les molécules sont **plus proches**
- Il y a **plus de chocs** par unité de surface
- La **pression augmente**

## 6. Diffusion des gaz

### Définition
La **diffusion** est le mélange spontané de deux gaz.

### Expérience : Le parfum
\`\`\`
    Flacon de parfum ouvert

    t = 0s              t = 10s             t = 30s

    ┌─────┐            ┌─────┐            ┌─────┐
    │ ••• │            │ • • │            │  •  │
    │ ••• │            │• • •│            │ • • │
    │ ••• │            │ • • │            │•   •│
    └──┬──┘            └──┬──┘            └──┬──┘
       │                  │                  │
    Parfum            Diffusion          Diffusion
    concentré         partielle          complète
\`\`\`

### Explication
Les molécules de parfum se **déplacent** dans l'air grâce à leur **agitation**.

## 7. Volume et température (Loi de Charles)

### Observation
Quand on chauffe un gaz à pression constante, son volume **augmente**.

### Schéma
\`\`\`
    Ballon à température ambiante    Ballon chauffé

    ┌─────┐                          ┌───────┐
    │ • • │                          │ •   • │
    │ • • │            ➡️             │   •   │
    │ • • │          Chaleur         │ •   • │
    └─────┘                          └───────┘

    20°C                             80°C
    Volume petit                     Volume grand
\`\`\`

### Explication moléculaire
- Les molécules s'agitent **plus vite**
- Elles **s'éloignent** les unes des autres
- Le volume **augmente**

## 8. Applications

### Montgolfière
- On chauffe l'air dans le ballon
- L'air chaud **se dilate** (volume augmente)
- L'air devient **moins dense**
- La montgolfière **s'élève**

### Thermomètre à gaz
- Le gaz se dilate quand il fait chaud
- Le gaz se contracte quand il fait froid
- On mesure la variation de volume

### Pneu de voiture
- En roulant, le pneu chauffe
- L'air à l'intérieur s'agite plus
- La pression **augmente**

## 9. À retenir

✅ L'air est constitué de **molécules** en mouvement
✅ Les molécules sont en **agitation permanente**
✅ Plus la température est élevée, plus les molécules sont **rapides**
✅ La pression est due aux **chocs des molécules**
✅ La compression **rapproche** les molécules
✅ Les gaz se **diffusent** spontanément

## 10. Vocabulaire

- **Molécule** : Assemblage d'atomes
- **Agitation thermique** : Mouvement désordonné des molécules
- **Diffusion** : Mélange spontané de gaz
- **Compression** : Réduction du volume
- **Dilatation** : Augmentation du volume
`,
    aiQuizQuestionCount: 15
  },

  {
    id: '4e-air-pollution',
    title: 'Pollution de l\'air',
    description: 'Polluants, effets, solutions',
    icon: '🏭',
    activities: ['lesson', 'mcq', 'flashcard', 'exercise'],
    lessonContent: `
# Pollution de l'air

## 1. Qu'est-ce que la pollution de l'air ?

### Définition
La **pollution de l'air** est la présence dans l'atmosphère de substances qui modifient sa composition naturelle et peuvent nuire à la santé ou à l'environnement.

### Air pur vs Air pollué
\`\`\`
    Air pur                    Air pollué

    ┌──────────┐              ┌──────────┐
    │ N₂  O₂   │              │ N₂  O₂   │
    │          │              │ CO₂ ⚠️   │
    │ CO₂ (peu)│              │ CO  ⚠️   │
    │          │              │ NOₓ ⚠️   │
    └──────────┘              │ SO₂ ⚠️   │
                              │ PM  ⚠️   │
    Transparent               └──────────┘
    Respirable                Brume, smog
                              Dangereux
\`\`\`

## 2. Les principaux polluants

### Dioxyde de carbone (CO₂)
- **Source** : Combustions (voitures, usines, chauffage)
- **Effet** : Gaz à effet de serre ➡️ Réchauffement climatique
- **Concentration** : En augmentation (0,04% ➡️ 0,042%)

### Monoxyde de carbone (CO)
- **Source** : Combustions incomplètes
- **Effet** : Très toxique, empêche le transport de l'oxygène dans le sang
- **Danger** : Mortel en concentration élevée

### Oxydes d'azote (NOₓ)
- **Source** : Moteurs à combustion, industries
- **Effet** : Irritation respiratoire, pluies acides
- **Formules** : NO, NO₂

### Dioxyde de soufre (SO₂)
- **Source** : Combustion de charbon et pétrole
- **Effet** : Pluies acides, problèmes respiratoires
- **Odeur** : Piquante

### Particules fines (PM)
- **Source** : Combustions, usure des pneus, industries
- **Taille** : PM10 (< 10 μm), PM2.5 (< 2,5 μm)
- **Effet** : Pénètrent dans les poumons, maladies respiratoires

### Ozone (O₃)
- **Source** : Réaction chimique sous l'effet du soleil
- **Effet** : Irritation des yeux et des voies respiratoires
- **Particularité** : Polluant secondaire (formé dans l'atmosphère)

## 3. Sources de pollution

### Schéma des sources
\`\`\`
    🏭 INDUSTRIES          🚗 TRANSPORTS
    - CO₂, SO₂            - CO₂, CO
    - NOₓ, PM             - NOₓ, PM


    🏠 CHAUFFAGE          🔥 AGRICULTURE
    - CO₂, PM             - NH₃, CH₄
    - CO                  - Pesticides
\`\`\`

### Répartition des émissions
- **Transports** : 30%
- **Industries** : 25%
- **Chauffage résidentiel** : 20%
- **Agriculture** : 15%
- **Autres** : 10%

## 4. Effets de la pollution

### Sur la santé humaine
\`\`\`
    Système respiratoire

    👃 Nez/Gorge
    ↓ Irritation

    🫁 Poumons
    ↓ Asthme, bronchite

    ❤️ Cœur
    ↓ Maladies cardiovasculaires
\`\`\`

**Conséquences** :
- Irritation des yeux, du nez, de la gorge
- Toux, difficultés respiratoires
- Asthme, bronchite chronique
- Maladies cardiovasculaires
- Cancers (exposition prolongée)

### Sur l'environnement

#### Effet de serre
\`\`\`
    Soleil
      ↓
    ═════════  Atmosphère
    CO₂ ⚠️ Retient la chaleur
    ═════════
    🌍 Terre

    Réchauffement climatique
\`\`\`

**Conséquences** :
- Augmentation des températures
- Fonte des glaces
- Montée du niveau des mers
- Événements climatiques extrêmes

#### Pluies acides
\`\`\`
    SO₂ + NOₓ + H₂O
         ↓
    Acide sulfurique (H₂SO₄)
    Acide nitrique (HNO₃)
         ↓
    🌧️ Pluies acides
         ↓
    🌲 Forêts endommagées
    🏛️ Monuments corrodés
\`\`\`

#### Smog photochimique
\`\`\`
    NOₓ + Hydrocarbures + ☀️
         ↓
    O₃ (ozone) + autres polluants
         ↓
    Brouillard brunâtre
    Irritation respiratoire
\`\`\`

## 5. Mesure de la qualité de l'air

### Indice de qualité de l'air (IQA)
\`\`\`
    Indice    Qualité        Couleur    Recommandations

    0-50      Bon            🟢         Aucune
    51-100    Moyen          🟡         Personnes sensibles
    101-150   Dégradé        🟠         Limiter activités
    151-200   Mauvais        🔴         Éviter efforts
    >200      Très mauvais   🟣         Rester à l'intérieur
\`\`\`

### Stations de mesure
- Capteurs automatiques
- Mesure en continu
- Données en temps réel
- Alertes en cas de pic

## 6. Solutions pour réduire la pollution

### Actions individuelles

#### Transports
✅ Privilégier les transports en commun
✅ Faire du vélo ou marcher
✅ Covoiturage
✅ Véhicules électriques ou hybrides

#### À la maison
✅ Réduire le chauffage (19°C)
✅ Isoler son logement
✅ Utiliser des énergies renouvelables
✅ Éviter les feux de cheminée

#### Consommation
✅ Acheter local
✅ Réduire sa consommation
✅ Recycler
✅ Éviter le gaspillage

### Actions collectives

#### Politiques publiques
- Zones à faibles émissions (ZFE)
- Normes antipollution (Euro 6)
- Développement des transports en commun
- Aides pour la rénovation énergétique

#### Industries
- Filtres et épurateurs
- Technologies propres
- Énergies renouvelables
- Économie circulaire

#### Énergies renouvelables
\`\`\`
    ☀️ Solaire    💨 Éolien    💧 Hydraulique

    Zéro émission de CO₂
    Inépuisables
    Propres
\`\`\`

## 7. Expérience : Mise en évidence de la pollution

### Protocole
1. Placer un filtre blanc à l'extérieur
2. Laisser pendant 1 semaine
3. Observer la couleur du filtre

### Observation
Le filtre devient **gris ou noir**.

### Interprétation
Les **particules fines** se déposent sur le filtre.
➡️ Preuve de la pollution de l'air

## 8. Cas particulier : La couche d'ozone

### Ozone stratosphérique (bon ozone)
- **Altitude** : 20-30 km
- **Rôle** : Filtre les UV du soleil
- **Protection** : Indispensable à la vie

### Ozone troposphérique (mauvais ozone)
- **Altitude** : 0-10 km (au sol)
- **Origine** : Pollution
- **Effet** : Irritant, toxique

\`\`\`
    Stratosphère (20-30 km)
    O₃ ✅ Bon ozone (protège)
    ─────────────────────────

    Troposphère (0-10 km)
    O₃ ⚠️ Mauvais ozone (pollue)
    ═════════════════════════
    Surface terrestre
\`\`\`

## 9. À retenir

✅ La pollution de l'air est due aux **activités humaines**
✅ Principaux polluants : **CO₂, CO, NOₓ, SO₂, particules fines**
✅ Effets sur la **santé** et l'**environnement**
✅ Mesure par l'**indice de qualité de l'air**
✅ Solutions : **transports propres, énergies renouvelables**
✅ Chacun peut **agir** pour réduire la pollution

## 10. Tableau récapitulatif

| Polluant | Source | Effet principal |
|----------|--------|----------------|
| CO₂ | Combustions | Effet de serre |
| CO | Combustions incomplètes | Toxique (mortel) |
| NOₓ | Moteurs, industries | Pluies acides |
| SO₂ | Charbon, pétrole | Pluies acides |
| PM | Combustions, usure | Maladies respiratoires |
| O₃ | Réaction chimique | Irritation |
`,
    aiQuizQuestionCount: 20
  },

  // MODULE VI : RÉCAPITULATIF
  {
    id: '4e-air-recapitulatif',
    title: 'Récapitulatif du cours',
    description: 'Révision complète avec flashcards et quiz',
    icon: '📚',
    activities: ['lesson', 'mcq', 'flashcard'],
    lessonContent: `
# Récapitulatif : L'air qui nous entoure

## 📋 Vue d'ensemble du chapitre

Ce chapitre nous a permis d'étudier l'air sous différents aspects : sa composition, ses propriétés physiques, la pression atmosphérique, le modèle moléculaire et la pollution.

---

## 🌬️ I. Composition de l'air

### Les constituants principaux

L'air est un **mélange de gaz** composé de :

| Gaz | Formule | Proportion | Rôle |
|-----|---------|------------|------|
| **Diazote** | N₂ | 78% | Gaz inerte, dilue le dioxygène |
| **Dioxygène** | O₂ | 21% | Indispensable à la respiration |
| **Argon** | Ar | 0,9% | Gaz rare |
| **Dioxyde de carbone** | CO₂ | 0,04% | Photosynthèse, effet de serre |
| **Autres** | - | 0,06% | Vapeur d'eau, gaz rares |

### Points clés à retenir

✅ L'air est un **mélange**, pas un corps pur
✅ Le diazote (N₂) représente **78%** de l'air
✅ Le dioxygène (O₂) représente **21%** de l'air
✅ Le dioxygène est **indispensable à la vie**

### Vocabulaire important

- **Molécule** : Assemblage d'atomes liés entre eux
- **Atome** : Plus petite partie d'un élément chimique
- **Corps pur simple** : Un seul type d'atomes (ex: O₂, N₂)
- **Corps pur composé** : Plusieurs types d'atomes (ex: H₂O, CO₂)
- **Mélange** : Association de plusieurs substances (ex: air)

---

## ⚖️ II. Propriétés de l'air

### 1. L'air a une masse

**Expérience de Mathis** (d'après les fiches de l'élève) :
- Ballon dégonflé : masse m₁
- Ballon gonflé : masse m₂
- **Conclusion** : m₂ > m₁ donc **l'air possède une masse**

**Masse volumique de l'air** : ρ = 1,3 g/L (à 20°C)

**Formule** : ρ = m/V
- ρ (rho) = masse volumique (g/L)
- m = masse (g)
- V = volume (L)

### 2. L'air occupe un volume

L'air **occupe de l'espace** et empêche d'autres substances d'occuper le même espace.

### 3. L'air est compressible

On peut **réduire le volume** de l'air en le comprimant.

**Expérience de la seringue** :
- On pousse le piston → Volume ↓ et Pression ↑
- L'air **résiste** de plus en plus

### 4. L'air est expansible

L'air peut **augmenter de volume** quand on le libère.

**Exemple** : Ballon de baudruche qui se gonfle

### 5. L'air est élastique

Quand on arrête de comprimer l'air, il **reprend son volume initial**.

---

## 🌡️ III. Pression atmosphérique

### Définition

La **pression atmosphérique** est la force exercée par l'air sur une surface.

### Mesure de la pression

**Instrument** : Baromètre ou manomètre

**Unités** :
- Pascal (Pa) : unité internationale
- Bar : 1 bar = 100 000 Pa
- Hectopascal (hPa) : 1 hPa = 100 Pa

**Pression atmosphérique normale** :
\`\`\`
P₀ = 1013 hPa = 1,013 bar ≈ 1 atm
\`\`\`

### Variations de la pression

#### Avec l'altitude
- La pression **diminue** quand l'altitude **augmente**
- Raison : Il y a moins d'air au-dessus de nous

#### Avec la météo
- **Anticyclone** (P > 1013 hPa) → Beau temps
- **Dépression** (P < 1013 hPa) → Mauvais temps

---

## ⚛️ IV. Modèle moléculaire de l'air

### Les molécules

L'air est constitué de **molécules** en mouvement permanent et désordonné.

**Caractéristiques** :
- Très petites (invisibles à l'œil nu)
- En mouvement rapide (environ 500 m/s)
- Se heurtent constamment

### Agitation thermique

**Règle** : Plus la température est **élevée**, plus les molécules se déplacent **vite**.

**Conséquences** :
- Chauffage → Molécules plus rapides → Volume augmente
- Refroidissement → Molécules plus lentes → Volume diminue

### Origine de la pression

La pression est due aux **chocs des molécules** contre les parois.

**Compression** :
- Volume diminue
- Molécules plus proches
- Plus de chocs par unité de surface
- Pression augmente

### Diffusion des gaz

La **diffusion** est le mélange spontané de deux gaz grâce au mouvement des molécules.

**Exemple** : Parfum qui se répand dans une pièce

---

## 🏭 V. Pollution de l'air

### Principaux polluants

| Polluant | Source | Effet principal |
|----------|--------|----------------|
| **CO₂** | Combustions | Effet de serre |
| **CO** | Combustions incomplètes | Toxique (mortel) |
| **NOₓ** | Moteurs, industries | Pluies acides |
| **SO₂** | Charbon, pétrole | Pluies acides |
| **PM** | Combustions, usure | Maladies respiratoires |
| **O₃** | Réaction chimique | Irritation |

### Solutions

**Actions individuelles** :
✅ Transports en commun, vélo, marche
✅ Réduire le chauffage (19°C)
✅ Acheter local
✅ Recycler

**Actions collectives** :
✅ Zones à faibles émissions
✅ Énergies renouvelables
✅ Technologies propres

---

## 📝 Formules essentielles

### Masse volumique
**ρ = m/V**
- ρ = masse volumique (g/L)
- m = masse (g)
- V = volume (L)

### Pression
**P = F/S**
- P = pression (Pa)
- F = force (N)
- S = surface (m²)

### Conversions
- 1 bar = 100 000 Pa
- 1 hPa = 100 Pa
- 1 atm = 1013 hPa

---

## 🎯 Les 10 points essentiels à retenir

1. ✅ **L'air est un MÉLANGE** (78% N₂, 21% O₂, 1% autres)
2. ✅ **Une molécule** = assemblage d'atomes
3. ✅ **Un atome** = plus petite partie d'un élément chimique
4. ✅ **Corps pur simple** = un seul type d'atomes (O₂, N₂)
5. ✅ **Corps pur composé** = plusieurs types d'atomes (H₂O, CO₂)
6. ✅ **L'air est compressible** (volume ↓, pression ↑)
7. ✅ **L'air est expansible** (volume ↑, pression ↓)
8. ✅ **Pression** = action d'un gaz sur une surface
9. ✅ **Manomètre** = instrument de mesure de la pression
10. ✅ **L'air possède une MASSE** (prouvé expérimentalement)

---

## 🧪 Expériences clés du chapitre

### 1. Expérience de Mathis : L'air a-t-il une masse ?

**Protocole** :
1. Peser un ballon de baudruche dégonflé
2. Gonfler le ballon avec une pompe
3. Peser le ballon gonflé
4. Comparer les masses

**Résultat** : Le ballon gonflé est plus lourd

**Conclusion** : **L'air possède une masse**

### 2. Expérience de la seringue : Compressibilité

**Protocole** :
1. Remplir une seringue d'air
2. Boucher l'extrémité
3. Pousser le piston

**Observation** : Le volume diminue, la résistance augmente

**Conclusion** : **L'air est compressible**

### 3. Expérience de la canette écrasée : Pression atmosphérique

**Protocole** :
1. Mettre de l'eau dans une canette
2. Chauffer jusqu'à ébullition
3. Retourner rapidement dans l'eau froide

**Observation** : La canette s'écrase

**Conclusion** : La **pression atmosphérique** est très forte

---

## 📊 Tableau récapitulatif des propriétés

| Propriété | Définition | Expérience | Application |
|-----------|------------|------------|-------------|
| **Masse** | L'air a une masse | Ballon gonflé/dégonflé | Montgolfière |
| **Volume** | L'air occupe de l'espace | Verre retourné | Matelas pneumatique |
| **Compressibilité** | On peut réduire son volume | Seringue | Pompe à vélo |
| **Expansibilité** | Il peut augmenter de volume | Ballon qui se gonfle | Bouteille de plongée |
| **Élasticité** | Il reprend sa forme | Seringue qui revient | Amortisseurs |

---

## 🎓 Méthode de révision

### Pour bien réviser ce chapitre :

1. **Apprendre les définitions** (molécule, atome, pression, etc.)
2. **Mémoriser les formules** (ρ = m/V, P = F/S)
3. **Connaître la composition de l'air** (78% N₂, 21% O₂)
4. **Comprendre les expériences** (ballon, seringue, canette)
5. **Savoir expliquer** avec le modèle moléculaire
6. **Faire les flashcards** pour mémoriser
7. **Faire les quiz** pour s'entraîner

**Bon courage pour vos révisions ! 🚀**
`,
    staticMCQs: physique4eAirMCQs,
    staticFlashcards: physique4eAirFlashcards,
    mcqCount: physique4eAirMCQs.length,
    flashcardCount: physique4eAirFlashcards.length
  }
];


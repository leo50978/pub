# Scene Finale

## Intention

La scene finale sert de convergence apres les interfaces :

- le rythme redescend
- la derniere interface perd un peu en presence
- un reveal blanc premium prend l'ecran
- le message et le CTA deviennent la seule lecture

L'objectif est de terminer sur une sensation de maitrise, d'evidence et de clarte.

## Structure ajoutee

Dans [index.html](/home/leo/Music/pub/index.html), j'ai ajoute un bloc `final-cta` au-dessus de la scene :

- `final-cta-sheet` : la matiere blanche qui monte puis recouvre l'ecran
- `final-cta-content` : le texte final et le bouton
- `final-cta-copy` : le message sur 2 lignes
- `final-cta-button` : le bouton `Contactez-nous`
- `final-cursor` : le curseur premium qui commence en mode drag puis finit en mode clic

## Direction visuelle

Dans [styles.css](/home/leo/Music/pub/styles.css), la scene finale a ete construite comme un espace tres calme et tres haut de gamme :

- fond blanc casse, pas blanc brut agressif
- surface blanche avec bord arrondi et relief doux
- texte centre, large mais controle
- police forcee sur `Sora`
- aucune coupure de mot autorisee sur les 2 lignes finales
- bouton noir propre, arrondi, avec ombre discrete
- curseur clair, legerement oversized, avec une version drag et une version click

Les icones du curseur final utilisent maintenant Font Awesome :

- une main en mode drag
- un pointeur en mode click

Le reveal blanc n'est pas un simple rectangle.
Il a une vraie presence de matiere grace a :

- une grande feuille blanche avec rayon haut
- un halo doux au bord superieur
- des gradients tres propres
- une transition verticale lente et fluide

## Animation

Dans [script.js](/home/leo/Music/pub/script.js), la timeline finale est decoupee en quatre phases.

### 1. Respiration

Apres le scroll de l'interface SaaS :

- `interface-four` ralentit
- elle recule tres legerement
- son contraste baisse un peu

Le but est de calmer la scene avant l'appel a l'action.

### 2. Curseur + reveal blanc

Le curseur entre depuis le bas :

- il monte d'abord
- la feuille blanche monte avec lui
- ensuite il redescend un peu
- pendant ce geste, la feuille finit de couvrir tout l'ecran

Le reveal est donc pilote visuellement par le curseur, pas par un fade brut.

### 3. Message

Le texte final est affiche sur 2 lignes :

- `Pour les entreprises`
- `qui veulent se demarquer`

Chaque lettre est injectee en `span` via `prepareFinalCopy()` puis animee avec :

- `opacity: 0 -> 1`
- `y: 8 -> 0`
- `blur: 6px -> 0`

Le resultat est plus editorial qu'un simple effet machine a ecrire.

J'ai ajoute aussi `fitFinalCopyToViewport()` pour reduire automatiquement la taille du texte final si une ligne devient trop large pour l'ecran mobile, tout en gardant `white-space: nowrap`.

### 4. CTA

Le bouton apparait ensuite avec :

- fade in
- montee legere
- `scale 0.96 -> 1`

Puis le curseur :

- passe du mode drag au mode click
- glisse jusqu'au bouton
- declenche un hover propre
- effectue un clic discret avec enfoncement et petit ripple doux

## Timings

Les nouveaux timings ajoutent une vraie scene finale apres l'interface 4 :

- respiration
- entree du curseur
- deploiement du blanc
- apparition lettre par lettre
- reveal du bouton
- hover puis clic final

Le tout reste pilote par `baseSceneTiming`, puis etire par `SCENE_PACE`.

## Fichiers modifies

- [index.html](/home/leo/Music/pub/index.html)
- [styles.css](/home/leo/Music/pub/styles.css)
- [script.js](/home/leo/Music/pub/script.js)
- [scene-final.md](/home/leo/Music/pub/scene-final.md)

# Scene 1

## Ce que j'ai construit

J'ai mis en place une premiere scene autonome, executable dans le navigateur, composee de quatre fichiers :

- `index.html`
- `styles.css`
- `script.js`
- `scene1.md`

La scene reproduit l'intro verticale demandee :

- univers sombre avec profondeur
- typographie cinematique
- progression des mots dans l'espace
- acceleration du rythme
- impact central de `TRANSFORMER`
- transition blanche en onde circulaire
- apparition propre de la premiere interface

## Structure HTML

Dans `index.html`, j'ai separe la scene en trois couches principales :

- `scene-universe` : fond spatial, aura, particules, grain
- `scene-viewport` : espace 3D contenant les mots et la transition d'eau
- `interface-layer` : premiere interface claire revelee a la fin

Les mots sont deja poses dans le DOM pour permettre un controle precis des timings :

- `CRÉER` en lettres individuelles
- `CAPTIVER`
- `ÉLEVER`
- `MESURER`
- `MARQUER`
- `TRANSFORMER`

J'ai aussi prepare l'UI finale avec :

- un menu hamburger a gauche
- une icone recherche a droite
- une grande hero image verticale
- un petit sous-titre sous l'image
- une barre noire horizontale en bas type smartphone moderne

## Direction visuelle

Dans `styles.css`, j'ai pose une base mobile portrait optimisee pour un format proche iPhone XR :

- scene au ratio `414 x 896`
- plein ecran sur mobile
- cadre arrondi uniquement en preview desktop

Pour l'univers de debut, j'ai combine :

- un fond tres sombre a plusieurs gradients
- une aura floutee pour donner du volume
- un grain tres faible pour eviter un noir plat
- peu de particules, volontairement discretes

Pour la typographie :

- fonte `Sora`
- graisse forte
- grand corps
- espacement de lettres important
- glow tres leger
- adaptation automatique de la taille si un mot devient trop large pour l'ecran

Pour la profondeur, chaque mot qui repart vers l'arriere perd :

- de l'echelle
- de l'opacite
- de la nettete avec un blur

Cela permet de garder la sensation 3D sans moteur 3D.

## Refonte de l'UI finale

J'ai refait l'UI finale pour suivre beaucoup plus directement ta direction visuelle.

L'interface finale contient maintenant :

- un bouton hamburger en haut a gauche
- une icone recherche en haut a droite
- une grande image hero prenant l'essentiel de l'ecran avec `herointerface1.png`
- aucun faux widget ajoute directement sur l'image hero
- un petit sous-titre court juste sous l'image
- une barre noire horizontale en bas, type home indicator moderne

Le but n'est plus de montrer une landing page complete, mais un ecran final plus sobre, plus net et plus cinematographique.

Les choix principaux :

- navigation minimale
- hero visuel dominant
- sous-titre discret
- pas de decor de fond ajoute derriere la carte d'interface
- controles du haut legerement rentres dans la carte pour eviter toute coupe par la bordure
- beaucoup d'air entre les blocs
- composition plus propre et plus lisible en mobile portrait

Le rendu cherche une sobriete premium, avec un ecran plus silencieux et plus controle.

## Animation GSAP

Dans `script.js`, j'ai orchestre toute la scene avec GSAP et une timeline unique.

## Ajustement de rythme

Suite a ton retour, j'ai ralenti la scene pour qu'on ait vraiment le temps de profiter de chaque etape.

J'ai ensuite fait un second ralenti plus fort, parce que la scene restait encore trop rapide a la lecture.

Les changements principaux :

- l'intro complete passe maintenant a environ `16s`
- la phase d'univers avant le premier mot dure plus longtemps
- `CRÉER` reste plus lisible avec un decalage plus large entre les lettres
- `CAPTIVER` tient plus longtemps a l'ecran avant de repartir dans la profondeur
- l'acceleration centrale existe toujours, mais elle est moins brusque
- `TRANSFORMER` a plus de presence avant le declenchement de la vague
- la transition blanche et le reveal de l'interface sont eux aussi allonges

Techniquement, j'ai remplace les temps fixes par :

- une base `baseSceneTiming`
- un coefficient global `SCENE_PACE = 1.4`
- un objet final `sceneTiming` calcule automatiquement

Cela permet de ralentir ou d'accelerer toute la scene proprement en changeant une seule valeur.

## Correction de cadrage des mots

Tu as signale un probleme important : certains mots debordaient de l'ecran, donc le spectateur ne pouvait pas toujours les lire correctement.

J'ai corrige cela dans `script.js` avec une fonction `fitWordsToViewport()` :

- elle mesure chaque mot par rapport a la largeur utile de `.phone-stage`
- elle conserve la taille premium par defaut quand le mot tient deja dans l'ecran
- si un mot est trop large, elle reduit automatiquement sa taille
- elle ajuste aussi le `letter-spacing` pour garder un rendu propre
- elle se relance au chargement et lors d'un redimensionnement

Le resultat attendu :

- aucun mot ne doit sortir du cadre horizontal mobile
- `CAPTIVER`, `MESURER`, `MARQUER` et surtout `TRANSFORMER` restent visibles entierement
- l'utilisateur peut lire chaque mot sans perdre l'effet cinematographique

### 1. Univers 0s -> 1.54s

J'ai ajoute une motion lente du fond :

- zoom subtil
- translation faible
- deplacement doux de l'aura

Cela installe la sensation d'espace avant l'apparition du texte.

### 2. `CRÉER` 1.54s -> 4.55s

Chaque lettre apparait individuellement avec :

- sortie du blur
- montee verticale legere
- opacite 0 vers 1
- scale 1.1 vers 1

Le decalage entre lettres suit ton rythme :

- 1.54s
- 1.93s
- 2.32s
- 2.72s
- 3.11s

Chaque lettre reste aussi un peu plus longtemps visible grace a une duree de reveal plus grande.

Ensuite, le mot complet part dans la profondeur a partir de `3.57s`.

### 3. `CAPTIVER` 4.55s -> 6.37s

Le mot arrive tres grand au premier plan avec :

- scale fort
- blur present au depart
- z positif pour l'avant-plan

Puis il repart dans la profondeur comme `CRÉER`, mais en lui laissant plus de temps pour exister a l'ecran.

### 4. Acceleration 6.37s -> 9.03s

J'ai enchaine :

- `ÉLEVER`
- `MESURER`
- `MARQUER`

Chaque mot :

- surgit tres grand
- devient net tres vite
- recule presque immediatement

Le rythme reste plus rapide que le reste de l'intro, mais il a ete detendu pour qu'on puisse mieux lire chaque mot.

### 5. `TRANSFORMER` 9.03s -> 11.34s

Ce mot est traite differemment :

- il entre au centre
- il ne fuit pas dans la profondeur
- il reste stable
- il a une respiration legere

Le but est d'en faire le point d'impact de l'intro, avec une presence plus marquee qu'avant.

### 6. Vague blanche 11.34s -> 13.89s

J'ai construit la transition avec trois elements :

- `ripple-core` : coeur blanc central
- `ripple-ring-a` et `ripple-ring-b` : deux anneaux d'onde
- `white-flood` : remplissage blanc total par expansion circulaire

Le noir disparait depuis le centre et l'ecran devient blanc progressivement.
Pendant cette phase :

- l'univers s'efface
- `TRANSFORMER` disparait
- l'onde prend toute la scene

### 7. Interface 13.89s -> 15.99s

L'interface apparait en plusieurs temps :

- le hamburger apparait a gauche
- la recherche apparait a droite
- la hero image entre avec un reveal doux
- le sous-titre arrive ensuite
- la barre noire du bas se pose en dernier

Le rendu vise une revelation propre, simple et premium.

## Nouvelle animation finale de `Interface 0`

J'ai ajoute une sortie 3D en fin de scene pour que l'interface ne reste pas plate face camera jusqu'au bout.

Le mouvement se fait maintenant en trois temps dans `script.js` :

- une courte mise en tension apres le reveal complet
- un vrai zoom out avec recul sur l'axe `Z`
- une pose finale en diagonale 3D avec un leger settle

Concretement, `interface-flat` :

- reduit son echelle
- recule dans la profondeur avec `z` negatif
- pivote sur `rotationY` et `rotationX`
- se decale legerement sur `x` et `y`

J'ai aussi renforce la lecture 3D dans `styles.css` :

- `interface-layer` a maintenant une vraie `perspective`
- la carte garde `transform-style: preserve-3d`
- `backface-visibility` est forcee pour un rendu plus propre pendant l'inclinaison

Le resultat vise exactement l'effet demande :

- l'utilisateur voit d'abord l'interface en face
- puis elle dezoome
- puis elle se place en diagonale dans l'espace
- avec un recul lisible sur l'axe des `z`

## Correction du fond pendant le zoom out

Tu avais raison sur le probleme principal : au moment du dezoom, le fond restait trop blanc alors que l'interface etait elle aussi tres blanche.

J'ai corrige cela dans `styles.css` en separant clairement :

- le backdrop plein ecran de `interface-layer`
- la carte `interface-flat`

Le fond derriere l'interface utilise maintenant :

- un degrade bleu-gris plus froid
- des halos flous doux
- une base plus sombre que la carte

Et l'interface elle-meme a ete retravaillee en rendu plus premium :

- surface translucide claire
- `backdrop-filter` pour un effet glassmorphism
- ombres externes et internes pour un rendu neumorphism plus propre
- bordure plus nette pour mieux lire la carte pendant la sortie 3D

Le but est que, pendant le zoom out :

- le fond reste distinct
- la carte reste lisible
- le contraste soit plus propre sans perdre la sensation premium

## Choix techniques importants

J'ai fait quelques choix pour garder la scene propre et facile a faire evoluer :

- particules generees en JavaScript avec donnees controlees
- timeline GSAP centralisee plutot que plusieurs animations independantes
- helpers `pushWordToDepth` et `launchDepthWord` pour garder des comportements coherents
- fallback sans GSAP : si la librairie ne charge pas, l'interface finale reste visible
- hero final simplifie pour coller plus directement a la composition demandee

## Fichiers a regarder

- [index.html](/home/leo/Music/pub/index.html)
- [styles.css](/home/leo/Music/pub/styles.css)
- [script.js](/home/leo/Music/pub/script.js)

## Etat actuel

La scene 1 est maintenant posee comme base de travail.
Elle peut encore etre ajustee finement sur :

- la vitesse exacte de certains mots
- l'intensite du blur de profondeur
- la puissance de la vague
- le design de l'interface revelee

Mais la structure, le rythme et la logique cinematique de ton storyboard sont en place.

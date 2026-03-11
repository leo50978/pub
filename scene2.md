# Scene 2

## Etat actuel

La scene 2 est revenue sous une forme plus propre :

- `interface zero` continue son zoom out
- elle part en diagonale 3D vers la droite
- elle se perd plus loin dans la profondeur
- pendant ce mouvement, une nouvelle interface entre depuis la gauche
- puis la lecture se fait clairement de `interface 2` vers `interface 1`, avant de continuer vers `interface 3`

Le but est de creer un vrai croisement spatial entre deux cartes, au lieu d'un simple remplacement plat.

## Structure

Dans [index.html](/home/leo/Music/pub/index.html), j'ai maintenant :

- `interface-zero` : la carte principale avec hamburger, search, hero image et sous-titre
- `interface-next` : une vraie homepage e-commerce premium mobile portrait
- `interface-next-scroll` : le conteneur interne qui permet un scroll automatique court et controle
- `interface-third` : une homepage universite premium posee plus loin dans la profondeur
- `interface-third-scroll` : le conteneur de scroll interne de l'interface 3
- `interface-four` : une homepage SaaS premium revelee comme un vrai scroll normal

## Animation

Dans [script.js](/home/leo/Music/pub/script.js), la fin est pilotee avec deux objets distincts :

- `interfaceZeroRetreat`
- `interfaceNextEntrance`
- `interfaceNextTraverse`
- `interfaceThirdEntrance`
- animation de scroll reveal vers `interface-four`

Le mouvement de `interface zero` se fait en trois temps :

- petite amorce de dezoom
- recul principal vers la droite et l'arriere
- fuite plus profonde pour donner l'impression qu'elle se perd dans l'espace

En parallele, `interface-next` :

- apparait directement devant `interface zero`
- prend le premier plan sans passer derriere
- puis seulement ensuite fait son zoom out
- se stabilise enfin en pose diagonale vers la gauche
- joue ensuite un petit auto-scroll interne pour reveler la suite de la page

La transition `interface 1 -> interface 2` a aussi ete adoucie :

- `interface zero` prend plus de temps pour se dezoomer
- sa mise en diagonale 3D est plus progressive
- `interface-next` avance plus lentement et plus proprement en synchronisation
- les filtres de blur et de darkening ont ete reduits pour eviter l'effet de flash noir ou de perte de qualite

Puis, une nouvelle phase commence :

- la camera simule un passage propre depuis `interface 2`
- `interface 1` revient au centre puis sert de surface de traversee
- la camera donne l'impression d'entrer en profondeur dans cette interface
- `interface 3` commence tres petite et tres loin derriere
- elle grandit progressivement comme un ecran trouve dans la profondeur
- `interface 3` prend enfin le focus sans donner l'impression de traverser sale le premier plan

Ensuite, on sort de la logique 3D :

- l'interface 3 se remet a plat
- un mouvement vertical simule un vrai scroll utilisateur
- l'interface 4 monte depuis le bas
- l'interface 4 n'est pas en 3D, elle est volontairement normale

Pour eviter un chevauchement sale en fin de plan :

- `interface 1` sort plus franchement vers la droite et plus profond
- son calque est abaisse au moment du handoff final
- `interface 3` prend le dessus visuel au moment ou elle devient le nouveau focus

Important :

- `interface zero` ne disparait pas via un fade out
- la sensation vient du recul, de la rotation et du blur de profondeur
- la nouvelle carte prend la place visuelle par mouvement, pas par coupure brutale

## Direction visuelle de l'interface 2

Dans [styles.css](/home/leo/Music/pub/styles.css), l'interface 2 a ete refaite comme une boutique e-commerce premium :

- fond clair casse tres premium
- verre tres subtil et ombres neumorphism controlees
- carte volontairement plus large pour mieux occuper le cadre mobile
- header fixe differencie par ses icones, sans texte dans la barre
- hero produit editorial avec visuel pleine largeur
- section `Featured` avec cartes produit, prix, badges et CTA
- strip de collections
- bloc trust minimal en bas
- hero et cartes produit relies a de vraies images externes par URL, distinctes de l'interface 1
- cartes `Featured` remises en format carre

Tous les textes visibles des interfaces ont aussi ete francises pour garder une direction coherente sur toute l'experience. Les interfaces 2, 3 et 4 ont ete simplifiees pour laisser plus de place a l'image et a l'espace vide, avec moins de texte et une lecture plus proche des grandes marques.

Nouvelle passe :

- les icones de header de ces interfaces utilisent maintenant Font Awesome
- les headers sont restes sans texte
- les longs blocs textuels ont ete retires
- des carrousels et bandes d'images ont ete ajoutes a la place pour une lecture plus visuelle

L'intention visuelle est :

- luxe
- precision
- respiration
- desir d'achat
- lisibilite parfaite pendant une traversee 3D

## Auto-scroll

Dans [script.js](/home/leo/Music/pub/script.js), j'ai ajoute un scroll interne tres court sur `interface-next-scroll` :

- depart sur le hero produit
- descente douce vers les cartes produit
- glissement leger vers collections et trust
- stop propre

Le scroll reste volontairement court pour garder un ressenti publicitaire et premium, pas un scroll applicatif classique.

L'interface 3 suit maintenant une direction institutionnelle premium :

- hero universite inspire et ambitieux
- hero base sur une vraie photo de campus
- programmes academiques sous forme de cartes propres
- chiffres d'impact
- bloc admission

Le hero de l'interface 3 a aussi ete renforce pour que la photo soit nettement plus visible :

- zone hero plus haute
- overlay plus leger
- decor vitre reduit
- image hero bord a bord dans la carte
- images secondaires changees pour eviter les doublons avec le hero

La pose de `interface 3` a aussi ete reforcee :

- elle reste en diagonale 3D au moment du focus
- elle n'arrive plus a plat
- son angle final a ete renforce pour une lecture plus clairement 3D

Correction supplementaire :

- la deuxieme image de l'interface 3 utilise maintenant un vrai visuel d'universite explicite
- les blocs chiffres sous l'interface 3 ont ete redesignes avec une presentation plus premium et plus propre
- les icones du header de l'interface 3 ont ete remplacees pour eliminer tout rappel visuel de hamburger
- l'interface 3 a ete legerement elargie pour mieux respirer
- la grille des chiffres a ete espacee davantage pour eviter l'effet colle
- les labels des chiffres ont ete raccourcis pour supprimer l'exces de texte
- un doublon d'image dans l'interface 3 a ete retire pour garder des visuels bien distincts
- la premiere carte visible sous le hero de l'interface 3 utilise maintenant une photo d'etudiants pour casser clairement le doublon avec le hero

Son header a aussi ete differencie uniquement par les icones, sans texte ajoute dans la barre, pour eviter la repetition exacte du meme haut de carte entre les interfaces.

Le meme principe est utilise pour `interface-third-scroll` :

- arrivee sur le hero universite
- descente douce vers les programmes
- glissement final vers les statistiques puis l'admission
- stop propre

## Scroll vers l'interface 4

Apres l'interface 3, j'ai ajoute une nouvelle lecture :

- l'ecran donne l'impression d'un scroll reel
- l'interface 3 sort vers le haut
- l'interface 4 apparait depuis le bas
- aucune perspective 3D n'est utilisee sur cette interface finale

Le but est de casser proprement la traversée 3D et de donner un ressenti plus naturel, comme si l'utilisateur arrivait sur une nouvelle page en scrollant.

L'interface 4 suit maintenant une direction SaaS / application premium :

- header differencie par ses icones, sans texte central
- hero produit avec headline forte
- preview dashboard propre et futuriste
- bloc features structure
- analytics compact
- trust / CTA final

La direction a ensuite ete simplifiee encore plus :

- hero plus visuel
- carrousel d'images produit a la place d'une liste plus textuelle
- zone finale plus image-first

Son auto-scroll interne suit :

- hero produit
- features
- analytics / trust
- stop

## Fichiers modifies

- [index.html](/home/leo/Music/pub/index.html)
- [styles.css](/home/leo/Music/pub/styles.css)
- [script.js](/home/leo/Music/pub/script.js)
- [scene2.md](/home/leo/Music/pub/scene2.md)

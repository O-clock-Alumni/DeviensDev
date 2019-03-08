# Guidelines pour les articles du blog « Parlons Dev »

## Syntaxe

### En-tête du fichier `.md`

```markdown
---
author: 'alexandrebourdeaudhui'
title: 'Télétravail : Témoignage de Bobine'
category: 'Lifestyle'
cover: ./path/to/cover
slug: 'teletravail-temoignage-bobine'
---
```

Quelques explications :

- `Author`: L'auteur de l'article. Ce paramètre doit correspondre au fichier `.json` qui se trouve dans `content/authors/*`, et qui contient des informations complémentaires

- `Title`: Le titre de l'article

- `Category`: Catégorie de l'article, plusieurs catégories sont possibles :

  - `vision`: édito/point de vue
  - `vécu`: retour d'expérience, témoignage
  - `devenirdev`: on parle de formation/pré-requis
  - `tuyau`: méthodes, conseils pratiques
  - `troll`: article provoc', style Gorafi, pour vaincre les clichés

- `Cover`: Image qui vient accompagner l'article lors de la présentation sur le site

- `Slug`: _Optionnel_. Par défaut, le `slug` se construit par rapport au nom du fichier (`.md`) de l'article. Ce paramètre permet d'outrepasser la configuration par défaut et de mettre un slug personnalisé.

### Titre de niveau 1

```markdown
# Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

### Titre de niveau 2

```markdown
# Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

### Titre de niveau 3

```markdown
### Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

### Gras

```markdown
**Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.**
```

### Italique

```markdown
_Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua._
```

### Lien

```markdown
[DeviensDev](https://DeviensDev.com)
```

### Image

```markdown
![alt image](./path/to/image)
```

### Citation

```
> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
```

### Bout de code

````
```
const world = 'world 🌍';
console.log('Hello %s !', world);
```
````

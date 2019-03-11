# Contribuer à DeviensDev

## Introduction

DeviensDev est une plateforme d’information sur le métier de développeur.
Elle repose intégralement sur un système de contribution. Ainsi, tous les professionnels du développement qui souhaitent partager leurs connaissances, leur vision et leur passion du métier sont invités avec plaisir à contribuer à la plateforme.

Si tu souhaites apporter ta pierre à l’édifice DeviensDev, tu peux écrire un article qui sera publié sur le blog : Parlons Dev !

Pour ce faire, il y a quelques étapes à respecter :

## Tu souhaites proposer un article ?

### Comment contribuer :

- Fork le dépôt GitHub
  ![fork](https://user-images.githubusercontent.com/24500083/50538181-a807cb00-0b6b-11e9-8f5a-5bb57974f118.png)

* Crée une branche et tu te positionnes dessus

  - `git checkout master`
  - `git pull origin master` pour être sûr d'avoir la dernière version du code
  - `git checkout -b le-nom-de-ma-branche` (remplace `le-nom-de-ma-branche` avec un nom approprié) pour créer une branche

* Crée ton article dans `content/blog/*`

  - ⚠️ En respectant bien la convention du nom de fichier `<date>_<titre>/index.md` (par exemple `2018-09-25_devenir-developpeur/index.md`)
  - Si jamais tu as un doute, tu peux t'inspirer des autres articles déjà présent

* Crée un fichier `.json` dans `content/authors/*` où tu peux y ajouter ton twitter et ta bio.

  - ⚠️ En respectant bien la convention du nom de fichier qui doit avoir ton pseudo GitHub (par exemple `alexandrebourdeaudhui.json`)
  - Là aussi, n'hésite pas à t'insipirer de ce que les autres ont déjà fait

### Pour tester le rendu de ton article, en local :

- Installe les dépendances nécessaires au projet

```shell
$ yarn install
```

- Execute le projet en mode `développement`

```shell
$ yarn start
```

- Ouvre le projet sur ton navigateur

```shell
$ open http://localhost:8000
```

### Une fois que tout est prêt :

- Tu commit les modifications de ta branche en local

  - `git add -A && git commit -m "Mon message"` (remplace `Mon message` par un nom de commit approprié) pour commiter tes changemens

- Tu push ta branche locale sur ton dépôt

  - `git push -u origin MaBranche` (remplace `MaBranche` par le nom de ta branche)
  
- Tu fais une demande de `pull-request` de ta branche vers notre branche `master`

- On fait une relecture de l’article pour corriger les éventuelles fautes d’orthographe

- Si des points sont à éclaircir, on en discute ensemble

- On planifie la publication

- On met en ligne l’article

## Tu souhaites corriger un article ?

Si tu souhaites corriger un article déjà en ligne, tu as le choix :

- Suivre la procédure décrite dans « Tu souhaites proposer un article »
- Le faire directement depuis l’interface GitHub

## Si tu ne sais pas comment t’y prendre…

N’hésite pas à ouvrir une issue sur le dépôt GitHub, et notre équipe viendra te filer un coup de main.

## Guidelines pour les articles du blog « Parlons Dev »

### Syntaxe

#### En-tête du fichier `.md`

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

#### Titre de niveau 1

```markdown
# Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

#### Titre de niveau 2

```markdown
## Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

#### Titre de niveau 3

```markdown
#### Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

#### Gras

```markdown
**Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.**
```

#### Italique

```markdown
_Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua._
```

#### Lien

```markdown
[DeviensDev](https://DeviensDev.com)
```

#### Image

```markdown
![alt image](./path/to/image)
```

#### Citation

```markdown
> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
```

#### Bout de code

````
```
const world = 'world 🌍';
console.log('Hello %s !', world);
```
````

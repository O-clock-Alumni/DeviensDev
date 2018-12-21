# Contribuer à DeviensDev

DeviensDev est une plateforme d’information sur le métier de développeur qui repose intégralement sur un système de contribution. Ainsi, tous les professionnels du développement qui souhaitent partager leurs connaissances, leurs visions et leur passion du métier sont invités avec plaisir à contribuer à la plateforme.

Si tu souhaites apporter ta pierre à l’édifice DeviensDev, tu peux écrire un article qui sera publié sur le blog de DeviensDev : ParlonsDev ! Jusque-là tu suis ?

Bien ! Pour ce faire, il y a quelques étapes à respecter :

## Tu souhaites proposer un article ?

### Comment contribuer :

- Tu fork le dépôt Github

- Tu crées une branche et tu te positionnes dessus

  - `git checkout master`
  - `git pull origin master` pour être sûr d'avoir la dernière version du code
  - `git checkout -b le-nom-de-ma-branche` (remplace `le-nom-de-ma-branche` avec un nom approprié) pour créer une branche

- Tu crées ton article dans `content/blog/*`

  - ⚠️ En respectant bien la convention du nom de fichier `<date>_<titre>/index.md` (par exemple `2018-09-25_devenir-developpeur/index.md`)
  - Si jamais tu as un doute, tu peux t'inspirer des autres articles déjà présent

- Tu crées un fichier `.json` dans `content/authors/*` où tu peux y ajouter ton twitter et ta bio.

  - ⚠️ En respectant bien la convention du nom de fichier qui doit avoir ton pseudo Github (par exemple `alexandrebourdeaudhui.json`)
  - Là aussi, n'hésite pas à t'insipirer de ce que les autres ont déjà fait

### Pour tester le rendu de ton article, en local :

- `yarn` : pour installer les dépendances nécessaires
- `yarn start` : pour lancer le site en local
- `open http://localhost:8000` : pour ouvrir le site sur ton navigateur

### Une fois que tout est prêt :

- Tu push sur ta branche

  - `git add -A && git commit -m "Mon message"` (remplace `Mon message` par un nom de commit approprié) pour commiter tes changemens

- Tu fais une demande de `pull-request` de ta branche vers notre branche `master`

- On fait une relecture de l’article pour corriger les éventuelles fautes d’orthographe

- Si des points sont à éclaircir, on en discute ensemble

- On planifie la publication

- On met en ligne l’article

## Tu souhaites corriger un article ?

Si tu souhaites corriger un article déjà en ligne, tu as le choix :

- Suivre la procédure décrite dans « Tu souhaites proposer un article »
- Le faire directement depuis l’interface Github

## Si tu ne sais pas comment t’y prendre…

N’hésite pas à ouvrir une issue sur le dépôt GitHub, et notre équipe viendra te filer un coup de main.

## Guidelines

### Début du fichier `.md`

```markdown
---
author: 'alexandrebourdeaudhui'
category: 'Lifestyle'
title: 'Télétravail : Témoignage de Bobine'
slug: 'teletravail-temoignage-bobine'
---
```

`Author` :
`Category` :
`Title` :
`Slug` :

### Titre

```markdown
# Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
```

### Sous-titre

```markdown
## Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
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

```markdown
> Lorem ipsum dolor sit amet, consectetur adipisicing elit,
> sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
```

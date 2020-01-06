---
language: 'HTML'
quizzes:
  [
    {
      id: 1,
      type: 'radio',
      label: 'Quelle balise doit encapsuler tout ton HTML ?',
      answers: ['<p>', '<html>', '<head>', '<h1>'],
      result: [1],
      explanation: 'Le code HTML de ta page web doit être encapsulé dans la balise <html>',
    },
    {
      id: 2,
      type: 'radio',
      label: "Quelle balise dois-tu utiliser pour afficher un titre dans l'onglet de ta page web ?",
      answers: ['<header>', '<h1>', '<html>', '<title>'],
      result: [3],
      explanation: "Le titre qui s'affichera dans l'onglet de ta page web doit être écrit dans la balise <title>",
    },
    {
      id: 3,
      type: 'radio',
      label: 'Je veux afficher un titre sur ma page web. Laquelle de ces balises est la plus importante ?',
      answers: ['<h1>', '<h2>', '<h3>', '<h4>'],
      result: [0],
      explanation: 'Les éléments <h1> à <h6> représentent 6 niveaux de titres dans un document, <h1> étant le plus important et <h6> étant le moins important',
    },
    {
      id: 4,
      type: 'radio',
      label: 'La balise <div> nous sert à :',
      answers:
        [
          'Afficher un paragraphe',
          'Créer un conteneur pour notre code',
          'Rédiger une liste',
          'Afficher un titre de la page web',
        ],
      result: [1],
      explanation: 'La balise <div> permet de créer un conteneur pour notre code',
    },
    {
      id: 5,
      type: 'radio',
      label: 'Pour créer une liste ordonnée, je dois utiliser :',
      answers:
        [
          "<ul>\n<li>\n</li>\n</ul>",
          "<li>\n<ol>\n</ol>\n</li>",
          "<ol>\n<ul>\n</ul>\n</ol>",
          "<ol>\n<li>\n</li>\n</ol>",
        ],
      result: [3],
      explanation: "Une liste ordonnée s'écrit avec la balise <ol> qui veut dire “ordered list”, elle contiendra des <li> pour chaque élément de la liste",
    },
    {
      id: 6,
      type: 'radio',
      label: "Laquelle de ces lignes de code me permettra d'afficher une image ?",
      answers:
        [
          '<src img=“lien“ alt=“description“ />',
          '<img alt=“lien“ src=“description“ />',
          '<img src=“lien“ alt=“description“ />',
          '<alt src=“lien“ img=“description“></img>',
        ],
      result: [2],
      explanation: 'Pour afficher une image, on utilise <img src="lien" alt="description" />, qui est une balise auto-fermante',
    },
    {
      id: 7,
      type: 'radio',
      label: 'Quelle balise dois-je utiliser pour afficher un lien ?',
      answers: ['<a>', '<href>', '<src>', '<ul>'],
      result: [0],
      explanation: "Afin d'afficher un lien, il faut utiliser la balise <a>",
    },
  ]
---

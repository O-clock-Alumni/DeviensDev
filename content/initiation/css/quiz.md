---
language: 'CSS'
quizzes:
  [
    {
      id: 1,
      type: 'radio',
      label: 'À l’intérieur de quelle balise HTML doit-on insérer notre balise <link> afin de lier notre fichier .css à notre fichier html ?',
      answers: ['<head>', '<meta>', '<body>', '<title>'],
      result: [0],
      explanation: 'Il faut insérer notre balise <link> dans une balise <head> afin de lier notre fichier .css à notre fichier html',
    },
    {
      id: 2,
      type: 'radio',
      label: 'Quelle propriété CSS doit-on utiliser pour donner une couleur de fond à un élément ?',
      answers: ['color', 'font-color', 'background-color', 'font-style'],
      result: [2],
      explanation: 'Pour donner une couleur de fond à un élément, il faut utiliser la propriété css background-color',
    },
    {
      id: 3,
      type: 'radio',
      label: 'Quelle propriété CSS doit-on utiliser pour centrer un texte ?',
      answers:
        [
          'text-align: center',
          'margin: center',
          'center: text-align',
          'margin: auto',
        ],
      result: [0],
      explanation: 'Pour centrer un texte, il faut utiliser la propriété css text-align: center;',
    },
    {
      id: 4,
      type: 'radio',
      label: 'Quelle propriété CSS doit-on utiliser pour forcer un texte à être en majuscules ?',
      answers:
        [
          'text-style: uppercase',
          'text-transform: lowercase',
          'font-weight: majuscul',
          'text-transform: uppercase',
        ],
      result: [3],
      explanation: 'Afin de forcer un texte à être en majuscules, il faut utiliser la propriété css text-transform: uppercase;',
    },
    {
      id: 5,
      type: 'radio',
      label: 'Pour mettre un titre h1 en gras et de couleur rouge, la bonne syntaxe est :',
      answers:
        [
          "h1 { \n  text-transform: uppercase;\n   color: red;\n}",
          "h1 { \n  font-weight: bold;\n  color: red;\n}",
          "h1 { \n  font-weight: bold;\n  background-color: red;\n}",
          "h1 { \n  text-style: bold;\n  color: red;\n}",
        ],
      result: [1],
      explanation: "La bonne syntaxe était h1 { \n  font-weight: bold;\n  color: red;\n}",
    },
    {
      id: 6,
      type: 'radio',
      label: 'Pour donner une largeur de 800px à ma <div>, quelle propriété dois-je utiliser ?',
      answers:
        ['height: 800px;', 'margin: 800px;', 'width: 800px;', 'large: 800px;'],
      result: [2],
      explanation: 'Pour donner une largeur de 800px à ma <div>, il faut utiliser la propriété css width: 800px;',
    },
    {
      id: 7,
      type: 'radio',
      label: 'Quelle propriété CSS me permet de déterminer une marge à gauche de 10px ?',
      answers:
        [
          'margin: auto;',
          'margin-top: 10px',
          'margin-right: 10px;',
          'margin-left: 10px;',
        ],
      result: [3],
      explanation: 'Afin de déterminer une marge de 10px à gauche, il faut utiliser la propriété css  margin-left: 10px;.',
    },
  ]
---

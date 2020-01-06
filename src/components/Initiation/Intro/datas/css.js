/*
 * Package import
 */
import React from 'react';

/*
 * Local import
 */
import { Bold } from 'src/components/style';

/*
 * Data
 */
/* eslint-disable max-len */
export default {
  header: {
    title: 'C’est quoi le CSS ?',
    content: [
      <>
        <Bold>Cascading Style Sheets</Bold> (CSS) est un langage de feuilles de
        style utilisé pour décrire la présentation d’un document généralement
        écrit en HTML. Le CSS va donc décrire la façon dont les éléments doivent
        être affichés à l’écran.
      </>,
      <>
        Si on compare notre page web à une maison que l’on vient d’acheter, le
        HTML serait la structure, les poutres, les murs et grâce au CSS on va
        pouvoir peindre les murs, ajouter des meubles, décorer nos chambres avec
        des tableaux etc.
      </>,
    ],
  },
  notions: [
    [
      {
        type: 'text',
        content: `Une fois que l'on a structuré notre code en HTML nous allons
        avoir une page web qui ressemble à ça :`,
      },
      {
        type: 'example',
        language: 'html',
        left:
          "<html>\n  <head>\n    <title>Titre de l'onglet de la page web</title>\n  </head>\n  <body>\n    <header>\n      <h1>Titre de la page</h1>\n    </header>\n    <div>Contenu de la page, articles, sections etc...</div>\n    <footer>Bas de page</footer>\n  </body>\n</html>",
        right: `<h1>Titre de la page</h1>
          <div>Contenu de la page, articles, sections, etc....</div>
          <footer>bas de page</footer>`,
      },
      {
        type: 'text',
        content:
          'Afin de donner du style à un élément HTML il va falloir sélectionner cet élément, avec ce que l’on appelle un sélecteur. Pour cela, nous pouvons utiliser les 3 méthodes ci-dessous !',
      },
    ],
    [
      {
        type: 'title',
        content: 'Le CSS interne',
      },
      {
        type: 'text',
        content: `Le code va être placé dans la section <span class="tags head">head</span> d’une page
        en particulier. Afin de donner une couleur rouge à notre titre
        <span class="tags h1">h1</span>, il faudra procéder comme ceci :`,
      },
      {
        type: 'example',
        language: 'html',
        left:
          '<head>\n  <style type="text/css">\n    h1 {\n      color: red;\n    }\n  </style>\n</head>',
        right: `<h1 style="color: red;">Titre rouge</h1>`,
      },
    ],
    [
      {
        type: 'title',
        content: 'Le CSS en ligne',
      },
      {
        type: 'text',
        content: `Le code va être placé directement dans la balise HTML
        que l’on veut styliser comme ceci :`,
      },
      {
        type: 'example',
        language: 'html',
        left: '<h1 style="color: red;">Titre de la page</h1>',
        right: '<h1 style="color: red;">Titre de la page</h1>',
      },
    ],
    [
      {
        type: 'title',
        content: 'Le CSS externe',
      },
      {
        type: 'text',
        content: `C’est le moyen le plus pratique d’ajouter un style
        CSS à un site et c’est justement celui-ci que l’on va utiliser
        lors de ce parcours d’initiation au CSS.
        On va lier un fichier <b>.css</b> externe à
        notre fichier HTML, ainsi toutes les modifications apportées à un
        fichier CSS externe seront visibles sur votre site web.`,
      },
      {
        type: 'text',
        content: `Il faut donc dans un premier temps lier notre fichier <b>.css</b>
        que l’on va appeler <b>style.css</b> à notre fichier html dans la
        balise <span class="tags head">head</span> comme ceci :`,
      },
      {
        type: 'example',
        language: 'html',
        left:
          '<head>\n  <link rel="stylesheet" type="text/css" href="style.css" />\n</head>',
      },
    ],
    [
      {
        type: 'text',
        content: `Maintenant dans notre fichier style.css,
        pour ajouter une couleur rouge à notre titre <span class="tags h1">h1</span> <br />
        il nous suffira de sélectionner notre élément et lui donner du style
        entre des accolades <b>{}</b> comme ceci :`,
      },
      {
        type: 'example',
        language: 'css',
        left: 'h1 {\n  color: red;\n}',
        right: '<h1 style="color: red;">Titre rouge</h1>',
      },
    ],
    [
      {
        type: 'text',
        content: `Il est possible de donner plusieurs styles à un même
        élément HTML et d’en sélectionner plusieurs dans notre feuille de <b>style.css</b>.
        Voici un autre exemple où l’on va donner une couleur rouge à notre
        titre <span class="tags h1">h1</span>
        et le transformer pour qu’il apparaisse en majuscules grâce à la
        propriété <b>text-transform</b>. Nous allons en dessous donner du
        style à un paragraphe <b><span class="tags">p</span></b> en le centrant au milieu de
        la page.`,
      },
      {
        type: 'example',
        language: 'css',
        left:
          'h1 {\n  color: red;\n  text-transform: uppercase;\n}\np {\n  text-align: center;\n}',
        right: `<h1 style="text-transform: uppercase; color: red;">
          Titre rouge
        </h1>
        <p style="text-align: center; margin-top: 1em;">
          Mon paragraphe
        </p>`,
      },
    ],
  ],
};

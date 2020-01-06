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
export default {
  header: {
    title: 'C’est quoi le HTML ?',
    content: [
      <>
        HTML est un acronyme de <Bold>Hypertext Markup Language</Bold>. À vos
        souhaits. Le HTML sert à structurer tous les éléments textuels d’une
        page web. Une page HTML est un peu le squelette de toute page web. C’est
        elle qui va définir le contenu et le hiérarchiser. Un titre, un passage
        important, une citation, une image : tout ça, c’est grâce au HTML.
      </>,
      <>
        Le HTML est accompagné du CSS. Si le{' '}
        <Bold>HTML nous sert à structurer le contenu</Bold>, c’est grâce au CSS
        que l’on va le styliser (organiser le contenu visuellement, apporter de
        la couleur, modifier la police d’écriture, etc.). C’est le duo qui va
        servir à créer le contenu d’une page et à la styliser.
      </>,
      <>
        En général,{' '}
        <Bold>
          on commence l’apprentissage des technologies web par le HTML
        </Bold>{' '}
        qui est le langage le plus abordable pour un débutant. Si le HTML permet
        de structurer une page web, il ne permet pas de styliser une page,
        d’ajouter de l’interactivité complexe ou encore du dynamisme. En ce
        sens, on ne considère pas le HTML comme un langage de programmation mais
        plutôt comme un langage de balisage, permettant de décrire de
        l’information.
      </>,
    ],
  },
  notions: [
    [
      {
        type: 'title',
        content: 'En-tête de page',
      },
      {
        type: 'text',
        content: `Une page web HTML est toujours constituée d’une balise
        ouvrante <span class="tags html">html</span> située au début de la page et d’une
        balise fermante
        <span class="tagsEnd html">html</span> située en fin de page. Ainsi on
        pourra écrire notre contenu à l’intérieur de ces balises. Cela
        fonctionnera de la même manière pour la plupart des balises :
        une balise ouvrante couplée à une balise fermante.`,
      },
      {
        type: 'text',
        content: `Vient ensuite la balise <span class="tags head">head</span>
        qui est le début de la zone d’en-tête, dans laquelle on va inscrire
        nos métadonnées. Cela permet de donner un titre à notre page avec
        la balise <span class="tags title">title</span>, qui apparaîtra plus précisément
        dans l’onglet de la page web.`,
      },
      {
        type: 'text',
        content: 'Voici un exemple :',
      },
      {
        type: 'example',
        language: 'html',
        left:
          "<head>\n  <title>Titre de l'onglet de la page web</title>\n</head>",
        right: 'Onglet de la page',
      },
    ],
    [
      {
        type: 'title',
        content: 'Corps de la page',
      },
      {
        type: 'text',
        content: `Après la balise <span class="tags head">head</span> (en-tête de la
        page) vient le duo de balise <span class="tags body">body</span><span class="tagsEnd body">body</span>
        qui sera le corps de notre page. Cette balise va contenir tous les
        éléments de contenus d’une page web, comme des titres,
        des paragraphes, des articles, des listes…`,
      },
      {
        type: 'text',
        content: 'Voici un exemple de structure de page web :',
      },
      {
        type: 'example',
        language: 'html',
        left:
          "<html>\n  <head>\n    <title>Titre de l'onglet de la page web</title>\n  </head>\n  <body>\n    <header>\n      <h1>Titre de la page</h1>\n    </header>\n    <div>Contenu de la page, articles, sections…</div>\n    <footer>Bas de page</footer>\n  </body>\n</html>",
        right: `<h1>Titre de la page</h1>
          <div>Contenu de la page, articles, sections…</div>
          <footer>Bas de page</footer>`,
      },
      {
        type: 'text',
        content: `On remarquera qu’il faut respecter une indentation.
        C’est à dire un système de poupées russes.
        Il y a toujours une hiérarchie dans les
        balises. La balise <span class="tags h1">h1</span> appartient
        à la balise <span class="tags header">header</span>, qui
        elle-même appartient à la balise <span class="tags body">body</span> et
        ainsi de suite. L’indentation n’est pas utile pour que les
        navigateurs comprennent le code HTML, mais elle est indispensable pour
        préserver la lisibilité pour nous, humains.`,
      },
      {
        type: 'text',
        content: `On peut dire que <span class="tags h1">h1</span>
        est l’enfant de header et header est l’enfant de body. De ce fait, les
        balises <span class="tags header">header</span>, <span class="tags div">div</span>
        et <span class="tags footer">footer</span>
        sont “frères et soeurs” car elles sont toutes
        deux les enfants de body.`,
      },
    ],
  ],
};

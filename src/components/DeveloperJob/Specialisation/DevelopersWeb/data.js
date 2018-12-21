/* eslint-disable max-len */
/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import macaron from 'src/assets/images/MetierDev/macaron.png';
import plante from 'src/assets/images/MetierDev/plante.png';
import robot from 'src/assets/images/MetierDev/robot.png';
import galets from 'src/assets/images/MetierDev/galets.png';
import { Bold } from 'src/components/style';

/*
 * Export
 */
export default [
  {
    // @TODO id use as index: not good
    id: 1,
    title: 'Le développeur front-end',
    description: 'Il donne vie à nos écrans',
    align: 'left',
    image: robot,
    paragraphs: [
      <>
        Le développeur front-end s’occupe du front,{' '}
        <Bold>
          à savoir ce qui se passe à l’écran, du côté de l’utilisateur
        </Bold>
        . Son rôle est multiple : gérer l’interactivité entre l’utilisateur et
        l’interface, la fluidité des animations que l’on voit à l’écran, etc.
      </>,

      'Son rôle est à dissocier du webdesigner, qui lui, réalise les maquettes graphiques. Ce sera ensuite au développeur d’intégrer les maquettes et d’y ajouter les interactions et animations souhaitées. Concernant les technologies dites « front-end » on retrouve le HTML et CSS pour décrire et mettre en page ces contenus, ainsi que le Javascript pour la gestion des interactions, langage de prédilection du dev front.',

      'Bien souvent, le développeur front-end s’arme également d’une chaîne d’outils lui permettant d’avoir un environnement de développement automatique : l’utilisation de bundlers comme Gulp, Parcel ou Webpack, de langages comme SASS pour générer du code CSS, ou encore des modules JavaScript créés par la communauté.',

      <>
        <Bold>
          Le développement front-end peut d’ailleurs se subdiviser en plusieurs
          spécialités
        </Bold>
        , selon sa library ou son framework de prédilection : React, Angular,
        Vue… Mais puisque toutes ses technologies sont basées sur du JavaScript,
        on peut facilement passer de l’une à l’autre. Un développeur Angular
        peut être embauché pour faire du Vue par exemple.
      </>,

      'Le développeur front-end peut aussi être tenté par d’autres environnements que le navigateur. Un développeur React pourra par exemple créer des applications mobiles avec React-Native. Les devs peuvent aussi se laisser tenter par le back-end, en utilisant Node.js, une plateforme logicielle permettant d’utiliser JavaScript côté serveur. Mais ça, c’est du bonus.',
    ],
  },
  {
    id: 2,
    title: 'Le développeur back-end',
    description: 'Le travail de l’ombre',
    align: 'right',
    image: plante,
    paragraphs: [
      <>
        Le développeur back-end, par opposition au développeur front-end,
        s’occupe quant à lui de{' '}
        <Bold>ce que l’on ne voit pas à l’écran, de l’arrière boutique</Bold>.
        Et en coulisses, il se passe pas mal de choses. Par exemple, le
        traitement, l’enregistrement, la gestion et la sécurité des données. En
        gros, c’est la partie invisible du développement web mais essentielle au
        fonctionnement d’une application ou d’un site web.
      </>,

      'Côté back, il y a beaucoup de technologies disponibles. Contrairement à l’environnement front-end aujourd’hui exclusivement en JavaScript, le back-end ne connaît pas les contraintes liées à la compatibilité navigateur. Pour utiliser un langage, il suffit qu’il soit installé sur le serveur ; pas besoin d’utiliser un langage que tous les navigateurs connaissent. De ce fait, il y a donc toute une variété de technos : PHP, Java, Ruby, Python…',

      <>
        Bien souvent, et même si les concepts de programmation sont semblables
        entre les différents langages,{' '}
        <Bold>le développeur est spécialisé sur un langage</Bold>. Plus que ça,
        il est souvent spécialisé dans une technologie en particulier. Plutôt
        que des «&nbsp;développeurs back&nbsp;», on trouvera plutôt des
        «&nbsp;développeurs PHP&nbsp;» ou «&nbsp;développeur Python&nbsp;»,
        voire des «&nbsp;développeurs Symfony&nbsp;» ou «&nbsp;développeur
        Django&nbsp;».
      </>,

      <>
        Cette forte spécialisation provient de la grande responsabilité que les
        développeurs back-end ont sur les épaules. En effet, les problématiques
        y sont critiques :{' '}
        <Bold>la sécurité, la fiabilité et les performances</Bold> notamment.
        Lorsqu’une base de données est piratée, lorsque le serveur est tombé ou
        que l’application est lente, cela vient souvent d’une négligence ou
        d’une méconnaissance des technologies. Et on ne peut les blâmer, il y a
        tellement de choses à connaître qu’on a vite fait d’oublier un détail,
        qui peut alors être fatal. Se spécialiser dans une techno très précise
        permet de limiter le périmètre à maîtriser, afin de s’assurer d’un haut
        niveau d’expertise.
      </>,
    ],
  },
  {
    id: 3,
    title: 'L’intégrateur web',
    description: 'Entre le webdesigner et le développeur front-end',
    align: 'left',
    image: macaron,
    paragraphs: [
      'Parfois occulté entre les métiers de webdesigner et de développeur front-end, l’intégrateur web reste un métier à part entière. Même si cela ne représente pas la majorité, il n’est pas rare de trouver des graphistes sachant intégrer une maquette. Le développeur front-end lui aussi saura intégrer une maquette, même s’il a tendance à préférer JavaScript. Mais webdesigner et dev front oublient parfois certaines subtilités inhérentes à l’intégration web.',

      <>
        Tout d’abord, l’intégrateur aura le souci du détail : la bonne typo, le
        bon interligne, la compatibilité navigateur, le responsive web design…
        Mais au-delà de la restitution du graphisme dans le navigateur,{' '}
        <Bold>l’intégrateur est garant de « l’utilisabilité »</Bold> de la page
        web créée. Il faut que le contenu soit facilement accessible, et cela
        passe par tout un tas de bonnes pratiques de qualité web.
      </>,

      'Par exemple, les interactions doivent être compréhensibles : un bouton peut recevoir un style différent au survol de la souris pour montrer qu’il est cliquable. Mais il faut que ce soit également ergonomique sur mobile où il n’y a pas de souris, ou encore que l’on puisse naviguer au clavier. L’accessibilité concerne également les navigateurs pour personnes malvoyantes qui fera une lecture orale du contenu. Des détails qui comptent.',

      'Travailler l’accessibilité a également un impact sur les utilisateurs disposant d’un navigateur ancien ou d’une connexion lente. D’ailleurs, l’intégrateur web a aussi en charge une partie de l’optimisation des performances, en travaillant sur des problématiques comme la compression des ressources.',

      'Enfin, l’intégrateur façonne la sémantique HTML lors de l’intégration. Avec les spécifications HTML5 mais également les microdonnées, permettant de donner encore un peu plus d’informations sur le contenu. Cela permet notamment d’optimiser l’intégration pour le référencement naturel, et en fait donc une problématique primordiale sur de nombreux projets web.',
    ],
  },
  {
    id: 4,
    title: 'Le développeur full-stack',
    description: 'En un mot : la polyvalence',
    align: 'right',
    image: galets,
    paragraphs: [
      <>
        C'est le développeur web{' '}
        <Bold>aussi bien à l’aise avec les technologies front, que back</Bold>.
        <br />
        Il est donc «&nbsp;full-stack&nbsp;», comprendre ici : «&nbsp;toutes les
        couches, tout terrain, toutes technos&nbsp;». Le&nbsp;développeur web
        full-stack peut donc — en théorie — travailler sur tous les aspects de
        la conception d’un site ou d’une application, en gérant les
        problématiques front, du back ainsi que la partie serveur.
      </>,

      <>
        En théorie, puisque le terme full-stack correspond de moins en moins à
        la réalité du développement web actuel. Les développeurs se spécialisent
        de plus en plus, et il est déjà parfois difficile de suivre quand on est
        dev front ou dev back. Maîtriser parfaitement les deux côtés semble très
        ardu. Si l’on englobe également la partie serveur, ça semble tout
        bonnement impossible.
      </>,

      'Si le développeur full-stack « spécialiste en tout » est une chimère, certains développeurs se considèrent comme « multistack », spécialistes sur plusieurs couches. Le JavaScript pouvant s’utiliser en front comme en back, certains développeurs JS maîtrisent les deux environnements. Mais ils ne seront pas full-stack pour autant, car ils ne s’occuperont peut-être pas de l’optimisation du référencement naturel ou de l’accessibilité. Autre exemple, avec les technologies de virtualisation, certains développeurs back maîtrisent l’art du déploiement serveur et de l’administration système ; on parle dans ce cas de « devops ».',

      <>
        Cela dit,{' '}
        <Bold>
          dans la pratique, il y a bien des postes de développeur full-stack
        </Bold>{' '}
        ; cela dépend de l’exigence de l’application que l’on a à développer.
        Dans les petites structures, il n’est pas rare de croiser un développeur
        full-stack. Parfois, le développeur peut être le seul technicien de
        l’équipe et est en charge du site de l’entreprise. Il s’occupe alors de
        l’intégration, du référencement, du développement front, du
        développement back et du serveur. Le développeur est alors généraliste
        et il n’aura probablement pas le niveau d’expertise d’un développeur
        spécialisé. Mais peu importe, car tous les projets n’ont pas forcément
        besoin du même niveau d’expertise.
      </>,
    ],
  },
];

/* eslint-disable max-len */
import legos from 'src/assets/images/initiation/legos.svg';
import legosHover from 'src/assets/images/initiation/legos-hover.svg';
import artTools from 'src/assets/images/initiation/artTools.svg';
import artToolsHover from 'src/assets/images/initiation/artTools-hover.svg';
import meteor from 'src/assets/images/initiation/meteor.svg';
import elephant from 'src/assets/images/initiation/elephant.svg';

/*
 * Navigation « Les mains dans le code »
 */
export default [
  {
    to: '/initiation/html',
    stage: 'HTML',
    icon: legos,
    iconHover: legosHover,
    // title: 'Lorem ipsum dolor sit amet,',
    description: 'Disséquons le squelette d’une page web',
  },
  {
    to: '/initiation/css',
    stage: 'CSS',
    icon: artTools,
    iconHover: artToolsHover,
    // title: 'Lorem ipsum dolor sit amet,',
    description:
      'On a structuré le contenu, il faut maintenant le mettre en forme.',
  },
  {
    to: '/initiation',
    empty: 'true',
    stage: 'JS',
    icon: meteor,
    // title: 'Lorem ipsum dolor sit amet,',
    description:
      'Le parcours JavaScript est en cours d’élaboration. Il sera bientôt en ligne.',
  },
  {
    to: '/initiation',
    empty: 'true',
    stage: 'PHP',
    icon: elephant,
    // title: 'Lorem ipsum dolor sit amet,',
    description:
      'Le parcours PHP est en cours d’élaboration. Il sera bientôt en ligne.',
  },
];

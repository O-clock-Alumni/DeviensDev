/* eslint-disable max-len */

/*
 * Local Import
 */
import tools from 'src/assets/images/MetierDev/tools.svg';
import microscope from 'src/assets/images/MetierDev/microscope.svg';
import toolsHover from 'src/assets/images/MetierDev/tools-hover.svg';
import microscopeHover from 'src/assets/images/MetierDev/microscope-hover.svg';

/*
 * Pages • Developer Job
 */
export default [
  {
    to: '/metier-developpeur/cest-quoi-un-developpeur',
    title: 'C’est quoi un développeur ?',
    icon: microscope,
    iconHover: microscopeHover,
    description:
      'Récapitulons les bases et décryptons le quotidien du métier de développeur.',
  },
  {
    to: '/metier-developpeur/specialisations-web',
    title: 'Les spécialisations web',
    icon: tools,
    iconHover: toolsHover,
    description:
      'Si le métier de développeur est extrêmement varié, celui de développeur web l’est tout autant.',
  },
  // {
  //   image: ordi,
  //   to: '/metier-developpeur/competences-et-prerequis',
  //   title: 'Compétences et prérequis',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  // },
  // {
  //   image: ordi,
  //   to: '/metier-developpeur/salaires-debouches',
  //   title: 'Salaires et débouchés',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
  // },
];

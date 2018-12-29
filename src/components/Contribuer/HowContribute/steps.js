/* eslint-disable max-len */

/*
 * Local Import
 */
import check from 'src/assets/images/contribuer/Check.svg';
import lunettes from 'src/assets/images/contribuer/Lunettes.svg';
import calendar from 'src/assets/images/contribuer/Calendar.svg';

/*
 * How to Contribute
 */
export const stepsContribute = [
  // {
  //   id: 1,
  //   text: 'Tu fork le dépôt $GitHub$',
  // },
  {
    id: 2,
    text: 'Crée une branche et positionnes toi dessus',
  },
  {
    id: 3,
    text:
      'Crée ton article dans %content/blog/*%, à l’aide du fichier %contributing.md%',
  },
  {
    id: 4,
    text:
      'Crée un fichier %.json% dans %content/authors/*% et ajoutes-y ton twitter et ta bio',
  },
];

/*
 * Script steps
 */
export const scriptSteps = [
  {
    id: 1,
    text: '%yarn% pour installer les dépendances nécessaires',
  },
  {
    id: 2,
    text: '%yarn start% pour lancer le site en local',
  },
];

/*
 * Deploy steps
 */
export const deploySteps = [
  {
    id: 1,
    text: 'On fait une relecture',
    image: lunettes,
  },
  {
    id: 2,
    text: 'On planifie la publication',
    image: calendar,
  },
  {
    id: 3,
    text: 'On met en ligne l’article',
    image: check,
  },
];

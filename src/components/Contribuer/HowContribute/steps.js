/* eslint-disable max-len */

/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { URL_REPO_GITHUB } from 'src/data';

// Assets
import check from 'src/assets/images/contribuer/Check.svg';
import lunettes from 'src/assets/images/contribuer/Lunettes.svg';
import calendar from 'src/assets/images/contribuer/Calendar.svg';

/*
 * How to Contribute
 */
export const stepsContribute = [
  {
    id: 1,
    text: (
      <React.Fragment>
        Fork le dépôt{' '}
        <a href={URL_REPO_GITHUB} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </React.Fragment>
    ),
  },
  {
    id: 2,
    text: 'Crée une branche et positionne-toi dessus',
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

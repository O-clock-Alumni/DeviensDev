/*
 * Local Import
 */

// @TODO -
// 1. Voir s'il est possible de virer les svg OK
// 2. Voir si c'est possible de le remplacer par un fill, ou autre.

import devenirDev from 'src/assets/images/category/DevenirDev.svg';
import devenirDevOk from 'src/assets/images/category/DevenirDev_ok.svg';

import lesBonsTuyaux from 'src/assets/images/category/Les_bons_tuyaux.svg';
import lesBonsTuyauxOk from 'src/assets/images/category/Les_bons_tuyaux_ok.svg';

import troll from 'src/assets/images/category/Troll.svg';
import trollOk from 'src/assets/images/category/Troll_ok.svg';

import vision from 'src/assets/images/category/Vision.svg';
import visionOk from 'src/assets/images/category/Vision_ok.svg';

import vecu from 'src/assets/images/category/Vecu.svg';
import vecuOk from 'src/assets/images/category/Vecu_ok.svg';

/*
 * Export
 */
export default [
  {
    name: 'Vision',
    inactive: vision,
    active: visionOk,
    tag: 'vision',
  },
  {
    name: 'Vécu',
    inactive: vecu,
    active: vecuOk,
    tag: 'vécu',
  },
  {
    name: 'DevenirDev',
    inactive: devenirDev,
    active: devenirDevOk,
    tag: 'devenirdev',
  },
  {
    name: 'Les bons tuyaux',
    inactive: lesBonsTuyaux,
    active: lesBonsTuyauxOk,
    tag: 'tuyau',
  },
  {
    name: 'Troll',
    inactive: troll,
    active: trollOk,
    tag: 'troll',
  },
];

/* eslint-disable max-len */

/*
 * Local Import
 */
import tableOrdi from 'src/assets/images/Home/tableOrdi.png';
import jenga from 'src/assets/images/Home/jenga.png';
import couronne from 'src/assets/images/Home/couronne.png';

/*
 * Home • Navigation
 */
export default [
  {
    to: '/metier-developpeur',
    title: 'Le métier de développeur',
    text:
      'La vocation commence par l’information. Le métier de développeur étant complexe, il est nécessaire de se documenter avant de s’y orienter. Pour ce faire, découvre toutes nos fiches pratiques sur les compétences et pré-requis à réunir, les différentes spécialisations et les débouchés.',
    image: tableOrdi,
    alt: 'Développeur web',
    align: 'left',
  },
  {
    to: '/initiation',
    title: 'Les mains dans le code',
    text:
      'Pour savoir si tu es fait pour devenir développeur, il n’y a pas 36 solutions : il faut commencer à coder ! Pour cela, arpente nos différents parcours d’initiation pour te frotter aux langages web. HTML, CSS, PHP et bien d’autres technologies sont à découvrir !',
    image: jenga,
    alt: 'Cours de code',
    align: 'center',
  },
  {
    to: '/formations',
    title: 'Formations',
    text:
      'Tu sais maintenant ce qu’est le métier de développeur et tu as pu t’exercer pour t’initier au code. La prochaine étape : se former pour devenir développeur web professionnel. Jette un oeil sur notre annuaire de formations pour te donner un avant goût des différents cursus qui s’offrent à toi.',
    image: couronne,
    alt: 'Formation et diplôme',
    align: 'right',
  },
];

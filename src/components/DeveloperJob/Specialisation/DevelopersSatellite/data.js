/* eslint-disable max-len */

/*
 * Local Import
 */
import sifflet from 'src/assets/images/MetierDev/sifflet.png';
import pinceaux from 'src/assets/images/MetierDev/pinceaux.png';
import cloche from 'src/assets/images/MetierDev/cloche.png';

/*
 *
 */
export default [
  {
    id: 1,
    title: 'Le chef de projet',
    description: 'Le gardien des deadlines',
    align: 'right',
    image: sifflet,
    paragraphs: [
      'Il n’est pas développeur à proprement parler mais il fait le pont entre l’équipe technique et le maître d’ouvrage. Il a donc à la fois des compétences relationnelles lui permettant de recevoir les demandes des clients, des compétences techniques pour les traduire auprès des développeurs et des compétences de gestion pour assurer le bon déroulement du projet.',
      'Si le chef de projet n’est pas technicien, certains projets possèdent un chef de projet technique. Il s’agit bien souvent d’un lead développeur qui se déleste du codage afin d’encadrer l’équipe technique.',
      'S’il ne code plus lui-même, il peut toujours décider de choix techniques : architecture à mettre en place, technologies utilisées, méthodologie de projet, etc. Le chef de projet technique est indispensable sur des projets complexes, sur lesquels un chef de projet seul aurait du mal à estimer la charge de travail, et donc à planifier et suivre le déroulement du projet.',
    ],
  },

  {
    id: 2,
    title: 'Le webdesigner',
    description: 'L’alliance de l’esthétique et de l’ergonomie',
    align: 'left',
    image: pinceaux,
    paragraphs: [
      'Aussi appelé graphiste, ou parfois « UX designer » lorsque le travail d’ergonomie est prépondérant (ou pour faire classe sur le CV), le webdesigner travaille sur l’identité visuelle et notamment l’aspect graphique de l’application à réaliser.',
      'Il va travailler sur la réalisation de la charte graphique, du logo, des maquettes des pages… Dans un contexte web, il travaille avec l’intégrateur web ou le développeur front-end qui intégrera ses maquettes.',
      'À la base non développeur, on retrouve néanmoins beaucoup de graphistes ayant également des compétences en intégration web. Et ce, pour répondre aux exigences du marché du travail en besoin croissant de développeur web.',
    ],
  },
  {
    id: 3,
    title: 'L’administrateur système',
    description: 'Il assure le service',
    align: 'right',
    image: cloche,
    paragraphs: [
      'Le développeur se charge de concevoir et de coder l’application. C’est encore un autre métier de rendre disponible cette application au monde entier. Hébergement, serveur HTTP, DNS : tout un tas de subtilités dont ne s’occupe pas tout le temps le développeur.',
      'L’administrateur système a donc la charge de maintenir l’environnement serveur afin que les applications soient bien accessibles et que les logiciels permettant d’exécuter le code soient correctement installés, configurés et mis-à-jour. Là encore, la difficulté de la tâche dépendra du contexte : une application à très fort trafic n’aura pas les mêmes exigences qu’un site de présentation d’une petite entreprise.',
      'Dans certains cas, l’adminsys ne s’occupe pas seulement d’un serveur, mais d’un réseau de serveurs, avec des problématiques de répartition de la charge, de sauvegarde automatique, ou encore de déploiement automatisé.',
    ],
  },
];

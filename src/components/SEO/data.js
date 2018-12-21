/* eslint-disable max-len */

/**
 * SEO data
 * @type {Object}
 */
const data = {
  /*
   * Pages principales
   */

  // Page d'accueil
  home: {
    title: 'DeviensDev le site pour découvrir les métiers du développement',
    description:
      "Tu veux devenir développeur ? Fiches métiers, initiation au code, formations, DeviensDev te donne toutes les infos pour t'informer sur le développement.",
  },

  // Blog • Parlons Dev
  blog: {
    title: 'Parlons Dev : le métier de développeur vu par des développeurs',
    description:
      'Bienvenue sur le blog de DeviensDev. Vécu, tuyaux, vision, les professionnels du dev témoignent pour vous préparer à votre futur carrière de développeur.',
  },

  /*
   * Le métier de développeur
   */

  // Page : Mère
  mainMetierDeveloppeur: {
    title: 'Le métier de développeur, les infos à savoir avant de se lancer',
    description:
      "Spécialisations, compétences, pré-requis, salaires et débouchés, tout ce qu'il savoir sur le métier de développeur avant de se former.",
  },

  // Page : Qu’est-ce que le métier de développeur
  metierDevWhat: {
    title: "Qu'est-ce qu'un développeur et quelles sont ses missions? ",
    description:
      "Avec DeviensDev découvre le quotidien d'un développeur, les langages informatiques et les pré-requis essentiels pour te lancer dans ce métier.",
    type: 'article',
  },

  // Page : Les spécialisations
  metierDevSpecialisation: {
    title: 'Les métiers et spécialisation web : infos, missions et pré-requis',
    description:
      "Découvre les métiers de développeur web et les différentes spécialisations. Back-end, Front-end, fullstack, intégrateur, tout savoir pour mieux s'orienter.",
    type: 'article',
  },

  // @TODO — Page : Compétences et pré-requis
  metierDevCompetences: {},

  // @TODO — Page : Salaires et débouchés
  metierDevSalaire: {},

  /*
   * Formations
   */

  // Page : Mère
  formations: {
    title: 'Trouver votre formation pour vous former au développement',
    description:
      'Quelles formations pour devenir développeur ? Trouve ici prochainement le listing de formation par région et par métier',
  },

  /*
   * Parcours d’Initiation • Les Mains dans le Code
   */

  // Page : Mère
  mainInitiation: {
    title: "Découvre le code informatique grâce à nos parcours d'initiations",
    description:
      "HTML, CSS, PHP et Javascript suis nos différents parcours d'initiations au code et découvre les technologies utilisées pour le développement.",
  },

  // Page : HTML
  initiationHTML: {
    title: 'HTML, découvre ce langage informatique et entraine toi à coder',
    description:
      "Se renseigner c'est bien, s'initier c'est mieux. Arpente notre parcours d'initiation au HTML : leçons et petits exercices pour te familiariser avec cette techno !",
    type: 'article',
  },

  // Page : CSS
  initiationCSS: {
    title: "CSS, arpente le parcours d'initiation pour t'entainer au code",
    description:
      "Après le HTML, place au CSS. Définition, leçons, excercices, familiarise toi à ce langage informatique et entraine toi à coder en suivant le parcours d'initiation",
  },

  // @TODO — Page : JS
  initiationJS: {},

  // @TODO — Page : PHP
  initiationPHP: {},

  /*
   * Pages secondaires
   */

  // Contribution
  contribuer: {
    title: 'Développeurs, partagez votre expériences sur DeviensDev',
    description:
      'Avis à tous les professionnels du développement qui veulent partager leurs connaissances et leur passion. Devenez contributeur de DeviensDev !',
  },

  // À propos de nous | Mentions légales
  aboutUs: {
    title: "DeviensDev un site concocté avec passion par l'école O'clock",
    description:
      "Grâce à l'initiative et au soutien du Feder, O'clock a créé la plateforme DeviensDev qui vise à informer et faire découvrir le métier de développeur.",
  },
};

/**
 * Get SEO data
 * @param  {String} page
 * @return {Object}
 */
export const getSeo = page => data[page];

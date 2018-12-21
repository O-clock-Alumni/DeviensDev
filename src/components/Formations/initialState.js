export default {
  categories: {
    required: ['metiers', 'diplomes'],
    optional: ['format', 'type'],
  },
  metiers: [
    {
      name: 'développeur web',
      checked: false,
    },
    {
      name: 'développeur mobile',
      checked: false,
    },
    {
      name: 'admin système',
      checked: false,
    },
  ],

  diplomes: [
    {
      name: 'BTS',
      checked: false,
    },
    {
      name: 'Licence',
      checked: false,
    },
    {
      name: 'Master',
      checked: false,
    },
    {
      name: 'Titre Professionnel niveau II',
      checked: false,
    },
    {
      name: 'Titre Professionnel niveau III',
      checked: false,
    },
  ],

  format: [
    {
      name: 'Présentiel',
      checked: false,
    },
    {
      name: 'A distance',
      checked: false,
    },
  ],

  type: [
    {
      name: 'En continu',
      checked: false,
    },
    {
      name: 'En alternance',
      checked: false,
    },
  ],
};

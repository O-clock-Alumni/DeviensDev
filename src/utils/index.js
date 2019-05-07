/*
 * Package Import
 */

/*
 * Local Import
 */
import defaultAvatar from 'src/assets/images/defaultAvatar.png';

/*
 * Constantes
 */

// Token OAuth GitHub
const TOKEN = config.GITHUB_TOKEN || '';

// Are we in development mode ?
const isDevelopment = process.env.NODE_ENV === 'development';

// Error message
const TOKEN_IS_MISSING = [
  'The GitHub token is missing, make sure to declare it in the `.env` file.',
  'This will be necessary to get all the features of the website that relate',
  'to the contributors. Please visit https://github.com/settings/tokens/new',
  'to generate one.',
];

/**
 * Get data by the Github username
 * @param  {String} username
 * @return {Promise}
 */
const getDataByUsername = username => {
  if (isDevelopment && !TOKEN) {
    console.error(...TOKEN_IS_MISSING);
    return false;
  }

  const headers = {
    Authorization: `token ${TOKEN}`,
    'user-agent': 'deviensdev-app',
  };

  // API Request
  return fetch(`https://api.github.com/users/${username}`, { headers }).then(
    response => response.json(),
  );
};

/**
 * Get data from Github
 * @param  {String} username
 * @return {Object}
 */
const getContributorFromGithub = async username => {
  try {
    const data = await getDataByUsername(username);

    return {
      // More data is available here :
      // https://developer.github.com/v3/users/
      avatar: data.avatar_url,
      name: data.name,
      url: data.blog.indexOf('http') === 0 ? data.blog : `http://${data.blog}`,
    };
  }
 catch (e) {
    return {
      name: username,
      avatar: defaultAvatar,
    };
  }
};

/**
 * Get the contributor
 * @param  {String}  username
 * @return {Promise}
 */
/* eslint-disable global-require, import/no-dynamic-require */
export const getContributor = async username => {
  let result = {};

  // Get data from Github
  const contributorGithub = await getContributorFromGithub(username);

  // Retrieve data of the contributor, stored in a `.json` file
  const authorData = require(`../../content/authors/${username}`);

  // If the contributor wants another picture than the one on GitHub
  const avatar = authorData.avatar
    ? require(`../../content/authors/images/${authorData.avatar}`)
    : contributorGithub.avatar;

  result = {
    ...contributorGithub,
    ...authorData,
    avatar,
  };

  return result;
};
/* eslint-enable global-require, import/no-dynamic-require */

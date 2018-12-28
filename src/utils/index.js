/*
 * Package Import
 */
import GithubApi from '@octokit/rest';

/*
 * Local Import
 */
import defaultAvatar from 'src/assets/images/defaultAvatar.png';

/*
 * Code
 */

// Token OAuth Github
const token = config.GITHUB_TOKEN || '';

// Configuration Github API
const githubApi = new GithubApi({
  headers: {
    'user-agent': 'deviensdev-app',
  },
});

/**
 * Get data from Github
 * @param  {String} username
 * @return {Object}
 */
const getContributorFromGithub = async username => {
  try {
    await githubApi.authenticate({ type: 'oauth', token });
    const { data } = await githubApi.users.getForUser({ username });

    return {
      // More data available here :
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

export const getContributor = async username => {
  let result = {};

  // Get data from base `authors_x.json`
  // eslint-disable-next-line
  const contributor = require(`../../content/authors/${username}`);

  // Get data from Github
  const contributorGithub = await getContributorFromGithub(username);

  result = {
    ...contributor,
    ...contributorGithub,
  };

  return result;
};

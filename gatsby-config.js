require(`dotenv`).config({
  path: '.env',
});

/**
 * Config Gatsby
 * @api Plugins : https://www.gatsbyjs.org/plugins/
 */
module.exports = {
  siteMetadata: {
    title: 'DeviensDev',
    description: 'DeviensDev le site pour découvrir les métiers du développement',
    author: 'O’clock Team',
    siteUrl: 'https://deviens.dev',
  },
  plugins: [
    `gatsby-plugin-eslint`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,

    /*
     * Gatsby's data processing layer begins with “source” plugins.
     * You can source data nodes from anywhere but most sites,
     * will include data from the filesystem so we start here with
     * “gatsby-source-filesystem”.
     *
     * A site can have as many instances of gatsby-source-filesystem
     * as you need. Each plugin instance is configured with a root path
     * where it then recursively reads in files and adds them to the data tree.
     */
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: `${__dirname}/content/`,
      },
    },

    // Parse all Markdown files
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 800,
            },
          },
          // Adds syntax highlighting to code blocks in markdown
          `gatsby-remark-prismjs`,
          // Copies local files linked to/from markdown to your public folder.
          `gatsby-remark-copy-linked-files`,
          // Replaces “dumb” punctuation marks with “smart” punctuation marks.
          `gatsby-remark-smartypants`,
        ],
      },
    },

    // This plugin sets up Google Analytics for you.
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-72979218-6',
      },
    },

    // Create a sitemap for your Gatsby site.
    `gatsby-plugin-sitemap`,

    /*
     * Adds support for shipping a manifest.webmanifest with your site.
     * If you're using this plugin together with gatsby-plugin-offline, this
     * plugin should be listed before the offline plugin so that it can cache
     * the created manifest.webmanifest.
     */
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'DeviensDev',
        short_name: 'DeviensDev',
        start_url: '/',
        description: 'DeviensDev le site pour découvrir les métiers du développement',
        background_color: '#fec730',
        theme_color: '#000000',
        display: `minimal-ui`,
        icon: `static/favicon.png`,
      },
    },

    // A document head manager for React.
    `gatsby-plugin-react-helmet`,

    /*
     * This plugin generates a service worker and AppShell html file, so the
     * site works offline and is otherwise resistant to bad networks.
     * Works with almost any site!
     */
    // 'gatsby-plugin-offline',
    'gatsby-plugin-remove-serviceworker',
  ],
};

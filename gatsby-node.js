/*
 * Package Import
 */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

// Dotenv is included with Gatsby, no need to install it within the project.
// eslint-disable-next-line import/no-extraneous-dependencies
require('dotenv').config();

/*
 * Local Import
 */

/*
 * Code
 */

// Templates
const Article = path.resolve('./src/templates/Article/index.js');
const Lesson = path.resolve('./src/templates/Initiation/Lesson/index.js');
const Quiz = path.resolve('./src/templates/Initiation/Quiz/index.js');
const Exercise = path.resolve('./src/templates/Initiation/Exercise/index.js');

// Parse date information out of blog post filename.
const POST_FILENAME_REGEX = /([0-9]+)-([0-9]+)-([0-9]+)_(.+)\/([a-z]+)\.md$/;

/**
 * Create a Webpack config.
 * @api : https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
 */
exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    module: {
      // https://github.com/gatsbyjs/gatsby/issues/8583
      rules: [
        {
          type: 'javascript/auto',
          // include: /node_modules/,
          test: /\.mjs$/,
          use: [],
        },
      ],
    },

    resolve: {
      // déclenche l'affichage de la stackframe :
      // mainFields: ['main', 'module'],
      alias: {
        src: path.resolve(__dirname, 'src'),
      },
    },

    // optimization: {
    //  // Useful to debug the production build locally.
    //  minimize: false
    // },

    plugins: [
      plugins.define({
        // Beware not to use "process.env" as a namespace, gatsby prevents
        // editing it. Let's use "config" instead.
        config: {
          GITHUB_TOKEN: JSON.stringify(process.env.DEVIENSDEV_GITHUB_TOKEN),
        },
      }),
    ],
  });
};

/**
 * Create Babel config
 * @api : https://www.gatsbyjs.org/docs/node-apis/#onCreateBabelConfig
 */
exports.onCreateBabelConfig = ({ actions }, pluginOptions) => {
  actions.setBabelPlugin({
    name: `babel-plugin-emotion`,
    options: {
      sourceMap: process.env.NODE_ENV !== `production`,
      ...(pluginOptions || {}),
    },
  });
};

/**
 * On create Node
 * @api : https://www.gatsbyjs.org/docs/node-apis/#onCreateNode
 */
exports.onCreateNode = ({ node, actions, getNode }) => {
  if (node.internal.type === `MarkdownRemark`) {
    let slug = createFilePath({ node, getNode });
    const { relativePath } = getNode(node.parent);

    if (relativePath.includes('blog')) {
      const match = POST_FILENAME_REGEX.exec(relativePath);

      // Get data that we need
      const year = match[1];
      const month = match[2];
      const day = match[3];
      const slugName = node.frontmatter.slug;

      // New format slug
      slug = `/blog/${year}/${month}/${day}/${slugName}`;

      const date = new Date(year, month - 1, day);

      // Blog posts are sorted by date and display the date in their header.
      actions.createNodeField({
        node,
        name: 'date',
        value: date.toJSON(),
      });
    }
    // Used to generate `slug` to view this content.
    actions.createNodeField({ name: `slug`, node, value: slug });

    // Used to generate a GitHub edit link.
    actions.createNodeField({ name: 'path', node, value: relativePath });
  }
};

/**
 * Create Pages
 * This is called after the Gatsby bootstrap is finished, so you have access
 * to any information necessary to programatically create pages.
 *
 * @api : https://www.gatsbyjs.org/docs/node-apis/#createPages
 */
exports.createPages = ({ actions, graphql }) =>
  new Promise((resolve, reject) => {
    // Query for all Markdowns
    resolve(
      graphql(`
        {
          allMarkdownRemark(sort: { fields: [fields___date], order: DESC }) {
            edges {
              node {
                frontmatter {
                  title
                }
                fields {
                  slug
                }
              }
            }
          }
        }
      `).then(result => {
        // pagination

        if (result.errors) {
          reject(result.errors);
        }

        // Create Blog posts pages
        result.data.allMarkdownRemark.edges.forEach(edge => {
          if (edge.node.fields.slug.includes('blog')) {
            actions.createPage({
              path: edge.node.fields.slug,
              component: Article,
              context: {
                // Add optional context data.
                // Data can be used as arguments to the page GraphQL query.
                slug: edge.node.fields.slug,
              },
            });
          }

          // Create lesson pages
          if (edge.node.fields.slug.includes('lesson')) {
            actions.createPage({
              path: edge.node.fields.slug,
              component: Lesson,
              context: {
                // Add optional context data.
                // Data can be used as arguments to the page GraphQL query.
                slug: edge.node.fields.slug,
              },
            });
          }

          // Create quiz pages
          if (edge.node.fields.slug.includes('quiz')) {
            actions.createPage({
              path: edge.node.fields.slug,
              component: Quiz,
              context: {
                // Add optional context data.
                // Data can be used as arguments to the page GraphQL query.
                slug: edge.node.fields.slug,
              },
            });
          }

          // Create practice pages
          if (edge.node.fields.slug.includes('exercise')) {
            actions.createPage({
              path: edge.node.fields.slug,
              component: Exercise,
              context: {
                // Add optional context data.
                // Data can be used as arguments to the page GraphQL query.
                slug: edge.node.fields.slug,
              },
            });
          }
        });
      }),
    );
  });

/*
 * Package Import
 */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Home from 'src/components/Home';
import Layout from 'src/components/Layout';

// Data SEO
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const IndexPage = ({ data }) => (
  <Layout>
    <SEO {...getSeo('home')} />
    <Home data={data} />
  </Layout>
);

/*
 * PropTypes
 */
IndexPage.propTypes = {
  data: PropTypes.object.isRequired,
};

/*
 * GraphQL Query
 */
export const query = graphql`
  query HomeQuery {
    priorityArticles: markdownRemark(
      fields: { slug: { regex: "//blog//" } }
      frontmatter: { priority: { eq: true } }
    ) {
      excerpt(pruneLength: 200)
      id
      frontmatter {
        title
        author
        cover {
          childImageSharp {
            fluid(maxWidth: 880) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
      fields {
        date(formatString: "DD MMM YYYY", locale: "fr")
        slug
      }
    }
    articles: allMarkdownRemark(
      limit: 7
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { slug: { regex: "//blog//" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 200)
          id
          frontmatter {
            title
            author
            cover {
              childImageSharp {
                fluid(maxWidth: 880) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          fields {
            date(formatString: "DD MMM YYYY", locale: "fr")
            slug
          }
        }
      }
    }
  }
`;

/*
 * Export
 */
export default IndexPage;

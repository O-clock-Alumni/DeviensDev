/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Blog from 'src/components/Blog';
import Layout from 'src/components/Layout';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const BlogPage = ({ data, location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('blog')} />
    <Blog data={data} />
  </Layout>
);

/*
 * PropTypes
 */
BlogPage.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

/*
 * GraphQL Query
 */
export const query = graphql`
  query BlogQuery {
    allMarkdownRemark(
      sort: { fields: [fields___date], order: DESC }
      filter: { fields: { slug: { regex: "//blog//" } } }
    ) {
      edges {
        node {
          excerpt(pruneLength: 280)
          id
          frontmatter {
            title
            author
            category
            cover {
              childImageSharp {
                fluid(maxWidth: 1040) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
            priority
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
export default BlogPage;

/*
 * Package Import
 */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Layout from 'src/components/Layout';
import Exercise from 'src/components/Initiation/Practice/Exercise';

/*
 * Template
 */
const ExerciseTemplate = ({ data }) => (
  <Layout>
    <Exercise data={data} />
  </Layout>
);

/*
 * PropTypes
 */
ExerciseTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

/*
 * GraphQL Query
 */
export const query = graphql`
  query Exercise($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        id
        language
        nextPath
        expected
        code {
          before
          after
        }
        image
        value
      }
      fields {
        slug
      }
    }
  }
`;

/*
 * Export
 */
export default ExerciseTemplate;

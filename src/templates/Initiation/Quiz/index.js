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
import Quiz from 'src/components/Initiation/Practice/Quiz';

/*
 * Template
 */
const QuizTemplate = ({ data }) => (
  <Layout>
    <Quiz data={data} />
  </Layout>
);

/*
 * PropTypes
 */
QuizTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

/*
 * GraphQL Query
 */
export const query = graphql`
  query Quiz($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        language
        quizzes {
          id
          type
          label
          answers
          result
          explanation
        }
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
export default QuizTemplate;

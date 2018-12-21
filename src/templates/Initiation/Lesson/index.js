/*
 * Package Import
 */
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

/*
 * Local Import
 */
import Layout from 'src/components/Layout';
import Lesson from 'src/components/Initiation/Practice/Lesson';

/*
 * Template
 */
const LessonTemplate = ({ data }) => (
  <Layout>
    <Lesson data={data} />
  </Layout>
);

/*
 * PropTypes
 */
LessonTemplate.propTypes = {
  data: PropTypes.object.isRequired,
};

/*
 * GraphQL Query
 */
export const query = graphql`
  query Lesson($slug: String!) {
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
        example
        language
        nextPath
        image
        render {
          style
          content
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
export default LessonTemplate;

/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Article from 'src/components/Article';
import { Container, ArticlesList, Title } from './style';

/*
 * Component
 */
const MoreArticle = ({ data }) => (
  <Container>
    <Title>On fait durer le plaisir</Title>

    <ArticlesList>
      {data.edges.map(({ node }) => (
        <Article key={node.id} article={node} />
      ))}
    </ArticlesList>
  </Container>
);

/*
 * PropTypes
 */
MoreArticle.propTypes = {
  data: PropTypes.object,
};

MoreArticle.defaultProps = {
  data: null,
};

/*
 * Export
 */
export default MoreArticle;

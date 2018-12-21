/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import defaultArticle from 'src/assets/images/defaultArticle.jpeg';
import Author from 'src/components/Author';
import {
  Desc,
  Name,
  Image,
  Container,
  Category,
  Link,
  ContainerImage,
  Read,
} from './style';

/*
 * Component
 */
const Article = ({ article, ...props }) => (
  <Container isBig={props.isBig}>
    <Link to={article.fields.slug}>
      {/* Name */}
      <Name to={article.fields.slug} isBig={props.isBig}>
        {article.frontmatter.title}
      </Name>

      {/* Description */}
      {props.isBig && <Desc>{article.excerpt}</Desc>}

      {/* Image */}
      <ContainerImage>
        <Image
          src={
            // @TODO
            article.frontmatter.cover
              ? article.frontmatter.cover.childImageSharp.fluid.src
              : defaultArticle
          }
          isBig={props.isBig}
        />
        <Read>Lire l’article</Read>
      </ContainerImage>

      {/* Category */}
      {article.frontmatter.category && (
        <Category>#{article.frontmatter.category}</Category>
      )}

      {/* Author */}
      <Author author={article.frontmatter.author} isBig={props.isBig} />
    </Link>
  </Container>
);

/*
 * PropTypes
 */
Article.propTypes = {
  article: PropTypes.object.isRequired,
  isBig: PropTypes.bool,
};

Article.defaultProps = {
  isBig: false,
};

/*
 * Export
 */
export default Article;

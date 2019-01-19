/*
 * Package Import
 */
import React from 'react';
// import Img from 'gatsby-image';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import defaultArticle from 'src/assets/images/defaultArticle.jpeg';
import Author from 'src/components/Author';
import * as Style from './style';

/*
 * Component
 */
const Article = ({ article, ...props }) => (
  <Style.Container isBig={props.isBig}>
    <Style.Link to={article.fields.slug}>
      {/* Name */}
      <Style.Name to={article.fields.slug} isBig={props.isBig}>
        {article.frontmatter.title}
      </Style.Name>

      {/* Description */}
      {props.isBig && <Style.Desc>{article.excerpt}</Style.Desc>}

      {/* Image */}
      <Style.ContainerImage>
        <Style.Image
          src={
            // @TODO
            article.frontmatter.cover
              ? article.frontmatter.cover.childImageSharp.fluid.src
              : defaultArticle
          }
          isBig={props.isBig}
        />
        <Style.Read>Lire l’article</Style.Read>
      </Style.ContainerImage>

      {/* Category */}
      {article.frontmatter.category && (
        <Style.Category>#{article.frontmatter.category}</Style.Category>
      )}

      {/* Author */}
      <Author author={article.frontmatter.author} isBig={props.isBig} />
    </Style.Link>
  </Style.Container>
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

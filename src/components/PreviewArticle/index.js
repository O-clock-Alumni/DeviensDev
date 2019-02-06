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
import * as S from './style';

/*
 * Component
 */
const PreviewArticle = ({ article, isBig, fromMoreArticle }) => {
  // Get source of the image
  const srcImage = article.frontmatter.cover
    ? article.frontmatter.cover.childImageSharp.fluid.src
    : defaultArticle;

  // View
  return (
    <S.Container fromMoreArticle={fromMoreArticle} isBig={isBig}>
      <S.Link to={article.fields.slug}>
        {/* Description */}
        <S.Title isBig={isBig}>{article.frontmatter.title}</S.Title>
        {isBig && <S.Text>{article.excerpt}</S.Text>}

        {/* Image */}
        <S.ContainerImage>
          <S.Image isBig={isBig} srcImage={srcImage} />
          <S.Read>Lire l’article</S.Read>
        </S.ContainerImage>

        {/* Category */}
        {article.frontmatter.category && (
          <S.Category>#{article.frontmatter.category}</S.Category>
        )}

        {/* Author */}
        <Author author={article.frontmatter.author} isBig={isBig} />
      </S.Link>
    </S.Container>
  );
};

/*
 * PropTypes
 */
PreviewArticle.propTypes = {
  article: PropTypes.object.isRequired,
  isBig: PropTypes.bool,
  fromMoreArticle: PropTypes.bool,
};

PreviewArticle.defaultProps = {
  isBig: false,
  fromMoreArticle: false,
};

/*
 * Export
 */
export default PreviewArticle;

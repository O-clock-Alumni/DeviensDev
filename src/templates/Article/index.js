/*
 * Package Import
 */
import React from 'react';
import { graphql } from 'gatsby';
import PropTypes from 'prop-types';
import { DiscussionEmbed } from 'disqus-react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import ContributeBtn from 'src/components/ContributeBtn';

// Components
import More from './More';
import Share from './Share';
import Author from './Author';

// Style
import * as Style from './style';

/*
 * Template
 */
const ArticleTemplate = ({ data, location }) => {
  // Props
  const { article, moreArticles, site } = data;
  const content = article.frontmatter;
  const meta = site.siteMetadata;

  // Configuration Disqus
  const disqusConfig = {
    identifier: data.article.id,
    title: article.title,
  };

  return (
    <>
      {/* SEO */}
      <SEO
        type="article"
        location={location}
        title={content.title}
        description={article.excerpt}
        image={content.cover && content.cover.childImageSharp.fluid.src}
      />

      <Layout>
        <Style.Container>
          {/* Header */}
          <Style.Header>
            {/* Author */}
            <Author author={content.author} date={article.fields.date} />

            {/* Title */}
            <Style.Title>{content.title}</Style.Title>
            <Style.Publish>Le {article.fields.date}</Style.Publish>
            {/*
              TODO: rajouter catégorie + lien quand on aura pas mal de contenus
            */}
          </Style.Header>

          {/* Content */}
          <Style.Content>
            <div
              dangerouslySetInnerHTML={{
                __html: article.html,
              }}
            />
            <Share
              siteUrl={meta.siteUrl}
              slug={article.fields.slug}
              title={content.title}
            />
          </Style.Content>

          {/* Comments */}
          <Style.Comments>
            <DiscussionEmbed shortname="deviensdev" config={disqusConfig} />
          </Style.Comments>
        </Style.Container>

        {/* More */}
        {moreArticles && <More data={moreArticles} />}
        <ContributeBtn />
      </Layout>
    </>
  );
};

/*
 * PropTypes
 */
ArticleTemplate.propTypes = {
  data: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
};

/*
 * GraphQL Query
 */
export const query = graphql`
  query Name($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
      }
    }
    article: markdownRemark(fields: { slug: { eq: $slug } }) {
      excerpt
      html
      frontmatter {
        title
        author
        cover {
          childImageSharp {
            fluid(maxWidth: 1040) {
              src
            }
          }
        }
      }
      fields {
        date(formatString: "DD MMMM YYYY", locale: "fr")
        slug
      }
    }
    moreArticles: allMarkdownRemark(
      limit: 3
      filter: { fields: { slug: { ne: $slug, regex: "//blog//" } } }
      sort: { fields: [fields___date], order: DESC }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            author
            cover {
              childImageSharp {
                fluid(maxWidth: 1040) {
                  src
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
export default ArticleTemplate;

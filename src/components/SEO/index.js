/*
 * Package Import
 */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';
import { graphql, StaticQuery } from 'gatsby';

/*
 * Local Import
 */

/*
 * Component
 */
const SEO = ({ description, image, location, title, type }) => (
  <StaticQuery
    query={graphql`
      query SiteMetadata {
        site {
          siteMetadata {
            siteUrl
            title
          }
        }
      }
    `}
    render={({
      site: {
        siteMetadata: { siteUrl, title: siteName },
      },
    }) => (
      <Helmet>
        {/* General tags */}
        <title>{title}</title>
        <meta name="description" content={description} />

        {/* OpenGraph tags */}
        <meta property="og:locale" content="fr_FR" />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:url" content={`${siteUrl}${location.pathname}`} />

        <meta property="og:type" content={type} />
        <meta property="og:title" content={title} />
        <meta property="og:image" content={image} />
        <meta property="og:description" content={description} />

        {/* Twitter tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:image" content={image} />
        <meta name="twitter:description" content={description} />

        {/* Links */}
        <link rel="canonical" href={`${siteUrl}${location.pathname}`} />
      </Helmet>
    )}
  />
);

/*
 * PropTypes
 */
SEO.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

SEO.defaultProps = {
  image: '',
  type: 'website',
};

/*
 * Export
 */
export default SEO;

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
import defaultImage from 'src/assets/images/graph/home/og-home.png';

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
        <meta property="og:description" content={description} />
        <meta property="og:image" content={`${siteUrl}${image}`} />

        {/* Twitter tags */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={`${siteUrl}${image}`} />

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
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
  }).isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string,
};

SEO.defaultProps = {
  image: defaultImage,
  type: 'website',
};

/*
 * Export
 */
export default SEO;

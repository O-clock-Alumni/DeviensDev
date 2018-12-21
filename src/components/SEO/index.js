/*
 * Package Import
 */
import React from 'react';
import Helmet from 'react-helmet';
import PropTypes from 'prop-types';

/*
 * Local Import
 */

/*
 * Component
 */
const SEO = ({ description, image, title, type }) => (
  <Helmet
    title={title}
    meta={[
      // General tags
      { name: 'description', content: description },

      // OpenGraph tags
      { property: 'og:type', content: type },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:image', content: image },

      // Twitter Card tags
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:image', content: image },
    ]}
  />
);

/*
 * PropTypes
 */
SEO.propTypes = {
  description: PropTypes.string.isRequired,
  image: PropTypes.string,
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

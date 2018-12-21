/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
} from 'react-share';

/*
 * Local Import
 */
import facebook from 'src/assets/images/social/facebook.svg';
import twitter from 'src/assets/images/social/twitter.svg';
import linkedin from 'src/assets/images/social/linkedin.svg';

// Styles
import * as Style from './style';

/*
 * Component
 */
const Share = ({ siteUrl, slug, title }) => {
  // Get URL
  const url = `${siteUrl}${slug}`;

  return (
    <Style.Container>
      <Style.ShareTitle>On partage ?</Style.ShareTitle>

      <Style.ShareButton>
        {/* Facebook */}
        <FacebookShareButton url={url} quote={title}>
          <Style.Icon image={facebook} />
        </FacebookShareButton>

        {/* Twitter */}
        <TwitterShareButton url={url} title={title}>
          <Style.Icon image={twitter} />
        </TwitterShareButton>

        {/* LinkedIn */}
        <LinkedinShareButton url={url} title={title}>
          <Style.Icon image={linkedin} />
        </LinkedinShareButton>
      </Style.ShareButton>
    </Style.Container>
  );
};

/*
 * PropTypes
 */
Share.propTypes = {
  siteUrl: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Share;

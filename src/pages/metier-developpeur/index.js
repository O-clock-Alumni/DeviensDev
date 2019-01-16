/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import MetierDeveloppeur from 'src/components/DeveloperJob';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const MetierDeveloppeurPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('mainMetierDeveloppeur')} />
    <MetierDeveloppeur />
  </Layout>
);

/*
 * PropTypes
 */
MetierDeveloppeurPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default MetierDeveloppeurPage;

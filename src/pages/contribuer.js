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
import Contribuer from 'src/components/Contribuer';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const ContribuerPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('contribuer')} />
    <Contribuer />
  </Layout>
);

/*
 * PropTypes
 */
ContribuerPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default ContribuerPage;

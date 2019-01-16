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
import Initiation from 'src/components/Initiation';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const InitiationPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('mainInitiation')} />
    <Initiation />
  </Layout>
);

/*
 * PropTypes
 */
InitiationPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default InitiationPage;

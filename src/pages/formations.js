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
import Formations from 'src/components/Formations';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const FormationsPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('formations')} />
    <Formations />
  </Layout>
);

/*
 * PropTypes
 */
FormationsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default FormationsPage;

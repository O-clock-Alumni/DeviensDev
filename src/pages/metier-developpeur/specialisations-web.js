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
import Specialisation from 'src/components/DeveloperJob/Specialisation';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const SpecialisationPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('metierDevSpecialisation')} />
    <Specialisation />
  </Layout>
);

/*
 * PropTypes
 */
SpecialisationPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default SpecialisationPage;

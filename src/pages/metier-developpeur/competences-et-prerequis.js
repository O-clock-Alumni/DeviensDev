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
import Competences from 'src/components/DeveloperJob/Competences';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const CompetencesPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('metierDevCompetences')} />
    <Competences />
  </Layout>
);

/*
 * PropTypes
 */
CompetencesPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default CompetencesPage;

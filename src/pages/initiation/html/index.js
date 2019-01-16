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
import Intro from 'src/components/Initiation/Intro';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const InitiationHTMLPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('initiationHTML')} />
    <Intro language="html" />
  </Layout>
);

/*
 * PropTypes
 */
InitiationHTMLPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default InitiationHTMLPage;

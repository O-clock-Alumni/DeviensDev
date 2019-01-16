/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import AboutUs from 'src/components/AboutUs';
import Layout from 'src/components/Layout';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const AboutUsPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('aboutUs')} />
    <AboutUs />
  </Layout>
);

/*
 * PropTypes
 */
AboutUsPage.propTypes = {
  location: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default AboutUsPage;

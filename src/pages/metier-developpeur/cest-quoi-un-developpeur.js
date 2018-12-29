/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import Information from 'src/components/DeveloperJob/Information';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const InformationPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('metierDevWhat')} />
    <Information />
  </Layout>
);

/*
 * Export
 */
export default InformationPage;

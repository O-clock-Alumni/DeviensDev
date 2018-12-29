/*
 * Package Import
 */
import React from 'react';

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
 * Export
 */
export default MetierDeveloppeurPage;

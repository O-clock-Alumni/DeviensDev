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
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const MetierDeveloppeurPage = () => (
  <Layout>
    <SEO {...getSeo('mainMetierDeveloppeur')} />
    <MetierDeveloppeur />
  </Layout>
);

/*
 * Export
 */
export default MetierDeveloppeurPage;

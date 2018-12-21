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
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const InformationPage = () => (
  <Layout>
    <SEO {...getSeo('metierDevWhat')} />
    <Information />
  </Layout>
);

/*
 * Export
 */
export default InformationPage;

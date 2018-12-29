/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import Contribuer from 'src/components/Contribuer';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const ContribuerPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('contribuer')} />
    <Contribuer />
  </Layout>
);

/*
 * Export
 */
export default ContribuerPage;

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
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const ContribuerPage = () => (
  <Layout>
    <SEO {...getSeo('contribuer')} />
    <Contribuer />
  </Layout>
);

/*
 * Export
 */
export default ContribuerPage;

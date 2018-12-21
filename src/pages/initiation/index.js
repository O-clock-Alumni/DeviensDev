/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import Initiation from 'src/components/Initiation';

// Data SEO
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const InitiationPage = () => (
  <Layout>
    <SEO {...getSeo('mainInitiation')} />
    <Initiation />
  </Layout>
);

/*
 * Export
 */
export default InitiationPage;

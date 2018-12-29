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
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const InitiationPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('mainInitiation')} />
    <Initiation />
  </Layout>
);

/*
 * Export
 */
export default InitiationPage;

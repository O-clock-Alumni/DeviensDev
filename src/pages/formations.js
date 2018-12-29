/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import Formations from 'src/components/Formations';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const FormationsPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('formations')} />
    <Formations />
  </Layout>
);

/*
 * Export
 */
export default FormationsPage;

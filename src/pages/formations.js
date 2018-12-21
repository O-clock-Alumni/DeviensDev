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
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const FormationsPage = () => (
  <Layout>
    <SEO {...getSeo('formations')} />
    <Formations />
  </Layout>
);

/*
 * Export
 */
export default FormationsPage;

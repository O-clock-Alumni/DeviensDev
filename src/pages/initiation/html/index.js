/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import Intro from 'src/components/Initiation/Intro';

// Data SEO
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const InitiationHTMLPage = () => (
  <Layout>
    <SEO {...getSeo('initiationHTML')} />
    <Intro language="html" />
  </Layout>
);

/*
 * Export
 */
export default InitiationHTMLPage;

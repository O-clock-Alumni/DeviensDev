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
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const InitiationHTMLPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('initiationHTML')} />
    <Intro language="html" />
  </Layout>
);

/*
 * Export
 */
export default InitiationHTMLPage;

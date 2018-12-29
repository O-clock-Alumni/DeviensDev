/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import Specialisation from 'src/components/DeveloperJob/Specialisation';

// Data SEO
import { getSeoData } from 'src/components/SEO/data';

/*
 * Component
 */
const SpecialisationPage = ({ location }) => (
  <Layout>
    <SEO location={location} {...getSeoData('metierDevSpecialisation')} />
    <Specialisation />
  </Layout>
);

/*
 * Export
 */
export default SpecialisationPage;

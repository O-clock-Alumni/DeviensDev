/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import Layout from 'src/components/Layout';
import Competences from 'src/components/DeveloperJob/Competences';

// Data SEO
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const CompetencesPage = () => (
  <Layout>
    <SEO {...getSeo('metierDevCompetences')} />
    <Competences />
  </Layout>
);

/*
 * Export
 */
export default CompetencesPage;

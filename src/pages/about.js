/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import SEO from 'src/components/SEO';
import AboutUs from 'src/components/AboutUs';
import Layout from 'src/components/Layout';

// Data SEO
import { getSeo } from 'src/components/SEO/data';

/*
 * Component
 */
const AboutUsPage = () => (
  <Layout>
    <SEO {...getSeo('aboutUs')} />
    <AboutUs />
  </Layout>
);

/*
 * Export
 */
export default AboutUsPage;

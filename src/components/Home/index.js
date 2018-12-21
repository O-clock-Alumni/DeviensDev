/*
 * Package Import
 */
import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import Intro from './Intro';
import Navigation from './Navigation';
import ParlonsDev from './ParlonsDev';
import Footer from './Footer';

/*
 * Component
 */
const Home = ({ data }) => (
  <Fragment>
    <Intro />
    <Navigation />
    <ParlonsDev data={data} />
    <Footer />
  </Fragment>
);

/*
 * PropTypes
 */
Home.propTypes = {
  data: PropTypes.object.isRequired,
};

/*
 * Export
 */
export default Home;

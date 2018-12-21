/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import Intro from './Intro';
import Outro from './Outro';
import HowContribute from './HowContribute';
import CorrectArticle from './CorrectArticle';

/*
 * Component
 */
const Contribuer = () => (
  <React.Fragment>
    <Intro />
    <HowContribute />
    <CorrectArticle />
    <Outro />
  </React.Fragment>
);

/*
 * Export
 */
export default Contribuer;

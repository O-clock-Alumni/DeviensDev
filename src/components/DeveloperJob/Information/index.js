/*
 * Package Import
 */
import React, { Fragment } from 'react';

/*
 * Local Import
 */
import Intro from './Intro';
import DevWhat from './DevWhat';
import DevDo from './DevDo';
import DevWeb from './DevWeb';
import End from './End';

/*
 * Component
 */
const WhatIsTheDeveloperJob = () => (
  <Fragment>
    <Intro />
    <DevWhat />
    <DevDo />
    <DevWeb />
    <End />
  </Fragment>
);

/*
 * Export
 */
export default WhatIsTheDeveloperJob;

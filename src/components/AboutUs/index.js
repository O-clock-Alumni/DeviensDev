/*
 * Package Import
 */
import React, { Fragment } from 'react';

/*
 * Local Import
 */
import WhoAreWe from './WhoAreWe';
import Terms from './Terms';
import InitiativeEurope from './InitiativeEurope';

/*
 * Component
 */
const AboutUs = () => (
  <Fragment>
    <WhoAreWe />
    <Terms />
    <InitiativeEurope />
  </Fragment>
);

/*
 * Export
 */
export default AboutUs;

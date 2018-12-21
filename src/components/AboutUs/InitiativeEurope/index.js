/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import logos from './data';
import * as Style from './style';

/*
 * Component
 */
const InitiativeEurope = () => (
  <>
    <Style.Baseline>
      <Style.Title>DeviensDev : une initiative européenne</Style.Title>
      <Style.Text>
        La plateforme DeviensDev a vu le jour grâce au soutien du Feder (Fonds
        européen de développement économique&nbsp;régional)
      </Style.Text>
    </Style.Baseline>

    <Style.Logos>
      {logos.map(({ image, alt }) => (
        <Style.Logo key={alt}>
          <Style.Image src={image} alt={alt} />
        </Style.Logo>
      ))}
    </Style.Logos>
  </>
);

/*
 * Export
 */
export default InitiativeEurope;

/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { translate } from './utils';
import { scriptSteps, deploySteps } from './steps';
import { Subtitle, List, Item } from '../style';
import { Container, Image, ProcessContent, Steps, Step } from './style';

/*
 * Component
 */
const Process = () => (
  <Container>
    {/* Scripts */}
    <ProcessContent>
      <Subtitle>Pour tester le rendu de ton article, en local :</Subtitle>
      <List>
        {scriptSteps.map(({ id, text }) => (
          <Item key={id}>{translate(text)}</Item>
        ))}
      </List>
    </ProcessContent>

    {/* Deploy */}
    <ProcessContent>
      <Subtitle>Quand tout est OK :</Subtitle>
      <Steps>
        {deploySteps.map(({ id, text, image }) => (
          <Step key={id}>
            <Image src={image} />
            <p>{text}</p>
          </Step>
        ))}
      </Steps>
    </ProcessContent>
  </Container>
);

/*
 * Export
 */
export default Process;

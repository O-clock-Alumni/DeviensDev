/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Container, WantMore, Text, Button } from './style';

/*
 * Component
 */
const ContributeButton = () => (
  <Container>
    <WantMore>T’as envie de parler dev ?</WantMore>
    <Text>Envoie nous ton article pour contribuer à la plateforme !</Text>
    <Button to="/contribuer">Contribuer</Button>
  </Container>
);

/*
 * Export
 */
export default ContributeButton;

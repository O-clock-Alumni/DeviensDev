/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import { Bold } from 'src/components/style';
import Cards from './Cards';
import { IntroContainer, Title, Text } from './style';

/*
 * Component
 */
const DeveloperJob = () => (
  <>
    <IntroContainer>
      <Title>Le métier de développeur</Title>
      <Text>
        <Bold>
          Vous avez pour ambition de devenir développeur, autant bien comprendre
          de quoi il en retourne.
        </Bold>
        <br />
        Si ce métier commence à faire parler de lui, au point d’en faire une des
        professions les plus «&nbsp;hype&nbsp;» du moment, on se rend compte que
        le développeur reste encore flou pour le grand public.
      </Text>
    </IntroContainer>

    <Cards />
  </>
);

/*
 * Export
 */
export default DeveloperJob;

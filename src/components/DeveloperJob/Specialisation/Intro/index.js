/*
 * Package Import
 */
import React from 'react';

/*
 * Local Import
 */
import plants from 'src/assets/images/MetierDev/plants.svg';
import * as Style from './style';
import * as Parent from '../../style';

/*
 * Component
 */
/* eslint-disable max-len */
const Intro = () => (
  <>
    <Parent.SubContainer>
      <Parent.Title>Les spécialisations web</Parent.Title>

      <Parent.Baseline>
        Si le métier de développeur est extrêmement varié, celui de développeur
        web l’est tout autant. Réaliser un site web ou une application demande
        des compétences techniques différentes. Si autrefois un développeur web
        pouvait gérer tous les aspects techniques d’un projet, aujourd’hui, la
        richesse de la production web et des technologies actuelles ont donné
        lieu à des spécialisations.
      </Parent.Baseline>
    </Parent.SubContainer>
    <Style.Header>
      <Style.Subtitle>Pourquoi se spécialiser ?</Style.Subtitle>
      <Style.Text>
        Un développeur se doit d’avoir des connaissances générales. Mais pour
        grimper en expertise et répondre des problématiques bien différentes,{' '}
        <Style.Bold>les développeurs sont amenés à se spécialiser</Style.Bold>.
        Ces nombreuses spécialisations apportent une fragmentation très
        importante du métier de développeur. Il y a différents types de
        développeur selon la plateforme : logiciel, web, jeux-vidéo… Puis
        plusieurs langages de programmation, puis plusieurs outils, libraries ou
        frameworks au sein de ces langages. C’est l’une des raisons pour
        lesquelles le métier de développeur est en pénurie de compétences.
        Devenir développeur aujourd’hui, c’est donc{' '}
        <Style.Bold>
          la perspective de trouver un secteur en forte demande
        </Style.Bold>{' '}
        !
      </Style.Text>
    </Style.Header>

    <Style.Jungle>
      <img src={plants} alt="jungle" />
      <Style.JungleTitle>
        Pour s’y retrouver dans cette&nbsp;jungle
      </Style.JungleTitle>
      <Style.JungleText>
        Nous avons listé les métiers les plus répandus, que l’on retrouve dans
        les structures de taille moyenne, startups et agences web.
      </Style.JungleText>
    </Style.Jungle>
  </>
);

/*
 * Export
 */
export default Intro;

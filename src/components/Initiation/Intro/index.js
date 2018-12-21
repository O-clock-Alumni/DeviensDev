/*
 * Package Import
 */
import React from 'react';
import PropTypes from 'prop-types';

/*
 * Local Import
 */
import PaginationIntro from 'src/components/Initiation/Intro/PaginationIntros';
import Notion from './Notion';
import * as S from './style';
import datas from './datas';

/*
 * Component
 */
/* eslint-disable react/no-array-index-key */
const Intro = ({ language }) => {
  const { header, notions } = datas[language];

  return (
    <S.Wrapper>
      {/* pagination des différents parcours */}
      <PaginationIntro />

      {/* Intro */}
      <S.DivGrey>
        <S.Title>{header.title}</S.Title>
        {header.content.map((cont, index) => (
          <S.Text key={index}>{cont}</S.Text>
        ))}
      </S.DivGrey>

      {/* Content */}
      <S.Content>
        <S.SubTitle>
          Comment ça marche le <span>{language}</span> ?
        </S.SubTitle>
        {notions &&
          notions.map((notion, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <Notion data={notion} key={index} />
          ))}
      </S.Content>

      {/* Outro */}
      <S.DivGrey>
        <S.Title>On passe aux leçons !</S.Title>

        <S.ArticleFooter>
          Vous savez maintenant à quoi sert le <span>{language}</span> et à quoi
          ça ressemble
        </S.ArticleFooter>
        <S.ArticleFooterEnd>
          Il ne reste plus qu’à démarrer le parcours !
        </S.ArticleFooterEnd>

        <S.Button to={`/initiation/${language}/lesson/1`}>
          Commencer le parcours {language}
        </S.Button>
      </S.DivGrey>
    </S.Wrapper>
  );
};

Intro.propTypes = {
  language: PropTypes.string.isRequired,
};

/*
 * Export
 */
export default Intro;

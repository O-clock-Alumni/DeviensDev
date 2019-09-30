/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth, weights } from 'src/themes';
import guillemet from 'src/assets/images/common/guillemet.svg';

/*
 * Code
 */
export const mainSize = 800;
const headerSize = 1200;

/*
 * Style
 */
export const Container = styled.div({
  width: '100%',
  padding: '1em 1em',

  /* @medias */
  [minWidth(breakpoints.small)]: {
    padding: '1em 1.5em',
  },
  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
  },
  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

/*
 * Header article
 */
export const Header = styled.div({
  margin: '0 auto 3em',
  maxWidth: headerSize,
  padding: '0 1em',
  textAlign: 'center',
});

export const Title = styled.h1({
  marginTop: '1em',
  fontSize: '2em',
  fontFamily: 'Encode Sans Condensed',
  fontWeight: weights.bold,

  /* @medias */
  [minWidth(breakpoints.small)]: {
    fontSize: '2.5em',
  },

  [minWidth(breakpoints.medium)]: {
    fontSize: '3em',
  },
});

export const Publish = styled.p({
  color: colors.greySubtitle,
  fontWeight: weights.light,
  marginTop: '.25em',
});

/*
 * Content
 */
export const Content = styled.div({
  // # Titre
  // h1: {
  //   maxWidth: mainSize,
  //   fontFamily: 'Encode Sans Condensed',
  //   fontWeight: weights.bold,
  //   margin: '1.5em auto',
  //   fontSize: '1.3em',
  //   textTransform: 'uppercase',
  //   color: colors.black,
  // },

  'h1, h2, h3, h4, h5, h6': {
    maxWidth: mainSize,
    margin: 'auto',
  },

  // ## Titre de niveau 2
  h2: {
    fontWeight: weights.bold,
    fontSize: '1.5em',
    marginTop: '1em',
  },

  // ### Titre de niveau 3
  h3: {
    fontWeight: weights.bold,
    fontSize: '1.2em',
    marginTop: '1em',
  },

  h4: {
    fontWeight: weights.bold,
    fontSize: '1.1em',
    marginTop: '1em',
  },

  // Texte
  p: {
    ...base.mainText,
    maxWidth: mainSize,
    margin: 'auto',

    // **Gras**
    strong: {
      fontWeight: weights.semiBold,
      color: colors.black,
    },

    // _Italique_
    em: {
      fontStyle: 'italic',
    },
  },

  // List
  ul: {
    maxWidth: mainSize,
    margin: 'auto',

    li: {
      ...base.mainText,
      listStyle: 'disc',
      position: 'relative',
      left: '1.1em',
      padding: '0 1.1em 0 .3em',
    },
  },

  // >
  // > Citation
  // >
  blockquote: {
    // Container
    background: colors.greenWater,
    display: 'flex',
    justifyContent: 'center',
    fontWeight: weights.bold,
    fontStyle: 'italic',
    padding: '3em 1em 1em',
    textAlign: 'center',
    width: '100vw',

    // “Quote”
    '&::before': {
      content: '""',
      position: 'relative',
      top: '-1.5em',
      display: 'block',
      width: 70,
      height: 55,
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${guillemet})`,
    },

    '&::after': {
      content: '""',
      position: 'relative',
      top: '-1.5em',
      display: 'block',
      width: 70,
      height: 55,
      backgroundRepeat: 'no-repeat',
      backgroundImage: `url(${guillemet})`,
      transform: 'rotateY(180deg)',
    },

    // Texte
    p: {
      maxWidth: mainSize,
      margin: '0 2em',
      color: '#0c7a53',
      fontSize: '1.35em',
      display: 'flex',
      flexDirection: 'column',
    },

    // Auteur de la citation
    cite: {
      display: 'flex',
      flexDirection: 'column',
      fontSize: '.65em',
      marginTop: '2em',
      fontWeight: weights.bold,
      lineHeight: '1em',

      em: {
        fontWeight: 400,
      },
    },
  },

  'img[src$=".gif"]': {
    width: '100%',
    height: '100%',
  },

  // Texte d'illustration en dessous de l'image
  'a.gatsby-resp-image-link + em': {
    maxWidth: mainSize,
    margin: '1em auto',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    color: colors.grey,
    fontWeight: weights.light,
    fontStyle: 'italic',
    fontSize: '0.9em',
  },

  // Séparation ---
  hr: {
    width: 150,
    margin: '2.5em auto',
    borderBottom: `2px solid ${colors.mainColor}`,
  },

  // Lien
  'a:not(.gatsby-resp-image-link)': {
    ...base.link,
  },

  // Snippet
  '.gatsby-highlight': {
    maxWidth: mainSize,
    marginLeft: 'auto',
    marginRight: 'auto',
  },
});

/*
 * Commentaires
 */
export const Comments = styled.div({
  margin: '3em auto',
  maxWidth: mainSize,
});

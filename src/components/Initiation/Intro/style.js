/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { colors, base, breakpoints, minWidth, weights } from 'src/themes';

/*
 * Style
 */
export const Wrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',

  b: {
    fontWeight: 'bold',
  },

  '.tags': {
    '::before': {
      content: '"<"',
      display: 'inline-block',
    },
    '::after': {
      content: '">"',
      display: 'inline-block',
    },
  },

  '.tagsEnd': {
    '::before': {
      content: '"</"',
      display: 'inline-block',
    },
    '::after': {
      content: '">"',
      display: 'inline-block',
    },
  },

  '.head': {
    color: colors.head,
  },

  '.body': {
    color: colors.body,
  },

  '.header': {
    color: colors.header,
  },

  '.footer': {
    color: colors.footer,
  },

  '.html': {
    color: colors.html,
  },

  '.title': {
    color: colors.title,
  },

  '.h1': {
    color: colors.h1,
  },
});

export const Content = styled.div({
  maxWidth: '1200px',
  width: '100%',
  margin: '0 auto 4em',
  padding: '0 1em',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '0 1.5em',
  },
  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
  },
  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

/*
 * Intro
 */
export const DivGrey = styled.div({
  background: colors.lightGrey,

  textAlign: 'center',
  position: 'relative',
  padding: '3em 1em 2em',

  // Breakpoints
  [minWidth(breakpoints.xlarge)]: {
    paddingTop: '4em',
    paddingBottom: '3em',
  },
});

export const Text = styled.div({
  ...base.mainText,
  margin: '0 auto',
  maxWidth: 1100,
  paddingLeft: '1em',
  paddingRight: '1em',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    paddingLeft: '1.5em',
    paddingRight: '1.5em',
  },
  [minWidth(breakpoints.medium)]: {
    paddingLeft: '2em',
    paddingRight: '2em',
  },
  [minWidth(breakpoints.large)]: {
    paddingLeft: '4em',
    paddingRight: '4em',
  },
});

export const Title = styled.h2({
  ...base.boxTitle,
});

export const ArticleIntro = styled.div({
  marginBottom: '0.5em',
  textAlign: 'center',
  fontWeight: 'light',
  padding: '0 1em',

  // Breakpoints
  [minWidth(breakpoints.small)]: {
    padding: '0 1.5em',
  },
  [minWidth(breakpoints.medium)]: {
    padding: '0 2em',
  },
  [minWidth(breakpoints.large)]: {
    padding: '0 4em',
  },
});

/* articles de la page */

export const SubTitle = styled.h2({
  color: colors.mainColor,
  fontSize: '1.8em',
  marginTop: '2em',
  marginBottom: '1em',
  fontWeight: 'bold',
  fontFamily: 'EncodeSansCondensed',
  letterSpacing: '.06em',

  span: {
    textTransform: 'uppercase',
  },
});

/* article footer */

export const ArticleFooter = styled.p({
  fontSize: '1.25em',
  fontFamily: 'EncodeSansCondensed',
  fontWeight: weights.bold,

  span: {
    textTransform: 'uppercase',
  },
});

export const ArticleFooterEnd = styled.p({
  ...base.mainText,
  padding: '.25em 0',
  textAlign: 'center',
});

/*
 * Style link
 */
export const Button = styled(Link)({
  ...base.primaryButton,
  display: 'block',
  margin: '3em auto 0',
});

/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, colors } from 'src/themes';
import { breakpoints, maxWidth, minWidth } from 'src/themes/medias';

/*
 * Style
 */
export const Wrapper = styled.div({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  fontSize: '1.1em',
  padding: '0 1em',
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

// Text
export const Parcours = styled.h1({
  ...base.primaryTitle,
  textAlign: 'center',
});

export const Content = styled.div({
  '& h2': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textTransform: 'uppercase',
    fontSize: '2em',
    width: '100%',
    fontFamily: 'Encode Sans Condensed',
    letterSpacing: '.06em',
    margin: '1em auto 0.5em',

    // Pseudo-elements
    '&::before': {
      content: '""',
      display: 'block',
      width: '5%',
      height: '3px',
      marginRight: '1em',
      backgroundColor: colors.black,
    },
    '&::after': {
      content: '""',
      display: 'block',
      width: '5%',
      height: '3px',
      marginLeft: '1em',
      backgroundColor: colors.black,
    },
  },
  '& h3': {
    fontFamily: 'Encode Sans Condensed',
    letterSpacing: '.06em',
    fontSize: '1.5em',
    color: colors.mainColor,
    textAlign: 'center',
    textTransform: 'uppercase',
    margin: '1em auto 1em auto',

    // Breakpoints
    [maxWidth(breakpoints.medium)]: {
      fontSize: '0.8em',
    },
  },

  '& p': {
    textAlign: 'center',
    marginBottom: '3em',
    color: colors.greySubtitle,

    '& em': {
      fontWeight: 'bold',
    },

    // Breakpoints
    [maxWidth(breakpoints.medium)]: {
      fontSize: '0.8em',
      marginBottom: '2em',
    },
  },
});

// Editeur de code
export const CodeEditor = styled.div({
  display: 'flex',
  width: '100%',
  margin: '2em auto',
  flexDirection: 'column',
  justifyContent: 'space-between',
  fontFamily: 'FiraCode',

  // Breakpoints
  [minWidth(breakpoints.large)]: {
    flexDirection: 'row',
    alignItems: 'stretch',
  },
});

export const Border = styled.div({
  borderBottom: `3px solid ${colors.mainColor}`,
  margin: '3em auto 2em',
  width: '4%',
});

export const PathTo = styled(Link)({
  ...base.primaryButton,
  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    fontSize: '0.9em',
  },
});

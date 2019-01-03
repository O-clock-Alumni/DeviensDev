/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth, maxWidth } from 'src/themes';

/*
 * Style
 */
export const NotionContainer = styled.div({
  margin: '0 auto 2em',
});

export const Article = styled.p({
  ...base.mainText,
});

export const ArticleTitle = styled.h2({
  color: colors.mainColor,
  fontSize: '1.4em',
  fontWeight: 'bold',
  fontFamily: 'Encode Sans Condensed',
  letterSpacing: '.06em',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    fontSize: '1em',
  },

  '&::after': {
    content: '""',
    display: 'inline-block',
    verticalAlign: 'middle',
    width: '5%',
    height: '3px',
    marginLeft: '1em',
    backgroundColor: colors.mainColor,
  },
});

/*
 * Éditeur de code et rendu à droite
 */
export const Example = styled.div({
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

/*
 * Package Import
 */
import styled from 'react-emotion';
import { colors, breakpoints, minWidth, weights } from 'src/themes';

/*
 * Local Import
 */

/*
 * Style
 */
export const Container = styled.div({
  width: '100%',
  margin: 'auto',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '4em',
  padding: '3em 0',
  backgroundColor: colors.lightGrey,
});

export const ArticlesList = styled.div({
  display: 'flex',
  alignItems: 'flex-end',
  justifyContent: 'center',
  width: '100%',
  flexWrap: 'wrap',

  [minWidth(breakpoints.medium)]: {
    flexWrap: 'nowrap',

    'a>img': {
      height: '150px',
    },
  },

  [minWidth(breakpoints.large)]: {
    'a>img': {
      height: '250px',
    },
  },
  [minWidth(breakpoints.xlarge)]: {
    padding: '0 3em',
  },
});

export const Title = styled.h2({
  fontFamily: 'Encode Sans Condensed',
  fontWeight: weights.light,
  color: colors.mainColor,
  fontSize: '3.5em',
  textTransform: 'uppercase',
  letterSpacing: '0.1em',
  marginBottom: '1em',
  textAlign: 'center',
});

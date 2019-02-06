/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth } from 'src/themes';

/*
 * Code
 */

/*
 * Style
 */
export const Container = styled.div({
  '::after': {
    content: 'none',
  },
});

export const Content = styled.div({
  display: 'flex',
  flexDirection: 'column',

  // Breakpoints
  [minWidth(breakpoints.xlarge)]: {
    margin: '0 auto',
  },
});

export const Title = styled.h1({
  ...base.primaryTitle,
  textAlign: 'center',
});

export const ArticlesContainer = styled.div({
  background: colors.lightGrey,
  padding: '1em 0em 3em',
});

export const Articles = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'space-between',
  maxWidth: 1000,
  margin: '0 auto',
});

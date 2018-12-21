/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  background: colors.lightGrey,

  position: 'relative',
  padding: '2em 0',
  marginTop: '5em',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    padding: '2em',
  },
  [minWidth(breakpoints.xlarge)]: {
    padding: '2em 4em',
  },
});

export const Subtitle = styled.h2({
  ...base.boxTitle,
});

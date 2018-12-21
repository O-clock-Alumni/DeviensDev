/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { colors, minWidth, breakpoints } from 'src/themes';

export const Container = styled.div(
  {
    width: '100%',
    backgroundColor: colors.lightGrey,
    padding: '1em 0',
    fontFamily: 'FiraCode',
    fontSize: '.9em',
    lineHeight: '1.6em',
  },
  ({ large }) =>
    large && {
      // Breakpoints
      [minWidth(breakpoints.large)]: {
        width: '60%',
      },
    },
);

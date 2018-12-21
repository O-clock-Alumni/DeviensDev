/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { colors, weights } from 'src/themes';

/*
 * Style
 */

export const Container = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '1em',
});

export const Button = styled.button(
  {
    margin: '0 .2em',

    fontSize: '1.2em',
  },
  ({ isActive }) =>
    isActive && {
      color: colors.mainColor,
      fontWeight: weights.bold,
      textDecoration: 'underline',
    },
);

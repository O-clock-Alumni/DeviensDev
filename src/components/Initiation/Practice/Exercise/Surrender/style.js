/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, maxWidth, weights } from 'src/themes';
import { PopupButton } from 'src/components/Initiation/Popup/style';

/*
 * Style
 */
export const SurrenderBtn = styled.button({
  margin: '1em 1em',
  width: 'fit-content',
  padding: '0.2em 0.4em',
  background: colors.explanation,
  color: colors.white,
  textTransform: 'uppercase',
  fontWeight: weights.bold,
  fontSize: '0.8em',
  fontFamily: 'EncodeSansCondensed',
  letterSpacing: '.06em',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    width: 'fit-content',
    fontSize: '0.7em',
  },
});

/*
 * Popup buttons
 */
export const Confirm = styled.button({
  ...PopupButton,
  color: colors.explanation,
});

export const Back = styled.button({
  ...PopupButton,
  color: colors.greyLink,
});

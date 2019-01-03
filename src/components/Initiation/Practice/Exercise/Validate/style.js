/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, maxWidth, weights } from 'src/themes';
import { PopupButton } from 'src/components/Initiation/Popup/style';

/*
 * Style
 */
export const ValidateBtn = styled.button({
  margin: '1em 0',
  width: 'fit-content',
  padding: '0.2em 0.4em',
  background: colors.greenWater,
  color: colors.white,
  textTransform: 'uppercase',
  fontWeight: weights.bold,
  fontSize: '0.8em',
  fontFamily: 'Encode Sans Condensed',
  letterSpacing: '.06em',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    width: 'fit-content',
    fontSize: '0.7em',
  },
});

export const PathTo = styled(Link)({
  ...PopupButton,
  color: colors.greenWater,
});

export const Back = styled.div({
  ...PopupButton,
  color: colors.greyLink,
});

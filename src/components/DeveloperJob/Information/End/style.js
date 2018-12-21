/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, minWidth, breakpoints } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  ...base.outroContainer,
  [minWidth(breakpoints.xlarge)]: {
    paddingTop: '4em',
  },
});

export const WantMore = styled.h2({
  ...base.wantMore,
});

export const Text = styled.p({
  ...base.mainText,
  padding: '.25em 0',
  textAlign: 'center',
});

export const Button = styled(Link)({
  ...base.primaryButton,
  width: 270,
});

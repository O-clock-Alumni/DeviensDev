/*
 * Package Import
 */
import styled from 'react-emotion';
import { Link as ReachLink } from 'gatsby';

/*
 * Local Import
 */
import { base, breakpoints, minWidth } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  ...base.outroContainer,
});

export const WantMore = styled.h2({
  ...base.wantMore,
});

export const BlockAtSmall = styled.span({
  [minWidth(breakpoints.small)]: {
    display: 'block',
  },
});

export const Text = styled.p({
  ...base.mainText,
  padding: '.25em 0',
  textAlign: 'center',
});

export const Button = styled(ReachLink)({
  ...base.primaryButton,
  display: 'block',
  margin: '1.5em auto 5em',
});

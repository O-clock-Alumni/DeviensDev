/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth } from 'src/themes';

/*
 * Direct export
 */
export { Articles } from 'src/components/Blog/style';

/*
 * Code
 */
const align = 'center';
const isUppercase = true;

/*
 * Style
 */
export const Container = styled.div({
  background: colors.lightGrey,
  padding: '4em 0em 2em',
  [minWidth(breakpoints.xxlarge)]: {
    padding: '6em 0em 2em',
  },
});

export const Title = styled.h2({
  ...base.secondaryTitle(align, isUppercase),
  padding: 0,

  // Traits
  [minWidth(breakpoints.small)]: {
    '::before, ::after': {
      background: colors.mainColor,
      borderRadius: 5,
      content: '""',
      display: 'inline-block',
      margin: '0 .5em',
      verticalAlign: 'middle',
      height: 3,
      width: 100,
    },
  },
});

export const Text = styled.p({
  textAlign: 'center',
  margin: 'auto',
  maxWidth: 500,
  padding: '1em 1em 0 1em',
});

export const More = styled.div({
  textAlign: 'center',
  padding: '1em 0',
});

export const MoreLink = styled(Link)({
  ...base.primaryButton,
});

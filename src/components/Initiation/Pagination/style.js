/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, minWidth } from 'src/themes';

/*
 * Style
 */
export const Nav = styled.ul({
  display: 'none',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    display: 'flex',
    fontFamily: 'EncodeSansCondensed',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    letterSpacing: '.06em',
    maxWidth: 960,
    margin: '1em auto 2em',
    padding: '0 .5em',
  },
});

export const Item = styled.li(
  {
    margin: '.3em .2em',
  },
  ({ isActive }) => ({
    background: isActive ? colors.mainColor : colors.grey,
  }),
);

export const Button = styled(Link)({
  borderRadius: 1,
  color: colors.white,
  display: 'inline-block',
  fontSize: '.7em',
  minWidth: 60,
  padding: '.3em .1em',
  textAlign: 'center',
  textTransform: 'uppercase',

  // Breakpoints
  [minWidth(breakpoints.large)]: {
    fontSize: '.9em',
  },

  [minWidth(breakpoints.xlarge)]: {
    fontSize: '1em',
    minWidth: 75,
  },
});

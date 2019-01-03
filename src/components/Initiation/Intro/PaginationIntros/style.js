/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, maxWidth } from 'src/themes';

/*
 * Style
 */
export const Nav = styled.div({
  display: 'flex',
  flexDirection: 'row',
  alignContent: 'space-between',
  margin: '1em auto',
  fontFamily: 'Encode Sans Condensed',
  fontWeight: 'bold',
  letterSpacing: '.06em',
  textTransform: 'uppercase',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});

export const NavButton = styled(Link)({
  margin: '1em 1em',
  color: colors.grey,
  textTransform: 'uppercase',
  fontSize: '3em',
  textAlign: 'center',
  fontFamily: 'Encode Sans Condensed',
  letterSpacing: '.06em',
  width: 'fit-content',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    fontSize: '1.5em',
    width: 'fit-content',
  },
  '&:hover': {
    color: colors.mainColor,
  },
});

export const NavButtonInactive = styled.div({
  margin: '1em 1em',
  color: colors.lightGrey,
  textTransform: 'uppercase',
  fontSize: '3em',
  textAlign: 'center',
  fontFamily: 'Encode Sans Condensed',
  width: 'fit-content',

  // Breakpoints
  [maxWidth(breakpoints.xlarge)]: {
    fontSize: '1.5em',
    width: 'fit-content',
  },
});

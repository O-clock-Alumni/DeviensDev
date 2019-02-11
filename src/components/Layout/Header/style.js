/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled, { keyframes } from 'react-emotion';

/*
 * Local Import
 */
import shortLogo from 'src/assets/images/common/logo-short.svg';
import { animation, breakpoints, colors, minWidth, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.header({
  background: colors.white,
  borderBottom: `1px solid ${colors.lightGrey}`,
  top: 0,
  left: 0,
  right: 0,
  padding: '.6em',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 10,
});

/*
 * Logo
 */
export const Logo = styled(Link)({
  content: '""',
  cursor: 'pointer',
  background: `url(${shortLogo}) no-repeat`,
  backgroundSize: '100%',
  width: '3.4em',
  height: '3.4em',
});

/*
 * Nav
 */
export const Nav = styled.nav(
  {
    display: 'flex',
    fontSize: '.9em',
    maxWidth: 1600,
    margin: '0 auto',
    flexDirection: 'column',
    justifyContent: 'flex-start',

    // Medias
    [minWidth(breakpoints.large)]: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
  },
  ({ open }) =>
    open && {
      height: '100vh',
      flexDirection: 'row',
      justifyContent: 'center',
    },
);

export const Links = styled.ul(
  {
    display: 'none',
    alignItems: 'center',
    justifyContent: 'space-between',

    // Active link
    '.activeLink': {
      color: colors.mainColor,
    },

    // Medias
    [minWidth(breakpoints.large)]: {
      display: 'flex',
    },
  },
  ({ open }) =>
    open && {
      display: 'flex',
      alignItems: 'flex-start',
      flexDirection: 'column',
      position: 'absolute',
      fontSize: '2em',
      margin: 'auto',
      transform: 'translateY(-50%) translateX(-50%)',
      left: '50%',
      top: '50%',

      '> li': {
        margin: '.5em',
      },
    },
);

export const Item = styled.li(
  ({ open }) =>
    open && {
      animation: `${keyframes(animation.fadeInTop)} .3s .1s both`,
    },
  {
    fontFamily: 'Encode Sans Condensed',
    fontWeight: weights.medium,
    letterSpacing: '.04em',
    margin: '.1em 1em',
    position: 'relative',
    textTransform: 'uppercase',

    // Border
    a: {
      borderBottom: '1px solid transparent',
    },

    ':hover, :focus': {
      cursor: 'pointer',

      a: {
        borderColor: colors.mainColor,
      },
    },
  },
);

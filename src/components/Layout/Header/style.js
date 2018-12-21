/*
 * Package Import
 */
import { Link } from 'gatsby';
import styled, { keyframes } from 'react-emotion';

/*
 * Local Import
 */
import { animation, colors, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.header({
  background: colors.white,
  borderBottom: `1px solid ${colors.lightGrey}`,
  top: 0,
  left: 0,
  right: 0,
  padding: '1em',
  position: 'fixed',
  overflow: 'hidden',
  zIndex: 10,
});

/*
 * Logo
 */
export const Logo = styled(Link)({
  display: 'block',
  fontSize: '1.7em',
  fontWeight: weights.bold,
  textTransform: 'uppercase',
  fontFamily: 'EncodeSansCondensed',
  letterSpacing: '.06em',
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
  },
  ({ open }) => {
    let responsiveHeight;
    if (open) {
      responsiveHeight = {
        height: '100vh',
      };
    }

    return {
      ...responsiveHeight,
      flexDirection: open ? 'column' : 'row',
      justifyContent: open ? 'flex-start' : 'space-between',
    };
  },
);

export const Links = styled.ul(
  {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',

    // Active link
    '.activeLink': {
      color: colors.mainColor,
    },
  },
  ({ open }) =>
    open && {
      alignItems: 'flex-start',
      position: 'absolute',
      flexDirection: 'column',
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
    fontFamily: 'EncodeSansCondensed',
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

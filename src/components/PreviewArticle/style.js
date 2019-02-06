/*
 * Package Import
 */
import { Link as GatsbyLink } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, minWidth, maxWidth, weights } from 'src/themes';

/**
 * Create 3D Text
 * @param  {Number} [size=3]
 * @return {Object} - { color, textShadow, transform }
 */
const create3dText = (size = 3) => {
  const color = colors.black;
  const shadowColor = colors.mainColor;
  const textShadow = Array.from(Array(size), (a, b) => b + 1)
    .map(shadowSize => `${shadowSize}px ${shadowSize}px 0 ${shadowColor}`)
    .join(', ');
  const transform = `translate3d(-${size}px, -${size}px, 0)`;
  return { color, textShadow, transform };
};

/*
 * Style
 */
export const Title = styled.h2(
  {
    alignItems: 'flex-end',
    display: 'flex',
    fontSize: '1.5em',
    fontWeight: weights.bold,
    fontFamily: 'Encode Sans Condensed',
    marginBottom: '.5em',
    height: '2.6em',
    overflow: 'hidden',
  },
  // New
  ({ isBig }) =>
    isBig && {
      // @media
      [minWidth(breakpoints.medium)]: {
        fontSize: '2em',
        justifyContent: 'center',
        textAlign: 'center',
        marginBottom: 0,
      },

      [minWidth(breakpoints.xlarge)]: {
        fontSize: '3em',
      },
    },
);

export const ContainerImage = styled.figure({
  position: 'relative',
});

export const Image = styled.div(
  {
    display: 'block',
    backgroundSize: 'cover',
    backgroundPosition: '50% 50%',
    boxShadow: '0 2px 4px rgba(21, 16, 0, .3)',
  },
  ({ srcImage, isBig }) => ({
    backgroundImage: `url(${srcImage})`,
    height: isBig ? 460 : 250,
  }),
);

export const Category = styled.span({
  background: colors.mainColor,
  color: colors.white,
  fontWeight: weights.bold,
  padding: '.25em .75em',
  position: 'absolute',
  top: 0,
});

export const Text = styled.p({
  margin: '1em 3em 2em',
  textAlign: 'center',

  // @media
  [maxWidth(breakpoints.medium)]: {
    display: 'none',
  },
});

export const Read = styled.div({
  background: `rgba(0, 0, 0, 0.75)`,
  color: colors.white,
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  fontWeight: weights.bold,
  fontSize: '1.5em',
  fontFamily: 'Encode Sans Condensed',
  letterSpacing: '.06em',
  textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
});

export const Link = styled(GatsbyLink)({
  display: 'block',
  padding: '0 .5em .5em',

  [Title]: {
    transition: '.4s',
  },

  [Read]: {
    transition: '.4s',
    opacity: 0,
  },

  // :state
  ':hover, :focus': {
    [Title]: create3dText(5),
    [Read]: {
      opacity: 1,
    },
  },
});

export const Container = styled.article(
  {
    display: 'block',
    padding: '1em',
    width: '100%',
  },

  // Old
  ({ fromMoreArticle, isBig }) =>
    !isBig && {
      [Link]: {
        ':hover, :focus': {
          [Title]: create3dText(3),
        },
      },

      [Read]: {
        fontSize: '1.25em',
      },

      // @media
      [minWidth(breakpoints.medium)]: {
        width: '50%',
      },

      [minWidth(breakpoints.xxlarge)]: {
        width: fromMoreArticle && '33%',
      },
    },
);

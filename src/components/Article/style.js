/*
 * Package Import
 */
import { Link as GatsbyLink } from 'gatsby';
import styled from 'react-emotion';

/*
 * Local Import
 */
import {
  base,
  breakpoints,
  colors,
  minWidth,
  maxWidth,
  weights,
} from 'src/themes';

/*
 * Style
 */
export const Name = styled.div(
  {
    alignItems: 'flex-end',
    display: 'flex',
    fontSize: '1.5em',
    fontWeight: weights.bold,
    fontFamily: 'EncodeSansCondensed',
    marginBottom: '.5em',
    height: '2.6em',
    overflow: 'hidden',
  },
  // New
  ({ isBig }) =>
    isBig && {
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

export const Image = styled.img(
  {
    ...base.image,
    objectFit: 'cover',
    objectPosition: '50% 0%',
    width: '100%',
    boxShadow: '0 2px 4px rgba(21, 16, 0, .3)',
  },
  ({ isBig }) => ({
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

export const Desc = styled.p({
  margin: '1em 3em 2em',
  textAlign: 'center',
  [maxWidth(breakpoints.medium)]: {
    display: 'none',
  },
});

const create3dText = (size = 3) => {
  const color = colors.black;
  const shadowColor = colors.mainColor;
  const textShadow = Array.from(Array(size), (a, b) => b + 1)
    .map(shadowSize => `${shadowSize}px ${shadowSize}px 0 ${shadowColor}`)
    .join(', ');
  const transform = `translate3d(-${size}px, -${size}px, 0)`;
  return { color, textShadow, transform };
};

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
  fontFamily: 'EncodeSansCondensed',
  letterSpacing: '.06em',
  textShadow: '0 0 5px rgba(0, 0, 0, 0.3)',
});

export const Link = styled(GatsbyLink)({
  display: 'block',
  padding: '0 .5em .5em',
  [Name]: {
    transition: '.4s',
  },
  [Read]: {
    transition: '.4s',
    opacity: 0,
  },
  ':hover, :focus': {
    [Name]: create3dText(5),
    [Read]: {
      opacity: 1,
    },
  },
});

export const Container = styled.article(
  {
    display: 'block',
    padding: '1em',
    maxWidth: '100%',
  },

  // Old
  ({ isBig }) =>
    !isBig && {
      [Link]: {
        ':hover, :focus': {
          [Name]: create3dText(3),
        },
      },
      [Read]: {
        fontSize: '1.25em',
      },
      [minWidth(breakpoints.medium)]: {
        width: '50%',
      },
    },
);

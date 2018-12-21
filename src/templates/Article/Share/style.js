/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, colors, weights } from 'src/themes';
import { SIZE } from 'src/components/Author/style';

/*
 * Style
 */
export const Container = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: '4em',
});

export const ShareTitle = styled.div({
  fontSize: '1.2em',
  fontFamily: 'EncodeSansCondensed',
  fontWeight: weights.bold,
  marginBottom: '1em',
  textTransform: 'uppercase',
});

export const ShareButton = styled.div({
  display: 'flex',
  justifyContent: 'center',
  div: {
    outline: 0,
  },
});

export const Icon = styled.span(
  {
    background: colors.mainColor,
    borderRadius: '100%',
    cursor: 'pointer',
    display: 'inline-block',
    margin: '0 .5em',
    padding: '.5em',

    // Effect, avec before
    ...base.greenEffect(),

    // Icon, avec after
    '::after': {
      content: '""',
      display: 'block',
      backgroundSize: '60%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      height: SIZE.ICON.BIG,
      width: SIZE.ICON.BIG,
    },
  },
  ({ image }) => ({
    '::after': {
      backgroundImage: `url(${image})`,
    },
  }),
);

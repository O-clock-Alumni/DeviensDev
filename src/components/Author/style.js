/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { colors, weights } from 'src/themes';

/*
 * Code
 */
export const SIZE = {
  AVATAR: {
    SMALL: 60,
    BIG: 120,
  },
  IMAGE: {
    SMALL: 50,
    BIG: 110,
  },
  ICON: {
    SMALL: 28,
    BIG: 32,
  },
};

/*
 * Style
 */
export const Container = styled.div(
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    position: 'relative',
  },
  ({ isBig }) => ({
    marginTop: isBig ? '-5em' : '-2.5em',
  }),
);

export const Content = styled.div(
  {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'EncodeSansCondensed',
    textAlign: 'center',
  },
  // ({ isBig }) => ({
  // alignItems: isBig ? 'center' : 'flex-start',
  // paddingLeft: isBig ? null : '.75em',
  // }),
);

/*
 * Avatar
 */
export const Avatar = styled.div(
  {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    borderRadius: '100%',
  },
  ({ isBig }) => ({
    background: colors.lightGrey,
    height: isBig ? SIZE.AVATAR.BIG : SIZE.AVATAR.SMALL,
    width: isBig ? SIZE.AVATAR.BIG : SIZE.AVATAR.SMALL,
  }),
);

export const Image = styled.img(
  {
    borderRadius: '100%',
    border: `3px solid ${colors.mainColor}`,
  },
  ({ isBig }) => ({
    height: isBig ? SIZE.IMAGE.BIG : SIZE.IMAGE.SMALL,
    width: isBig ? SIZE.IMAGE.BIG : SIZE.IMAGE.SMALL,
  }),
);

/*
 * Author
 */
export const Name = styled.div({
  fontSize: '1.1em',
  fontWeight: weights.bold,
});

export const Bio = styled.p({
  color: colors.greySubtitle,
  fontSize: '.95em',
  fontWeight: weights.light,
  letterSpacing: '.02em',
});

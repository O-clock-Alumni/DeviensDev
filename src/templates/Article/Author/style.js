/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, colors } from 'src/themes';
import { mainSize } from 'src/templates/Article/style';
import { SIZE } from 'src/components/Author/style';

// Assets
import link from 'src/assets/images/social/link.svg';
import twitter from 'src/assets/images/social/twitter.svg';

/*
 * Export
 */
export { Name, Bio } from 'src/components/Author/style';

/*
 * Style
 */
export const Container = styled.div({
  maxWidth: mainSize,
  margin: '3em auto 2em',
});

export const Avatar = styled.img({
  borderRadius: '100%',
  border: `3px solid ${colors.mainColor}`,
  height: SIZE.AVATAR.SMALL,
  width: SIZE.AVATAR.SMALL,
});

export const Info = styled.div({
  display: 'flex',
  justifyContent: 'center',
  marginTop: '.5em',
});

const icon = image => ({
  background: colors.mainColor,
  borderRadius: '100%',
  cursor: 'pointer',
  display: 'inline-block',
  margin: '0 .25em',
  height: SIZE.ICON.SMALL,
  width: SIZE.ICON.SMALL,
  transition: '.4s',

  // Effect, avec before
  ...base.greenEffect(),

  // Icon, avec after
  '::after': {
    content: '""',
    display: 'block',
    backgroundSize: '50%',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100%',
    width: '100%',
    backgroundImage: `url(${image})`,
  },
});

export const Twitter = styled.a(icon(twitter));

export const Url = styled.a(icon(link));

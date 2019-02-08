/*
 * Package Import
 */
import styled from 'react-emotion';
import { Link } from 'gatsby';

/*
 * Local Import
 */
import { base } from 'src/themes';
import logo from 'src/assets/images/common/logo.svg';

/*
 * Style
 */
export const Container = styled.div({
  ...base.outroContainer,
});

export const Logo = styled.div({
  height: '5em',
  width: '10em',
  margin: '0 auto',

  '::before': {
    background: `url(${logo}) no-repeat`,
    backgroundSize: '100%',
    content: '""',
    display: 'block',
    height: '100%',
    width: '100%',
  },
});

export const WantMore = styled.h2({
  ...base.wantMore,
});

export const Text = styled.p({
  ...base.mainText,
  padding: '.25em 0',
  textAlign: 'center',
});

export const Button = styled(Link)({
  ...base.primaryButton,
  display: 'block',
  margin: '1.5em auto 5em',
});

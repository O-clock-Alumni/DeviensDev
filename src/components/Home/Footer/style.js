/*
 * Package Import
 */
import styled from 'react-emotion';
import { Link } from 'gatsby';

/*
 * Local Import
 */
import { base } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  ...base.outroContainer,
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

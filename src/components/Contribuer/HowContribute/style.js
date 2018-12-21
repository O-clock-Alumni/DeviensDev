/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { base, breakpoints, colors, minWidth } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  maxWidth: 1100,
  margin: '4em auto 6em',
});

export const Image = styled.img({
  minHeight: '5em',
  width: '4em',
});

export const Header = styled.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',

  background: colors.lightGrey,
  padding: '4em 0',
  position: 'relative',
});

export const Title = styled.h2(base.boxTitle);

export const Code = styled.code({
  background: '#e1e1e1',
  borderRadius: 3,
  color: colors.darkGrey,
  padding: '.05em .25em',
  margin: '0 .2em',
  fontSize: '.9em',
});

export const Steps = styled.ul({
  display: 'flex',
  flexDirection: 'column',
  margin: 'auto',

  // Breakpoints
  [minWidth(breakpoints.medium)]: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 720,
    padding: '0 2em',
  },
});

export const Step = styled.li({
  maxWidth: 200,
  margin: '1em auto',
  textAlign: 'center',
  ':last-child': {
    marginBottom: '0',
  },

  [minWidth(breakpoints.medium)]: {
    margin: 0,
  },
});

export const ProcessContent = styled.div({
  marginTop: '2em',
  '&:first-child': {
    marginTop: 0,
  },
});

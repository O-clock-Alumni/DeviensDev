/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { breakpoints, colors, minWidth } from 'src/themes';

/*
 * Style
 */
export const Circle = styled.div({
  borderRadius: '50%',
  cursor: 'pointer',
  position: 'absolute',
  top: 0,
  right: 0,
  height: '70px',
  width: '55px',
  zIndex: 10,

  // Medias
  [minWidth(breakpoints.large)]: {
    display: 'none',
  },
});

export const Bar = styled.div(
  {
    left: '50%',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    position: 'absolute',
    height: '2px',
    width: '20px',
    '&::before, &::after': {
      background: colors.black,
      content: '""',
      height: '100%',
      position: 'absolute',
      right: 0,
      top: 0,
      transition: 'transform .4s',
      width: '100%',
    },
  },
  ({ open }) => ({
    background: open ? 'none' : colors.black,
    '&::before': {
      transform: open
        ? 'translateY(0) rotate(45deg)'
        : 'translateY(-6px) rotate(0deg)',
    },
    '&::after': {
      transform: open
        ? 'translateY(0) rotate(-45deg)'
        : 'translateY(6px) rotate(0deg)',
    },
  }),
);

/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */
import { colors, weights } from 'src/themes';

/*
 * Style
 */
export const Container = styled.div({
  alignItems: 'center',
  display: 'flex',

  position: 'fixed',
  top: 0,
  height: '100%',
  width: 100,
});

export const Items = styled.ul({
  backgroundColor: colors.white,
  border: `1px solid ${colors.lightGrey}`,
  boxShadow: '3px 3px 5px rgba(0, 0, 0, 0.1)',
  display: 'flex',
  flexDirection: 'column',
});

export const Cat = styled.li(
  `
  text-align: center;
  cursor: pointer;
  margin-bottom: .7em;
  line-height: 1em;
  &:hover {
    color: ${colors.mainColor};
  }

`,
  ({ icon, isActive, first }) => `
    color: ${isActive ? colors.greenWater : colors.black};
    font-weight: ${isActive ? weights.bold : weights.normal};
    &::after {
      content: ' ';
      display: block;
      width: 100%;
      height: 25px;
      margin-top: .7em;
      background-image: url(${icon});
      background-size: auto;
      background-repeat: no-repeat;
      background-position: center;
    }
    ${
      !first
        ? `
        &::before {
          content: ' ';
          display: block;
          width: 70%;
          height: 2px;
          margin: auto;
          background-color: rgba(0, 0, 0, .05);
          margin-bottom: .7em;
        }`
        : `margin-top: .7em;`
    }
  `,
);

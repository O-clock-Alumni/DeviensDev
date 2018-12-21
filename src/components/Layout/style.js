/*
 * Package Import
 */
import styled from 'react-emotion';

/*
 * Local Import
 */

/*
 * Style
 */
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
`;

export const Main = styled.main`
  margin-top: 53px;
`;

export const ScrollButton = styled.div(
  {
    borderRadius: 3,
    background: 'rgba(0, 0, 0, .5)',
    boxShadow: '0 0 3px 0 rgba(0, 0, 0, .35)',
    bottom: '0.75em',
    cursor: 'pointer',
    padding: '0.5em',
    position: 'fixed',
    right: '0.75em',
    transition: 'all .5s',
    transform: 'rotate(180deg)',
    zIndex: 6,

    ':hover, :focus': {
      background: 'rgba(#FFF, .5)',
    },
  },
  ({ show }) => ({
    display: show ? 'flex' : 'none',
  }),
);

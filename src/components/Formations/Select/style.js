import styled from 'react-emotion';

export const Container = styled.div``;

export const Title = styled.p``;

export const Option = styled.li(
  `
  background-color: grey;
`,
  ({ active }) => active && `background-color: green`,
);

export const ListOptions = styled.ul``;

import styled from 'react-emotion';
import { colors } from 'src/themes';

export const Container = styled.div`
  display: flex;
  font-family: Nunito;
  padding-left: 0.3em;

  textarea {
    width: 100%;
    background-color: ${colors.lightGrey};
    color: ${colors.colorTextarea};
    border: none;
    font-family: FiraCode;
    font-size: 1em;
    padding: 0;
    padding-left: 2em;
    text-decoration: none;
    line-height: 1.6em;
  }
`;

export const Lines = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  font-size: 1em;
  color: ${colors.grey};
  min-width: 30px;
`;

export const LineNumber = styled.span`
  padding: 0 0.5em;
`;
